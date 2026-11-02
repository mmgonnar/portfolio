'use client';

import { ReactNode } from 'react';

export default function BriefContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="animate-in fade-in slide-in-from-bottom-4 flex max-w-5xl flex-col gap-8 py-4">
        {children}
      </div>
    </>
  );
}
