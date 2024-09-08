"use client";
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormInputs } from "./PortfolioForm";

interface InputFormProps {
  label: string;
  name: keyof FormInputs;
  type?: string;
  register: UseFormRegister<FormInputs>;
  error?: FieldError | undefined;
  placeholder?: string;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
}) => {

  return (
    <div className="relative mb-4 w-full">
      <input
        className={`peer block bg-black w-full px-[14px] py-[23px] border border-[#616161] text-gray-50 placeholder-[#616161] ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        type={type}
        placeholder={placeholder}
        id={name}
        {...register(name)}
      />
      <label
        className={`absolute top-[-20px] left-3 text-sm transform translate-y-1/2 pointer-events-none bg-black px-1 ${
          error ? "text-red-500" : ""
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
