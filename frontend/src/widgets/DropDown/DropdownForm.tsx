'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { UseFormRegister, UseFormSetValue, FieldError } from 'react-hook-form';
import Arrow from '../../../public/arrow.svg?react';
import ArrowUp from '../../../public/Arrow-up.svg?react';

interface Opinion {
  title?: string;
  text?: string;
}

interface DropdownProps {
  options: Opinion[];
  label: { title: string; titleExtra?: string };
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  error?: FieldError | undefined;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  resetDropdown?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  placeholder,
  // register,
  setValue,
  name,
  defaultValue,
  resetDropdown,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultValue || null,
  );

  const handleOptionClick = (option: Opinion) => {
    const fullOption = `${option.title} ${option.text}`;
    setSelectedOption(fullOption);
    setIsOpen(false);
    setValue(name, fullOption);
  };

  useEffect(() => {
    if (selectedOption !== null) {
      setValue(name, selectedOption);
    }
  }, [selectedOption, setValue, name]);

  useEffect(() => {
    if (resetDropdown) {
      setSelectedOption(null);
      setValue(name, '');
    }
  }, [resetDropdown, setValue, name]);

  return (
    <>
      <div
        className={`relative inline-block w-full rounded-md border font-ibm-plex-sans ${
          isOpen ? 'mb-[350px] md:mb-[150px]' : 'mb-[14px]'
        } ${error ? 'border-red-500' : 'border-[#616161]'}`}
      >
        <label className="absolute left-3 top-[-8px] z-10 bg-base-text_accent px-1 text-xs text-white">
          {label.title}
          <span className="text-[#E7FF00]">{label.titleExtra}</span>
        </label>

        <button
          className={`flex w-full items-center justify-between rounded-md px-[14px] py-[16.5px] text-left md:py-[23px] ${
            error ? 'text-red-500' : 'text-[#616161]'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[14px] md:text-[16px]">
            {selectedOption ? selectedOption : placeholder}
          </span>
          <span
            className={`z-10 transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <Arrow />
          </span>
        </button>

        <ul
          className={`absolute left-0 top-[-5px] mb-[100px] w-full rounded-md border border-gray-300 bg-[#151515] px-[14px] pb-5 pt-[52px] shadow-lg transition-all duration-500 ease-in-out ${
            isOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="flex cursor-pointer gap-[29px] rounded-[20px] px-[24px] py-2 transition-colors duration-200 hover:bg-white-translucent"
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex items-center justify-center">
                <ArrowUp />
              </div>
              <p className="max-w-[740px] text-[#B6B6B6]">
                <span className="text-white">{option.title} </span>
                {option.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {error && <p className="mt-2 text-xs text-red-500">{error.message}</p>}
    </>
  );
};

export default Dropdown;
