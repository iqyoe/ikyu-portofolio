'use client';

import { useEffect, useRef, useState, type TouchEvent } from 'react';
import MachineryCarousel from '@/components/MachineryCarousel';

type RacerTheme = 'orange' | 'fuchsia';

interface DriverProfileCarouselProps {
  theme: RacerTheme;
}

const themeStyles = {
  orange: {
    accent: 'text-orange-500',
    border: 'border-orange-200 dark:border-orange-900',
    dot: 'bg-orange-500',
  },
  fuchsia: {
    accent: 'text-fuchsia-500',
    border: 'border-fuchsia-200 dark:border-fuchsia-900',
    dot: 'bg-fuchsia-500',
  },
} as const;

const slides = [
  [
    { title: 'Disciplines', value: 'Sprint karting, endurance racing, time attack' },
    { title: 'Current goal', value: 'Build a full-season championship campaign' },
  ],
  [
    { title: 'Training edge', value: 'Cardio, core stability, neck strength, simulator work' },
    { title: 'Machinery', value: '' },
  ],
] as const;

export default function DriverProfileCarousel({ theme }: DriverProfileCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const styles = themeStyles[theme];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  function move(direction: 1 | -1) {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    touchStartX.current = null;
    if (distance > 40) move(-1);
    if (distance < -40) move(1);
  }

  return (
    <div className="min-w-0">
      <div className="w-full min-w-0 overflow-hidden touch-pan-y" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="flex h-[22rem] w-full min-w-0 transition-transform duration-500 ease-in-out" style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="grid h-[22rem] min-w-0 w-full shrink-0 basis-full grid-cols-1 gap-5 md:grid-cols-2">
              {slide.map((card) => (
                card.title === 'Machinery' ? (
                  <MachineryCarousel key={card.title} theme={theme} />
                ) : (
                  <div key={card.title} className={`flex h-[22rem] flex-col rounded-2xl border p-6 ${styles.border}`}>
                    <p className={`text-xs font-bold uppercase tracking-wider ${styles.accent}`}>{card.title}</p>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{card.value}</p>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3" aria-label="Driver profile slides">
        <button type="button" onClick={() => move(-1)} aria-label="Previous driver profile slide" className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:border-slate-500 dark:border-slate-700 dark:text-slate-300">←</button>
        {slides.map((_, index) => (
          <button key={index} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show driver profile slide ${index + 1}`} aria-current={activeSlide === index} className={`h-2 rounded-full transition-all ${activeSlide === index ? `w-7 ${styles.dot}` : 'w-2 bg-slate-300 dark:bg-slate-700'}`} />
        ))}
        <button type="button" onClick={() => move(1)} aria-label="Next driver profile slide" className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:border-slate-500 dark:border-slate-700 dark:text-slate-300">→</button>
      </div>
    </div>
  );
}
