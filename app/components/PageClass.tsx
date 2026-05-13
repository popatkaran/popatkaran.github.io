'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function getPageClass(pathname: string): string {
  if (pathname === '/') return 'page-home';
  // Convert "/articles/my-post" → "page-articles-my-post"
  return 'page' + pathname.replace(/\//g, '-').replace(/-+$/, '');
}

export default function PageClass() {
  const pathname = usePathname();

  useEffect(() => {
    const cls = getPageClass(pathname);
    const html = document.documentElement;
    // Remove any previous page-* class
    html.classList.forEach((c) => { if (c.startsWith('page-')) html.classList.remove(c); });
    html.classList.add(cls);
  }, [pathname]);

  return null;
}
