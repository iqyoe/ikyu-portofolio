import type { ReactNode } from 'react';
import SiteHeader from '@/components/SiteHeader';

export default function IkyuRacerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader label="Ikyu Racer" homeHref="/" tone="racer" links={[{ href: '/ikyu-racer', label: 'Home' }]} />
      {children}
    </>
  );
}
