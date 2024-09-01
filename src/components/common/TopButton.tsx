'use client';
import { Up } from "@/public/images/svg/Up";
import styles from "@/src/styles/TopButton.module.scss";
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes"

const TopButton = () => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fixedScrollButtons = () => {
      if(window.scrollY >= 150){
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', fixedScrollButtons);
    return () => {
      window.removeEventListener('scroll', fixedScrollButtons);
    }
  },[visible])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    })
  }

  const setClass = () => {
    if(theme === 'dark' && visible){
      return `${styles.dark} ${styles.fixed}`
    }
    if(theme === 'dark'){
      return styles.dark;
    }
    if(visible){
      return styles.fixed;
    }
    return;
  }


  return (
    <button className={`${styles.button} ${setClass()}`} onClick={scrollToTop}>
      <Up/>
    </button>
  );
};

export default TopButton;