'use client';
import React from 'react';
import { Text } from '@/shared/ui/Text';
import InputForm from '@/widgets/Input/InputForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import { schema } from '../helpers/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import EmailIcon from '@/shared/assets/icons/icon_mail.svg';
import LockIcon from '@/shared/assets/icons/icon_lock.svg';

interface FormData {
  email: string;
  password: string;
}

const AdminLoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center px-5">
      <div className="mb-[30px] flex flex-col items-center justify-center">
        <Text
          textType="H3"
          Tag="h3"
          text="Вхід у кабінет"
          color="base/BG_block"
        />
        <Text
          textType="H3"
          Tag="h3"
          text="адміністратора"
          color="base/BG_block"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm gap-3">
        <InputForm
          label="Електронна пошта"
          name="email"
          placeholder="Введіть e-mail"
          type="email"
          register={register}
          error={errors.email}
          icon={EmailIcon}
        />

        <InputForm
          label="Пароль"
          name="password"
          placeholder="Введіть пароль"
          type="password"
          register={register}
          error={errors.password}
          icon={LockIcon}
        />

        <button
          type="submit"
          className="mt-[30px] inline-flex h-12 w-full items-center justify-center gap-2 rounded-[40px] bg-[#2c05f2] px-[18px] py-6"
        >
          <div className="font-['IBM Plex Sans'] text-lg font-medium leading-snug text-white">
            Увійти
          </div>
        </button>
      </form>
    </div>
  );
};

export { AdminLoginPage };
