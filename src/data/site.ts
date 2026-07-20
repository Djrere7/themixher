/**
 * THE MIXHER — single source of truth for site-wide content.
 * MixHer is an independent Miami-founded 501(c)(3) nonprofit.
 * Edit copy, links, experiences, tiers here. Pages read from this.
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
    'The MixHer is a Miami-founded 501(c)(3) nonprofit spotlighting female DJs through three signature experiences — PLY, our music & culture series; The Set, our networking series; and First Spin, our youth DJ education initiative.',
  elevatorPitch:
    'MixHer is a nonprofit organization spotlighting female DJs through three signature experiences: PLY, our signature music and culture series; The Set, our signature networking series; and First Spin, our youth DJ education initiative.',
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
  plylistUrl: '#plylist', // TODO: PLYLIST signup (Mailchimp / Beehiiv) — the insider list
  communityUrl: '#community', // TODO: WhatsApp / community invite link (PLYRS)
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
  { label: 'PLY', href: '/ply' },
  { label: 'The Set', href: '/the-set' },
  { label: 'First Spin', href: '/first-spin' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Contact', href: '/contact' },
];

/** The three signature experiences — MixHer's ecosystem. */
export const experiences = [
  {
    key: 'PLY',
    href: '/ply',
    label: 'Music & Culture Series',
    tagline: 'Press PLY.',
    blurb:
      'MixHer’s signature music-first experiences where female DJs lead the vibe — day parties, rooftops, club nights, Art Week, coffee-shop takeovers, and brand activations. Defined by the experience, not the venue.',
    accent: 'var(--orange)',
  },
  {
    key: 'The Set',
    href: '/the-set',
    label: 'Networking Series',
    tagline: 'Where connections are made.',
    blurb:
      'Intentional spaces where female DJs, creatives, brands, venue partners, media, and music leaders build meaningful relationships — mixers, listening sessions, workshops, fireside chats, and mentor meetups.',
    accent: 'var(--orchid)',
  },
  {
    key: 'First Spin',
    href: '/first-spin',
    label: 'Youth DJ Education',
    tagline: 'The next generation.',
    blurb:
      'MixHer’s youth DJ education initiative — developing the next generation of female DJs through education, mentorship, creativity, and access. Free classes and real gear for girls starting out.',
    accent: 'var(--purple)',
  },
];

/** Mission pillars — what MixHer creates opportunity through. */
export const pillars = [
  { key: 'Music', blurb: 'Female DJs on real stages, leading every vibe — the sound of Miami and beyond.' },
  { key: 'Culture', blurb: 'Culture-forward experiences that welcome people from every background. All vibes welcome.' },
  { key: 'Networking', blurb: 'Intentional rooms where DJs, brands, venues, media, and music leaders connect.' },
  { key: 'Education', blurb: 'Access, mentorship, and free DJ education building the next generation of women behind the decks.' },
];

/** Audience "paths" — the hub routing block. */
export const paths = [
  { key: 'DJs', title: 'For Female DJs', blurb: 'Perform at PLY, connect at The Set, learn through First Spin, and get booked.', cta: 'Join the community', href: '/ply', accent: 'var(--orchid-deep)' },
  { key: 'Sponsors', title: 'For Sponsors & Brands', blurb: 'Reach a culture-forward audience and support women in music — tax-deductibly.', cta: 'Become a sponsor', href: '/sponsors', accent: 'var(--orange)' },
  { key: 'Venues', title: 'For Venues & Partners', blurb: 'Program a signature female-led night with vetted, professional DJ talent.', cta: 'Partner with us', href: '/contact', accent: 'var(--purple)' },
];

/** Headline stats. */
export const stats = [
  { num: '25+', label: 'Female DJs at launch' },
  { num: '2023', label: 'Founded in Miami' },
  { num: '3', label: 'Signature experiences' },
  { num: '501(c)(3)', label: 'Registered nonprofit' },
];

/** PLYRS community offerings (PLY page). */
export const community = [
  { title: 'Perform at PLY', blurb: 'Get slotted for day parties, rooftops, club nights, and brand activations across Miami.' },
  { title: 'Join the PLYRS', blurb: 'Our community of women behind the decks — support, callouts, and real connection.' },
  { title: 'The PLYLIST', blurb: 'The insider list: first access to events, opportunities, and drops before anyone else.' },
  { title: 'Mentorship', blurb: 'Guidance from seasoned DJs on booking, branding, technique, and the business.' },
  { title: 'Industry Access', blurb: 'Direct connection to promoters, venues, media, and label executives at The Set.' },
  { title: 'PLYBACK', blurb: 'Recap content and coverage that extends your reach far past the room.' },
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
  { title: 'Activate inside the energy', blurb: 'Custom brand moments, giveaways, and photo experiences built into a live PLY experience — not bolted on.' },
  { title: 'Tax-deductible impact', blurb: 'Back a 501(c)(3) nonprofit advancing women in music while meeting your brand and CSR goals.' },
  { title: 'Content that travels', blurb: 'Social shout-outs, PLYBACK recaps, and on-site capture extend your reach well past the room.' },
];

/** Marquee ticker words. */
export const ticker = ['Female DJs lead the vibe', 'All vibes welcome', 'Press PLY', 'The Set', 'First Spin', 'Setting the Tone', 'Miami & beyond'];

/** Press / recognition. */
export const press = ['Rolling Out', 'Nexus Radio', 'Miami Art Week', 'Gantt Center', 'Nightlife & Culture Press'];
