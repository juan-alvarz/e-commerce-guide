import Script from "next/script";

const TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID;

export const GoogleAnalytics = () => {
  const incorporateDataLayer = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", TRACKING_ID);
  };

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id={TRACKING_ID}`}
      />
      {incorporateDataLayer()}
    </>
  );
};
