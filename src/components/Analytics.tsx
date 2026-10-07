/**
 * Site analytics + heatmaps, both opt-in via env vars. The vendors are loaded
 * after the first real interaction (during an idle period), with a ten-second
 * fallback for visitors who only read. This keeps third-party parsing and
 * execution out of the page's critical rendering path without losing useful
 * visits from engaged readers.
 *
 *   NEXT_PUBLIC_GA_ID       - GA4 measurement id ("G-XXXXXXX"). Powers traffic
 *                             analytics and Google Ads conversion import. GA4
 *                             enhanced measurement observes history changes
 *                             after the deferred loader has started.
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

  if (!gaId && !clarityId) return null;

  const ids = JSON.stringify({ gaId: gaId ?? "", clarityId: clarityId ?? "" }).replace(
    /</g,
    "\\u003c",
  );

  return (
    <script
      id="deferred-analytics"
      dangerouslySetInnerHTML={{
        __html: `(function(){
          var ids=${ids};
          var started=false;
          var events=["pointerdown","keydown","touchstart"];

          function loadScript(src){
            var script=document.createElement("script");
            script.async=true;
            script.src=src;
            document.head.appendChild(script);
          }

          function start(){
            if(started)return;
            started=true;
            events.forEach(function(event){window.removeEventListener(event,schedule);});

            if(ids.gaId){
              window.dataLayer=window.dataLayer||[];
              window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
              window.gtag("js",new Date());
              window.gtag("config",ids.gaId);
              loadScript("https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(ids.gaId));
            }

            if(ids.clarityId){
              window.clarity=window.clarity||function(){
                (window.clarity.q=window.clarity.q||[]).push(arguments);
              };
              loadScript("https://www.clarity.ms/tag/"+encodeURIComponent(ids.clarityId));
            }
          }

          function schedule(){
            if("requestIdleCallback" in window){
              window.requestIdleCallback(start,{timeout:2000});
            }else{
              window.setTimeout(start,1);
            }
          }

          events.forEach(function(event){
            window.addEventListener(event,schedule,{once:true,passive:true});
          });
          window.setTimeout(schedule,10000);
        })();`,
      }}
    />
  );
}
