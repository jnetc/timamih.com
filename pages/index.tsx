import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import Head from 'next/head';

import { createSchema } from '@Helpers/transformToSchema';

import { request, query } from 'lib/datocms';
// Hooks
import { Store } from '@Hooks/useStore';
// Types
import type { DataType } from '@Types';

const Navigation = dynamic(() => import('@Components/navigation'), { ssr: false });
const HeroSection = dynamic(() => import('@Components/hero-section'), { ssr: false });
const HowWeWork = dynamic(() => import('@Components/how-we-work'), { ssr: false });
const WhatWeOffer = dynamic(() => import('@Components/what-we-offer'), { ssr: false });
const OurLittleStory = dynamic(() => import('@Components/our-little-story'), { ssr: false });
const Testimonial = dynamic(() => import('@Components/testimonials'), { ssr: false });
const GetInTouch = dynamic(() => import('@Components/get-in-touch'), { ssr: false });
const Footer = dynamic(() => import('@Components/footer'), { ssr: false });

const Home: NextPage = ({ data, language, languages }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [darkTheme, switchTheme] = useState(false);

  if (!data) {
    return <main>Sorry! This page not found.</main>;
  }

  const assignType = data as NonNullable<DataType>;

  // Create reach results (schema.org) for google search
  const schema = createSchema(assignType);

  return (
    <Store.Provider value={{ language, languages, data: assignType, darkTheme, switchTheme }}>
      <Head>
        <title>{assignType._site.globalSeo.fallbackSeo.title}</title>
        <meta name="description" content={assignType._site.globalSeo.fallbackSeo.description} />
        {/* Facebook / Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={assignType._site.siteName} />
        <meta property="og:url" content={`${language === 'fi' ? 'https://www.timamih.com/' : `https://www.timamih.com/${language}/`}`} />
        <meta property="og:image" content={assignType._site.globalSeo.fallbackSeo.image.url} />
        <meta property="og:title" content={assignType._site.globalSeo.fallbackSeo.title} />
        <meta property="og:description" content={assignType._site.globalSeo.fallbackSeo.description} />
        <meta property="og:locale" content={language} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`${language === 'fi' ? 'https://www.timamih.com/' : `https://www.timamih.com/${language}/`}`} />
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
        <Testimonial />
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
