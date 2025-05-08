import { getAllPostCount, getCategoryDetailList, getSortedPostList } from '@/src/lib/post';
import React from 'react';
import CategoryList from './CategoryList';
import styles from '@/src/styles/List.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from '@/public/images/svg/Calendar';

interface PostListProps {
  category?: string;
}


const PostListPage = async ({ category }: PostListProps) => {
  const postList = await getSortedPostList(category);
  const categoryList = await getCategoryDetailList()
  const allPostCount = await getAllPostCount();

  return (
    <>
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
      <ul className={styles.list_wrap}>
        {postList.map((post) => (
          <li key={post.slug} >
            <Link href={post.url}>
              <div className={styles.img_wrap}>
                <Image
                  src={post.thumbnail}
                  alt=""
                  fill={true}
                />
              </div>
              <div className={styles.date}>
                <Calendar/>
                {post.date instanceof Date ? post.date.toLocaleDateString() : post.date}
              </div>
              <h2 className={styles.title}>{post.title}</h2>
            </Link>
          </li>  
        ))}
      </ul>
    </>
  );
};

export default PostListPage;