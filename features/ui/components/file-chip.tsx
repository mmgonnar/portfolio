import { cn } from '@/lib/utils';
import { File, X } from 'lucide-react';

interface FileChipProps {
  name: string;
  /** Sin onRemove el chip es solo lectura, como en la revisión final. */
  onRemove?: () => void;
  removeLabel?: string;
  className?: string;
}

export const FileChip = ({ name, onRemove, removeLabel, className }: FileChipProps) => (
  <div
    className={cn(
      'flex items-center justify-between gap-3 border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      className,
    )}
  >
    <div className="flex items-center gap-3 overflow-hidden">
      <File size={14} className="shrink-0 text-green-600" />
      <span className="truncate font-mono text-[10px] tracking-tighter uppercase italic">
        {name}
      </span>
    </div>

    {onRemove && (
      <button
        type="button"
        onClick={onRemove}
        aria-label={removeLabel}
        className="group/btn shrink-0 cursor-pointer p-1 transition-colors hover:bg-red-50"
      >
        <X size={14} className="text-neutral-400 group-hover/btn:text-red-500" strokeWidth={3} />
      </button>
    )}
  </div>
);
