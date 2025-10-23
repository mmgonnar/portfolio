'use client';

import Banner from '@/features/banner/components/banner';
import Header from '@/features/header/components/header';
import Layout from '@/features/layouts/layout';
import { FooterDropdrawer } from '@/features/ui/components/footer-dropdrawer';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner />
      <FooterDropdrawer />
    </Layout>
  );
}
