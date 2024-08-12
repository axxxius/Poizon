import { useTextField } from '@utils';
import { memo } from 'react';

interface TextFieldProps {
  startTimer: () => void;
  time: number;
}

export const TextField = memo(({ startTimer, time }: TextFieldProps) => {
  const { word, inputRef, handleChange } = useTextField(startTimer, time);

  return <input ref={inputRef} value={word} onChange={handleChange} style={{ opacity: 0 }} />;
});
