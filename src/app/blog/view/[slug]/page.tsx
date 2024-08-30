import { promises as fsPromises } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import Link from "next/link";

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
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <p>{data.summary}</p>
      <p>{data.ppa}</p>
      <MDXRemote source={content} />
      <Link href="/blog/list">목록으로</Link><br/>
      <Link href="/">메인으로</Link>
    </>
  )
}