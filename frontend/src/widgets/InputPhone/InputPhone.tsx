/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface PhoneInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  name,
  register,
  error,
}) => {
  return (
    <div className="relative mb-5 w-full md:mb-4">
      <label
        className={`pointer-events-none absolute left-3 top-[-16px] translate-y-1/2 transform bg-base-text_accent px-1 !text-xs md:text-sm ${
          error ? 'text-red-500' : 'text-base-bg-block'
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex overflow-hidden rounded-md border border-[#616161] shadow-sm">
        <input
          type="tel"
          placeholder="+380__-___-__-__"
          id={name}
          className={`peer block w-full bg-base-text_accent px-[10px] py-[16px] text-gray-50 placeholder-[#616161] md:py-[23px] ${
            error ? 'border-red-500' : 'border-none'
          } focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
          {...register(name, {
            onChange: (e) => {
              const { value } = e.target;
              if (!value.startsWith('+380')) {
                e.target.value = '+380' + value.replace(/^\+380/, '');
              }
              return value;
            },
          })}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default PhoneInput;
