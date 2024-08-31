'use client';
import styles from '@/src/styles/Buttons.module.scss';
import { useTheme } from "next-themes"
import { usePathname } from 'next/navigation';
import { Email, GitHub, Language, Share  } from "@/public/images/svg";
import Link from "next/link";
import { useMemo } from 'react';

interface ButtonDataType {
  type: string,
}

const Buttons = ({type}: ButtonDataType) => {
  const { theme } = useTheme();
  const path = usePathname();

  const isAboutPage = useMemo(() => path.includes('/about'),[path]);
  const themeClassName = useMemo(() => (
    theme === 'dark' ? `${styles.buttons_wrap} ${styles.dark}` : styles.buttons_wrap),[theme]);

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
      <button className={styles.button_dark} aria-label="Email">
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