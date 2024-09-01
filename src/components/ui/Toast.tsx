'use client';

import styles from '@/src/styles/Toast.module.scss';
import { Check } from '@/public/images/svg/Check';
import useStore from '@/src/store/store';
import { useEffect, useState } from 'react';

const Toast = () => {
  const { isToast, setIsToast } = useStore();
  const [ isActive, setIsActive ] = useState(false); 
  useEffect(() => {
    if(isToast){
      setIsActive(true);
      const timerToast = setTimeout(() => {
        setIsToast(false);
      },3500)
      const timerActive = setTimeout(() => {
        setIsActive(false);
      },3000);      
      return () => {
        clearTimeout(timerToast);
        clearTimeout(timerActive);
      }
    }
  },[isToast, setIsToast])

  return (
    <>
      {
        isToast && (
          <div className={isActive ? `${styles.toast} ${styles.active}` : styles.toast}>
            <p className={styles.text}><Check/>이메일이 복사되었습니다!</p>
          </div>
        )
      }
    </>
  );
};

export default Toast;