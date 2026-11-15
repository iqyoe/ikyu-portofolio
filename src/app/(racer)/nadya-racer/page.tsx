import RacerPortfolio from '@/components/RacerPortfolio';
import { cheznaddzDriver } from '@/lib/drivers';

export const metadata = {
  title: 'CHEZNADDZ',
  description: 'The CHEZNADDZ karting and sprint racing portfolio.',
};

export default function NadyaRacerPage() {
  return <RacerPortfolio driver={cheznaddzDriver} theme="fuchsia" />;
}

