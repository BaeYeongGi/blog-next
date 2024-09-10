import { getSitemapPostList } from "@/src/lib/post";

export default async function sitemap(){
  const postSitemapList = await getSitemapPostList();
  const baseUrl = 'https://blog-next-sigma-ten.vercel.app';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postSitemapList
  ]
}
