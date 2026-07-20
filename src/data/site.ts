/**
 * THE MIXHER — single source of truth for site-wide content.
 * Edit copy, links, programs, tiers here. Pages read from this.
 *
 * NOTE: action links marked TODO need real URLs from the client before go-live.
 */

export const site = {
  name: 'The MixHer',
  legalName: 'MixHer Inc.',
  tagline: 'Setting the Tone',
  mission: 'A celebration of female DJs setting the tone in the music industry.',
  hashtag: '#SettingTheTone',
  founded: '2023',
  city: 'Miami, FL',
  parentOrg: 'REmixed Events',
  category: 'The nonprofit platform for female DJs',
  coreSentence:
    'The MixHer is a Miami-born nonprofit putting women behind the decks on the main stage — producing culture-forward events, live DJ showcases, brand activations, and a national community that helps female DJs perform, connect, get booked, and be seen.',

  // Contact
  email: 'themixher@remixedeventsllc.com',
  emailHref: 'mailto:themixher@remixedeventsllc.com',
  phone: '786-910-2799',
  phoneHref: 'tel:+17869102799',
  address: '1000 5th Street, Suite 200, Miami Beach, FL 33139',

  // Nonprofit status
  nonprofit: 'MixHer Inc. is a registered Florida nonprofit corporation.',
  // TODO: confirm IRS 501(c)(3) determination + EIN before publishing hard tax-deductible claims.
  taxLine: 'Donations may be tax-deductible to the fullest extent allowed by law.',

  // Action links — REPLACE TODOs with real URLs
  donateUrl: '#donate', // TODO: donation platform (Givebutter / Zeffy / PayPal Giving)
  sponsorUrl: '/sponsors',
  whatsappUrl: '#community', // TODO: WhatsApp community invite link
  eventsUrl: '#events', // TODO: Eventbrite organizer URL
  applyUrl: '#apply', // TODO: DJ / performance application form (Google Form / Tally)
  newsletterAction: '', // TODO: newsletter POST endpoint (Mailchimp / Beehiiv embed)

  socials: {
    instagram: 'https://www.instagram.com/themixher',
    facebook: 'https://www.facebook.com/themixher',
    tiktok: 'https://www.tiktok.com/@themixher',
    youtube: 'https://www.youtube.com/@themixher',
  },

  // Related brand
  remixedUrl: 'https://www.remixedeventsllc.com',
};

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'DJ Community', href: '/community' },
  { label: 'First Spin', href: '/first-spin' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Contact', href: '/contact' },
];

/** The four MixHer mission pillars (from brand guidelines). */
export const pillars = [
  {
    key: 'Visibility',
    blurb:
      'Showcasing female DJs on renowned stages and in media — so the industry knows their names and feels the power of their beats.',
  },
  {
    key: 'Connection',
    blurb:
      'A supportive network of mentors, collaborators, and fellow female DJs — a thriving ecosystem of women in music.',
  },
  {
    key: 'Development',
    blurb:
      'Workshops, masterclasses, mentorship, and industry exposure that propel careers — plus free DJ education through First Spin.',
  },
  {
    key: 'Inspiration',
    blurb:
      'Celebrating their achievements and stories — lighting the path for the next generation of female DJs in Miami and beyond.',
  },
];

/** What MixHer produces. */
export type Offering = { tag: string; title: string; blurb: string };
export const offerings: Offering[] = [
  { tag: '01', title: 'Live DJ Showcases', blurb: 'Curated female DJ sets on real stages — the spotlight women behind the decks deserve.' },
  { tag: '02', title: 'Networking Mixers', blurb: 'Rooms full of DJs, promoters, media, venues, and label execs — where careers get made.' },
  { tag: '03', title: 'Brand Activations', blurb: 'Culture-forward experiences that put partner brands inside the energy, not beside it.' },
  { tag: '04', title: 'Podcast Moments', blurb: 'On-site interviews and content capture that extend each artist’s reach far past the room.' },
  { tag: '05', title: 'Venue Programming', blurb: 'Recurring female-led nights that give venues a signature, on-brand draw.' },
  { tag: '06', title: 'First Spin Bootcamp', blurb: 'Free DJ education for girls ages 7+ — the pipeline for the next generation.' },
];

/** Audience "paths" — the hub routing block. */
export const paths = [
  {
    key: 'DJs',
    title: 'For Female DJs',
    blurb: 'Perform, get booked, join the community, and level up through First Spin and mentorship.',
    cta: 'Join the community',
    href: '/community',
    accent: 'var(--pink-hot)',
  },
  {
    key: 'Sponsors',
    title: 'For Sponsors & Brands',
    blurb: 'Reach a culture-forward audience, activate inside the energy, and support women in music — tax-deductibly.',
    cta: 'Become a sponsor',
    href: '/sponsors',
    accent: 'var(--yellow)',
  },
  {
    key: 'Venues',
    title: 'For Venues & Partners',
    blurb: 'Program a signature female-led night and tap a network of vetted, professional DJ talent.',
    cta: 'Partner with us',
    href: '/contact',
    accent: 'var(--lavender)',
  },
];

/** Headline stats — real MixHer history. */
export const stats = [
  { num: '25+', label: 'Female DJs at launch' },
  { num: '2023', label: 'Founded in Miami' },
  { num: '7+', label: 'First Spin ages served' },
  { num: '1', label: 'Growing national movement' },
];

/** What MixHer ignites / community offerings. */
export const community = [
  { title: 'Performance Opportunities', blurb: 'Get slotted for showcases, mixers, and brand activations across South Florida and beyond.' },
  { title: 'WhatsApp Community', blurb: 'Our group chat for gigs, gear talk, callouts, and real-time support between women behind the decks.' },
  { title: 'Mentorship', blurb: 'Guidance from seasoned DJs — booking, branding, technical skills, and navigating the industry.' },
  { title: 'Tips & Resources', blurb: 'Practical know-how on rates, contracts, equipment, and building a bookable DJ career.' },
  { title: 'Networking', blurb: 'Direct access to promoters, venues, media, and label executives at MixHer events.' },
  { title: 'First Spin Access', blurb: 'Free DJ classes and equipment support for aspiring DJs starting from scratch.' },
];

/** Sponsorship tiers (from MixHer sponsorship deck). */
export const tiers = [
  {
    name: 'Basic Blue',
    price: '$500',
    accent: 'var(--purple-lite)',
    perks: [
      'Recognition in the event program and promotional materials',
      'Logo placement on event signage',
    ],
  },
  {
    name: 'Platinum Purple',
    price: '$1,000',
    accent: 'var(--pink-hot)',
    featured: true,
    perks: [
      'Everything in Basic Blue',
      'Verbal acknowledgment during the event',
      'Logo placement on the MixHer website',
    ],
  },
  {
    name: 'Deluxe Diamond',
    price: '$3,000',
    accent: 'var(--yellow)',
    perks: [
      'Everything in Platinum Purple',
      'Exclusive sponsorship of a signature moment (e.g. the DJ Dinner)',
      'Social shout-outs before, during & after the event',
      'On-site display of promotional materials',
    ],
  },
];

/** Sponsor value props. */
export const sponsorValue = [
  { title: 'Culture-forward reach', blurb: 'Access an engaged audience of DJs, creatives, and tastemakers at the center of Miami’s music scene.' },
  { title: 'Activate inside the energy', blurb: 'Custom brand moments, giveaways, and photo experiences built into a live, high-vibe event — not bolted on.' },
  { title: 'Tax-deductible support', blurb: 'Back a registered nonprofit advancing women in music while meeting your brand and CSR goals.' },
  { title: 'Content that travels', blurb: 'Social shout-outs, on-site capture, and podcast moments extend your reach well past the room.' },
];

/** Marquee ticker words. */
export const ticker = ['Setting the Tone', 'Women Behind the Decks', 'Live DJ Showcases', 'Networking Mixers', 'Brand Activations', 'First Spin', 'Miami & Beyond'];

/** Press / recognition. */
export const press = ['Rolling Out', 'Nexus Radio', 'Miami Art Week', 'Gantt Center', 'Nightlife & Culture Press'];

/** Partners shown as logos (placeholder wordmarks until real logos provided). */
export const partners = ['REmixed Events', 'Moxy South Beach', 'Girls Make Beats', 'Miami Music Week'];
