'use client';

import Link from "next/link";
import styles from "@/src/styles/Header.module.scss";
import ThemeButton from "@/src/components/ThemeButton";
import Buttons from '@/src/components/Buttons';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes"

const Header = () => {
  const path = usePathname();
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? `${styles.header_container} ${styles.dark}` : styles.header_container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/blog/list" className={path.includes("/blog") ? styles.active : ""}>Blog</Link>
          <Link href="/about" className={path.includes("/about") ? styles.active : ""}>About</Link>
        </nav>
        <div className={styles.buttons_wrap}>
          <Buttons type="header"/>
          <ThemeButton/>
        </div>
      </header>
    </div>
  );
};

export default Header;