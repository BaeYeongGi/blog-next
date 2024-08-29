'use client';
import styles from "@/src/styles/Section.module.scss";
import { useTheme } from "next-themes"
export default function Section({children}:{children:React.ReactNode}){
  const { theme } = useTheme();
  return (
    <section className={theme === 'dark' ? `${styles.section} ${styles.dark}`: styles.section}>
      {children}
    </section>
  );
};
