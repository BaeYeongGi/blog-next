import type { MetadataRoute } from 'next';
import { getSitemapPostList } from "@/src/lib/post";
import { getSitemapAboutList } from '@/src/lib/about';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postSitemapList = await getSitemapPostList();
  const aboutSitemapList = await getSitemapAboutList();
  const baseUrl = 'https://blog-next-sigma-ten.vercel.app';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url:`${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...postSitemapList,
    ...aboutSitemapList,
  ]
}
