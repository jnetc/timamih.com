import type { AppProps } from 'next/app';
import Head from 'next/head';
// STYLES
import '@Styles/fonts.css';
import '@Styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        {/* App PWA */}
        <meta name="application-name" content="timamih.com" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Theme */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="hsl(32, 100%, 95%)" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="hsl(0, 0%, 22%)" />
        {/* Links */}
        <link rel="alternate" href="https://www.timamih.com" hrefLang="fi" />
        <link rel="alternate" href="https://www.timamih.com/ru" hrefLang="ru" />
        <link rel="alternate" href="https://www.timamih.com/en" hrefLang="en" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="timamih.com" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />

        <meta name="geo.region" content="FI" />
        <meta name="geo.placename" content="Helsinki" />

        <meta name="generator" content="next.js" />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="L8dbpFSbccZFtsiSdtcp3oBO2RwMGy3Kpnr2TQjTXEA" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
