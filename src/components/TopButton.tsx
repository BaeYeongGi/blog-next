'use client';
import { Up } from "@/public/images/svg";
import styles from "@/src/styles/TopButton.module.scss";
import { useEffect, useState } from 'react';

const TopButton = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fixedScrollButtons = () => {
      if(window.scrollY >= 150){
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', fixedScrollButtons);
    return () => {
      window.removeEventListener('scroll', fixedScrollButtons);
    }
  },[visible])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
    })
  }

  return (
    <button className={visible ? `${styles.button} ${styles.fixed}` : styles.button} onClick={scrollToTop}>
      <Up/>
    </button>
  );
};

export default TopButton;