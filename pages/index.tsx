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

const Home: NextPage = ({
  data,
  language,
  languages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [darkTheme, switchTheme] = useState(false);
  if (!data) {
    return <main>Sorry! This page not found.</main>;
  }

  const assignType = data as DataType;

  return (
    <Store.Provider value={{ language, languages, data, darkTheme, switchTheme }}>
      <Head>
        <title>{assignType._site.globalSeo.fallbackSeo.title}</title>
        <meta name="description" content={assignType._site.globalSeo.fallbackSeo.description} />
        <link rel="prefetch" href="/images/dark_theme_tima.webp" as="image" />
        <link rel="preload" href="/images/light_theme_tima.webp" as="image" />
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
