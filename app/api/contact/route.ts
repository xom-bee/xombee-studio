export async function POST() {
  return new Response(
    JSON.stringify({ message: 'Contact form temporarily disabled' }),
    { status: 200 }
  )
}
