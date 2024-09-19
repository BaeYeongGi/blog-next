import { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';
import styles from '@/src/styles/View.module.scss';

const ExternalLink = ({children, href }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      target='_blank'
      href={href.toString() || ''}
      className={styles.link}
    >
      {children}
    </a>
  );
};

export default ExternalLink;