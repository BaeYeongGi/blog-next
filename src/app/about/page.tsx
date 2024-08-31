import Image from 'next/image';
import React from 'react';
import Profile from '@/public/images/about/profile.png';
import styles from '@/src/styles/About.module.scss';
import Buttons from '@/src/components/ui/Buttons';
import Popup from '@/src/components/ui/Popup';

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
    <>
    <div className={styles.about_wrap}>


      <div className={styles.img_wrap}>
        <Image src={Profile} alt="배영기의 프로필 사진" width="180" height="202" className={styles.profile}/>
      </div>
      <div className={styles.codebox_container}>
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
      <div className={styles.button_wrap}>
        <Buttons type="about"/>
      </div>
    </div>
    <dl className={styles.about}>
      <dt>About</dt>
      <dd>사용자가 사용하기 좋은 페이지를 만드는 프론트엔드 개발자 입니다. 
      사용자에게 좋은 경험을 전달하는 일에 큰 보람을 느끼고 있습니다. 꼼꼼함과 디테일로 사용성에 핵심을 둔 화면을 완성하겠습니다.</dd>
    </dl>
    <Popup/>
    </>
  );
};

export default Page;