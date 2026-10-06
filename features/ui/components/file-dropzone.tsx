'use client';
import { cn } from '@/lib/utils';
import { Upload } from 'lucide-react';
import { useState } from 'react';
import { FileChip } from './file-chip';

interface FileDropzoneProps {
  files: File[];
  /** Devuelve cuántos archivos se ignoraron por duplicados. */
  onAdd: (incoming: File[]) => number;
  onRemove: (index: number) => void;
  labels: {
    title: string;
    subtitle: string;
    info: string;
    duplicate: string;
    notKept: string;
    remove?: string;
  };
  /** Cuántos chips se listan antes de resumir el resto. */
  maxVisible?: number;
  className?: string;
}

export const FileDropzone = ({
  files,
  onAdd,
  onRemove,
  labels,
  maxVisible = 6,
  className,
}: FileDropzoneProps) => {
  const [hasDuplicate, setHasDuplicate] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const addAndReport = (incoming: File[]) => {
    if (incoming.length === 0) return;
    setHasDuplicate(onAdd(incoming) > 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addAndReport(Array.from(e.target.files));
    // Sin esto, volver a elegir un archivo que se acaba de quitar no dispara
    // change, porque el input conserva el valor anterior.
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    addAndReport(Array.from(e.dataTransfer.files));
  };

  const visible = files.slice(0, maxVisible);
  const hiddenCount = files.length - visible.length;
  const isCompact = files.length > 0;

  return (
    <div className={cn('space-y-4', className)}>
      <div
        onDragOver={e => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        className={cn(
          'group relative flex flex-col items-center justify-center border-2 border-dashed transition-all',
          isCompact ? 'space-y-2 py-6' : 'space-y-4 py-12',
          isDragOver
            ? 'border-green-brutalist bg-green-50/40'
            : 'border-neutral-200 bg-neutral-50/30 hover:border-black hover:bg-white',
        )}
      >
        <input
          type="file"
          multiple
          onChange={handleInputChange}
          className="absolute inset-0 z-10 cursor-pointer opacity-0"
        />
        <Upload
          className={cn(
            'h-8 w-8 transition-colors',
            isDragOver ? 'text-green-brutalist' : 'text-neutral-300 group-hover:text-black',
          )}
        />

        <div className="px-4 text-center">
          <p className="text-xs font-bold tracking-tight text-black uppercase">{labels.title}</p>
          <p className="mt-1 text-[10px] tracking-wide text-gray-400 uppercase">
            {labels.subtitle}
          </p>
          <p className="mt-1 text-[10px] tracking-wide text-gray-400 uppercase">{labels.info}</p>
        </div>
      </div>

      {hasDuplicate && <p className="font-mono text-xs text-amber-600">{labels.duplicate}</p>}

      {files.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {visible.map((file, index) => (
              <FileChip
                key={`${file.name}-${file.lastModified}-${index}`}
                name={file.name}
                removeLabel={labels.remove}
                onRemove={() => onRemove(index)}
                className="animate-in fade-in zoom-in-95"
              />
            ))}
          </div>

          {hiddenCount > 0 && (
            <p className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
              + {hiddenCount}
            </p>
          )}

          <p className="font-mono text-[10px] tracking-wide text-gray-400 uppercase">
            {labels.notKept}
          </p>
        </>
      )}
    </div>
  );
};
