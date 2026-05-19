import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Sender identity is env-driven so production can point at a verified domain
// without a code change. Falls back to Resend's shared sandbox address for
// local/dev so the form still works before a domain is configured.
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL ?? 'Yoesel <onboarding@resend.dev>';
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL ?? 'sangayyoesel@gmail.com';

// ── Lightweight in-memory IP throttle ──────────────────────────────────────
// Intentionally not a Redis/Upstash dependency: this is a low-traffic contact
// form, and an in-process sliding window is enough to blunt scripted abuse.
// (Caveat: resets on cold start / doesn't span instances — see route notes.)
const WINDOW_MS = 10 * 60 * 1000;   // 10 minutes
const MAX_PER_WINDOW = 4;           // submissions per IP per window
const MIN_GAP_MS = 20 * 1000;       // minimum spacing between submissions
const hits = new Map<string, number[]>();

function rateLimit(ip: string): { ok: true } | { ok: false; retryAfter: number } {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    const retryAfter = Math.ceil((WINDOW_MS - (now - recent[0])) / 1000);
    return { ok: false, retryAfter };
  }
  if (recent.length && now - recent[recent.length - 1] < MIN_GAP_MS) {
    const retryAfter = Math.ceil((MIN_GAP_MS - (now - recent[recent.length - 1])) / 1000);
    return { ok: false, retryAfter };
  }

  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map can't grow unbounded.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key);
    }
  }
  return { ok: true };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request format.' }, { status: 400 });
  }

  const { name, email, message, company } = body as Record<string, string>;

  // Honeypot: a real browser never fills the hidden "company" field. If it's
  // populated we accept the request (200) but silently drop it — bots get no
  // signal that they were filtered.
  if (typeof company === 'string' && company.trim() !== '') {
    return Response.json({ success: true });
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  const limit = rateLimit(ip);
  if (!limit.ok) {
    return Response.json(
      { error: 'You’ve sent this a moment ago — please wait before sending again.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } },
    );
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: 'Please fill in your name, email, and message.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: 'That email address doesn’t look right — please check it.' }, { status: 400 });
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return Response.json({ error: 'That message is a little too long — please shorten it.' }, { status: 400 });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>');

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email.trim(), // replies go straight to the visitor
      subject: `New message from ${safeName}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: 'The message couldn’t be delivered right now. Please try again or email me directly.' },
      { status: 502 },
    );
  }
}
