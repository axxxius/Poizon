import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { wordAtom, charIndexAtom, mistakesAtom, cpmAtom, wpmAtom } from '@utils';

export const useResetData = (resetTimer: () => void) => {
  const setWord = useSetRecoilState(wordAtom);
  const setCharIndex = useSetRecoilState(charIndexAtom);
  const setMistakes = useSetRecoilState(mistakesAtom);
  const setCpm = useSetRecoilState(cpmAtom);
  const setWpm = useSetRecoilState(wpmAtom);

  const handleReset = useCallback(() => {
    resetTimer();
    setWord('');
    setCharIndex(0);
    setMistakes(0);
    setCpm(0);
    setWpm(0);
  }, [resetTimer, setWord, setCharIndex, setMistakes, setCpm, setWpm]);

  return {
    handleReset
  };
};
