'use client';

import LanguageSwitcher from '@/features/header/components/language-switcher';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Globe, ExternalLink } from 'lucide-react';
import { Logo } from '@/features/header';

const profile = {
  name: 'Mariela Gonzalez',
  title: 'Fullstack Web Developer',
  links: [
    { name: 'Website', url: 'https://mmgonnar.com', icon: Globe, color: 'bg-green-brutalist' },
    { name: 'GitHub', url: 'https://github.com/mmgonnar', icon: Github, color: 'bg-black' },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mmgonnar',
      icon: Linkedin,
      color: 'bg-blue-600',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/mmgonnar',
      icon: Instagram,
      color: 'bg-pink-500',
    },
    { name: 'Email', url: 'mailto:hello@mmgonnar.com', icon: Mail, color: 'bg-gray-800' },
  ],
};

export default function CardPage() {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-white">
      {/* Header */}
      <header className="shrink-0 px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <Logo />
        </div>
      </header>

      {/* Main Content - No Scroll */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-4">
        {/* Name & Title */}
        <div className="mb-8 text-center">
          <h1 className="mb-1 font-mono text-2xl font-black tracking-tight text-black uppercase">
            {profile.name}
          </h1>
          <p className="text-green-brutalist font-mono text-xs font-bold tracking-widest uppercase">
            {profile.title}
          </p>
        </div>

        {/* Links */}

        <div className="grid w-full max-w-sm grid-cols-1 gap-3">
          {profile.links.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-4 border-black bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]"
              >
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center ${link.color}`}>
                  <Icon size={18} strokeWidth={2} className="text-white" />
                </div>
                <span className="font-mono text-sm font-bold text-black uppercase">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Portfolio Link */}
        <Link
          href="/"
          className="hover:text-green-brutalist mt-8 flex items-center gap-2 border-b-2 border-black font-mono text-xs font-bold uppercase transition-colors"
        >
          View full portfolio
          <ExternalLink size={12} />
        </Link>
      </main>

      {/* Footer */}
      <footer className="shrink-0 border-t-2 border-gray-200 py-4">
        <p className="text-center font-mono text-[10px] tracking-widest text-gray-400 uppercase">
          © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
