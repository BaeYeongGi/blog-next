
---
title: "2024 파리 올림픽 Gulp + SCSS"
date: "2024-08-29"
summary: "네이트 뉴스에서 진행하는 특집"
thumbnail: "/images/posts/2024_paris_olympic/thumbnail.png"
---

![](/images/posts/2024_paris_olympic/thumbnail.png)



Next.js 14.1 버전을 기준으로 작성되었습니다.

## h2 태그에 해당


### FE 개발자 h3 태그에 해당

일반 텍스트를 작성하는 공간

```shell
npm install next-mdx-remote
```

```tsx
import { MDXRemote } from 'next-mdx-remote/rsc';

const PostBody = ({ post }) => {
  return (
    <MDXRemote source={post.content}/>
  );
};
```