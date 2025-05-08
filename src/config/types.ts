export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  content: string;
  categoryPublicName: string;
  summary: string;
}

export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
}
