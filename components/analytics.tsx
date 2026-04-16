'use client'

import Script from 'next/script'

// To enable analytics:
// 1. Create a GA4 property at https://analytics.google.com
// 2. Get your Measurement ID (starts with G-)
// 3. Set NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable
// 4. Create a Clarity project at https://clarity.microsoft.com
// 5. Get your Project ID
// 6. Set NEXT_PUBLIC_CLARITY_PROJECT_ID environment variable

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

export function Analytics() {
  // Don't render scripts if IDs are not configured
  if (!GA_MEASUREMENT_ID && !CLARITY_PROJECT_ID) {
    return null
  }

  return (
    <>
      {/* Google Analytics 4 */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity */}
      {CLARITY_PROJECT_ID && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      )}
    </>
  )
}

// Event tracking utilities
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID && 'gtag' in window) {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, eventParams)
  }
}

// Scroll depth tracking (call in page component)
export function initScrollTracking() {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return

  let scrollMarkers = [25, 50, 75, 100]
  
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    )
    
    scrollMarkers = scrollMarkers.filter((marker) => {
      if (scrollPercent >= marker) {
        trackEvent('scroll_depth', { percent: marker })
        return false
      }
      return true
    })
    
    if (scrollMarkers.length === 0) {
      window.removeEventListener('scroll', handleScroll)
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}
