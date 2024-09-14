"use client";

import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormInputs } from "./PortfolioForm";

interface InputFormProps {
  label: string;
  name: keyof FormInputs;
  elementType?: "input" | "textarea";
  type?: string;
  register: UseFormRegister<FormInputs>;
  error?: FieldError | undefined;
  placeholder?: string;
  rows?: number;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  name,
  elementType = "input",
  type = "text",
  register,
  error,
  placeholder,
  rows,
}) => {
  const commonStyles = `peer block bg-base-text_accent w-full px-[14px] py-[16px] md:py-[23px] border border-[#616161] text-gray-50 placeholder-[#616161] ${
    error ? "border-red-500" : "border-[#616161]"
  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`;

  return (
    <div className="relative mb-5 md:mb-4 w-full">
      {elementType === "textarea" ? (
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
        className={`absolute top-[-20px] left-3 text-xs md:text-sm transform translate-y-1/2 pointer-events-none bg-base-text_accent px-1 ${
          error ? "text-red-500" : "text-base-bg-block"
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default InputForm;
