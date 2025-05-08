import React from 'react';
import { Metadata } from 'next';
import PostListPage from '@/src/components/post_list/PostListPage';
import { baseDomain, blogName, blogThumbnailURL } from '@/src/config/const';
import { getCategoryList, getCategoryPublicName } from '@/src/lib/post';

type Props = {
  params: { category: string };
};

// 허용된 경로외 접근시 404
export const dynamicParams = false;

export const generateStaticParams = () => {
  const categoryList = getCategoryList();

  const paramList = categoryList.map((category) => ({ category}));
  return paramList;
}

export async function generateMetadata({ params: {category} }:Props): Promise<Metadata> { 
  const cg = getCategoryPublicName(category);
  const title = `${cg} | ${blogName}`;
  const url = `${baseDomain}/${category}`;

  return {
    title,
    openGraph:{
      title,
      url,
      images: [blogThumbnailURL],
    },
    twitter: {
      title,
      images: [blogThumbnailURL]
    }
  }
}

const CategoryPage = async ({ params }: Props) => {
  return (
    <PostListPage category={params.category} />
  );
};

export default CategoryPage;