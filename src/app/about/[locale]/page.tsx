import Image from 'next/image';
import React from 'react';
import Profile from '@/public/images/profile_icon.png';
import styles from '@/src/styles/About.module.scss';
import Buttons from '@/src/components/ui/Buttons';
import Popup from '@/src/components/ui/Popup';
import Toast from '@/src/components/ui/Toast';
import Division from '@/src/components/ui/Division';
import Title from '@/src/components/ui/Title';
import Link from 'next/link';
import { ConnectLink } from '@/public/images/svg/ConnectLink';
import RESUME_KO from '@/src/data/resume-ko.json';
import RESUME_EN from '@/src/data/resume-en.json';
import { Metadata } from 'next';

const DATAS = {
  ko: {
    data: RESUME_KO
  },
  en: {
    data: RESUME_EN
  }
} as const;

type Locale = keyof typeof DATAS;

interface PageProps {
  params: {
    locale: Locale;
  }
}

export function generateStaticParams() {
  return (Object.keys(DATAS) as Locale[]).map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const data = DATAS[params.locale].data.RESUME;

  return {
    title: `${data.profile[1].value} | ${data.summary}`,
    description: data.about,
    openGraph: {
      images: [`/images/og/og_image_${params.locale}.png`]
    }
  };
}

const Page = ({ params }: PageProps) => {

  const data = DATAS[params.locale].data.RESUME;
  const skills = [
    {id: 0,skill: 'Javascript'},
    {id: 1,skill: 'Typescript'},
    {id: 2,skill: 'React'},
    {id: 3,skill: 'Next.js'},
    {id: 4,skill: 'Gulp'},
    {id: 5,skill: 'HTML5'},
    {id: 6,skill: 'Tailwind CSS'},
    {id: 7,skill: 'CSS3'},
    {id: 8,skill: 'CSS in JS'},
    {id: 9,skill: 'SCSS'},
  ]

  return (
    <>
    <div className={styles.about_wrap}>
      <div className={styles.img_wrap}>
        <h1><Image src={Profile} alt={data.profile[1].value} fill={true} className={styles.profile}/></h1>
      </div>
      <div className={styles.codebox_container}>
        <div className={styles.codebox}>
          <span className={styles.const}>const</span> <span className={styles.variables}>profile</span> <span className={styles.eqaul}>=</span> <span className={styles.bracelet}>{`{`}</span>{
            data.profile.map((item => {
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
    <Title classValue={styles.title} value='About'/>
    <p className={styles.text}>{data.about}</p>
    <Division classValue={styles.division}/>
    <Title classValue={styles.title} value='Skills'/>
    <ul className={styles.badge_list}>
      {
        skills.map((item) => {
          return (
            <li key={item.id}>{item.skill}</li>
          )
        })
      }
    </ul>
    <Division classValue={styles.division}/>
    <Title classValue={styles.title} value='Work Experience'/>
    {
      data.workExperience.map((item) => {
        return (
          <div key={item.id} className={styles.box}>
            <div className={styles.box_top}>
              <Link href={item.link} target="_blank">
                <h3 className={styles.sub_title}>{item.company}</h3>
                <ConnectLink/>
              </Link>
              <div className={styles.date}>{item.period}</div>
            </div>
            <p className={styles.summary}>{item.summary}
            </p>
            <ul className={styles.badge_list}>
              {
                item.skills.map((_item) => {
                  return (
                    <li key={_item.id}>{_item.skill}</li>
                  )
                })
              }
            </ul>
            {
              item.points.map((_item, idx) => {
                return (
                  <div key={idx}>
                    <h4 className={styles.service}>{_item.title}</h4>
                    <ul className={styles.service_list}>
                      {
                        _item.list.map((__item) => {
                          return (
                            <li key={__item.id}>{__item.contents}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        )
      })
    }
    <Division classValue={styles.division}/>
    <Title classValue={styles.title} value='Education'/>
    <div className={styles.box}>
      <div className={styles.box_top}>
        <dl className={styles.edu_text}>
          <dt>{data.education.school}</dt>
          <dd>{data.education.department}</dd>
        </dl>
        <div className={styles.date}>{data.education.period}</div>
      </div>
    </div>
    {/* <Division classValue={styles.division}/>
    
    <Title classValue={styles.title} value='Self Interview'/>
    <p className={styles.text}></p>
    <div className={styles.box}>
      <h3 className={styles.subtitle}>Q. 이전 직장에서 작업은 어떻게 진행됐나요?</h3>
      <Division classValue={styles.division}/>
      <ul className={styles.list}>
        <li>1) 서비스 기획자가 정리한 기획서를 실무자에게 공유합니다.</li>
        <li>2) 프로젝트를 진행함에 있어 실무에 애로사항이 있는지 조율사항이 있는지 검토하고 작업 일정을 회의 혹은 서면으로 공유합니다.</li>
        <li>3) 진행하는 프로젝트는 Jira(ITS)를 통해 관리되며, 새로운 요구사항 혹은 변동사항은 해당 Jira를 통해 실무자에게 공유됩니다.</li>
        <li>4) Front-end 작업이 마무리되면, 기획서와 디자인 요구사항에 맞게 작업이 됐는지 검수가 진행됩니다.</li>
        <li>5) 검수 혹은 QA와 테스트를 통해 발생하는 서비스 이슈를 해결하고 프로젝트를 마무리합니다.</li>
      </ul>
      <p className={styles.text}>
      현재까지 이와 같은 작업흐름에 익숙했지만, 이후 기업에서 사용하는 업무 툴은 무엇인지, 작업 흐름과 서비스는 어떻게 운영되는가에 대한 정보를 빠르게 습득하고 적응할 수 있도록 노력하겠습니다.
      </p>
    </div>
    <div className={styles.box}>
      Q. 퇴직사유에 대해 알고 싶습니다.
      <Division classValue={styles.division}/>
      <ul className={styles.list}>
        <li>
          <span className={styles.company}>[ 가온스 ] 커리어 방향성 수립</span>
          1년가량 재직 중 제가 희망하는 직무와 무관한 기획 업무를 겸하게 되었습니다. 해당 상황에서 부족하다고 느꼈던 퍼블리싱과 개발 역량을 증진시키는데 목표가 있어, 퇴직을 결심하였습니다.          
        </li>
        <li>
          <span className={styles.company}>[ 아이디병원 ] 코로나로 인한 경영 악화</span>
          코로나로 인해 해외에서 국내 입국이 제한된 상황이었습니다. 기업의 전체 매출 중 해외 고객분들의 비중을 상당 부분 차지했었고, 이로 인한 경영 악화로 전사원 대상으로 근무 일수와 급여 일부 삭감을 감행하게 되었습니다. 저 스스로의 재정적인 부분도 안정적이지 못한 상황이라 판단되어 퇴직을 하게 되었습니다.          
        </li>
        <li>
          <span className={styles.company}>[ 네이트 커뮤니케이션즈 ] 희망퇴직</span>
          경영악화로 사내에서 운영하는 서비스 축소와 그에 따른 인력 감축으로 희망퇴직을 하게 되었습니다. 
        </li>
      </ul>
    </div>
    <div className={styles.box}>
    Q. 프론트앤드 개발만 하고 싶은가요??
      <Division classValue={styles.division}/>
        <p className={styles.text}>
        현재 프론트앤드 개발이 가장 익숙하지만, 필요에 따라 추가적으로 응용할 수 있는 기술 스택을 활용할 기회가 있다면 저에게도 좋은 경험이라 생각합니다. 저와 기업이 함께 성장할 수 있는 방향을 지향합니다. 한 가지 기술만 고집하고 싶은 생각은 없으며, 열려있는 생각으로 서비스 개발에 임하고자 합니다.
        </p>  
    </div> */}
    <Popup/>
    <Toast/>
    </>
  );
};

export default Page;