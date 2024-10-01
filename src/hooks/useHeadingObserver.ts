import { useEffect, useRef, useState } from 'react';

export const useHeadingObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>();
  const [observeTarget, setObserverTarget] = useState('')
  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setObserverTarget(`#${entry.target.id}`)
        } else {
          entry.target.classList.remove('aaaa')
        }
      });
    }
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-60px 0px 0px 0px'
    })
    const elements = document.querySelectorAll(query);
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  },[query])
  return observeTarget;
};