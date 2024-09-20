import React from 'react';
import styles from '@/src/styles/View.module.scss';

interface TitleNavigationPropsType {
  data?: Array<{
    link: string
  }>
}

const TitleNavigation = ({ data }: TitleNavigationPropsType) => {
  return (
    <aside className={styles.navigation}>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              {item.link.replace('#', '')}
            </a>
          </li>
        ))}        
      </ul>

    </aside>
  );
};

export default TitleNavigation;