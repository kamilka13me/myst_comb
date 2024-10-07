"use client";

import React, { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue, FieldError } from "react-hook-form";
import Arrow from "../../../public/arrow.svg?react";
import ArrowUp from "../../../public/Arrow-up.svg?react";

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
  register,
  setValue,
  name,
  defaultValue,
  resetDropdown,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultValue || null
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
      setValue(name, "");
    }
  }, [resetDropdown, setValue, name]);

  return (
    <>
      <div
        className={`relative inline-block font-ibm-plex-sans w-full rounded-md border ${
          isOpen ? "mb-[350px] md:mb-[150px]" : "mb-[14px]"
        } ${error ? "border-red-500" : "border-[#616161]"}`}
      >
        <label className="absolute top-[-8px] text-xs left-3 bg-base-text_accent text-white px-1 z-10">
          {label.title}
          <span className="text-[#E7FF00]">{label.titleExtra}</span>
        </label>

        <button
          className={`py-[16.5px] md:py-[23px] px-[14px] w-full text-left rounded-md flex justify-between items-center ${
            error ? "text-red-500" : "text-[#616161]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[14px] md:text-[16px]">
            {selectedOption ? selectedOption : placeholder}
          </span>
          <span
            className={`z-10 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <Arrow />
          </span>
        </button>

        <ul
          className={`absolute top-[-5px] left-0 w-full pt-[52px] pb-5 px-[14px] mb-[100px] border border-gray-300 rounded-md shadow-lg bg-[#151515] transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="flex gap-[29px] px-[24px] py-2 hover:bg-white-translucent cursor-pointer rounded-[20px] transition-colors duration-200"
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex justify-center items-center">
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
      {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
    </>
  );
};

export default Dropdown;
