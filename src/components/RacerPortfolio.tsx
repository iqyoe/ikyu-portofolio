import Image from 'next/image';
import DriverProfileCarousel from '@/components/DriverProfileCarousel';

type RacerTheme = 'orange' | 'fuchsia';

interface RacerPortfolioProps {
  name: string;
  image: string;
  imageAlt: string;
  theme: RacerTheme;
}

const themeStyles = {
  orange: {
    accent: 'text-orange-500',
    accentDark: 'text-orange-300',
    soft: 'bg-orange-100/70 dark:bg-orange-950/40',
    border: 'border-orange-200 dark:border-orange-900',
    button: 'bg-orange-500 hover:bg-orange-600',
    line: 'bg-orange-500',
  },
  fuchsia: {
    accent: 'text-fuchsia-500',
    accentDark: 'text-fuchsia-300',
    soft: 'bg-fuchsia-100/70 dark:bg-fuchsia-950/40',
    border: 'border-fuchsia-200 dark:border-fuchsia-900',
    button: 'bg-fuchsia-500 hover:bg-fuchsia-600',
    line: 'bg-fuchsia-500',
  },
} as const;

type ThemeStyles = (typeof themeStyles)[RacerTheme];

const raceResults = [
  ['2026', 'Sodi World Series / Regional Championship', '270cc 4-Stroke Karting', 'Add verified result'],
  ['2026', 'Track Day & Endurance Cup', 'Open Karting Class', 'Add verified result'],
  ['2025', 'Regional Clubman Sprint', '4-Stroke Amateur Class', 'Add verified result'],
];

export default function RacerPortfolio({ name, image, imageAlt, theme }: RacerPortfolioProps) {
  const styles = themeStyles[theme];

  return (
    <main className="overflow-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[30%_70%] lg:gap-0">
        <div className="flex justify-center lg:pr-10">
          <div className="relative w-full max-w-[20rem]">
            <div className={`absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full ${theme === 'orange' ? 'bg-black dark:bg-white' : 'bg-black dark:bg-white'}`} aria-hidden="true" />
            <Image src={image} alt={imageAlt} width={373} height={theme === 'orange' ? 468 : 669} priority sizes="(min-width: 1024px) 30vw, 80vw" className="relative z-10 block h-auto w-full" />
          </div>
        </div>

        <div className="lg:pl-8">
          <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${styles.accent}`}>{name} / Racer</p>
          <h1 className="mt-6 max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-8xl">
            {name}<br /><span className={styles.accent}>Race with intent.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Amateur Karting &amp; Sprint Race Driver. Precision in the apex. Speed in the data.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
            <a href="#contact" className={`rounded-full px-6 py-3 text-white transition ${styles.button}`}>Get in touch</a>
            <a href="#profile" className="rounded-full border border-slate-300 px-6 py-3 transition hover:border-slate-500 dark:border-slate-700">Explore the story</a>
          </div>
        </div>
      </section>

      <section className={`border-y ${styles.border} ${styles.soft}`} aria-label="Driver statistics">
        <div className="mx-auto grid max-w-6xl gap-px px-6 py-6 sm:grid-cols-3">
          <Stat label="Current series" value="SWS / Regional" />
          <Stat label="Career highlight" value="Results coming soon" />
          <Stat label="Machinery" value="270cc karting" />
        </div>
      </section>

      <section id="profile" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <SectionIntro eyebrow="01 / Driver profile" title="Calm hands. Clear data. Faster decisions." />
        <div className="mt-12 grid gap-10 lg:grid-cols-[30%_70%] lg:gap-8">
          <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <p>{name} is building a racing identity around disciplined progression, deliberate practice, and the search for a cleaner line through every corner.</p>
            <p>The next chapter will document the work behind the lap: physical conditioning, simulator sessions, race preparation, and telemetry-led review.</p>
          </div>
          <DriverProfileCarousel theme={theme} />
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-slate-900/60">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="02 / Track record" title="Progress you can measure." />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                <tr><th className="px-5 py-4">Year</th><th className="px-5 py-4">Event / Series</th><th className="px-5 py-4">Category</th><th className="px-5 py-4">Highlight</th></tr>
              </thead>
              <tbody>
                {raceResults.map((row) => <tr key={`${row[0]}-${row[1]}`} className="border-t border-slate-200 dark:border-slate-800">{row.map((cell) => <td key={cell} className="px-5 py-5 text-slate-600 dark:text-slate-300">{cell}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">Official results and raw lap-time links can be added when verified sources are available.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionIntro eyebrow="03 / Media" title="Bring the paddock to the page." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {['On-track action', 'Pit-lane preparation', 'Helmet & livery'].map((label) => (
            <div key={label} className={`relative aspect-[4/3] overflow-hidden rounded-2xl border ${styles.border} ${styles.soft}`}>
              <Image src={image} alt={`${name} ${label.toLowerCase()}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain p-5" />
              <span className="absolute bottom-4 left-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white">{label}</span>
            </div>
          ))}
        </div>
        <div className={`mt-8 flex min-h-40 items-center justify-center rounded-2xl border border-dashed ${styles.border} ${styles.soft} p-8 text-center text-sm text-slate-500 dark:text-slate-300`}>
          Featured video / onboard telemetry embed slot
        </div>
      </section>

      <section className={`border-y ${styles.border} ${styles.soft}`}>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div><SectionIntro eyebrow="04 / Technical edge" title="The lap is the output. The process is the advantage." /><p className="mt-6 max-w-xl leading-7 text-slate-600 dark:text-slate-300">Use this section to show lap-timer analysis, sector breakdowns, telemetry review, and data-driven line optimization alongside the physical work required to stay consistent.</p></div>
          <div className="grid gap-4 sm:grid-cols-2"><Feature title="Telemetry" text="Sector analysis and line optimization" styles={styles} /><Feature title="Conditioning" text="Cardio, core, and neck-strength routine" styles={styles} /><Feature title="Simulation" text="Repeatable practice between race days" styles={styles} /><Feature title="Race review" text="Structured debrief after every session" styles={styles} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionIntro eyebrow="05 / Partners" title="Build the next campaign together." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3"><Feature title="Brand exposure" text="Helmet, suit, kart, and trackside placement." styles={styles} /><Feature title="Digital reach" text="Vlogs, track walkthroughs, and livery reveals." styles={styles} /><Feature title="Guest experience" text="Paddock access and track-day engagement." styles={styles} /></div>
        <div className={`mt-8 rounded-2xl border p-8 ${styles.border} ${styles.soft}`}><p className={`text-xs font-semibold uppercase tracking-[0.25em] ${styles.accent}`}>Sponsorship deck</p><p className="mt-3 text-lg font-semibold">Formal sponsorship proposal coming soon.</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">A downloadable deck can be linked here when the campaign package is ready.</p></div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-24 text-white dark:bg-black">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><SectionIntro eyebrow="06 / Contact" title="Let’s talk about the next lap." light /><p className="mt-6 text-slate-300">For sponsorships, engineering conversations, race invitations, and collaborations, use the inquiry form.</p></div>
          <form className="grid gap-4 sm:grid-cols-2" action="#contact"><input aria-label="Name" name="name" placeholder="Name" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-white sm:col-span-1" /><input aria-label="Company or sponsor" name="company" placeholder="Company / Sponsor" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-white sm:col-span-1" /><input aria-label="Email" type="email" name="email" placeholder="Email" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-white sm:col-span-2" /><textarea aria-label="Message" name="message" placeholder="Message" rows={5} className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-white sm:col-span-2" /><button type="submit" className={`rounded-full px-6 py-3 text-sm font-semibold text-white transition sm:col-span-2 sm:justify-self-start ${styles.button}`}>Send inquiry</button></form>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <div><p className={`text-sm font-semibold uppercase tracking-[0.3em] ${light ? 'text-slate-400' : 'text-slate-500'}`}>{eyebrow}</p><h2 className={`mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl ${light ? 'text-white' : 'text-slate-950 dark:text-white'}`}>{title}</h2></div>;
}

function Stat({ label, value }: { label: string; value: string }) { return <div className="px-4 py-3 text-center sm:text-left"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p><p className="mt-2 font-bold text-slate-900 dark:text-white">{value}</p></div>; }

function Feature({ title, text, styles }: { title: string; text: string; styles: ThemeStyles }) { return <div className={`rounded-2xl border p-6 ${styles.border}`}><div className={`mb-5 h-2 w-10 rounded-full ${styles.line}`} /><h3 className="font-bold text-slate-900 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p></div>; }
