'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ProjectImageLightboxProps {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function ProjectImageLightbox({
  src,
  alt,
  title,
  priority = false,
  sizes = '100vw',
  className = '',
}: ProjectImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`group/image relative block h-full w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-inset ${className}`}
        onClick={() => setIsOpen(true)}
        aria-label={`Open larger image for ${title}`}
      >
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover transition duration-500 group-hover/image:scale-105" />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
          View full image
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} full image`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative h-full w-full max-w-7xl">
            <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-0 rounded-full border border-white/20 bg-slate-950/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              aria-label="Close full image"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
