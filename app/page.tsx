'use client';

import AboutMe from '@/features/about-me/components/about-me';
import Banner from '@/features/banner/components/banner';
import ContactMe from '@/features/contact-me/components/contact-me';
import Footer from '@/features/footer/components/footer';
import Layout from '@/features/layouts/layout';
import Projects from '@/features/projects/componentes/projects';
import Skills from '@/features/skills/components/skills';
import { FooterDropdrawer } from '@/features/ui/components/footer-dropdrawer';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <FooterDropdrawer />
      <ContactMe />
      <Footer />
    </Layout>
  );
}
