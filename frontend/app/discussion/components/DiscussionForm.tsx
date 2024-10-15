import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonLink } from '@/shared/ui/ButtonLink';
import { Text } from '@/shared/ui/Text';
import InputForm from '../../../src/widgets/Input/InputForm';
import CheckboxForm from '../../../src/widgets/Checkbox/CheckboxForm';
import { schema } from '../helpers/validation';
import FileUpload from '@/widgets/FormFile/FormFile';
import PhoneInput from '@/widgets/InputPhone/InputPhone';
import FallingBricks from '@/widgets/CardForm/FillingBringsForm';
import { data, dataPhone } from '../../portfolio/helpers/brings-data';
import { apiRequest } from '@/shared/lib/api';
import { useRouter } from 'next/navigation';

export interface FormInputsDiscussion {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  phone: string;
  profession: string;
  agreeToTelegram?: boolean;
  agreeToViber?: boolean;
  agreeToProcess?: boolean;
  selectedBrick: (string | undefined)[];
  description: string;
  documents?: File[];
}

export default function DiscussionForm() {
  const router = useRouter();
  const [clearBricks, setClearBricks] = useState(false);
  const [checkedSubmit, setCheckedSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

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
  } = useForm<FormInputsDiscussion>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setValue(name as keyof FormInputsDiscussion, checked, {
      shouldValidate: true,
    });
    if (name === 'agreeToProcess') {
      setCheckedSubmit(checked);
    }
  };

  const handleBrickSelect = (selectedBricks: string[]) => {
    setValue('selectedBrick', selectedBricks);
  };

  const onSubmit: SubmitHandler<FormInputsDiscussion> = async (data) => {
    console.log(data);

    try {
      const createdData = await apiRequest<FormInputsDiscussion>(
        'post',
        '/discussions',
        data,
      );
      console.log(createdData);
      setSuccess(true);
    } catch (error) {
      console.error('Error creating data:', error);
      router.push('/thank');
    }

    reset();
    setValue('selectedBrick', []);
    setClearBricks(true);
    setTimeout(() => setClearBricks(false), 100);
    setCheckedSubmit(false);
  };

  return (
    <div className="px-5 lg:px-0">
      <p className="mb-3 mt-[152px] text-center font-ibm-plex-sans text-base font-medium text-base-stroke-btn-act md:mb-4 md:text-xl">
        Відкрите обговорення
      </p>
      <div className="mb-6 flex justify-center px-0 text-center md:mb-[14px] md:px-5">
        <Text
          Tag="h1"
          textType="Desktop/H3"
          color="base/BG_block"
          text="Тут ви можете залишити свої пропозиції щодо роботи Мистецького Комбінату."
          align="center"
          className="text-[28px] md:text-3xl"
        />
      </div>
      <Text
        Tag="p"
        textType="Desktop/Body"
        color="base/BG_block"
        text="Ми здійснюємо перегляд стратегії раз на рік, тому заповнюйте форму і ми обов’язково розглянемо ваші коментарі під час наступної стратегічної сесії."
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

        <h2 className="mb-[14px] text-[24px] text-white">
          Пропозиція щодо роботи Фонду:
        </h2>

        <InputForm
          label="Ваш опис"
          placeholder="Обѓрунтування актуальності пропозиції (будь ласка, додайте посилання на статистичні звіти, дослідження та інші джерела даних, спираючись на які ви сформулювали свою пропозицію)."
          elementType="textarea"
          rows={5}
          name="description"
          register={register}
          error={errors.description}
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
    </div>
  );
}
