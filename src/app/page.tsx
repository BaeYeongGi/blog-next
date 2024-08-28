import Link from 'next/link';
import { generateStaticParams } from '@/src/lib/post';

export default async function Home() {

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
    </div>
  );
}
