'use client';

import { useRouter } from 'next/navigation';
import { CategoryDetail } from '@/src/config/types';
import { CategoryButton } from './CategoryButton';
import styles from "@/src/styles/Category.module.scss";
import { useTheme } from "next-themes";

interface CategoryListProps {
  categoryList: CategoryDetail[];
  allPostCount: number;
  currentCategory?: string;
}


const CategoryList = ({
  categoryList,
  allPostCount,
  currentCategory = 'all',
}: CategoryListProps) => {

  const router = useRouter();
  const { theme } = useTheme();

  return (
    <ul className={theme === 'dark' ? `${styles.buttons_wrap} ${styles.dark}` : styles.buttons_wrap}>
      <CategoryButton
        href='/blog'
        isCurrent={currentCategory === 'all'}
        displayName='All'
        count={allPostCount}
      />
      {categoryList.map((category) => (
        <CategoryButton
        key={category.dirName}
        href={`/blog/${category.dirName}`}
        isCurrent={category.dirName === currentCategory}
        displayName={category.publicName}
        count={category.count}
        />
      ))
      }             
    </ul>
  );
};

export default CategoryList;