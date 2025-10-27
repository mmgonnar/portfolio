'use-client';

import { t } from 'i18next';
import FindMe from './find-me';

export default function DescriptionSection() {
  return (
    <div>
      <p className="max-w-2xl text-balance pb-5 text-xl">
        {t('bannerText.description')}
      </p>
      <FindMe />
    </div>
  );
}
