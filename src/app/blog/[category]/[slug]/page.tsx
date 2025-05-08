import { MDXRemote } from "next-mdx-remote/rsc";
import styles from '@/src/styles/View.module.scss';
import { Calendar } from '@/public/images/svg/Calendar';
import rehypePrettyCode from 'rehype-pretty-code';
import ExternalLink from '@/src/components/mdx/Link';
import rehypeSlug from 'rehype-slug';
import TitleNavigation from '@/src/components/mdx/TitleNavigation';
import remarkGfm from 'remark-gfm';
import { getPostDetail } from '@/src/lib/post';

type Props = {
  params: { category: string; slug: string };
};

// 허용된 경로외 접근시 404
export const dynamicParams = false;

const MdxComponents = {
  a: ExternalLink as any
}
const PostDetail = async ({ params: { category, slug }}: Props) => {
  const {detail, headingList} = await getPostDetail(category, slug)

  return (
    <>
      <h1 className={styles.title}>{detail.title}</h1>
      <div className={styles.date}><Calendar/>{detail.date instanceof Date ? detail.date.toLocaleDateString() : detail.date}</div>
      <p className={styles.summary}>{detail.summary}</p>
      <TitleNavigation data={headingList}/>
      <div className={styles.mdx_container}>
        <MDXRemote
          source={detail.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
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

export default PostDetail;