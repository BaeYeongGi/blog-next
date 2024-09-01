'use client';
import styles from '@/src/styles/Buttons.module.scss';
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';
import { Email } from '@/public/images/svg/Email';
import { GitHub } from '@/public/images/svg/GitHub';
import { Language } from '@/public/images/svg/Language';
import { Share } from '@/public/images/svg/Share';
import Link from "next/link";
import { useMemo } from 'react';
import useStore from '@/src/store/store';



interface ButtonDataType {
  type: string
}

const Buttons = ({type}: ButtonDataType) => {
  const { theme } = useTheme();
  const path = usePathname();
  const isAboutPage = useMemo(() => path.includes('/about'),[path]);
  const themeClassName = useMemo(() => (
    theme === 'dark' ? `${styles.buttons_wrap} ${styles.dark}` : styles.buttons_wrap),[theme]);
  const { setIsPop } = useStore();

  const headerButtons = useMemo(() => (
    <>
      {isAboutPage && (
        <button className={styles.button}><Language /></button>
      )}
      <Link href="https://github.com/BaeYeongGi" className={styles.button} target="_blank" aria-label="Github">
        <GitHub/>
      </Link>
    </>
  ),[isAboutPage])

  const aboutButtons = useMemo(() => (
    <>
      <button className={styles.button_dark} aria-label="Email" onClick={() => setIsPop(true)}>
        <Email/>
      </button>
      <button className={styles.button_dark} aria-label="공유하기">
        <Share/>
      </button>
    </>  
  ),[])

  return (
    <div className={themeClassName}>  
      {type === "header" && headerButtons}
      {type === "about" && aboutButtons}
    </div>
  );
};

export default Buttons;