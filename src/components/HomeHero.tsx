'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = heroRef.current;
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      if (!hero || !title || !subtitle) return;
      if (reducedMotion.matches) {
        title.style.transform = 'translate3d(0, -50%, 0)';
        subtitle.style.transform = 'translate3d(0, 5vh, 0)';
        return;
      }
      const bounds = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -bounds.top / Math.max(bounds.height, 1)));
      const titleDistance = progress * 6;
      const subtitleDistance = progress * 8;
      title.style.transform = `translate3d(${titleDistance}%, -50%, 0)`;
      subtitle.style.transform = `translate3d(${subtitleDistance}%, 5vh, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    reducedMotion.addEventListener('change', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reducedMotion.removeEventListener('change', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={heroRef} className="brand-hero relative left-1/2 flex min-h-[65vh] w-screen -translate-x-1/2 flex-col items-center justify-end overflow-visible py-10 sm:py-12" aria-labelledby="brand-hero-title">
      <h1 ref={titleRef} id="brand-hero-title" className="brand-hero-title pointer-events-none absolute left-0 top-1/2 z-0 w-full -translate-y-1/2 whitespace-nowrap text-center font-display text-[clamp(2rem,11vw,10.5rem)] font-black leading-none tracking-[-0.08em] text-[var(--foreground)]" aria-label="SOJI TEAM">SOJI TEAM</h1>
      <div className="brand-hero-visual pointer-events-none absolute inset-0 z-10 flex -translate-y-8 items-center justify-center sm:-translate-y-10" aria-hidden="true">
        <span className="brand-hero-speedline brand-hero-speedline-one" />
        <span className="brand-hero-speedline brand-hero-speedline-two" />
        <div className="brand-hero-race relative"><Image src="/image/sojitoy-team-hero.png" alt="" width={396} height={297} priority className="brand-hero-mark relative h-auto w-[min(75vw,36rem)] object-contain" /></div>
      </div>
      <div ref={subtitleRef} className="brand-hero-road pointer-events-none absolute bottom-24 left-[-15vw] z-[5] translate-y-[5vh] sm:bottom-28">
        <p className="brand-hero-description mx-auto max-w-xl text-center text-lg font-bold leading-7 text-white sm:text-xl">A disciplined team combining technology and racing to create impactful products and champion performance.</p>
        <div className="brand-hero-road-extension" aria-hidden="true"><span /><span /></div>
      </div>
      <div className="brand-hero-copy relative z-20 mb-1 flex translate-y-[5vh] max-w-2xl flex-col items-center text-center sm:mb-2 sm:translate-y-[5vh]">
        <Link href="#portfolios" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[var(--accent-blue)] px-5 py-3 text-sm font-bold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-[var(--accent-blue)]/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)] active:scale-[0.98]"><span className="brand-hero-cta-content">Browse portfolios <span className="brand-hero-cta-arrow ml-2" aria-hidden="true">↓</span></span></Link>
      </div>
    </section>
  );
}
