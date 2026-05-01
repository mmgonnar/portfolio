'use client';

import { useTranslation } from 'react-i18next';

export default function BriefIntroCards() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="custom-sm:grid-cols-3 mb-6 grid grid-cols-1 gap-0 md:grid-cols-5">
        {[
          { id: '01', title: 'You', desc: 'Contact info' },
          { id: '02', title: 'Project', desc: 'Type & goals' },
          { id: '03', title: 'Scope', desc: 'Features' },
          { id: '04', title: 'Investment', desc: 'Budget & timeline' },
          { id: '05', title: 'Confirm', desc: 'Review & submit' },
        ].map(item => (
          <div
            key={item.id}
            className="group flex flex-col gap-3 border border-gray-200 p-8 transition-colors hover:bg-gray-50"
          >
            <span className="text-green-brutalist font-mono text-sm font-bold">{item.id}</span>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm leading-snug text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
