import Link from 'next/link';

export const metadata = {
  title: 'Resume preview | Iqbal Lukman',
  description: 'Preview and download Muhammad Iqbal Lukman\'s resume.',
};

export default function ResumePreviewPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/iqbal-lukman" className="text-sm font-semibold text-[var(--accent-blue)] hover:underline">
              &larr; Back to Iqbal&apos;s portfolio
            </Link>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent-blue)]">Resume preview</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl">Muhammad Iqbal Lukman</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">Review the generated PDF before downloading it.</p>
          </div>
          <a
            href="/api/resume"
            download="muhammad-iqbal-lukman-resume.pdf"
            className="inline-flex w-fit rounded-full bg-[var(--accent-blue)] px-5 py-3 text-sm font-bold text-white transition hover:opacity-85"
          >
            Download PDF ↓
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface-strong)] p-2 shadow-xl shadow-slate-900/10">
          <iframe
            src="/api/resume?preview=1#view=FitH"
            title="Resume PDF preview"
            className="h-[calc(100vh-14rem)] min-h-[720px] w-full rounded-2xl bg-white"
          />
        </div>

        <p className="mt-4 text-center text-xs text-[var(--muted)]">
          The preview uses your browser&apos;s built-in PDF viewer. Use the button above when you are ready to save the file.
        </p>
      </div>
    </main>
  );
}
