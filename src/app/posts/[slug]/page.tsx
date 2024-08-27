import { GetStaticPropsContext } from "next";
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";

interface BlogPostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    date: string;
    summary: string;
  };
}
// MDX 파일 경로
const POSTS_DIR = path.join(process.cwd(), 'src', 'app', 'posts');

// `getStaticPaths` 함수: 모든 블로그 포스트의 slug 경로를 생성
export async function generateStaticParams() {
  const filenames = fs.readdirSync(POSTS_DIR);
  console.log('filenames', filenames)
  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return {
      slug,
    };
  });
};

// `getStaticProps` 함수: 특정 포스트 데이터를 가져오는 함수
export async function generateMetadata({params}: GetStaticPropsContext){
  const { slug } = params as {slug:string};
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContents = await fsPromises.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title
  }
}

const BlogPost = async ({ params }: {params: {slug: string} }) => {
  const { slug } = params;
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContents = await fsPromises.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  // const mdxSource = await serialize(content);

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <p>{data.summary}</p>
      <p>{data.ppa}</p>
      <MDXRemote source={content} />
    </>
  )
}

export default BlogPost;