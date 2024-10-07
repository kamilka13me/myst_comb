import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

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
    <div className="relative mb-5 md:mb-4 w-full">
      <label
        className={`absolute top-[-16px] left-3 !text-xs md:text-sm transform translate-y-1/2 pointer-events-none bg-base-text_accent px-1 ${
          error ? "text-red-500" : "text-base-bg-block"
        }`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex border border-[#616161] rounded-md shadow-sm overflow-hidden">
        <input
          type="tel"
          placeholder="+380__-___-__-__"
          id={name}
          className={`peer block bg-base-text_accent w-full px-[10px] py-[16px] md:py-[23px] text-gray-50 placeholder-[#616161] ${
            error ? "border-red-500" : "border-none"
          } focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          {...register(name, {
            onChange: (e) => {
              const { value } = e.target;
              if (!value.startsWith("+380")) {
                e.target.value = "+380" + value.replace(/^\+380/, "");
              }
              return value;
            },
          })}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default PhoneInput;
