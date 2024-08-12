import { ResetButton, StatsDisplay, TextField, TimerDisplay, TypingText } from '@components';
import { useTimer } from '@utils';
import { Typography } from '@common';
import styles from './App.module.css';
import { memo } from 'react';

const App = memo(() => {
  const { time, startTimer, resetTimer } = useTimer();

  return (
    <>
      <Typography className={styles.title}>Typing Speed Trainer</Typography>
      <TimerDisplay />
      <TextField startTimer={startTimer} time={time} />
      <TypingText />
      <ResetButton resetTimer={resetTimer} />
      <StatsDisplay time={time} />
    </>
  );
});

export default App;
