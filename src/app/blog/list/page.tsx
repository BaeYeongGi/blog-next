import Link from 'next/link';
import { getPostList } from '@/src/lib/post';
import styles from '@/src/styles/List.module.scss';
import Image from 'next/image';
import { Calendar } from '@/public/images/svg/Calendar';

export default async function List(){
  const generateList = await getPostList();
  // 최신 날짜 순으로 포스트 정렬

  const setDateGenerateList = generateList.sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));

  return (
    <div>
      <ul className={styles.list_wrap}>
      {
        setDateGenerateList.map((item) => {
          return (
            <li key={item.slug} >
              <Link href={`/blog/view/${item.slug}`} key={item.slug}>
                <div className={styles.img_wrap}>
                  <Image src={item.data.thumbnail} alt=""  fill={true}/>
                </div>
                <div className={styles.date}><Calendar/> {item.data.date}</div>
                <h2 className={styles.title}>{item.data.title}</h2>

              </Link>
            </li>  
          )
        })
      }
        </ul>
        <div className={styles.dimmed}>
          <p>페이지 준비중 입니다 🦖</p>
          <Link href="/about/ko">ABOUT ➡️</Link>
        </div>
    </div>
  )
}