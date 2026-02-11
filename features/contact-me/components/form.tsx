'use client';

import { NeobrutalistButton } from '@/features/footer';
import Input from '@/features/ui/components/input';
import NeobrutalistInput from '@/features/ui/components/input';

import { formFIelds } from '../utils/constants';

export default function Form() {
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
  };
  return (
    <form className="flex flex-col gap-8 p-4" onSubmit={handleSubmit}>
      <h5>Let's Connect!</h5>
      <div>
        {formFIelds.map(field => (
          <Input
            key={field.name}
            label={field.label}
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <NeobrutalistButton className="w-full" text="Submit" />
      <p>I usually reply faster than npm i</p>
    </form>
  );
}
