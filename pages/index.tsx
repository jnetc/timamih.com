import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import Head from 'next/head';

import { request, query } from 'lib/datocms';
// Hooks
import { Store } from '@Hooks/useStore';
// Types
import { DataType } from '@Types';

const Navigation = dynamic(() => import('@Components/navigation'), { ssr: false });
const HeroSection = dynamic(() => import('@Components/hero-section'), { ssr: false });
const HowWeWork = dynamic(() => import('@Components/how-we-work'), { ssr: false });
const WhatWeOffer = dynamic(() => import('@Components/what-we-offer'), { ssr: false });
const OurLittleStory = dynamic(() => import('@Components/our-little-story'), { ssr: false });
const GetInTouch = dynamic(() => import('@Components/get-in-touch'), { ssr: false });
const Footer = dynamic(() => import('@Components/footer'), { ssr: false });

const Home: NextPage = ({ data, language, languages }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [darkTheme, switchTheme] = useState(false);

  if (!data) {
    return <main>Sorry! This page not found.</main>;
  }

  const assignType = data as DataType;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Timamih',
    url: 'https://www.timamih.com',
    logo: 'https://www.timamih.com/icons/icon-512x512.png',
    sameAs: ['tg://resolve?domain=timamih_com', 'https://wa.me/358453491091', 'https://www.instagram.com/timamih_mainostoimisto'],

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hitsaajankatu 6',
      addressLocality: 'Helsinki',
      addressRegion: 'Uusimaa',
      postalCode: '00810',
      addressCountry: 'Finland',
    },
  };

  return (
    <Store.Provider value={{ language, languages, data, darkTheme, switchTheme }}>
      <Head>
        <title>{assignType._site.globalSeo.fallbackSeo.title}</title>
        <meta name="description" content={assignType._site.globalSeo.fallbackSeo.description} />
        {/* Facebook / Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={assignType._site.siteName} />
        <meta property="og:url" content={`${language === 'fi' ? 'https://timamih.com/' : `https://timamih.com/${language}/`}`} />
        <meta property="og:image" content={assignType._site.globalSeo.fallbackSeo.image.url} />
        <meta property="og:title" content={assignType._site.globalSeo.fallbackSeo.title} />
        <meta property="og:description" content={assignType._site.globalSeo.fallbackSeo.description} />
        <meta property="og:locale" content={language} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`${language === 'fi' ? 'https://timamih.com/' : `https://timamih.com/${language}/`}`} />
        <meta name="twitter:title" content={assignType._site.globalSeo.fallbackSeo.title} />
        <meta name="twitter:description" content={assignType._site.globalSeo.fallbackSeo.description} />
        <meta name="twitter:image" content={assignType._site.globalSeo.fallbackSeo.image.url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <Navigation />
      <main>
        <HeroSection />
        <HowWeWork />
        <WhatWeOffer />
        <OurLittleStory />
        <GetInTouch />
      </main>
      <Footer />
    </Store.Provider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  const data = await request({ query, variables: { locale: context.locale } });

  return {
    props: {
      data,
      language: context.locale,
      languages: context.locales,
    },
  };
};
