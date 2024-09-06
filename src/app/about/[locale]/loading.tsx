import React from 'react';
import styles from '@/src/styles/Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <span className={styles.spinner}></span>
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default Loading;