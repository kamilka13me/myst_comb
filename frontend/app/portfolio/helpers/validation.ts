import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required("Ім'я є обов'язковим"),
  lastName: yup.string().required("Прізвище є обов'язковим"),
  organization: yup.string().optional(),
  email: yup
    .string()
    .email("Невірний формат email")
    .required("Email є обов'язковим"),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, "Невірний формат телефону")
    .optional(),
  profession: yup.string().optional(),
  expert: yup.string().optional(),
  agreeToTelegram: yup.boolean().optional(),
  agreeToViber: yup.boolean().optional(),
  selectedBrick: yup
    .array()
    .of(yup.string())
    .required("Оберіть щонайменше один елемент"),
});
