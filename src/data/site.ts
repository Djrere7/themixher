/**
 * THE MIXHER — single source of truth.
 * National 501(c)(3) nonprofit · female DJ network · event series (PLY / The Set)
 * · First Spin DJ Bootcamp. Founded in Miami by DJ ReRe. Based in Miami Beach,
 * events nationwide.
 */

export const site = {
  name: 'MixHer',
  fullName: 'The MixHer',
  legalName: 'MixHer Inc.',
  tagline: 'Setting The Tone',
  vibeline: 'Female DJs lead the vibe. All vibes welcome.',
  founded: '2023',
  founder: 'DJ ReRe',

  // One-liner + mission
  hero:
    'MixHer is a 501(c)(3) nonprofit event series and national DJ network creating stages, industry access, and culture-forward experiences for women behind the decks.',
  mission:
    'MixHer exists to put female DJs at the front of the culture — building stages, industry access, and community for women behind the decks, and funding the next generation through First Spin DJ Bootcamp.',
  whatIs:
    'MixHer is the go-to platform for female DJs, brands, venues, artists, and music lovers who want to be part of what is next in DJ culture.',

  // Contact
  email: 'info@themixher.org',
  emailHref: 'mailto:info@themixher.org',
  location: 'Founded in Miami · Based in Miami Beach, FL · Events nationwide',
  nonprofit: 'MixHer Inc. is a registered 501(c)(3) nonprofit organization.',
  taxLine: 'Sponsorships and donations are tax-deductible.',

  // Action links — TODO: wire real endpoints/URLs before go-live
  joinUrl: '/#djs', // request to join the DJ Network (form on landing)
  sponsorUrl: '/sponsor-mixher',
  sponsorKitUrl: '/sponsor-mixher#request-kit',
  firstSpinUrl: 'https://firstspindjbootcamp.carrd.co/', // external First Spin site
  bringUrl: '/#contact',
  donateUrl: 'https://www.paypal.com/donate/?hosted_button_id=3NNZ2Q6KTV676', // PayPal donation
  newsletterAction: '', // TODO: newsletter POST endpoint
  formEndpoint: '', // TODO: form service (Formspree/Tally) — falls back to mailto

  /**
   * Google Form integration — all submissions land in ONE Google Sheet.
   * To turn on: create a Google Form, then send the "pre-filled link" and
   * paste the /formResponse URL + entry IDs below. Until `action` is set,
   * forms fall back to opening the visitor's email app.
   */
  googleForm: {
    action: 'https://docs.google.com/forms/d/e/1FAIpQLScnDGj60fGI0N73xTN6RXEQmXHcccCdsR5qzB3v3WN7Et7p7A/formResponse',
    entries: {
      type: 'entry.1866583875',    // Submission type / "I am a…"
      name: 'entry.1671281563',    // Full name
      email: 'entry.423254323',    // Email
      phone: 'entry.163039677',    // Phone
      city: 'entry.909485606',     // City
      state: 'entry.202742797',    // State
      message: 'entry.282093774',  // Message
    },
  },
  // WhatsApp is gated: never link publicly. Access is granted after a request is approved.
  whatsappUrl: '', // TODO: private invite, sent to approved members only

  url: 'https://www.themixher.org',
  gaId: 'G-L8YJ5Q66ED', // Google Analytics 4 Measurement ID
  socials: {
    instagram: 'https://www.instagram.com/themixher',
    tiktok: 'https://www.tiktok.com/@themixher1',
    youtube: 'https://www.youtube.com/@themixher',
    facebook: 'https://www.facebook.com/themixher',
  },
  igHandle: '@themixher',
  tiktokHandle: '@themixher1',
};

/** Primary nav — simple, landing anchors + Sponsor page + external First Spin. */
export const nav = [
  { label: 'What We Do', href: '/#what' },
  { label: 'DJ Network', href: '/#djs' },
  { label: 'Events', href: '/#events' },
  { label: 'Shop', href: '/#shop' },
  { label: 'Sponsor', href: '/sponsor-mixher' },
  { label: 'First Spin DJ Bootcamp', href: 'https://firstspindjbootcamp.carrd.co/', external: true },
  { label: 'Contact', href: '/#contact' },
];

/** Proof-bar credibility stats. */
export const proofBar = [
  { num: '50+', label: 'DJs featured nationally & internationally' },
  { num: '70%', label: 'of attendees make a meaningful industry connection' },
  { num: '80%', label: 'of the crowd works in music, content & entertainment' },
  { num: '20K+', label: 'average monthly Instagram reach' },
  { num: '100+', label: 'new followers in a single month' },
];

/** The four pillars. */
export const pillars = [
  { key: 'PLY', title: 'PLY', sub: 'The Party Series', blurb: 'High-energy nights built around female DJs, packed rooms, and culture-forward music.', href: '/ply-party-series', accent: 'var(--orange)' },
  { key: 'Set', title: 'The Set', sub: 'The Networking Series', blurb: 'Intimate, industry-facing rooms where DJs, brands, venues, and tastemakers connect.', href: '/the-set-networking-series', accent: 'var(--orchid-deep)' },
  { key: 'Network', title: 'DJ Network', sub: 'The Hub for Female DJs', blurb: 'A national community for stages, gig-sharing, resources, and brand opportunities.', href: '/female-dj-network', accent: 'var(--purple)' },
  { key: 'FirstSpin', title: 'First Spin', sub: 'DJ Bootcamp', blurb: 'No-cost DJ education, mentorship, and entrepreneurship for youth in underserved communities.', href: '/first-spin-dj-bootcamp', accent: 'var(--lavender-deep, #b06fd0)' },
];

/** DJ ReRe founder bio. */
export const founder = {
  name: 'DJ ReRe',
  role: 'Founder · MixHer',
  bio: [
    'DJ ReRe is an international DJ with over 20 years behind the decks — a performer, connector, and culture builder who has spun everywhere from luxury events and the world’s largest cruise ships to stages for major artists including GloRilla.',
    'She’s also an entrepreneur and recruiter who owns her own entertainment company, REmixed Events, and founded MixHer to open doors for the next generation of women in music. Her passion for music and people drives everything she does — and it shows.',
  ],
};

/** Sponsor / partner logos. img = real file; others render as wordmarks. */
export const sponsors = [
  { name: 'Moxy Hotels', img: '/img/logos/moxy.png' },
  { name: 'Smartwater', img: '/img/logos/smartwater.png' },
  { name: 'Chauvet DJ', img: '/img/logos/chauvet.png' },
  { name: 'Raising Cane’s', img: '/img/logos/raisingcanes.png' },
  { name: 'Simply Pop', img: '/img/logos/simplypop.png' },
  { name: 'PrettyLittleThing', img: '/img/logos/prettylittlething.png' },
  { name: 'Monster Energy', img: '/img/logos/monster.png' },
  { name: 'BASSBOSS', img: '/img/logos/bassboss.png' },
  { name: 'DJ City', img: '/img/logos/djcity.png' },
  { name: 'Remy Martin', img: '/img/logos/remymartin.png' },
  { name: 'Serato', img: '/img/logos/serato.svg' },
  { name: 'Jamaican Mango & Lime', img: '/img/logos/mangolime.png' },
  { name: '100% Pure Cosmetics', img: '' },
];

/** Sponsorship opportunity types. */
export const sponsorTypes = [
  'Event sponsorship', 'PLY sponsorship', 'The Set sponsorship', 'First Spin DJ Bootcamp sponsorship',
  'DJ scholarship sponsorship', 'Gifting partner', 'Beverage partner', 'Fashion / beauty partner',
  'Tech partner', 'Media partner',
];

/** Sponsor value props. */
export const sponsorValue = [
  { title: 'Music-forward reach', blurb: 'Get in front of DJs, creatives, and tastemakers at the center of the culture.' },
  { title: 'Live activations', blurb: 'Gifting moments, DJ collaborations, and branded experiences built into the night.' },
  { title: 'Content that travels', blurb: 'Social content and recaps that extend your reach far past the room.' },
  { title: 'Nonprofit-aligned', blurb: 'Tax-deductible visibility that supports women in music and youth education.' },
];

/** DJ Network member benefits. */
export const djBenefits = [
  { title: 'Apply to perform', blurb: 'Get considered for PLY, The Set, and MixHer events nationwide.' },
  { title: 'Gig-sharing', blurb: 'A network that passes real opportunities to one another.' },
  { title: 'Industry access', blurb: 'Meet execs, brands, venues, and media at The Set.' },
  { title: 'Tips & resources', blurb: 'Practical know-how to build a bookable DJ career.' },
  { title: 'Brand activations', blurb: 'Submit for paid brand collaborations and gifting moments.' },
  { title: 'Give back', blurb: 'Volunteer or mentor through First Spin DJ Bootcamp.' },
];

/** What First Spin students learn. */
export const firstSpinLearn = [
  'DJ equipment & setup', 'Music programming', 'Beatmatching & technical skills',
  'Creativity & showmanship', 'Mentorship', 'Entrepreneurship exposure',
];

/** Marquee ticker. */
export const ticker = ['Setting The Tone', 'Female DJs lead the vibe', 'PLY · The Party Series', 'The Set · Networking', 'First Spin DJ Bootcamp', 'Nationwide', 'Celebrity guests', 'Real opportunities'];

/** "Inside the vibe" — female DJs behind the decks. */
export const featuredDJs = [
  { name: 'Behind the decks', img: '/img/dj-flowers.jpg' },
  { name: 'On the mic', img: '/img/djl-decks.jpg' },
  { name: 'In the mix', img: '/img/fan.jpg' },
];

/**
 * MERCH / SHOP — physical products sold on the site.
 *
 * To take real payments, set each item's `buyUrl` to a PayPal "Buy Now"
 * button link (same idea as the Donate button). Create the buttons at
 * paypal.com → Pay & Get Paid → PayPal buttons → Create a "Buy Now" button
 * (add a "Size" option: S / M / L / XL / XXL, set price + shipping). PayPal
 * gives you a hosted_button_id — paste it into the URL below.
 * Sizes offered: S / M / L / XL. Price: $25.
 *   buyUrl: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XXXXXXXX'
 * Until buyUrl is set, the button opens a pre-filled order email as a bridge.
 */
export const merchNote = 'A portion of every sale funds First Spin DJ Bootcamp — where we give beginner DJs their first real spin at DJing.';
export const merchShipping = '+ $5 flat shipping';
/** Lifestyle "worn" shot for the shop header — DJ ReRe in the black DGAF tee. */
export const merchHero = { img: '/img/merch/tee-worn.jpg', caption: 'DJ ReRe in the black “DGAF” tee' };
export const merch = [
  {
    name: 'MixHer “DGAF” Tee',
    color: 'White',
    price: '$25',
    sizes: 'S – XL',
    blurb: 'Get money. Stay pretty. Handle your business. Enjoy life. Stay sexy. & DGAF. The MixHer mantra on a premium unisex tee.',
    img: '/img/merch/tee-white.jpg',
    buyUrl: 'https://www.paypal.com/instantcommerce/checkout/N6NR25T9HKJP6', // PayPal: "MixHer DGAF Tee White"
  },
  {
    name: 'MixHer “DGAF” Tee',
    color: 'Black',
    price: '$25',
    sizes: 'S – XL',
    blurb: 'The signature MixHer mantra tee in black — brand-orchid & orange accents. Premium unisex fit.',
    img: '/img/merch/tee-black.jpg',
    buyUrl: 'https://www.paypal.com/instantcommerce/checkout/F7GLPUG9K9DDA', // PayPal: "MixHer DGAF Tee" (black)
  },
];
/** Bundle deal — any 2 tees. Create a separate PayPal Buy Now button ($45 + shipping). */
export const merchBundle = {
  name: 'The Duo — Any 2 Tees',
  price: '$45',
  save: 'Save $5',
  sizes: 'S – XL',
  blurb: 'Grab both colorways (or two of your favorite) and save. Mix or match black & white, pick your sizes at checkout.',
  buyUrl: 'https://www.paypal.com/instantcommerce/checkout/8CVQSAWDRZKEY', // PayPal: "MixHer DGAF The Duo (2 tees)"
};

/** Upcoming events. */
export const events = [
  {
    slug: 'ply-bassboss-atlantic-city-2026',
    name: 'PLY',
    series: 'PLY',
    seriesLabel: 'Party Series debut · with BASSBOSS',
    date: 'Tue · Aug 11, 2026',
    time: '8:00–10:00 PM',
    venue: 'BASSBOSS Showroom · DJX',
    city: 'Atlantic City, NJ',
    djs: 'All-female DJ lineup',
    blurb: 'An all-female DJ lineup kicks off PLY — our signature party series — presented with BASSBOSS.',
    img: '/img/event-ply.jpg',
    href: '#tickets', // TODO: ticket link
  },
];
