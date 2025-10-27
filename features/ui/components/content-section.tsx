import { ContetnSectionProps } from '../types/type';

export default function ContentSection({ title, text }: ContetnSectionProps) {
  return (
    <div className="">
      <h3 className="pb-6 text-4xl font-bold">{title}</h3>
      <p className="max-w-2xl text-balance text-xl md:pb-5">{text}</p>
    </div>
  );
}
