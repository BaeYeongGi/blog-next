export function getSitemapAboutList(){
  const baseUrl = 'https://blog-next-sigma-ten.vercel.app';
  const sitemapAboutList = ['ko', 'en'].map((item) => ({
      lastModified: new Date(),
      url: `${baseUrl}/about/${item}`
  }))
  return sitemapAboutList;
}