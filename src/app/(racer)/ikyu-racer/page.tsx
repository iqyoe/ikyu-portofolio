import RacerPortfolio from '@/components/RacerPortfolio';
import { ikyuDriver } from '@/lib/drivers';

export const metadata = {
  title: 'IKYU',
  description: 'The IKYU karting and sprint racing portfolio.',
};

export default function IkyuRacerPage() {
  return <RacerPortfolio driver={ikyuDriver} theme="orange" />;
}
