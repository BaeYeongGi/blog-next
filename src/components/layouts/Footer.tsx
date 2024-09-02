'use client';

import React from 'react';
import styles from '@/src/styles/Footer.module.scss';
import { useTheme } from "next-themes"

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={theme === 'dark' ? `${styles.footer} ${styles.dark}`: styles.footer}>
      © 2024. <span>Yeonggi Bae</span> all rights reserved.
    </footer>
  );
};

export default Footer;