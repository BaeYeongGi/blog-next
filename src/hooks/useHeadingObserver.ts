import { useEffect, useRef, useState } from 'react';

export const useHeadingObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>();
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [tempId, setTempId] = useState('');
  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const targetId = `#${entry.target.id}`;
        if (entry.isIntersecting) {
          setActiveIdList((prev) => [...prev, targetId]);
          setTempId('');
        } else {
          setActiveIdList((prev) => {
            if (prev.length === 1) setTempId(targetId);
            return prev.filter((elem) => elem !== targetId);
          });
        }
      });
    }
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-64px 0px 0px 0px'
    })
    const elements = document.querySelectorAll(query);
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  },[query])
  
  return [...activeIdList, tempId]
};