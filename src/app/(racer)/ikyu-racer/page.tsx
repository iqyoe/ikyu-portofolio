import RacerPortfolio from '@/components/RacerPortfolio';

export const metadata = {
  title: 'Ikyu Racer',
  description: 'The Ikyu Racer karting and sprint racing portfolio.',
};

export default function IkyuRacerPage() {
  return <RacerPortfolio name="Ikyu" image="/image/profile-racer-male.png" imageAlt="Male racer wearing a racing helmet and suit" theme="orange" />;
}
