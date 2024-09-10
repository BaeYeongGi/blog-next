import type { MetadataRoute } from 'next';
import { getSitemapPostList } from "@/src/lib/post";
import { getSitemapAboutList } from '@/src/lib/about';

export default function sitemap(): MetadataRoute.Sitemap {
  const postSitemapList = getSitemapPostList();
  const aboutSitemapList = getSitemapAboutList();
  const baseUrl = 'https://blog-next-sigma-ten.vercel.app';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url:`${baseUrl}/blog/list`,
      lastModified: new Date(),
    },
    ...postSitemapList,
    ...aboutSitemapList,
  ]
}
