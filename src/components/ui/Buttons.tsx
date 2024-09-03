'use client';
import styles from '@/src/styles/Buttons.module.scss';
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';
import { Email } from '@/public/images/svg/Email';
import { GitHub } from '@/public/images/svg/GitHub';
import { Language } from '@/public/images/svg/Language';
import { Share } from '@/public/images/svg/Share';
import Link from "next/link";
import { useMemo, useCallback } from 'react';
import useStore from '@/src/store/store';
import { isAndroidWebView } from '@/src/lib/navigator';
import { Connect } from '@/public/images/svg/Connect';

interface ButtonDataType {
  type: string
}

const Buttons = ({type}: ButtonDataType) => {
  const { theme } = useTheme();
  const path = usePathname();
  const isAboutPage = useMemo(() => path.includes('/about'),[path]);
  const themeClassName = useMemo(() => (
    theme === 'dark' ? `${styles.buttons_wrap} ${styles.dark}` : styles.buttons_wrap),[theme]);
  const { setIsPop, setIsToast } = useStore();

  const shareEvent = useCallback(async () => {
    if(isAndroidWebView()){
      await navigator.clipboard.writeText(path);
      setIsToast({
        state:true,
        value:'페이지 URL이 복사되었습니다!'
      });
    } else if(navigator.share) {
      await navigator.share({
        title: document.title,
        url: path
      })
    }
  },[path, setIsToast])


  
  const headerButtons = useMemo(() => (
    <>
      {isAboutPage && (
        <button title="Language" onClick={() => setIsPop({
          state:true,
          value:'language'
        })}className={styles.button}><Language /></button>
      )}
      <Link href="https://github.com/BaeYeongGi" className={styles.button} target="_blank" aria-label="Github" title="GitHub">
        <GitHub/>
      </Link>
    </>
  ),[isAboutPage, setIsPop])

  const aboutButtons = useMemo(() => (
    <>
      <button className={styles.button_dark} title="Email" aria-label="Email" onClick={() => setIsPop({
        state: true,
        value:'email'
      })}>
        <Email/>
      </button>
      <button className={styles.button_dark} title="공유하기" aria-label="공유하기" onClick={shareEvent}>
        {isAndroidWebView() ? <Connect/> : <Share/>}
      </button>
    </>  
  ),[setIsPop, shareEvent])

  return (
    <div className={themeClassName}>  
      {type === "header" && headerButtons}
      {type === "about" && aboutButtons}
    </div>
  );
};

export default Buttons;