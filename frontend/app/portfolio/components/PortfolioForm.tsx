"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputForm from "../../../src/widgets/Input/InputForm";
import FallingBricks from "../../../src/widgets/CardForm/FillingBringsForm";
import CheckboxForm from "../../../src/widgets/Checkbox/CheckboxForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../helpers/validation";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Text } from "@/shared/ui/Text";
import { data, dataPhone } from "../helpers/brings-data";

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
    setCheckedSubmit(false);
  };

  return (
    <>
      <p className="text-center text-base md:text-xl font-medium text-base-stroke-btn-act mb-3 md:mb-4 mt-[152px] font-ibm-plex-sans">
        Портфоліо-рев&apos;ю:
      </p>
      <div className="flex justify-center text-center px-0 md:px-5 mb-10 md:mb-20">
        <Text
          Tag="h1"
          textType="Desktop/H3"
          color="base/BG_block"
          text="Заповніть анкету нижче, щоб ми могли якнайшвидше звʼязатись із вами"
          align="center"
          className="text-[28px] md:text-3xl"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mb-[180px] font-ibm-plex-sans"
      >
        <span className="flex flex-col md:flex-row gap-4">
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

        <span className="w-full flex flex-col md:flex-row gap-4">
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
          data={data}
          dataPhone={dataPhone}
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
          classMain="flex justify-center mt-5 mb-5 md:mt-6 md:mb-6"
        />

        <div className="flex justify-center">
          <ButtonLink
            type="submit"
            variant="arrowTextBlue"
            text="Подати заявку"
            className="flex justify-center"
            disabled={!checkedSubmit}
            arrowTextBlueStyles="px-[88px] md:px-[37px]"
          />
        </div>
      </form>
    </>
  );
}
