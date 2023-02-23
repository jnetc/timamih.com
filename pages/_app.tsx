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

        <meta name="application-name" content="timamih.com" />
        <meta name="author" content="Anton" />
        <meta name="format-detection" content="address=no" />
        <meta name="generator" content="Next.js" />
        <meta name="google" content="notranslate" />
        <meta name="keywords" content="..." />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="theme-color" media="(prefers-color-scheme: light)" content="hsl(32, 100%, 95%)" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="hsl(0, 0%, 22%)" />

        <link rel="alternate" href="https://timamih.com/ru" hrefLang="ru" />
        <link rel="alternate" href="https://timamih.com/en" hrefLang="en" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="timamih.com" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <meta name="google-site-verification" content="jvPHQnqpJuMI-paWHyI3qR5fLitUYuq4ovNTK8VE0cU" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
