import Script from "next/script";
import { useEffect, useState } from "react";

const TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID;

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
      />

      <Script strategy="lazeOnload" id="gtag-function">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};
