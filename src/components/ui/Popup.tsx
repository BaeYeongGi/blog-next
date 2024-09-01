'use client';

import { Close } from '@/public/images/svg/Close';
import { Copy } from '@/public/images/svg/Copy';
import { Check } from '@/public/images/svg/Check';
import styles from '@/src/styles/Popup.module.scss';
import { useTheme } from "next-themes";
import useStore from '@/src/store/store';
import { useState, useMemo, useEffect } from 'react';

const Popup = () => {
  const { isPop, setIsPop, setIsToast } = useStore();
  const { theme } = useTheme();
  const [ clickTime, setClickTime ] = useState(false);
  const email = 'byg5913@gmail.com';

  useEffect(() => {
    if(isPop){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
    return () => {
      document.body.removeAttribute('style');
    }
  },[isPop])

  const closePop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.target === e.currentTarget && setIsPop(false);
  }
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setClickTime(true);
    setIsToast(true);
    setTimeout(() => {
      setClickTime(false);
    },2000)
  }

  // className 메모이제이션
  const themeClassName = useMemo(() => {
    return theme === 'dark' ? `${styles.dimmed} ${styles.dark}` : styles.dimmed
  },[theme])
 
  // copyIcon 메모이제이션
  const copyIcon = useMemo(() => {
    return clickTime ? <Check/> : <Copy/>
  },[clickTime])

  return (
    isPop && (
      <div className={themeClassName} onClick={closePop}>
        <div className={styles.popup} role="dialog">
          <button className={styles.close}  onClick={() => setIsPop(false)} aria-label="이메일 팝업 창 닫기">
            <Close/>
          </button>
          <input className={styles.input} type="text" value={email} readOnly />
          <button className={styles.copy} onClick={copyEmail}>
            {copyIcon}
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;