'use client';

import AboutMe from '@/features/about-me/components/about-me';
import Banner from '@/features/banner/components/banner';
import Layout from '@/features/layouts/layout';
import Projects from '@/features/projects/componentes/projects';
import Skills from '@/features/skills/components/skills';
import { FooterDropdrawer } from '@/features/ui/components/footer-dropdrawer';
import Modal from '@/features/ui/components/modal';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <FooterDropdrawer />
    </Layout>
  );
}
