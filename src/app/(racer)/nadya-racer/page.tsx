import RacerPortfolio from '@/components/RacerPortfolio';

export const metadata = {
  title: 'Nadya Racer',
  description: 'The Nadya Racer karting and sprint racing portfolio.',
};

export default function NadyaRacerPage() {
  return <RacerPortfolio name="Nadya" image="/image/profile-racer-femal.png" imageAlt="Female racer wearing a racing helmet and suit" theme="fuchsia" />;
}
