import { useResetData } from '@utils';
import RefreshIcon from '@assets/icons/refreshIcon.svg?react';

import styles from '../../App.module.css';
import { memo } from 'react';

interface ResetButtonProps {
  resetTimer: () => void;
}

export const ResetButton = memo(({ resetTimer }: ResetButtonProps) => {
  const { handleReset } = useResetData(resetTimer);

  return <RefreshIcon className={styles.restart} onClick={handleReset} />;
});
