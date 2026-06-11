'use client';

import dynamic from 'next/dynamic';
import AboutMe from '@/features/about-me/components/about-me';
import Banner from '@/features/banner/components/banner';
import ContactMe from '@/features/contact-me/components/contact-me';
import Layout from '@/features/layouts/layout';
import Skills from '@/features/skills/components/skills';

const Projects = dynamic(
  () => import('@/features/projects/componentes/projects'),
  { ssr: false },
);

export default function Home() {
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </Layout>
  );
}
