import * as yup from 'yup';

export const schema = yup.object({
  password: yup
    .string()
    .required("Ім'я є обов'язковим")
    .max(25, "Ім'я не може бути більше 25 символів"),
  email: yup
    .string()
    .required("Email є обов'язковим")
    .email('Невірний формат email')
    .max(40, 'Email не може бути більше 40 символів'),
});
