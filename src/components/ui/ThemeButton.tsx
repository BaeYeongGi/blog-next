'use client';
import { useTheme } from "next-themes"
import { Dark } from "@/public/images/svg/Dark";
import { Light } from "@/public/images/svg/Light";
import styles from "@/src/styles/ThemeButton.module.scss";
import { useEffect } from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    // system && 기기 theme setting
    const deviceDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const deviceLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if(theme === 'system' && deviceDarkMode){
      setTheme('dark');
    }
    if(theme === 'system' && deviceLightMode){
      setTheme('light');
    }
  },[theme, setTheme])

  useEffect(() => {
    const checkThemeScheme = (e: MediaQueryListEvent ) => {
      if(e.matches){
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkThemeScheme);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkThemeScheme);      
    }
  },[setTheme])

  return (
    <button className={theme === 'dark' ? `${styles.theme_button} ${styles.dark}` : styles.theme_button} onClick={toggleTheme}>
      <Light />
      <Dark/>
    </button>
  );
};

export default ThemeButton;