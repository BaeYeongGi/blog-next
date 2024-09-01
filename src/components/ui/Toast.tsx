'use client';

import styles from '@/src/styles/Toast.module.scss';
import { Check } from '@/public/images/svg/Check';
import useStore from '@/src/store/store';
import { useEffect } from 'react';

const Toast = () => {
  const { isToast, setIsToast } = useStore();

  useEffect(() => {
    if(isToast){
      const timer = setTimeout(() => {
        setIsToast(false);
      },3500)
      return () => clearTimeout(timer);
    }
  },[isToast, setIsToast])

  return (
    <>
      {
        isToast && (
          <div className={isToast ? `${styles.toast} ${styles.active}` : styles.toast}>
            <p className={styles.text}><Check/>이메일이 복사되었습니다!</p>
          </div>
        )
      }
    </>
  );
};

export default Toast;