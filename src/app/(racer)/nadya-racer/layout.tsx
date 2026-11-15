import type { ReactNode } from 'react';
import SiteHeader from '@/components/SiteHeader';

export default function NadyaRacerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader label="CHEZNADDZ" homeHref="/" tone="racer" links={[{ href: '/nadya-racer#racer-overview', label: 'Overview' }, { href: '/nadya-racer#about', label: 'About' }, { href: '/nadya-racer#race-record', label: 'Race record' }, { href: '/nadya-racer#contact', label: 'Contact' }]} />
      {children}
    </>
  );
}
