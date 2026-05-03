'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import { Upload, File, X } from 'lucide-react';
import { cn } from '@/utils/functions';

export const StepFiles = () => {
  const { t } = useTranslation();
  const { setStepValid } = useBriefStore();
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      setStepValid(true);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.step8.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.step8.description')}</p>
      </div>

      <div className="group relative flex flex-col items-center justify-center space-y-4 border-2 border-dashed border-gray-300 bg-gray-50/50 py-16 transition-colors hover:border-black hover:bg-white">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="absolute inset-0 z-10 cursor-pointer opacity-0"
        />

        <Upload className="h-10 w-10 text-gray-400 transition-colors group-hover:text-black" />

        <div className="text-center">
          <p className="text-sm font-bold tracking-tight text-black uppercase">
            {t('brief.steps.step8.dropzone.title')}
          </p>
          <p className="text-xs text-gray-500">{t('brief.steps.step8.dropzone.subtitle')}</p>
        </div>

        <p className="font-mono text-xs text-gray-400 uppercase">
          {t('brief.steps.step8.dropzone.info')}
        </p>
      </div>

      {files.length > 0 && (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <File size={16} className="text-green-brutalist shrink-0" />
                <span className="truncate font-mono text-xs tracking-tighter uppercase italic">
                  {file.name}
                </span>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="cursor-pointer text-gray-400 transition-colors hover:text-red-500"
              >
                <X size={14} strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      )}
    </BriefContainer>
  );
};
