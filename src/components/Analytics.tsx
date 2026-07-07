import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Site analytics + heatmaps, both opt-in via env vars so nothing loads (and no
 * third-party requests fire) in local dev / preview unless the IDs are set:
 *
 *   NEXT_PUBLIC_GA_ID       - GA4 measurement id ("G-XXXXXXX"). Powers traffic
 *                             analytics and Google Ads conversion import; the
 *                             official @next/third-parties component auto-sends
 *                             a pageview on every App Router route change.
 *   NEXT_PUBLIC_CLARITY_ID  - Microsoft Clarity project id. Heatmaps + session
 *                             replay; autocaptures clicks/scroll, so the CTAs
 *                             need no per-button instrumentation.
 *
 * The one conversion that matters here - the "Add to Shopify" outbound click -
 * is captured automatically: GA4 enhanced measurement records outbound clicks,
 * and Clarity records the click in replay/heatmap. Nothing to wire per button.
 *
 * Set the values in the Vercel project (Settings -> Environment Variables).
 * Add a Meta Pixel / other ad tag here later behind its own NEXT_PUBLIC_* flag.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {clarityId && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${clarityId}");`}
        </Script>
      )}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
