"use client";

import React, { useState } from "react";
import { UseFormRegister, FieldError, UseFormSetValue } from "react-hook-form";
import Close from "../../../public/close.svg?react";
import Clip from "../../../public/clip.svg?react";

interface FileUploadProps {
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  setValue: UseFormSetValue<any>;
}

const FileUpload: React.FC<FileUploadProps> = ({
  name,
  register,
  error,
  setValue,
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]); // Стан для зберігання назв файлів
  const [files, setFiles] = useState<File[]>([]); // Стан для зберігання файлів

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      const newFilesArray = Array.from(selectedFiles);
      const totalFiles = files.length + newFilesArray.length;

      if (totalFiles > 3) {
        alert("Ви можете прикріпити максимум 3 файли.");
        return;
      }

      // Оновлюємо стан файлів
      setFiles((prev) => [...prev, ...newFilesArray]);
      const newFileNames = newFilesArray.map((file) => file.name); // Отримуємо назви нових файлів
      setFileNames((prev) => [...prev, ...newFileNames]);

      // Оновлюємо значення у формі
      setValue(name, [...files, ...newFilesArray]);

      // Очищуємо поле вводу
      e.target.value = "";
    }
  };

  const handleRemoveFile = (fileName: string) => {
    const updatedFileNames = fileNames.filter((name) => name !== fileName);
    const updatedFiles = files.filter((file) => file.name !== fileName);

    // Оновлюємо стан і форму
    setFileNames(updatedFileNames);
    setFiles(updatedFiles);
    setValue(name, updatedFiles); // Оновлюємо значення
  };

  return (
    <div className="mb-5 flex ">
      <div className="mt-2 flex items-center">
        <button
          type="button"
          className="flex px-4 py-2 gap-[9px] text-white rounded-md"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          <Clip />
          <p>Прикріпити файл</p>
        </button>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          className="hidden"
          multiple
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
      <div className="mt-4">
        {fileNames.length > 0 && (
          <div className="flex gap-2">
            {fileNames.map((fileName, index) => (
              <div
                key={index}
                className="flex items-center justify-between mt-1 px-[14px] py-[23px] rounded-2xl bg-slate-500"
              >
                <span>{fileName}</span>
                <button
                  type="button"
                  className="text-red-500 ml-2"
                  onClick={() => handleRemoveFile(fileName)}
                >
                  <Close className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
