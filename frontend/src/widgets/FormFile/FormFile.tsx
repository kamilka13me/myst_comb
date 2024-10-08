/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { UseFormRegister, FieldError, UseFormSetValue } from 'react-hook-form';
import Close from '../../../public/close.svg?react';
import Clip from '../../../public/clip.svg?react';

interface FileUploadProps {
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  setValue: UseFormSetValue<any>;
  clearFiles?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  register,
  error,
  setValue,
  clearFiles,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;

      if (selectedFiles) {
        const newFilesArray = Array.from(selectedFiles);
        const totalFiles = files.length + newFilesArray.length;

        if (totalFiles > 3) {
          setFileError('Максимальна кількість файлів - 3.');
          return;
        }

        const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        const maxSize = 2 * 1024 * 1024; // 2MB

        const invalidFiles = newFilesArray.filter(
          (file) => !validTypes.includes(file.type) || file.size > maxSize,
        );

        if (invalidFiles.length > 0) {
          setFileError(
            'Тільки зображення (JPEG, PNG) та PDF файли до 2MB дозволені.',
          );
          return;
        }

        const updatedFiles = [...files, ...newFilesArray];
        setFiles(updatedFiles);
        setValue(name, updatedFiles);
        setFileError(null);
        e.target.value = '';
      }
    },
    [files, name, setValue],
  );

  const handleRemoveFile = useCallback(
    (fileName: string) => {
      const updatedFiles = files.filter((file) => file.name !== fileName);
      setFiles(updatedFiles);
      setValue(name, updatedFiles);
    },
    [files, name, setValue],
  );

  useEffect(() => {
    if (clearFiles) {
      setFiles([]);
      setValue(name, []);
    }
  }, [clearFiles, name, setValue]);

  return (
    <div className="mb-5 flex w-full flex-col gap-6">
      <div className="mt-2 flex flex-wrap gap-6">
        <button
          type="button"
          aria-label="Прикріпити файл"
          className="flex items-center gap-[9px] rounded-md text-white"
          onClick={() => fileInputRef.current?.click()}
        >
          <Clip />
          <p>Прикріпити файл</p>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
          multiple
        />

        {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
        {fileError && <p className="text-xs text-red-500">{fileError}</p>}
        <div>
          {files.length > 0 && (
            <div className="flex gap-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl bg-base-title px-[14px] py-[23px]"
                >
                  <span className="max-w-[180px] text-[14px] text-white">
                    {file.name.length > 20
                      ? `${file.name.slice(0, 20)}...`
                      : file.name}
                  </span>
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => handleRemoveFile(file.name)}
                  >
                    <Close className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
