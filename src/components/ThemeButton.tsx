'use client';

import React from 'react';
import { Dark, Light } from "@/public/images/svg";
import { useState, useEffect } from 'react';
import styles from "@/src/styles/ThemeButton.module.scss";


const ThemeButton = () => {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if(savedTheme){
      setTheme(savedTheme);
    }
  },[])

  return (
    <button  className={`${styles.theme_button} ${styles[theme]}`} onClick={toggleTheme}>
      <Light />
      <Dark/>
    </button>
  );
};

export default ThemeButton;