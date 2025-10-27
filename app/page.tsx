'use client';

import AboutMe from '@/features/about-me/components/about-me';
import Banner from '@/features/banner/components/banner';
import Layout from '@/features/layouts/layout';
import { FooterDropdrawer } from '@/features/ui/components/footer-dropdrawer';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <FooterDropdrawer />
    </Layout>
  );
}
