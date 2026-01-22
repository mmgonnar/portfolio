"use client"

import Copyright from "./copyright"
import FooterIcons from "./footer-icons"
import LogoFooter from "./logo-footer"

export default function FooterSection() {
    return (
        <div className="flex m-auto items-center md:flex-row gap-5 flex-col md:justify-between w-full">
            <LogoFooter />
            <Copyright />
            <FooterIcons />
        </div>
    )
}
