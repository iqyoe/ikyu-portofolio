import { NextRequest } from 'next/server';
import { getResumeData } from '@/lib/resume';
import { renderResumePdf } from '@/lib/resume-pdf';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const pdf = await renderResumePdf(getResumeData());
  const isPreview = request.nextUrl.searchParams.get('preview') === '1';

  return new Response(new Uint8Array(pdf), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `${isPreview ? 'inline' : 'attachment'}; filename="muhammad-iqbal-lukman-resume.pdf"`,
      'Cache-Control': 'no-store',
    },
  });
}
