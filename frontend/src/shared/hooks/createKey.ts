// Функція створення ID або Key.
export function createKey(num: number = 6): string {
  const leters =
    'AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz0123456789';
  let newId = '';
  for (let i = 0; i < num; i++) {
    newId += leters[Math.floor(Math.random() * leters.length)];
  }
  return newId;
}
