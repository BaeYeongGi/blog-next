'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from '@/src/styles/Error.module.scss';
import { useTheme } from "next-themes"
import { Home } from '@/public/images/svg/Home';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {

  const { theme } = useTheme();

  useEffect(() => {
    // 에러 로깅 서비스 에러 보고
    console.error(error);
  }, [error]);

  return (
    <div className={theme === 'dark' ? `${styles.error} ${styles.dark}` : styles.error}>
      <h1 className={styles.error_title}>500</h1>
      <h2 className={styles.error_subtitle}>서버 오류가 발생했습니다</h2>
      <p className={styles.error_description}>
        죄송합니다. 서버에서 예기치 않은 오류가 발생했습니다.
      </p>
      <div>
        <Link 
          href="/"
          className={styles.error_button}
        >
          <Home />
        </Link>
      </div>
    </div>
  );
} 