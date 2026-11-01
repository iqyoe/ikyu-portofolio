import RacerPortfolio from '@/components/RacerPortfolio';

export const metadata = {
  title: 'IKYU',
  description: 'The IKYU karting and sprint racing portfolio.',
};

export default function IkyuRacerPage() {
  return <RacerPortfolio name="IKYU" image="/image/profile-racer-ikyu.png" imageAlt="Male racer wearing a racing helmet and suit" theme="orange" />;
}
