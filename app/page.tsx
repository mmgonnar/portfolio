'use client';

import AboutMe from '@/features/about-me/components/about-me';
import Banner from '@/features/banner/components/banner';
import ContactMe from '@/features/contact-me/components/contact-me';
import Cv from '@/features/cv/components/cv';
import Layout from '@/features/layouts/layout';
import Projects from '@/features/projects/componentes/projects';
import Skills from '@/features/skills/components/skills';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <Skills />
      <Cv />
      <Projects />
      <ContactMe />
    </Layout>
  );
}
