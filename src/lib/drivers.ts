export type RaceRecord = {
  category: 'SWS' | 'Other';
  event: string;
  result?: string;
  series: string;
  track: string;
  date: string;
  year: number;
};

export type DriverProfile = {
  slug: string;
  displayName: string;
  fullName?: string;
  dob?: string;
  domicile?: string;
  nationality?: string;
  totalRaces?: number;
  currentTeam?: string;
  shortBio?: string;
  competitionsJoined?: number;
  heroImages: string[];
  profileImages: string[];
  recentResults: string[];
  latestBest?: { trackName: string; trackLocation: string; lapTime: string; position?: string; lastUpdated: string };
  raceRecords: RaceRecord[];
  contact: { email: string; instagram: string; tiktok: string };
};

const ikyuHeroImages = ['/image/racer/ikyu-hero-01.jpg', '/image/racer/ikyu-hero-02.jpg', '/image/racer/ikyu-hero-03.jpg', '/image/racer/ikyu-hero-04.jpg', '/image/racer/ikyu-hero-05.jpg', '/image/racer/ikyu-hero-06.jpg'];

const ikyuRaceRecords: RaceRecord[] = [
  { category: 'Other', year: 2026, event: 'Main Kart SakerF1Club', result: 'P6 · Group A', series: 'Fun Race Event', track: 'National Track Reverse · Gokart Avenue', date: '9 Nov 2026' },
  { category: 'SWS', year: 2026, event: 'SWS Senior Sprint Cup 18', result: 'Qualifying P6 · Grid P7 · Reverse P7', series: 'Sprint Cup SWS', track: 'National Track Reverse · Gokart Avenue', date: '25 Oct 2026' },
  { category: 'Other', year: 2026, event: 'Main Kart SakerF1Club', result: 'P1 · Group B', series: 'Fun Race Event', track: 'National Track · Gokart Avenue', date: '14 Sep 2026' },
  { category: 'SWS', year: 2026, event: 'SWS Senior Sprint Cup 14', result: 'Qualifying P5 · Grid P5', series: 'Sprint Cup SWS', track: 'Twisted Track · Gokart Avenue', date: '9 Aug 2026' },
  { category: 'SWS', year: 2026, event: 'SWS Senior Sprint Cup 13', result: 'Qualifying P5 · Grid P7', series: 'Sprint Cup SWS', track: 'Twisted Track · Gokart Avenue', date: '9 Aug 2026' },
  { category: 'SWS', year: 2026, event: 'SWS Senior Sprint Cup 10', result: 'Grid P16', series: 'Sprint Cup SWS', track: 'Twisted Track · Gokart Avenue', date: '24 May 2026' },
  { category: 'SWS', year: 2026, event: 'SWS Senior Sprint Cup 10', result: 'Grid P15', series: 'Sprint Cup SWS', track: 'Twisted Track · Gokart Avenue', date: '24 May 2026' },
];

export const ikyuDriver: DriverProfile = {
  slug: 'ikyu', displayName: 'IKYU', fullName: 'Muhammad Iqbal Lukman', dob: '11 Dec 1996', domicile: 'Jakarta', nationality: 'Indonesia', totalRaces: 7, currentTeam: 'Individual · Sojitoy', shortBio: 'Starting races in 2026. Race with discipline, adrenaline, and a victory mindset.', competitionsJoined: 5,
  heroImages: ikyuHeroImages, profileImages: ['/image/racer/ikyu-profile-01.jpg', '/image/racer/ikyu-profile-02.jpg'], recentResults: ['P6 · Main Kart SakerF1Club', 'P1 · Main Kart SakerF1Club', 'P7 · SWS Senior Sprint Cup 18'], latestBest: { trackName: 'National Track · Reverse', trackLocation: 'Gokart Avenue · Indonesia', lapTime: '25.821', position: 'P6', lastUpdated: 'Nov 2026' }, raceRecords: ikyuRaceRecords, contact: { email: 'muhiqballukman@gmail.com', instagram: '@ikyoala', tiktok: '@ikyudesu' },
};

const cheznaddzHeroImages = ['/image/racer/cheznaddz-hero-01.jpeg', '/image/racer/cheznaddz-hero-02.jpeg', '/image/racer/cheznaddz-hero-03.jpeg', '/image/racer/cheznaddz-hero-04.jpeg'];

const cheznaddzRaceRecords: RaceRecord[] = [
  { category: 'Other', year: 2026, event: 'Main Kart SakerF1Club 5', series: 'Fun Race Event', track: 'National Reverse - Gokart Avenue', date: '9 Nov 2026' },
  { category: 'SWS', year: 2026, event: 'SWS Women Series 4', series: 'Sprint Cup SWS', track: 'National Reverse - Gokart Avenue', date: 'October 2026' },
  { category: 'Other', year: 2026, event: 'Main Kart SakerF1Club 4', series: 'Fun Race Event', track: 'National Track - Gokart Avenue', date: 'September 2026' },
  { category: 'Other', year: 2026, event: 'Main Kart SakerF1Club 3', series: 'Fun Race Event', track: 'Twister Track - Gokart Avenue', date: 'August 2026' },
  { category: 'SWS', year: 2026, event: 'SWS Women Series 2', series: 'Sprint Cup SWS', track: 'Twister Track - Gokart Avenue', date: 'August 2026' },
];

export const cheznaddzDriver: DriverProfile = {
  ...ikyuDriver,
  slug: 'cheznaddz', displayName: 'CHEZNADDZ', fullName: 'Nadya Nikita Manorek', dob: '26 Nov 1997', domicile: 'Jakarta', nationality: 'Indonesia',
  totalRaces: 5, currentTeam: 'Individual · Sojitoy', shortBio: undefined, competitionsJoined: 2,
  heroImages: cheznaddzHeroImages, recentResults: ['Main Kart SakerF1Club 5', 'SWS Women Series 4', 'Main Kart SakerF1Club 4'],
  latestBest: { trackName: 'National Track - Gokart Avenue', trackLocation: '', lapTime: '26.574', position: '-', lastUpdated: '23 October 2026' },
  raceRecords: cheznaddzRaceRecords, profileImages: ['/image/racer/cheznaddz-profile-01.jpg', '/image/racer/cheznaddz-profile-02.jpeg'],
  contact: { email: 'nadya31manorek@gmail.com', instagram: '@ndyanikita', tiktok: '@nmine18 - cheznaddz' },
};
