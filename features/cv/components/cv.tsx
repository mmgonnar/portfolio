'use client';

import { useTranslation } from 'react-i18next';
import ContentSection from '@/features/ui/components/content-section';
import NeobrutalistButton from '@/features/ui/components/neobrutalist-button';
import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import { cvExperience, cvEducation, cvSkills } from '../utils/constants';

export default function Cv() {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    const isSpanish = i18n.language.startsWith('es');
    const file = isSpanish ? '/cv-es.pdf' : '/cv-en.pdf';
    const filename = isSpanish ? 'Mariela_Gonzalez_CV_ES.pdf' : 'Mariela_Gonzalez_CV_EN.pdf';

    const link = document.createElement('a');
    link.href = file;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="cv"
      className="m-auto flex max-w-6xl flex-col items-center gap-12 p-10 md:pt-15"
    >
      <ContentSection
        id="cv__section"
        align="center"
        title={t('cv.title')}
        text={t('cv.subtitle')}
      />

      {/* Professional Summary */}
      <div className="max-w-4xl text-center">
        <p className="text-lg leading-relaxed text-balance">{t('cv.summary')}</p>
      </div>

      {/* Technical Skills */}
      <div className="w-full max-w-4xl">
        <h4 className="mb-6 text-2xl font-bold">{t('cv.skillsTitle')}</h4>
        <div className="space-y-4">
          {cvSkills.map((group) => (
            <div key={group.category}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                {t(group.category)}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border-2 border-black bg-white px-3 py-1 font-mono text-xs font-semibold tracking-wider"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="w-full max-w-4xl">
        <h4 className="mb-6 text-2xl font-bold">{t('cv.experienceTitle')}</h4>
        <div className="space-y-6">
          {cvExperience.map((exp) => (
            <NeobrutalistCard key={exp.role} className="items-start p-6">
              <div className="mb-1 flex w-full items-start justify-between gap-4">
                <h5 className="text-xl font-semibold">{t(exp.role)}</h5>
                <span className="shrink-0 font-mono text-xs">{exp.period}</span>
              </div>
              <p className="mb-3 font-mono text-sm text-neutral-600">{t(exp.company)}</p>
              <ul className="list-disc space-y-1 pl-5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-base">
                    {t(h)}
                  </li>
                ))}
              </ul>
            </NeobrutalistCard>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="w-full max-w-4xl">
        <h4 className="mb-6 text-2xl font-bold">{t('cv.educationTitle')}</h4>
        <div className="space-y-3">
          {cvEducation.map((edu) => (
            <div
              key={edu.degree}
              className="flex items-center justify-between border-2 border-black bg-white p-4"
            >
              <div>
                <p className="font-semibold">{t(edu.degree)}</p>
                <p className="font-mono text-sm text-neutral-600">{edu.institution}</p>
              </div>
              <span className="shrink-0 font-mono text-sm">
                {edu.year.startsWith('cv.') ? t(edu.year) : edu.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Download */}
      <NeobrutalistButton onClick={handleDownload} text={t('cv.download')} />
    </section>
  );
}
