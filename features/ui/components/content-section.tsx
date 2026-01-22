import { ContetnSectionProps } from '../types/type';
import { alignmets } from '../utils/constants';

export default function ContentSection({
  title,
  text,
  align,
}: ContetnSectionProps) {
  return (
    <div className={alignmets[align]}>
      <h3 className="pb-6 text-4xl font-bold">{title}</h3>
      <p className="max-w-2xl text-balance text-xl pb-8">{text}</p>
    </div>
  );
}
