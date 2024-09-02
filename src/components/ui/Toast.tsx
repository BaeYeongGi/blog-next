'use client';

import styles from '@/src/styles/Toast.module.scss';
import { useTheme } from "next-themes"
import { Check } from '@/public/images/svg/Check';
import useStore from '@/src/store/store';
import { useEffect, useState } from 'react';

const Toast = () => {
  const { isToast, setIsToast } = useStore();
  const [ isActive, setIsActive ] = useState(false); 
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if(isToast.state){
      setIsActive(true);
      const timerToast = setTimeout(() => {
        setIsToast({
          state:false
        });
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

  const setClass = () => {
    if(theme === 'dark' && isActive){
      return `${styles.toast} ${styles.active} ${styles.dark}`
    }
    if(theme === 'light' && isActive){
      return `${styles.toast} ${styles.active}`;
    }
    if(theme === 'dark'){
      return `${styles.toast} ${styles.dark}`;
    }
    if(!isActive){
      return styles.toast
    }
    return;
  }

  return (
    <>
      {
        isToast && (
          <div className={setClass()}>
            <p className={styles.text}><Check/>{isToast.value}</p>
          </div>
        )
      }
    </>
  );
};

export default Toast;