import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils/functions';

interface BriefTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const BriefTextArea = forwardRef<HTMLTextAreaElement, BriefTextAreaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-3">
        <label className="mb-1 font-mono text-sm font-bold tracking-widest text-neutral-400 uppercase">
          {label}
        </label>

        <div className="relative">
          <textarea
            ref={ref}
            className={cn(
              // Base Styles: Minimalist & Clean
              'min-h-[120px] w-full resize-none border-b border-gray-300 bg-transparent px-2 py-3 font-sans text-xl font-light transition-all duration-300 outline-none placeholder:text-gray-300',
              // Neobrutalist Focus
              'focus:border-green-brutalist focus:ring-green-brutalist focus:border-b-4 focus:ring-1',
              // Autofill/Blue background fix
              'autofill:shadow-[inset_0_0_0px_1000px_#fff]',
              // Error State
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              className,
            )}
            {...props}
          />

          {/* Error Message con i18next translation ya aplicada desde el padre */}
          {error && (
            <span className="animate-in fade-in slide-in-from-top-1 mt-2 font-mono text-[10px] font-bold tracking-wider text-red-500 uppercase">
              {error}
            </span>
          )}
        </div>
      </div>
    );
  },
);

BriefTextArea.displayName = 'BriefTextArea';

export default BriefTextArea;
