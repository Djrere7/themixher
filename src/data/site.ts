/**
 * THE MIXHER — single source of truth for the main nonprofit website.
 * National 501(c)(3) nonprofit event series. Based in Miami Beach; events nationwide.
 * Content sourced from the MixHer 2025 deck. Action links marked TODO need real URLs.
 */

export const site = {
  name: 'The MixHer',
  legalName: 'MixHer Inc.',
  tagline: 'Female DJs lead the vibe. All vibes welcome.',
  crestTagline: 'Setting the Tone',
  hashtag: '#SettingTheTone',
  founded: '2023',
  category: 'The nonprofit platform for female DJs',
  coreSentence:
    'A nonprofit and community putting female DJs at the front of the party — real events, real networking, real connections IRL.',
  storyLine:
    'MixHer is a national 501(c)(3) nonprofit event series celebrating women in music. More than a party — a cultural shift where women lead, headline, and shine.',

  // Contact
  email: 'info@themixher.org',
  emailHref: 'mailto:info@themixher.org',
  location: 'Based in Miami Beach, FL · Events nationwide',
  city: 'Miami Beach, FL',

  // Nonprofit status
  nonprofit: 'The MixHer is a registered 501(c)(3) nonprofit.',
  taxLine: 'Sponsorships and donations are tax-deductible.',

  // Action links — REPLACE TODOs with real URLs
  donateUrl: '#donate', // TODO: donation platform
  sponsorUrl: '/sponsors',
  communityUrl: '#join', // TODO: WhatsApp / community invite
  eventsUrl: '#events', // TODO: Eventbrite / ticket link
  applyUrl: '#apply', // TODO: DJ application form
  newsletterAction: '', // TODO: newsletter endpoint

  socials: {
    instagram: 'https://www.instagram.com/themixher',
    tiktok: 'https://www.tiktok.com/@themixher',
    youtube: 'https://www.youtube.com/@themixher',
    facebook: 'https://www.facebook.com/themixher',
  },
};

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Community', href: '/community' },
  { label: 'Events', href: '/events' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Contact', href: '/contact' },
];

/** What we do — from the deck. */
export type Offering = { tag: string; title: string; blurb: string };
export const offerings: Offering[] = [
  { tag: '01', title: 'Live DJ Sets', blurb: 'A curated lineup of female talent.' },
  { tag: '02', title: 'Networking Mixers', blurb: 'Meet execs, creatives & tastemakers.' },
  { tag: '03', title: 'Surprise Performances', blurb: 'Major artists who share the mission.' },
  { tag: '04', title: 'Brand Activations', blurb: 'Moments that elevate the night.' },
  { tag: '05', title: '“In Your Bag” Podcast', blurb: 'Get-to-know-your-DJ, live on site.' },
  { tag: '06', title: 'Nationwide', blurb: 'Miami, Atlanta, NYC, LA & beyond.' },
];

/** Mission pillars (concise). */
export const pillars = [
  { key: 'Elevate', blurb: 'Real performance opportunities for women in music.' },
  { key: 'Connect', blurb: 'Meaningful industry connections in curated rooms.' },
  { key: 'Champion', blurb: 'Cultural change in the scene, starting behind the decks.' },
  { key: 'Give Back', blurb: 'Free DJ education for youth through First Spin.' },
];

/** Audience paths — DJs + venues/brands. */
export const paths = [
  { key: 'DJs', title: 'For Female DJs', blurb: 'Real networking with industry pros, real connections IRL, and a community that has your back.', cta: 'Join the community', href: '/community', accent: 'var(--orchid-deep)' },
  { key: 'Venues', title: 'For Venues & Brands', blurb: 'Tap a ready-made community and put female DJs at the forefront of your next event.', cta: 'Partner with us', href: '/sponsors', accent: 'var(--orange)' },
];

/** Headline stats — real, from the deck. (More real stats to come from client.) */
export const stats = [
  { num: '20+', label: 'Female DJs booked' },
  { num: '70%', label: 'Make an industry connection' },
  { num: '30K+', label: 'Monthly Instagram reach' },
  { num: '501(c)(3)', label: 'Registered nonprofit' },
];

/** Community offerings. */
export const community = [
  { title: 'Performance Opportunities', blurb: 'Real stages at MixHer events across the country.' },
  { title: 'The Community', blurb: 'Our group chat — callouts, advice, and real support.' },
  { title: 'Industry Connections', blurb: 'Meet execs, creatives, and tastemakers IRL.' },
  { title: 'Mentorship', blurb: 'Guidance from DJs who’ve been there.' },
  { title: 'The Set', blurb: 'Up-and-coming? The Set networking series is your room to rise.' },
  { title: 'Visibility', blurb: 'Media moments and content that travel.' },
];

/** Sponsor value — from the deck (no fixed $ tiers; custom + tax-deductible). */
export const sponsorBrands = [
  'Align with music-forward, socially aware audiences',
  'Tax-deductible support for cultural equity',
  'Placement in gifting bags, social content & activations',
  'Influencer-level reach through DJ collabs and on-site moments',
];
export const sponsorVenues = [
  'Host a packed, press-worthy experience',
  'Goodwill + the tax benefit of backing a nonprofit',
  'Co-create with a team that values energy & professionalism',
  'Guaranteed energy, content, and revenue',
];

/** Real impact stats (deck). */
export const impact = [
  { num: '70%', label: 'of attendees make a meaningful industry connection' },
  { num: '80%', label: 'of our crowd works in music, content, or entertainment' },
  { num: '30K+', label: 'monthly Instagram reach' },
  { num: '20+', label: 'DJs performed — and got booked again because of it' },
];

/** Marquee ticker words. */
export const ticker = ['Female DJs lead the vibe', 'All vibes welcome', 'Real networking', 'Real connections IRL', 'Setting the Tone', 'Nationwide'];

/** Real brand partners (deck). */
export const partners = ['Vilon Liquor', 'Raising Cane’s', 'Smartwater', 'DJ City', 'Moxy Hotels'];

/** "Inside the vibe" — female DJs behind the decks (clear, no duotone). */
export const featuredDJs = [
  { name: 'Behind the decks', img: '/img/dj-flowers.jpg' },
  { name: 'On the mic', img: '/img/djl-decks.jpg' },
  { name: 'In the mix', img: '/img/fan.jpg' },
];

/** Upcoming events — real. */
export const events = [
  {
    name: 'PLY',
    series: 'Signature Party Series debut · with BASSBOSS',
    date: 'Tue · Aug 11, 2026',
    time: '8:00–10:00 PM',
    venue: 'BASSBOSS Showroom · DJX',
    city: 'Atlantic City, NJ',
    blurb: 'An all-female DJ lineup kicks off PLY — our signature party series — presented with BASSBOSS.',
    img: '/img/event-ply.jpg',
    href: '#tickets', // TODO: ticket link
  },
];
