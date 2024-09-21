'use client';

import { useTheme } from "next-themes";
import styles from '@/src/styles/TitleNavigation.module.scss';
import { useHeadingObserver } from '@/src/hooks/useHeadingObserver';

interface TitleNavigationPropsType {
  data?: Array<{
    link: string
  }>
}

const TitleNavigation = ({ data }: TitleNavigationPropsType) => {
  const { theme } = useTheme();
  const activeIdList = useHeadingObserver('h2')

  return (
    <aside className={theme === 'dark' ? `${styles.dark} ${styles.navigation} `: styles.navigation}>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <a href={item.link} className={activeIdList?.includes(item.link) ? styles.active : ''}>
              {item.link.replace('#', '')}
            </a>
          </li>
        ))}        
      </ul>

    </aside>
  );
};

export default TitleNavigation;