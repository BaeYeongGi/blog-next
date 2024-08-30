import Image from 'next/image';
import React from 'react';
import Profile from '@/public/images/about/profile.png';
import styles from '@/src/styles/About.module.scss';

const Page = () => {
  const profile = [
    {
      id: 0,
      key: 'job',
      value: '프론트엔드 개발자' 
    },
    {
      id: 1,
      key: 'name',
      value: '배영기',
    },
    {
      id: 2,
      key: 'location',
      value: '서울',
    },
    {
      id: 3,
      key: 'birth',
      value: '1995',
    },
  ]
  return (
    <div className={styles.about_wrap}>
    <div className={styles.img_wrap}>
      <Image src={Profile} alt="배영기의 프로필 사진" width="180" height="202"/>
    </div>
    <div className={styles.codebox}>
      <span className={styles.const}>const</span> <span className={styles.variables}>profile</span> = <span className={styles.bracelet}>{`{`}</span>{
        profile.map((item => {
          return (
            <div key={item.id} className={styles.code}>
              <p className={styles.key}>{item.key}: </p>
              <p className={styles.value}>{`'${item.value}'`} <span className={styles.comma}>,</span></p>
            </div>
          )
        }))
      }
      <span className={styles.bracelet}>{`}`}</span>
    </div>


    </div>
  );
};

export default Page;