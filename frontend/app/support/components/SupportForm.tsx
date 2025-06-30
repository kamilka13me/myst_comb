import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';
import InputForm from '../../../src/widgets/Input/InputForm';
import CheckboxForm from '../../../src/widgets/Checkbox/CheckboxForm';
import Dropdown from '../../../src/widgets/DropDown/DropdownForm';
import FallingBricks from '../../../src/widgets/CardForm/FillingBringsForm';
import { data, dataPhone } from '../../portfolio/helpers/brings-data';
import { supportData, supportDataPhone } from '../helpers/support-data';
import { schema } from '../helpers/validation';
import PhoneInput from '@/widgets/InputPhone/InputPhone';
import { apiRequest } from '@/shared/lib/api';
import { useRouter } from 'next/navigation';

export interface FormInputsSupport {
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
  selectedSupport: (string | undefined)[];
  services: string;
}

export default function SupportForm() {
  const router = useRouter();

  const [success, setSuccess] = useState(false);
  const [clearBricks, setClearBricks] = useState(false);
  const [checkedSubmit, setCheckedSubmit] = useState(false);

  useEffect(() => {
    if (success) {
      router.push('/thank');
    }
  }, [success, router]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    getValues,
  } = useForm<FormInputsSupport>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const handleBrickSelect = (selectedBricks: string[]) => {
    setValue('selectedBrick', selectedBricks);
  };

  const handleSupportSelect = (selectedSupport: string[]) => {
    setValue('selectedSupport', selectedSupport);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setValue(name as keyof FormInputsSupport, checked, {
      shouldValidate: true,
    });
    if (name === 'agreeToProcess') {
      setCheckedSubmit(checked);
    }
  };

  const onSubmit: SubmitHandler<FormInputsSupport> = async (data) => {
    try {
      const createdData = await apiRequest<FormInputsSupport>(
        'post',
        '/forms/support',
        data,
      );
      console.log(createdData);
      setSuccess(true);
    } catch (error) {
      console.error('Error creating data:', error);
      router.push('/thank');
    }

    console.log(data);

    reset();
    setValue('selectedBrick', []);
    setValue('selectedSupport', []);
    setClearBricks(true);
    setTimeout(() => setClearBricks(false), 100);
    setCheckedSubmit(false);
  };

  return (
    <div className="px-5 lg:px-0">
      <p className="mb-3 mt-[152px] text-center font-ibm-plex-sans text-base font-medium text-base-stroke-btn-act md:mb-4 md:text-xl">
        Бухгалтерська та юридична допомога:
      </p>
      <div className="mb-10 flex justify-center px-0 text-center md:mb-20 md:px-5">
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
        <FallingBricks
          onSelect={handleSupportSelect}
          clearSelection={clearBricks}
          data={supportData}
          dataPhone={supportDataPhone}
          title="Яка саме допомога вам потрібна:"
          error={
            Array.isArray(errors.selectedSupport)
              ? errors.selectedSupport[0]
              : errors.selectedSupport
          }
        />
        <InputForm
          label="Консультація від якого експерта ви хотіли б отримати?"
          name="expert"
          register={register}
          error={errors.expert}
        />

        <Dropdown
          label={{ title: 'Тип послуги:' }}
          placeholder="Оберіть послугу"
          options={[
            {
              title: 'річна підписка ',
              text: '(до 30 хв усних консультацій на місяць, 3 короткі консультації у письмовій формі по електронній пошті, пошук та надання нормативних документів з питань оподаткування та бухгалтерського обліку на запит (до 3-х в місяць), доступ до шаблонів документів);',
            },
            {
              title: 'одноразова послуга',
              text: '(письмова відповідь/ 60 хв усної консультації).',
            },
          ]}
          register={register}
          setValue={setValue}
          name="services"
          resetDropdown={clearBricks}
          error={errors.services}
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
    </div>
  );
}
