'use client';
import { useTheme } from "next-themes"
import { Dark, Light } from "@/public/images/svg";
import styles from "@/src/styles/ThemeButton.module.scss";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <button className={theme === 'dark' ? `${styles.theme_button} ${styles.dark}` : styles.theme_button} onClick={toggleTheme}>
      <Light />
      <Dark/>
    </button>
  );
};

export default ThemeButton;