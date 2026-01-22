"use client"

import Copyright from "./copyright"
import FooterSection from "./footer-section"
import LogoFooter from "./logo-footer"

export default function Footer() {
  return (
    <section className="max-w-8xl flex flex-col items-start  px-5 py-6 pb-4 md:px-10 md:py-8 bg-neutral-800 gap-4">
      <LogoFooter/>
<FooterSection/>
      
    </section>
  )
}
