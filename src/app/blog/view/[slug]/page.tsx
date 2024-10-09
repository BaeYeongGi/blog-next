import { promises as fsPromises } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import styles from '@/src/styles/View.module.scss';
import { Calendar } from '@/public/images/svg/Calendar';
import rehypePrettyCode from 'rehype-pretty-code';
import ExternalLink from '@/src/components/mdx/Link';
import rehypeSlug from 'rehype-slug';
import { getHeadingId, getPostDetail } from '@/src/lib/post';
import TitleNavigation from '@/src/components/mdx/TitleNavigation';

interface BlogPostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    date: string;
    summary: string;
  };
}
// MDX 파일 경로
const POSTS_DIR = path.join(process.cwd(), 'src', 'posts');

const MdxComponents = {
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
  const { data, content, haedingList } = await getPostDetail(slug);

  return (
    <>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.date}><Calendar/>{data.date}</div>
      <p className={styles.summary}>{data.summary}</p>
      <TitleNavigation data={haedingList}/>
      <div className={styles.mdx_container}>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  // code 블럭을 꾸며줌
                  rehypePrettyCode,
                  {
                    theme: 'slack-dark',
                    keepBackground: true,
                  }
                ],
                // Heading 태그에 ID 부여
                rehypeSlug,
              ]
            }
          }}
          components={MdxComponents}
        />
      </div>
    </>
  )
}