'use client';

import React from 'react';
import styles from '@/src/styles/Footer.module.scss';
import { useTheme } from "next-themes"

const Footer = () => {
  const { theme } = useTheme();
  
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={theme === 'dark' ? `${styles.footer} ${styles.dark}`: styles.footer}>
      © {year}. <span>Yeonggi Bae</span> all rights reserved.
    </footer>
  );
};

export default Footer;