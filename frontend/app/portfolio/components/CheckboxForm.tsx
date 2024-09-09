import React, { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormInputs } from "./PortfolioForm";

interface CheckboxFormProps {
  label: string;
  name: keyof FormInputs;
  register: UseFormRegister<FormInputs>;
  error?: FieldError | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxForm: React.FC<CheckboxFormProps> = ({
  label,
  name,
  register,
  error,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        id={name}
        type="checkbox"
        {...register(name)}
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`w-[18px] h-[18px] border-2 rounded-sm flex items-center justify-center cursor-pointer ${
          isChecked ? "border-[#E7FF00]" : "border-[#B6B6B6]"
        }`}
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked && (
          <svg
            className="w-4 h-4 text-[#E7FF00]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>
      <label
        htmlFor={name}
        className={`ml-2 text-sm text-gray-700 ${error ? "text-red-500" : ""}`}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default CheckboxForm;
