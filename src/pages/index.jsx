import Head from 'next/head';

import { CallToAction } from '@/components/CallToAction';
import { Faqs } from '@/components/Faqs';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>CRM DLA NIEKAZDEGO</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // Pobierz dane lub wykonaj operacje, które są potrzebne

  return {
    props: {
      data: 'yourData', // Przekaż dane jako właściwości do komponentu Home
    },
  };
}
