/**
 * THE MIXHER — single source of truth for the MAIN nonprofit website.
 * MixHer is an independent Miami-founded 501(c)(3) nonprofit.
 *
 * NOTE: PLY, The Set, and First Spin are SEPARATE labels/brands, built later —
 * keep them out of this main site for now.
 *
 * Action links marked TODO need real URLs from the client before go-live.
 */

export const site = {
  name: 'The MixHer',
  legalName: 'MixHer Inc.',
  tagline: 'Female DJs lead the vibe. All vibes welcome.',
  crestTagline: 'Setting the Tone',
  hashtag: '#SettingTheTone',
  founded: '2023',
  city: 'Miami, FL',
  category: 'The nonprofit platform for female DJs',
  coreSentence:
    'A Miami-born nonprofit and community putting female DJs at the front of the party — real events, real bookings, real opportunities.',
  brandVision:
    'MixHer is a Miami-founded 501(c)(3) nonprofit dedicated to creating opportunities for female DJs through music, culture, networking, and education. Every MixHer experience exists to spotlight female DJs while creating unforgettable experiences that welcome people from every background.',

  // Contact
  email: 'themixher@remixedeventsllc.com',
  emailHref: 'mailto:themixher@remixedeventsllc.com',
  phone: '786-910-2799',
  phoneHref: 'tel:+17869102799',
  address: 'Miami, Florida',

  // Nonprofit status
  nonprofit: 'MixHer Inc. is a Miami-founded 501(c)(3) nonprofit organization.',
  taxLine: 'Donations are tax-deductible to the fullest extent allowed by law.',
  // TODO: add EIN for donation receipts before go-live.

  // Action links — REPLACE TODOs with real URLs
  donateUrl: '#donate', // TODO: donation platform (Givebutter / Zeffy / PayPal Giving)
  sponsorUrl: '/sponsors',
  communityUrl: '#join', // TODO: WhatsApp / community invite link
  eventsUrl: '#events', // TODO: Eventbrite organizer URL
  applyUrl: '#apply', // TODO: DJ / performance application form
  newsletterAction: '', // TODO: newsletter POST endpoint

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

/** What MixHer does — general, no sub-label names. */
export type Offering = { tag: string; title: string; blurb: string };
export const offerings: Offering[] = [
  { tag: '01', title: 'Live DJ Showcases', blurb: 'Female DJs on real stages.' },
  { tag: '02', title: 'Networking Mixers', blurb: 'Where careers get made.' },
  { tag: '03', title: 'Day Parties & Rooftops', blurb: 'High-vibe, all vibes welcome.' },
  { tag: '04', title: 'Brand Activations', blurb: 'Your brand inside the energy.' },
  { tag: '05', title: 'Community & Mentorship', blurb: 'Support that gets you booked.' },
  { tag: '06', title: 'Real Opportunities', blurb: 'Gigs, connections, exposure.' },
];

/** "Inside the vibe" — real MixHer event photos (duotone). */
export const featuredDJs = [
  { name: 'Live sets', handle: '', img: '/img/djl-decks.jpg' },
  { name: 'Real connections', handle: '', img: '/img/djl-smile.jpg' },
  { name: 'On the mic', handle: '', img: '/img/djl-speaker.jpg' },
  { name: 'Every vibe', handle: '', img: '/img/djl-mic.jpg' },
];

/** Mission pillars. */
export const pillars = [
  { key: 'Music', blurb: 'Female DJs on real stages, leading every vibe — the sound of Miami and beyond.' },
  { key: 'Culture', blurb: 'Culture-forward experiences that welcome people from every background. All vibes welcome.' },
  { key: 'Networking', blurb: 'Intentional rooms where DJs, brands, venues, media, and music leaders connect.' },
  { key: 'Community', blurb: 'A supportive network that champions women behind the decks and lifts the next generation.' },
];

/** Audience paths — dual audience: DJs + venues/brands. */
export const paths = [
  { key: 'DJs', title: 'For Female DJs', blurb: 'You’re not alone. Join a community that books you, backs you, and puts you on stage.', cta: 'Join the community', href: '/community', accent: 'var(--orchid-deep)' },
  { key: 'Venues', title: 'For Venues & Brands', blurb: 'Tap a ready-made community and put female DJs at the forefront of your next event.', cta: 'Partner with us', href: '/sponsors', accent: 'var(--orange)' },
];

/** Headline stats. */
export const stats = [
  { num: '25+', label: 'Female DJs at launch' },
  { num: '2023', label: 'Founded in Miami' },
  { num: '250+', label: 'At our Art Week debut' },
  { num: '501(c)(3)', label: 'Registered nonprofit' },
];

/** MixHer community offerings (Community page). */
export const community = [
  { title: 'Performance Opportunities', blurb: 'Get slotted for showcases, mixers, and brand activations across South Florida and beyond.' },
  { title: 'The Community', blurb: 'Our group chat for gigs, gear talk, callouts, and real-time support between women behind the decks.' },
  { title: 'Mentorship', blurb: 'Guidance from seasoned DJs on booking, branding, technique, and navigating the industry.' },
  { title: 'Tips & Resources', blurb: 'Practical know-how on rates, contracts, equipment, and building a bookable DJ career.' },
  { title: 'Networking', blurb: 'Direct access to promoters, venues, media, and label executives at MixHer events.' },
  { title: 'Visibility', blurb: 'Showcases and media moments that put your name and your sound in front of the industry.' },
];

/** Sponsorship tiers (from MixHer sponsorship deck). */
export const tiers = [
  { name: 'Basic Blue', price: '$500', accent: 'var(--purple)', perks: ['Recognition in the event program and promotional materials', 'Logo placement on event signage'] },
  { name: 'Platinum Purple', price: '$1,000', accent: 'var(--orchid-deep)', featured: true, perks: ['Everything in Basic Blue', 'Verbal acknowledgment during the event', 'Logo placement on the MixHer website'] },
  { name: 'Deluxe Diamond', price: '$3,000', accent: 'var(--orange)', perks: ['Everything in Platinum Purple', 'Exclusive sponsorship of a signature moment', 'Social shout-outs before, during & after the event', 'On-site display of promotional materials'] },
];

/** Sponsor value props. */
export const sponsorValue = [
  { title: 'Culture-forward reach', blurb: 'Access an engaged audience of DJs, creatives, and tastemakers at the center of Miami’s music scene.' },
  { title: 'Activate inside the energy', blurb: 'Custom brand moments, giveaways, and photo experiences built into a live event — not bolted on.' },
  { title: 'Tax-deductible impact', blurb: 'Back a 501(c)(3) nonprofit advancing women in music while meeting your brand and CSR goals.' },
  { title: 'Content that travels', blurb: 'Social shout-outs, recap content, and on-site capture extend your reach well past the room.' },
];

/** Marquee ticker words. */
export const ticker = ['Female DJs lead the vibe', 'All vibes welcome', 'Live DJ Showcases', 'Networking Mixers', 'Culture-Forward Events', 'Setting the Tone', 'Miami & beyond'];

/** Press / recognition. */
export const press = ['Rolling Out', 'Nexus Radio', 'Miami Art Week', 'Gantt Center', 'Nightlife & Culture Press'];
