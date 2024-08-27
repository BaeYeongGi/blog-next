import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'src', 'posts', 'view');

// 모든 MDX 파일 조회
export async function generateStaticParams() {
  const filenames = fs.readdirSync(POSTS_DIR);
  return filenames.filter(filename => filename.endsWith('.mdx')).map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const fileContents =  fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      data
    }
  })
};