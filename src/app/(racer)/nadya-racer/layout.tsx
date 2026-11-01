import type { ReactNode } from 'react';
import SiteHeader from '@/components/SiteHeader';

export default function NadyaRacerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader label="CHEZNADDZ" homeHref="/" tone="racer" links={[{ href: '/nadya-racer', label: 'Home' }]} />
      {children}
    </>
  );
}
