'use client';

import Link from 'next/link';
import { findMeIcons } from '../utils/constants';
import GithubIcon from './icons/github-icon';
import LinkedinIcon from './icons/linkedin-icon';
import MailIcon from './icons/mail-icon';
import Image from 'next/image';

// Asegúrate de que no haya ninguna importación de Image si no se usa
// import Image from 'next/image';

export default function FindMe() {
  return (
    <>
      <p>Find me in:</p>
      {/* <div className="flex">
        <GithubIcon />
        <LinkedinIcon />
        <MailIcon />
      </div> */}
      <div className="flex gap-4">
        {findMeIcons.map(item => {
          return (
            <Link key={item.name} href="/">
              <Image
                src={item.icon}
                alt="Email"
                className="w-8 flex-shrink-0 transition duration-200 hover:scale-110"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
