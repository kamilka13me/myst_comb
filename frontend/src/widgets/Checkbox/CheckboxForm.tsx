import React, { useRef } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../../../app/portfolio/components/PortfolioForm';
import Icon from '../../../public/checkbox.svg?react';

interface CheckboxFormProps {
  label: string;
  name: keyof FormInputs;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classMain?: string;
}

const CheckboxForm: React.FC<CheckboxFormProps> = ({
  label,
  name,
  register,
  error,
  checked,
  onChange,
  classMain,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={`mb-4 flex items-center ${classMain}`}>
      <input
        id={name}
        type="checkbox"
        {...register(name)}
        className="hidden"
        checked={checked}
        onChange={onChange}
        ref={inputRef}
      />
      <div
        className={`flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-sm border-2 ${
          checked ? 'border-[#E7FF00]' : 'border-[#B6B6B6]'
        }`}
        onClick={handleClick}
      >
        {checked && <Icon className="h-4 w-4" />}
      </div>
      <label
        htmlFor={name}
        className={`ml-2 text-sm text-base-stroke-btn-act ${error ? 'text-red-500' : 'text-base-stroke-btn-act'}`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default CheckboxForm;
