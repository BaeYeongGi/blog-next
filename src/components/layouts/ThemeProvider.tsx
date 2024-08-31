'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeProvider({children}: {children: React.ReactNode}){
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) {
    return null
    
  }
  return (
    <NextThemeProvider attribute="class" defaultTheme='system'>
      {children}
    </NextThemeProvider>
  )
}