'use client';

import Link from "next/link";
import styles from "@/src/styles/Header.module.scss";
import { GitHub } from "@/public/images/svg";
import { useState, useEffect } from 'react';
import ThemeButton from "@/src/components/ThemeButton";

const Header = () => {

  return (
    <div className={styles.header_container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">Blog</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className={styles.button_wrap}>
          <Link href="/" className={styles.github_button} target="_blank" aria-label="Github">
            <GitHub/>
          </Link>
          <ThemeButton/>
        </div>
      </header>
    </div>
  );
};

export default Header;