import type { ReactNode } from 'react';
import SiteHeader from '@/components/SiteHeader';

export default function IqbalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader
        label="Iqbal Lukman"
        homeHref="/"
        links={[{ href: '/iqbal-lukman', label: 'Portfolio' }]}
      />
      {children}
    </>
  );
}
