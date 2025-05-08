'use client';

import Link from "next/link";
import styles from "@/src/styles/Header.module.scss";
import ThemeButton from "@/src/components/ui/ThemeButton";
import Buttons from '@/src/components/ui/Buttons';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes"
import { useRef, useEffect, useState } from "react";

const Header = () => {
  const path = usePathname();
  const { theme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const [fixed, setFixed] = useState(false);
  const [height, setHeight] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const calculateScrollPercentage = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollValue = (scrollTop / documentHeight) * 100;
    setScrollPercent(Math.floor(scrollValue >= 100 ? 100 : scrollValue));

  }

  useEffect(() => {
    if(headerRef.current){
      setHeight(headerRef.current.offsetHeight)
    }
    const pageScroll = () => {
      if(window.scrollY >= height){
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
    window.addEventListener('scroll', pageScroll);
    return () => {
      window.removeEventListener('scroll', pageScroll)
    }
  },[height, fixed])

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPercentage);
    return () => {
      window.removeEventListener('scroll', calculateScrollPercentage)
    }
  }, [])

  const r = 18; //반지름
  const circumference = 2 * Math.PI * r; // 원의 둘레
  const offset = circumference - (scrollPercent / 100) * circumference; // value에 따른 stroke-dashoffset 계산

  const setHeaderClassName = () => {
    if(fixed){
      return `${styles.header} ${styles.fixed}`
    } else {
      return styles.header
    }
  }

  return (
    <div className={theme === 'dark' ? `${styles.header_container} ${styles.dark}` : styles.header_container}>
      <header className={setHeaderClassName()} ref={headerRef}>
        <nav className={styles.nav}>
          <Link href="/blog" className={path.includes("/blog") ? styles.active : ""}>Blog</Link>
          <Link href="/about" className={path.includes("/about") ? styles.active : ""}>About</Link>
          <Link href="/interview" className={path.includes("/interview") ? styles.active : ""}>Interview</Link>
        </nav>
        <div className={styles.buttons_wrap}>
          <Buttons type="header"/>
          <ThemeButton/>
        </div>
        <div className={styles.circle_progress_wrap}>
          <svg className={styles.circle_progress} viewBox="0 0 40 40">
            <circle className={styles.frame} fill="none" cx="20" cy="20" r={r} strokeWidth="2" />
            <circle className={styles.bar} fill="none" cx="20" cy="20" r={r} strokeWidth="2" strokeDasharray={circumference} strokeDashoffset={offset} />
          </svg>
          <p className={styles.value}>{4 < scrollPercent && scrollPercent}</p>
        </div>        
      </header>

    </div>
  );
};

export default Header;