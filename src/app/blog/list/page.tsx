import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { generateStaticParams } from '@/lib/post';

// 블로그 목록 페이지 컴포넌트
export default async function BlogList(){

  const generateList = await generateStaticParams();

  return (
    <div>
      <h1>블로그 목록</h1>
      {
        generateList.map((item) => {
          return (
            <Link href={`/blog/view/${item.slug}`} key={item.slug}>
              {item.data.title}
            </Link>
          )
        })
      }
      <br/>
        <Link href="/">메인으로</Link>
    </div>
  );
};