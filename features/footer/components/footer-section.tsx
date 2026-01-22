"use client"
import { Copyright, FooterIcons, LogoFooter } from '../index';

export default function FooterSection() {

    return (
        <div className="flex m-auto items-center md:flex-row gap-5 flex-col md:justify-between w-full">
            <LogoFooter />
            <Copyright />
            <FooterIcons />
        </div>
    )
}

