import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputForm from "./InputForm";
import FallingBricks from "./FillingBringsForm";
import CheckboxForm from "./CheckboxForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../helpers/validation";
import { ButtonLink } from "@/shared/ui/ButtonLink";

export interface FormInputs {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  phone: string;
  profession: string;
  expert: string;
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
    getValues,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleBrickSelect = (selectedBricks: string[]) => {
    setValue("selectedBrick", selectedBricks);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setValue(name as keyof FormInputs, checked, { shouldValidate: true });
    if (name === "agreeToProcess") {
      setCheckedSubmit(checked);
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);

    reset();
    setValue("selectedBrick", []);
    setClearBricks(true);
    setTimeout(() => setClearBricks(false), 100);
    setCheckedSubmit(false)
  };

  return (
    <>
      <p className="text-center text-xl font-medium text-gray-500 mb-4">
        Портфоліо-рев&apos;ю:
      </p>
      <div className="flex justify-center text-center px-5 mb-20">
        <h1 className="text-3xl">
          Заповніть анкету нижче, щоб ми могли якнайшвидше звʼязатись із вами
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <span className="flex gap-4">
          <InputForm
            label="Ім'я"
            name="firstName"
            placeholder="Ім'я"
            register={register}
            error={errors.firstName}
          />
          <InputForm
            label="Прізвище"
            name="lastName"
            placeholder="Прізвище"
            register={register}
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

        <span className="w-full flex flex- gap-4">
          <InputForm
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
            register={register}
            error={errors.email}
          />
          <span className="w-full">
            <InputForm
              label="Телефон"
              name="phone"
              placeholder="+380__-___-__-__"
              type="tel"
              register={register}
              error={errors.phone}
            />
            <span className="flex gap-[14px]">
              <CheckboxForm
                label="Я є у Телеграмі"
                name="agreeToTelegram"
                register={register}
                checked={getValues("agreeToTelegram") || false}
                error={errors.agreeToTelegram}
                onChange={handleCheckboxChange}
              />
              <CheckboxForm
                label="Я є у Viber"
                name="agreeToViber"
                register={register}
                checked={getValues("agreeToViber") || false}
                error={errors.agreeToViber}
                onChange={handleCheckboxChange}
              />
            </span>
          </span>
        </span>
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
          title="В яких медіа працюєте:"
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
          checked={getValues("agreeToProcess") || false}
          error={errors.agreeToProcess}
          onChange={handleCheckboxChange}
          classMain="flex justify-center"
        />
        {/* <button
          type="submit"
          disabled={!checkedSubmit}
          className={`mt-4 w-full py-2 px-4 rounded ${
            checkedSubmit
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          Надіслати
        </button> */}
        
        
        <ButtonLink variant="arrowTextBlue" text="Подати заявку" to="/404" />
      </form>
    </>
  );
}
