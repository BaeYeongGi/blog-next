'use client';

import Link from "next/link";
import styles from "@/src/styles/Header.module.scss";
import { GitHub } from "@/public/images/svg";
import ThemeButton from "@/src/components/ThemeButton";
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
        <div className={styles.button_wrap}>
          <Link href="https://github.com/BaeYeongGi" className={styles.github_button} target="_blank" aria-label="Github">
            <GitHub/>
          </Link>
          <ThemeButton/>
        </div>
      </header>
    </div>
  );
};

export default Header;