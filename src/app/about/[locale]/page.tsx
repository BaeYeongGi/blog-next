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
    <Title classValue={styles.title} value='About TEST COMMIT 2'/>
    <p className={styles.text}>{data.about}</p>
    <Division classValue={styles.division}/>
    <Title classValue={styles.title} value='Skills TEST COMMIT 2'/>
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
    <Title classValue={styles.title} value='Work Experience TEST COMMIT 2'/>
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
    <Division classValue={styles.division}/>
    
    <Title classValue={styles.title} value='Self Interview'/>
    <p className={styles.text}>{data.selfInterview.summary}</p>
    {data.selfInterview.interview.map((_item, idx) => (
      <div key={_item.id} className={styles.box}>
        <h3 className={styles.subtitle}>{_item.question}</h3>
        <Division classValue={styles.division}/>
        <ul className={styles.list}>
          {_item.answer.list?.map((__item: {
            id: number;
            title?: string;
            contents: string;
          }) => (
          <li key={__item.id}>
            {
              __item.title && (
                <span className={styles.company}>{__item.title}</span>
              )
            }
            {__item.contents}
          </li>
          ))}
        </ul>
        <p className={styles.text}>
          {_item.answer.text}
        </p>
      </div>
    ))}

    <Popup/>
    <Toast/>
    </>
  );
};

export default Page;