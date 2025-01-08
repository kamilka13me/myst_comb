export const formatDate = (input: number | string): string => {
  const dateTime = new Date(input);
  const formattedDate = dateTime.toLocaleDateString('uk', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  // Форматування дати у форматі DD.MM.YYYY
  return formattedDate;
};
