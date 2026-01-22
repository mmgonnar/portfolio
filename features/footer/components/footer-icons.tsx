"use client"

import Link from "next/link"
import { footerIcons } from "../utils/constants"
import Image from "next/image";

export default function FooterIcons() {
    return (
        <div className="flex gap-3">
            {footerIcons.map(item => {
                return (
                    <Link key={item.name} href={item.href} target="_blank">
                        <Image
                            src={item.icon}
                            alt="Email"
                            className="w-8 flex-shrink-0 transition duration-200 opacity-40 hover:scale-110"
                        />
                    </Link>
                );
            })}
        </div>
    )
}
