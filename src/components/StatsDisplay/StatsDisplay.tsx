import { useRecoilValue } from 'recoil';
import styles from './StatsDisplay.module.css';

import { Typography } from '@common';
import { mistakesAtom, cpmAtom, wpmAtom, classnames } from '@utils';
import { memo } from 'react';

interface StatsDisplayProps {
  time: number;
}

export const StatsDisplay = memo(({ time }: StatsDisplayProps) => {
  const mistakes = useRecoilValue(mistakesAtom);
  const cpm = useRecoilValue(cpmAtom);
  const wpm = useRecoilValue(wpmAtom);

  const stylesStats = classnames(styles.container, {
    [styles.show]: time === 0,
    [styles.hide]: time !== 0
  });

  return (
    <div className={stylesStats}>
      <Typography className={styles.tab} variant='title-regular'>
        Ошибки: {mistakes}
      </Typography>
      <Typography className={styles.tab} variant='title-regular'>
        СPM: {cpm}
      </Typography>
      <Typography className={styles.tab} variant='title-regular'>
        WPM: {Math.floor(wpm)}
      </Typography>
    </div>
  );
});
