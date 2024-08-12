/**
 * Рассчитывает количество ошибок, символов в минуту(CPN) и слов в минуту(WPM)
 *
 * @param text - Исходный текст
 * @param value - Значение, которое вводит пользователь
 * @returns { mistakes, cpm, wpm }
 * - mistakes: Количество ошибок
 * - cpm: Количество символов
 * - wpm: Количество слов
 */

interface DataCalculationReturns {
  mistakes: number;
  cpm: number;
  wpm: number;
}

export const dataCalculation = (text: string, value: string): DataCalculationReturns => {
  const mistakes = value.split('').reduce((acc, typedChar, index) => {
    return typedChar !== text[index] ? acc + 1 : acc;
  }, 0);

  const cpm = value.length - mistakes;
  const wpm = cpm / 5;

  return { mistakes, cpm, wpm };
};
