'use client';

import Image from 'next/image';
import { useRef, useState, type TouchEvent } from 'react';

const machinery = [
  {
    name: 'SODI RT8 270cc',
    type: '270cc 4-Stroke Karting',
    image: '/image/sodi-kart-rt8.png',
  },
  {
    name: 'SODI RSX2 E-Kart',
    type: 'Electric Karting',
    image: '/image/sodi-rsx2-ekart.png',
  },
];

export default function MachineryCarousel({ theme = 'orange' }: { theme?: 'orange' | 'fuchsia' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  function move(direction: 1 | -1) {
    setActiveIndex((current) => (current + direction + machinery.length) % machinery.length);
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
    <div className="flex h-[22rem] flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex h-[4.25rem] shrink-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={`text-xs font-bold uppercase tracking-wider ${theme === 'fuchsia' ? 'text-fuchsia-500' : 'text-orange-500'}`}>Machinery</p>
          <p className="mt-2 truncate text-sm font-bold text-slate-900 dark:text-white">Swipe to explore the fleet</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Use arrows or swipe left/right</p>
        </div>
        <div className="flex gap-1">
          <button type="button" onClick={() => move(-1)} aria-label="Previous machinery" className={`rounded-full border border-slate-200 px-2.5 py-1 text-slate-600 dark:border-slate-700 dark:text-slate-300 ${theme === 'fuchsia' ? 'hover:border-fuchsia-500' : 'hover:border-orange-500'}`}>←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next machinery" className={`rounded-full border border-slate-200 px-2.5 py-1 text-slate-600 dark:border-slate-700 dark:text-slate-300 ${theme === 'fuchsia' ? 'hover:border-fuchsia-500' : 'hover:border-orange-500'}`}>→</button>
        </div>
      </div>
      <div className="relative mt-4 h-[13rem] shrink-0 overflow-hidden touch-pan-y" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="flex h-full w-full transition-transform duration-500 ease-in-out" style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}>
          {machinery.map((item) => (
            <div key={item.name} className="relative flex h-full min-w-full shrink-0 basis-full flex-col items-center justify-center px-2">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-white" aria-hidden="true" />
              <Image src={item.image} alt={item.name} width={1100} height={687} sizes="(min-width: 640px) 38vw, 84vw" className="relative z-10 block h-auto w-full object-contain" />
              <div className="absolute bottom-1 left-0 right-0 z-20 text-center">
                <p className="text-sm font-bold text-slate-900 drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] dark:text-white dark:drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{item.name}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2" aria-label="Machinery slides">
        {machinery.map((item, index) => (
          <button key={item.name} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${item.name}`} aria-current={index === activeIndex} className={`h-2 rounded-full transition-all ${index === activeIndex ? `w-6 ${theme === 'fuchsia' ? 'bg-fuchsia-500' : 'bg-orange-500'}` : 'w-2 bg-slate-300 dark:bg-slate-700'}`} />
        ))}
      </div>
    </div>
  );
}
