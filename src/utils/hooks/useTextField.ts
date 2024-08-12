import { ChangeEvent, RefObject, useCallback, useMemo } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import {
  dataCalculation,
  textAtom,
  wordAtom,
  charIndexAtom,
  mistakesAtom,
  cpmAtom,
  wpmAtom
} from '@utils';
import { useAutoFocus } from './useAutoFocus.ts';

/**
 * Хук, предназначенный для работы с состоянием input
 *
 * @returns { word, inputRef, handleChange }
 * - word: введенное значение пользователем
 * - inputRef: ссылка да DOM-element input
 * - handleChange: функция, для обновления состояние input
 */
interface UseTextFieldReturns {
  word: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
}

export const useTextField = (startTimer: () => void, time: number): UseTextFieldReturns => {
  const text = useRecoilValue(textAtom);
  const [word, setWord] = useRecoilState(wordAtom);
  const setCharIndex = useSetRecoilState(charIndexAtom);
  const setMistakes = useSetRecoilState(mistakesAtom);
  const setCpm = useSetRecoilState(cpmAtom);
  const setWpm = useSetRecoilState(wpmAtom);
  const inputRef = useAutoFocus<HTMLInputElement>();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (time <= 0 || value.length > text.length) return;

      if (value.length === 1) {
        startTimer();
      }

      const { mistakes, cpm, wpm } = dataCalculation(text, value);
      setWord(value);
      setCharIndex(value.length);
      setMistakes(mistakes);
      setCpm(cpm);
      setWpm(wpm);
    },
    [text, time, startTimer, setWord, setCharIndex, setMistakes, setCpm, setWpm]
  );

  return useMemo(
    () => ({
      word,
      inputRef,
      handleChange
    }),
    [word, inputRef, handleChange]
  );
};
