import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputForm from "./InputForm";
import FallingBricks from "./FillingBringsForm";
import CheckboxForm from "./CheckboxForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../helpers/validation";

export interface FormInputs {
  firstName: string;
  lastName: string;
  organization?: string;
  email: string;
  phone?: string;
  profession?: string;
  expert?: string;
  agreeToTelegram?: boolean;
  agreeToViber?: boolean;
  agreeToProcess?: boolean;
  selectedBrick: (string | undefined)[];
}

export default function PortfolioForm() {
  const [clearBricks, setClearBricks] = useState(false);
  const [checkedSubmit, setCheckedSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleBrickSelect = (selectedBricks: string[]) => {
    setValue("selectedBrick", selectedBricks);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedSubmit(event.target.checked);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);

    reset();
    setValue("selectedBrick", []);
    setClearBricks(true);
    setTimeout(() => setClearBricks(false), 100);
  };

  return (
    <>
      <p className="text-center text-xl font-medium text-gray-500 mb-4">
        Портфоліо-рев&apos;ю:
      </p>

      <h1 className="flex justify-center text-4xl mb-20">
        Заповніть анкету нижче, щоб ми могли якнайшвидше звʼязатись із вами
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <span className="flex gap-4">
          <InputForm
            label="Ім'я"
            name="firstName"
            placeholder="Ім'я"
            register={register}
            required={true}
            error={errors.firstName}
          />
          <InputForm
            label="Прізвище"
            name="lastName"
            placeholder="Прізвище"
            register={register}
            required={true}
            error={errors.lastName}
          />
        </span>

        <InputForm
          label="Назва організації"
          name="organization"
          placeholder="Назва організації"
          register={register}
          error={errors.organization}
        />

        <span className="flex gap-[14px]">
          <CheckboxForm
            label="Я є у Телеграмі"
            name="agreeToTelegram"
            register={register}
            error={errors.agreeToTelegram}
          />
          <CheckboxForm
            label="Я є у Viber"
            name="agreeToViber"
            register={register}
            error={errors.agreeToViber}
          />
        </span>

        <InputForm
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          type="email"
          register={register}
          required={true}
          error={errors.email}
        />
        <InputForm
          label="Телефон"
          name="phone"
          placeholder="+380__-___-__-__"
          type="tel"
          register={register}
          error={errors.phone}
        />
        <InputForm
          label="Ваша професія"
          name="profession"
          placeholder="митець/ мисткиня, арт-менеджер/ка, арт-дилер/ка, мистецтвознав/иця, культуролог/иня, куратор/ка, журналіст/ка"
          register={register}
          error={errors.profession}
        />

        <FallingBricks
          onSelect={handleBrickSelect}
          clearSelection={clearBricks}
          error={
            Array.isArray(errors.selectedBrick)
              ? errors.selectedBrick[0]
              : errors.selectedBrick
          }
        />
        <InputForm
          label="Консультація від якого експерта ви хотіли б отримати?"
          name="expert"
          register={register}
          error={errors.expert}
        />
        <CheckboxForm
          label="Я погоджуюсь надати свої персональні дані"
          name="agreeToProcess"
          register={register}
          error={errors.agreeToProcess}
          onChange={handleCheckboxChange} // Updated to use onChange
        />
        <button
          type="submit"
          disabled={!checkedSubmit}
          className={`mt-4 w-full py-2 px-4 rounded ${
            checkedSubmit
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          Надіслати
        </button>
      </form>
    </>
  );
}
