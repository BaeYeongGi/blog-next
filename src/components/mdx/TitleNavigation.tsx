'use client';

import { useState } from "react";
import { useTheme } from "next-themes";
import styles from '@/src/styles/TitleNavigation.module.scss';
import { useHeadingObserver } from '@/src/hooks/useHeadingObserver';
import DownArrow from '@/public/images/svg/DownArrow';

interface TitleNavigationPropsType {
  data?: Array<{
    link: string
  }>
}

const TitleNavigation = ({ data }: TitleNavigationPropsType) => {
  const { theme } = useTheme();
  const [ showTitles, setShowTitles ] = useState(false);
  const activeId = useHeadingObserver('h2')

  const toggleTitlesList = () => {
    setShowTitles(prev => !prev);
  }

  return (
    <div className={theme === 'dark' ? `${styles.dark} ${styles.navigation} `: styles.navigation}>
      <button className={`${styles.page_titles_button} ${showTitles ? styles.active : ''}`} onClick={toggleTitlesList}>페이지 목차 <DownArrow/></button>
      <ul className={showTitles ? styles.active : ''}>
        {data?.map((item, index) => (
          <li key={index}>
            <a href={item.link} className={activeId === item.link ? styles.active : ''}>
              {item.link.replace('#', '').replaceAll('-', ' ')}
            </a>
          </li>
        ))}        
      </ul>
    </div>
  );
};

export default TitleNavigation;