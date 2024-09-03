'use client';

import { Close } from '@/public/images/svg/Close';
import { Copy } from '@/public/images/svg/Copy';
import { Check } from '@/public/images/svg/Check';
import styles from '@/src/styles/Popup.module.scss';
import { useTheme } from "next-themes";
import useStore from '@/src/store/store';
import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';

const Popup = () => {
  const { isPop, setIsPop, setIsToast } = useStore();
  const { theme } = useTheme();
  const [ clickTime, setClickTime ] = useState(false);
  const email = 'byg5913@gmail.com';

  useEffect(() => {
    if(isPop.state){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
    return () => {
      document.body.removeAttribute('style');
    }
  },[isPop.state])

  const closePop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.target === e.currentTarget && setIsPop({
      state: false
    });
  }
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setClickTime(true);
    setIsToast({
      state:true,
      value:'이메일이 복사되었습니다!'
    });
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
    isPop.state && (
      <div className={themeClassName} onClick={closePop}>
        <div className={styles.popup} role="dialog">
          <button className={styles.close}  onClick={() => setIsPop({
            state:false
          })} aria-label={'팝업 창 닫기'}>
            <Close/>
          </button>
          {
            isPop.value === 'email' && (
              <>
                <input className={styles.input} type="text" value={email} readOnly />
                <button className={styles.copy} onClick={copyEmail}>
                  {copyIcon}
                </button>
              </>
            )
          }
          {
            isPop.value === 'language' && (
              <div className={styles.links}>
                <Link href="#">한국어</Link>
                <Link href="#">English</Link>
              </div>
            )
          }
        </div>
      </div>
    )
  );
};

export default Popup;