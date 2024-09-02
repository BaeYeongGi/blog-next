import Image from 'next/image';
import React from 'react';
import Profile from '@/public/images/about/profile.png';
import styles from '@/src/styles/About.module.scss';
import Buttons from '@/src/components/ui/Buttons';
import Popup from '@/src/components/ui/Popup';
import Toast from '@/src/components/ui/Toast';
import Link from 'next/link';
import { ConnectLink } from '@/public/images/svg/ConnectLink';

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
        <h1><Image src={Profile} alt="배영기" width="180" height="202" className={styles.profile}/></h1>
      </div>
      <div className={styles.codebox_container}>
        <div className={styles.codebox}>
          <span className={styles.const}>const</span> <span className={styles.variables}>profile</span> <span className={styles.eqaul}>=</span> <span className={styles.bracelet}>{`{`}</span>{
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
    <h2 className={styles.title}>About</h2>
    <p className={styles.text}>사용자가 사용하기 좋은 페이지를 만드는 프론트엔드 개발자 입니다. 
    사용자에게 좋은 경험을 전달하는 일에 큰 보람을 느끼고 있습니다. 꼼꼼함과 디테일로 사용성에 핵심을 둔 화면을 완성하겠습니다.</p>
    <hr className={styles.division}/>
    <h2 className={styles.title}>Skills</h2>
    <ul className={styles.badge_list}>
      <li>Javascript</li>
      <li>Typescript</li>
      <li>React</li>
      <li>Next.js</li>
      <li>Gulp</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>CSS in JS</li>
      <li>SCSS</li>
    </ul>
    <hr className={styles.division}/>
    <h2 className={styles.title}>Work Experience</h2>
    <div className={styles.box}>
      <div className={styles.box_top}>
        <Link href="https://skcomms.co.kr/" target="_blank">
          <h3 className={styles.sub_title}>SK 커뮤니케이션즈</h3>
          <ConnectLink/>
        </Link>    
        <div className={styles.date}>2021.03. - 재직중</div>
      </div>

      <p className={styles.summary}>포털 사이트 Nate, 네이트 뉴스와 판, 네이트온 메신저 서비스 제공 기업
      </p>

      <ul className={styles.badge_list}>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Next.js</li>
        <li>Gulp</li>
        <li>HTML5</li>
        <li>SCSS</li>
        <li>CSS in JS</li>
        <li>Git</li>
        <li>GitLab</li>
      </ul>
      <h4 className={styles.service}>네이트 뉴스, 네이트 TV 운영 대응</h4>
      <ul className={styles.service_list}>
        <li>유지보수 및 CS 이슈 대응</li>
        <li>테마(다크&라이트) 적용</li>
        <li>검색엔진 최적화(SEO) 적용</li>
        <li>접근성(A11y) 개선</li>
      </ul>
      <h4 className={styles.service}>네이트 뉴스 특집</h4>
      <ul className={styles.service_list}>
        <li>스포츠 뉴스 파리 올림픽(2024.07)</li>
        <li>뉴스 국회의원 선거(2024.03)</li>
        <li>스포츠 뉴스 항저우 아시안 게임(2023.08)</li>
        <li>스포츠 뉴스 카타르 월드컵(2022.10)</li>
        <li>뉴스 대통령 선거(2022.03)</li>
        <li>스포츠 뉴스 베이징 동계 올림픽(2022.02)</li>
      </ul>
      <h4 className={styles.service}>레거시 개발 환경 개선</h4>
      <ul className={styles.service_list}>
        <li>뉴스 특집 gulp 리팩토링</li>
        <li>CSS3 → SCSS 전환</li>
      </ul>
    </div>

    <div className={styles.box}>
      <div className={styles.box_top}>
        <Link href="https://www.idhospital.com/" target="_blank">
          <h3 className={styles.sub_title}>아이디 병원</h3>
          <ConnectLink/>
        </Link>  
        <div className={styles.date}>2019.06. - 2020.04</div>
      </div>
      <p className={styles.summary}>성형외과 및 의료 서비스 제공업</p>
      <ul className={styles.badge_list}>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>
      <h4 className={styles.service}>아이디 병원 페이지 운영 대응</h4>
      <ul className={styles.service_list}>
        <li>신규 상품 페이지 제작</li>
        <li>유지보수 및 CS 이슈 대응</li>
      </ul>      
    </div>
    <div className={styles.box}>
      <div className={styles.box_top}>

        <Link href="https://gaons.kr/" target="_blank">
          <h3 className={styles.sub_title}>가온스</h3>
          <ConnectLink/>
        </Link>    
        <div className={styles.date}>2018.04. - 2019.05</div>
      </div>
      <p className={styles.summary}>웹에이전시</p>
      <ul className={styles.badge_list}>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>
      <h4 className={styles.service}>기업(고객사) 페이지 운영 대응</h4>
      <ul className={styles.service_list}>
        <li>기업 홈페이지 제작</li>
        <li>유지보수 및 CS 이슈 대응</li>
      </ul>      
    </div>

    <hr className={styles.division}/>

    <h2 className={styles.title}>Education</h2>
    <div className={styles.box}>
      <div className={styles.box_top}>
        <dl className={styles.edu_text}>
          <dt>고려사이버대학교</dt>
          <dd>디자인공학</dd>
        </dl>
        <div className={styles.date}>2017.11 - 2022.08</div>
      </div>
    </div>

    <Popup/>
    <Toast/>
    </>
  );
};

export default Page;