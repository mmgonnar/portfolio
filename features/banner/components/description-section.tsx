'use-client';

import { t } from 'i18next';
import FindMe from './find-me';

export default function DescriptionSection() {
  return (
    <div>
      <p className="max-w-2xl pb-5 text-lg">{t('bannerText.description')}</p>
      <FindMe />
    </div>
  );
}
