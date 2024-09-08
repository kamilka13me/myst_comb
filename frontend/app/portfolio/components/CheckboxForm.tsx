import React, { useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import CheckboxActive from "../../../public/checkbox-active.svg?react";
import Checkbox from "../../../public/checkbox.svg?react";
import { FormInputs } from "./PortfolioForm";

interface CheckboxFormProps {
  label: string;
  name: keyof FormInputs;
  register: UseFormRegister<FormInputs>;
  required?: boolean;
  error?: FieldError | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxForm: React.FC<CheckboxFormProps> = ({
  label,
  name,
  register,
  required,
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
        {...register(name, { required })}
        className="hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      <div className="w-[18px] h-[18px]">
        {isChecked ? <CheckboxActive /> : <Checkbox />}
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
