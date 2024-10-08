import path from 'path';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'src', 'posts');

// 모든 MDX 파일 조회
export function getPostList() {
  const filenames = fs.readdirSync(POSTS_DIR);
  return filenames.filter(filename => filename.endsWith('.mdx')).map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      data
    }
  })
};

export async function getPostDetail(slug:string){
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContents = await fsPromises.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const haedingList = getHeadingId(content);
  return {
    data,
    content,
    haedingList
  }
}

export function getSitemapPostList(){
  const postList = getPostList();
  const baseUrl = 'https://blog-next-sigma-ten.vercel.app';
  const sitemapPostList = postList.map(({ slug }) => ({
    lastModified: new Date(),
    url: `${baseUrl}/blog/view/${slug}`
  }));
  return sitemapPostList;
}

export function getHeadingId(content: string){
  const regex = /^(##|###) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((item) => ({
      link: item.replace('##', '#').replace(' ', '').replaceAll(' ', '-')
    }))
  )
}