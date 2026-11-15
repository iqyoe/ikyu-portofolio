'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageCrossfade({ images, alt, sizes, priority = false, className = '' }: { images: string[]; alt: string; sizes: string; priority?: boolean; className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion || images.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % images.length), 5200);
    return () => window.clearInterval(timer);
  }, [images.length, reducedMotion]);

  return <div className="relative h-full w-full overflow-hidden">{images.map((src, index) => <Image key={src} src={src} alt={index === activeIndex ? alt : ''} fill priority={priority && index === 0} sizes={sizes} className={`object-cover transition-opacity duration-700 ease-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'} ${className}`} />)}</div>;
}
