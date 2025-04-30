'use client';
import Link from 'next/link';
import styles from '@/src/styles/Error.module.scss';
import { Home } from '@/public/images/svg/Home';
import { useTheme } from "next-themes"

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? `${styles.error} ${styles.dark}` : styles.error}>
      <h1 className={styles.error_title}>404</h1>
      <h2 className={styles.error_subtitle}>페이지를 찾을 수 없습니다</h2>
      <p className={styles.error_description}>
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Link 
        href="/"
        className={styles.error_button}
      >
        <Home />
      </Link>
    </div>
  );
} 