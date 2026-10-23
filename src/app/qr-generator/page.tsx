import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import QrGenerator from '@/components/QrGenerator';

export const metadata: Metadata = { title: 'QR Code Generator', description: 'Create QR codes for URLs and text, then download them as PNG, JPEG, or PDF.' };

export default function QrGeneratorPage() {
  return <><SiteHeader label="Sojitoy Team" homeHref="/" /><main className="mx-auto max-w-6xl px-6 py-16 sm:py-20"><Link href="/" className="text-sm font-semibold text-emerald-300">← Back to portal</Link><section className="mt-12 max-w-3xl"><p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300">Portal utility</p><h1 className="font-display mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">QR code generator</h1><p className="mt-6 text-lg leading-8 text-slate-300">Turn a URL or short message into a ready-to-share QR code. Choose the output resolution and download it in the format you need.</p></section><div className="mt-12"><QrGenerator /></div><p className="mt-8 text-sm leading-6 text-slate-500">Resolution is capped at 2,048 × 2,048 px to keep browser memory and encoding time predictable. For most screens and print workflows, this is more than enough; QR readability depends more on quiet-zone margin and physical module size than on making the file larger.</p></main></>;
}
