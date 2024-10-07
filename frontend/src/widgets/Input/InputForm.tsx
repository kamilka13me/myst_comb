'use client';

import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface InputFormProps {
  label: string;
  name: string;
  elementType?: 'input' | 'textarea';
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  placeholder?: string;
  rows?: number;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  name,
  elementType = 'input',
  type = 'text',
  register,
  error,
  placeholder,
  rows,
}) => {
  const commonStyles = `peer block bg-base-text_accent w-full px-[10px] py-[16px] md:py-[23px] border border-[#616161] text-gray-50 placeholder-[#616161] placeholder:text-[14px] md:placeholder:text-[16px] ${
    error ? 'border-red-500' : 'border-[#616161]'
  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`;

  return (
    <div className="relative mb-5 w-full md:mb-4">
      {elementType === 'textarea' ? (
        <textarea
          id={name}
          rows={rows}
          placeholder={placeholder}
          className={`${commonStyles} resize-none`}
          {...register(name)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          className={commonStyles}
          {...register(name)}
        />
      )}
      <label
        className={`pointer-events-none absolute left-3 top-[-16px] translate-y-1/2 transform bg-base-text_accent px-1 !text-xs md:text-sm ${
          error ? 'text-red-500' : 'text-base-bg-block'
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputForm;
