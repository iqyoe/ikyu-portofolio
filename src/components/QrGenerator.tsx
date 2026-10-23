'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import QRCode from 'qrcode';
import { jsPDF } from 'jspdf';

const MAX_BYTES = 2200;
const MAX_SIZE = 2048;
const SIZE_OPTIONS = [256, 512, 1024, 1536, MAX_SIZE];

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export default function QrGenerator() {
  const themeVariables = {
    '--button-primary': 'var(--accent-green)',
    '--button-primary-soft': 'rgba(0, 255, 133, 0.12)',
  } as CSSProperties;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<'url' | 'text'>('url');
  const [value, setValue] = useState('https://example.com');
  const [size, setSize] = useState(512);
  const [error, setError] = useState('');
  const [isGenerating, setIsGenerating] = useState(true);
  const generationRef = useRef(0);
  const byteLength = new TextEncoder().encode(value).length;
  const isTooLarge = byteLength > MAX_BYTES;

  useEffect(() => {
    const generationId = generationRef.current + 1;
    generationRef.current = generationId;
    const timeoutId = window.setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      if (!value || isTooLarge) {
        canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
        setIsGenerating(false);
        return;
      }

      QRCode.toCanvas(canvas, value, {
        width: size,
        margin: 2,
        errorCorrectionLevel: 'M',
        color: { dark: '#000000', light: '#ffffff' },
      }).then(() => {
        if (generationRef.current === generationId) {
          setError('');
          setIsGenerating(false);
        }
      }).catch(() => {
        if (generationRef.current === generationId) {
          setError('This content is too large to fit in a QR code.');
          setIsGenerating(false);
        }
      });
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [value, size, isTooLarge]);

  function getCanvas() {
    if (!canvasRef.current || !value || isTooLarge || error || isGenerating) {
      setError('Enter valid content before downloading.');
      return null;
    }
    return canvasRef.current;
  }

  function downloadImage(type: 'png' | 'jpeg') {
    const canvas = getCanvas();
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, `qr-code-${size}px.${type === 'jpeg' ? 'jpg' : 'png'}`);
    }, `image/${type}`, type === 'jpeg' ? 0.95 : undefined);
  }

  function downloadPdf() {
    const canvas = getCanvas();
    if (!canvas) return;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const imageSize = 180;
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', (210 - imageSize) / 2, (297 - imageSize) / 2, imageSize, imageSize);
    pdf.save(`qr-code-${size}px.pdf`);
  }

  return (
    <div style={themeVariables} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)]">
      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-2xl shadow-black/20 sm:p-8" aria-label="QR code settings">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="QR content type">
          {(['url', 'text'] as const).map((option) => (
            <button key={option} type="button" role="tab" aria-selected={mode === option} onClick={() => setMode(option)} className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold capitalize text-slate-300 transition hover:border-emerald-300">{option}</button>
          ))}
        </div>
        <label className="mt-8 block text-sm font-semibold text-slate-200" htmlFor="qr-content">{mode === 'url' ? 'URL to share' : 'Text to share'}</label>
        <textarea id="qr-content" value={value} onChange={(event) => { setValue(event.target.value); setError(''); setIsGenerating(true); }} rows={mode === 'url' ? 3 : 7} maxLength={4000} placeholder={mode === 'url' ? 'https://example.com' : 'Write any short message...'} className="mt-3 w-full resize-y rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300" />
        <div className="mt-2 flex justify-between text-xs text-slate-500"><span>{byteLength.toLocaleString()} / {MAX_BYTES.toLocaleString()} bytes</span><span>UTF-8</span></div>
        <label className="mt-8 block text-sm font-semibold text-slate-200" htmlFor="qr-size">Output resolution</label>
        <select id="qr-size" value={size} onChange={(event) => { setSize(Number(event.target.value)); setIsGenerating(true); }} className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-300">{SIZE_OPTIONS.map((option) => <option key={option} value={option}>{option} × {option} px</option>)}</select>
        {isTooLarge && <p className="mt-4 text-sm text-rose-300">This content is too long. Shorten it to {MAX_BYTES.toLocaleString()} bytes or less.</p>}
        {error && !isTooLarge && <p className="mt-4 text-sm text-rose-300">{error}</p>}
        <div className="mt-8 flex flex-wrap gap-3"><button type="button" onClick={() => downloadImage('png')} className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white">Download PNG</button><button type="button" onClick={() => downloadImage('jpeg')} className="button-outline-primary rounded-full px-5 py-3 text-sm font-bold text-white transition">Download JPEG</button><button type="button" onClick={downloadPdf} className="button-outline-primary rounded-full px-5 py-3 text-sm font-bold text-white transition">Download PDF</button></div>
      </section>
      <section className="flex min-h-[24rem] flex-col items-center justify-center rounded-3xl border border-emerald-300/30 bg-white p-8 text-center" aria-label="QR code preview">
        <div className="relative aspect-square w-full max-w-[20rem] overflow-hidden rounded-lg shadow-[0_0_32px_rgba(255,255,255,0.3)]">
          <canvas ref={canvasRef} width={size} height={size} className="absolute inset-0 block h-full w-full" aria-label="Generated QR code" />
          {isGenerating && <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/30 backdrop-blur-[1px]" role="status" aria-label="Generating QR code"><span className="h-12 w-12 animate-spin rounded-full border-4 border-slate-300/70 border-t-emerald-400 shadow-[0_0_18px_rgba(255,255,255,0.8)]" /><span className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">Processing</span></div>}
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{size} × {size} px preview</p><p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">Generated locally in your browser. Your content is not uploaded.</p>
      </section>
    </div>
  );
}
