'use-client';

import { useTranslation } from 'react-i18next';
import FindMe from './find-me';

export default function DescriptionSection() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="max-w-2xl pb-5 text-xl text-balance">
        {t('bannerText.description')}
      </p>
      <FindMe />
    </div>
  );
}
