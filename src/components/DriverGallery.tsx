'use client';

import { useEffect, useState } from 'react';

export default function DriverGallery({ driverName, images }: { driverName: string; images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return <>
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images.map((src, index) => <figure key={src} className="group mb-5 break-inside-avoid overflow-hidden border border-white/10 bg-[#151922]">
        <button type="button" className="relative block w-full cursor-zoom-in text-left" onClick={() => setSelectedImage(src)} aria-label={`Open ${driverName} gallery image ${index + 1}`}>
          {/* Native sizing preserves each photo's source aspect ratio in the masonry columns. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`${driverName} racing gallery image ${index + 1}`} loading="lazy" className="block h-auto w-full transition duration-500 ease-out group-hover:scale-[1.02]" />
          <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/65 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">Zoom</span>
        </button>
      </figure>)}
    </div>
    {selectedImage ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={`${driverName} gallery image`} onClick={() => setSelectedImage(null)}>
      <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-black/60 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black" aria-label="Close image">×</button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={selectedImage} alt={`${driverName} enlarged gallery image`} className="max-h-[90vh] max-w-full object-contain" onClick={(event) => event.stopPropagation()} />
    </div> : null}
  </>;
}
