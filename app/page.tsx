'use client';

import Header from '@/features/header/components/header';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <main>
      <Header />
    </main>
  );
}
