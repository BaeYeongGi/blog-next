import type { MetadataRoute } from 'next';
import { getSitemapPostList } from "@/src/lib/post";

export default function sitemap(): MetadataRoute.Sitemap {
  const postSitemapList = getSitemapPostList();
  const baseUrl = 'https://blog-next-sigma-ten.vercel.app';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postSitemapList
  ]
}
