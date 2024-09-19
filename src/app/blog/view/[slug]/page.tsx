import { promises as fsPromises } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import Link from 'next/link';
import styles from '@/src/styles/View.module.scss';
import { Calendar } from '@/public/images/svg/Calendar';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import ExternalLink from '@/src/components/mdx/Link';


interface BlogPostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    date: string;
    summary: string;
  };
}
// MDX 파일 경로
const POSTS_DIR = path.join(process.cwd(), 'src', 'posts', 'view');

const MdxComonents = {
  a: ExternalLink as any
}

export async function generateMetadata({params}: {params: {slug: string}}){
  const { slug } = params as {slug:string};
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContents = await fsPromises.readFile(filePath, "utf8");
  const { data } = matter(fileContents);
  return {
    title: data.title
  }
}

export default async function View({ params }: {params: {slug: string} }){
  const { slug } = params;
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContents = await fsPromises.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  // const mdxSource = await serialize(content);

  return (
    <>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.date}><Calendar/>{data.date}</div>
      <p className={styles.summary}>{data.summary}</p>
      <div className={styles.mdx_container}>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [
                // GitHub Flavored 마크다운 지원 추가
                remarkGfm
              ],
              rehypePlugins: [
                [
                  // code 블럭을 꾸며줌
                  rehypePrettyCode,
                  {
                    theme: 'slack-dark',
                  }
                ]
              ]
            }
          }}
          components={MdxComonents}
        />
      </div>

      <Link href="/blog/list">목록으로</Link><br/>
      <Link href="/">메인으로</Link>
    </>
  )
}