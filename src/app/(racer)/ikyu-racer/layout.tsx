import type { ReactNode } from 'react';
import SiteHeader from '@/components/SiteHeader';

export default function IkyuRacerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader label="IKYU" homeHref="/" tone="racer" showBackArrow links={[{ href: '/ikyu-racer#racer-overview', label: 'Overview' }, { href: '/ikyu-racer#about', label: 'About' }, { href: '/ikyu-racer#race-record', label: 'Race record' }, { href: '/ikyu-racer#gallery', label: 'Gallery' }, { href: '/ikyu-racer#contact', label: 'Contact' }]} />
      {children}
    </>
  );
}
