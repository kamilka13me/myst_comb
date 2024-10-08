import * as yup from 'yup';

const ukrEngLettersWithSpaces = /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ\s]+$/;
const ukrEngLettersNumbersSymbols = /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ0-9\s.,@/_$%&-]*$/;

export const schema = yup.object({
  firstName: yup
    .string()
    .required("Ім'я є обов'язковим")
    .matches(
      ukrEngLettersWithSpaces,
      "Ім'я має містити лише українські або англійські літери",
    )
    .max(25, "Ім'я не може бути більше 25 символів"),
  lastName: yup
    .string()
    .required("Прізвище є обов'язковим")
    .matches(
      ukrEngLettersWithSpaces,
      'Прізвище має містити лише українські або англійські літери',
    )
    .max(30, 'Прізвище не може бути більше 30 символів'),
  organization: yup
    .string()
    .required("Назва організації є обов'язковою")
    .matches(
      ukrEngLettersNumbersSymbols,
      'Назва організації має містити лише літери, цифри та символи',
    )
    .max(60, 'Назва організації не може бути більше 60 символів'),
  email: yup
    .string()
    .required("Email є обов'язковим")
    .email('Невірний формат email')
    .max(40, 'Email не може бути більше 40 символів'),
  phone: yup
    .string()
    .required("Телефон є обов'язковим")
    .matches(
      /^\+380\d{9}$/,
      'Невірний формат телефону. Має бути в форматі +380XXXXXXXXX',
    ),
  profession: yup
    .string()
    .required("Професія є обов'язковою")
    .matches(
      ukrEngLettersNumbersSymbols,
      'Професія має містити лише літери та цифри',
    )
    .max(60, 'Професія не може бути більше 60 символів'),
  agreeToTelegram: yup.boolean().optional(),
  agreeToViber: yup.boolean().optional(),
  agreeToProcess: yup.boolean().optional(),
  project: yup.string().required('Виберіть проект'),
  offer: yup.string().required('Виберіть пропозицію'),
  documents: yup.array(),
});
