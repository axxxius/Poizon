import { timeAtom } from '@utils';
import styles from './TimerDisplay.module.css';
import { Typography } from '@common';
import { useRecoilValue } from 'recoil';

export const TimerDisplay = () => {
  const time = useRecoilValue(timeAtom);

  return (
    <Typography variant='title' className={styles.time}>
      {time}
    </Typography>
  );
};
