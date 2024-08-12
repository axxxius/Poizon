import { memo, ReactNode } from 'react';

import { classnames } from '@utils';

import styles from './Typography.module.css';

interface TypographyProps {
  tag?: 'h1' | 'h2' | 'span' | 'div';
  variant?: 'title' | 'sub-title' | 'title-regular' | 'body' | 'sub-body' | 'title-body';
  children: ReactNode;
  className?: string;
}

export const Typography = memo(
  ({ tag = 'div', variant = 'title', className = '', children }: TypographyProps) => {
    const Component = tag;

    return <Component className={classnames(className, styles[variant])}>{children}</Component>;
  }
);
