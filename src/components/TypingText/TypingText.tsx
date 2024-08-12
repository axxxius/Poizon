import { memo, useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { textAtom, wordAtom, charIndexAtom, classnames } from '@utils';
import styles from './TypingText.module.css';
import { Typography } from '@common';

export const TypingText = memo(() => {
  const text = useRecoilValue(textAtom);
  const word = useRecoilValue(wordAtom);
  const charIndex = useRecoilValue(charIndexAtom);

  const stylesChar = (index: number, char: string) => {
    return classnames(styles.char, {
      [styles.active]: index === charIndex,
      [styles.correct]: word[index] === char,
      [styles.incorrect]: index < charIndex && word[index] !== char
    });
  };

  const textArray = useMemo(() => text.split(''), [text]);

  return (
    <div className={styles.content}>
      {textArray.map((char, index) => (
        <Typography tag='span' variant='sub-title' className={stylesChar(index, char)} key={index}>
          {char}
        </Typography>
      ))}
    </div>
  );
});
