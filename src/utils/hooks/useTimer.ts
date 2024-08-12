import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

import { MAX_TIME, timeAtom } from '@utils';

export const useTimer = () => {
  const [time, setTime] = useRecoilState(timeAtom);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(timerRef.current!);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  }, [setTime]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTime(MAX_TIME);
  }, [setTime]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return useMemo(
    () => ({
      time,
      startTimer,
      resetTimer,
      timerRef
    }),
    [time, startTimer, resetTimer]
  );
};
