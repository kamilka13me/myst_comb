import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';
import InputForm from '../../../src/widgets/Input/InputForm';
import CheckboxForm from '../../../src/widgets/Checkbox/CheckboxForm';
import Dropdown from '../../../src/widgets/DropDown/DropdownForm';
import { schema } from '../helpers/validation';
import FileUpload from '@/widgets/FormFile/FormFile';
import PhoneInput from '@/widgets/InputPhone/InputPhone';

export interface FormInputsCooperation {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  phone: string;
  profession: string;
  agreeToTelegram?: boolean;
  agreeToViber?: boolean;
  agreeToProcess?: boolean;
  project: string;
  offer: string;
  documents?: File[];
}

export default function CooperationForm() {
  const [clearBricks, setClearBricks] = useState(false);
  const [checkedSubmit, setCheckedSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    getValues,
  } = useForm<FormInputsCooperation>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setValue(name as keyof FormInputsCooperation, checked, {
      shouldValidate: true,
    });
    if (name === 'agreeToProcess') {
      setCheckedSubmit(checked);
    }
  };

  const onSubmit: SubmitHandler<FormInputsCooperation> = async (data) => {
    console.log(data);
    reset();
    setClearBricks(true);
    setTimeout(() => setClearBricks(false), 100);
    setCheckedSubmit(false);
  };

  return (
    <>
      <p className="mb-3 mt-[152px] text-center font-ibm-plex-sans text-base font-medium text-base-stroke-btn-act md:mb-4 md:text-xl">
        Долучитися як професіонал
      </p>
      <div className="mb-6 flex justify-center px-0 text-center md:mb-[14px] md:px-5">
        <Text
          Tag="h1"
          textType="Desktop/H3"
          color="base/BG_block"
          text="Тут ви можете залишити свої пропозиції щодо співпраці."
          align="center"
          className="text-[28px] md:text-3xl"
        />
      </div>
      <Text
        Tag="p"
        textType="Desktop/Body"
        color="base/BG_block"
        text="Ми раді розширювати нашу команду для втілення амбітної мети спільними зусиллями."
        align="center"
        className="m-auto mb-20 max-w-[666px] !text-[18px] md:text-base"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-[180px] font-ibm-plex-sans"
      >
        <span className="flex flex-col gap-4 md:flex-row">
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

        <span className="flex w-full flex-col gap-4 md:flex-row">
          <InputForm
            label="Email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
            register={register}
            error={errors.email}
          />
          <span className="w-full">
            <PhoneInput
              label="Телефон"
              name="phone"
              register={register}
              error={errors.phone}
            />
            <span className="flex gap-[14px]">
              <CheckboxForm
                label="Я є у Телеграмі"
                name="agreeToTelegram"
                register={register}
                checked={getValues('agreeToTelegram') || false}
                error={errors.agreeToTelegram}
                onChange={handleCheckboxChange}
              />
              <CheckboxForm
                label="Я є у Viber"
                name="agreeToViber"
                register={register}
                checked={getValues('agreeToViber') || false}
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

        <Dropdown
          label={{ title: 'До якого проєкту хочете долучитись?' }}
          placeholder="Оберіть проєкт"
          options={[
            {
              title: '',
              text: 'Унікальні особини;',
            },
            {
              title: '',
              text: 'Cultbit: Інтелектуальна пригода у форматі AR;',
            },
            {
              title: '',
              text: 'Жито: проєкт соціальної адаптації внутрішньо переміщеним особам засобами мистецтва.',
            },
          ]}
          register={register}
          setValue={setValue}
          name="project"
          resetDropdown={clearBricks}
          error={errors.project}
        />

        <h2 className="mb-[14px] text-[24px] text-white">
          Пропозиція щодо співпраці:
        </h2>

        <InputForm
          label="Ваш пропозиція"
          placeholder="Чим могли б допомогти?"
          elementType="textarea"
          rows={5}
          name="offer"
          register={register}
          error={errors.offer}
        />

        <FileUpload
          name="documents"
          register={register}
          setValue={setValue}
          clearFiles={clearBricks}
        />

        <CheckboxForm
          label="Я погоджуюсь надати свої персональні дані"
          name="agreeToProcess"
          register={register}
          checked={getValues('agreeToProcess') || false}
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
