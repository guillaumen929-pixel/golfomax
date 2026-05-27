export const en = {
  nav: {
    menu: 'Menu',
    simulateurs: 'Simulators',
    evenements: 'Events',
    infos: 'Info & Contact',
    book: 'BOOK NOW',
    langToggle: 'FR'
  },
  hero: {
    eyebrow: "Candiac's Premier Golf Experience",
    word1: 'PLAY.',
    word2: 'DRINK.',
    word3: 'VIBE.',
    sub: 'Indoor golf simulators, full bar, live sports — open 8am to 3am · 7 days a week',
    cta: 'Book Your Lane',
    ctaSub: 'Walk-ins welcome · 18+'
  },
  simulatorsTeaser: {
    eyebrow: 'Our Simulators',
    headline: "Play the world's greatest courses.",
    desc: "Full Swing — the world's most accurate golf simulator technology. Augusta, Pebble Beach, St Andrews. Indoors, year-round.",
    cta: 'See Packages'
  },
  barTeaser: {
    eyebrow: 'The Bar',
    headline: 'Cold. Poured. Ready.',
    desc: 'Draft beers, signature cocktails, spirits and more. The perfect bar to complement your round.',
    cta: 'See Menu',
    marquee: 'DRAFT BEER · COCKTAILS · SPIRITS · WINE · NON-ALCOHOLIC · DRAFT BEER · COCKTAILS · SPIRITS · WINE · NON-ALCOHOLIC ·'
  },
  sportsBanner: {
    headline: 'EVERY GAME. EVERY SPORT. EVERY SCREEN.',
    sub: 'NHL · NFL · NBA · MLB · UEFA · MLS and more'
  },
  features: {
    eyebrow: 'Why GolfoMax',
    headline: 'Everything Under One Roof',
    items: [
      { title: 'Full Swing Simulators', desc: 'The most accurate technology. Play any course in the world.' },
      { title: 'Full Bar', desc: 'Cold beers, cocktails and spirits. Your glass always full.' },
      { title: 'Live Sports', desc: 'All major leagues on big screens throughout the venue.' },
      { title: 'Events & Groups', desc: 'Corporate, stag, birthday — we handle everything.' },
      { title: 'Pool & Games', desc: 'Pool table, table games and lottery machines. 18+.' },
      { title: 'Bring Your Food', desc: 'Order from your favourite restaurant and eat at your bay.' }
    ]
  },
  infoStrip: {
    address: '19 Boul. Montcalm N, Candiac, QC',
    phone: '450-907-GOLF',
    hours: 'Mon–Sun 8am–3am',
    age: '18+ · Valid ID required'
  },

  menu: {
    eyebrow: 'GolfoMax Bar',
    headline: 'The Menu',
    sub: "Selection of beers, cocktails, spirits and more. Everything you need for a great night.",
    categories: [
      {
        id: 'beers',
        title: 'Draft Beers',
        items: [
          { name: 'Domestics', price: '$6', desc: 'Molson, Labatt, Coors Light' },
          { name: 'Imports', price: '$7', desc: 'Heineken, Corona, Stella Artois' },
          { name: 'Craft', price: '$8', desc: 'Rotating local selection' },
          { name: 'Pitcher (60 oz)', price: '$22', desc: 'Perfect for the group' }
        ]
      },
      {
        id: 'cocktails',
        title: 'Cocktails',
        items: [
          { name: 'Long Island Iced Tea', price: '$12', desc: 'Vodka, gin, rum, triple sec, cola' },
          { name: 'Margarita', price: '$11', desc: 'Tequila, Cointreau, lime' },
          { name: 'Mojito', price: '$11', desc: 'White rum, mint, lime, soda' },
          { name: 'Weekly Special', price: '$10', desc: 'Ask at the bar' }
        ]
      },
      {
        id: 'spirits',
        title: 'Spirits & Wine',
        items: [
          { name: 'Whisky & Bourbon', price: 'From $8', desc: "Jack Daniel's, Crown Royal, Jameson" },
          { name: 'Vodka', price: 'From $7', desc: 'Absolut, Grey Goose, Ketel One' },
          { name: 'Gin', price: 'From $7', desc: "Tanqueray, Hendrick's, Bombay" },
          { name: 'Wine by the glass', price: 'From $8', desc: 'Red, white, rosé — monthly selection' }
        ]
      },
      {
        id: 'nonalcoholic',
        title: 'Non-Alcoholic',
        items: [
          { name: 'Soft Drinks', price: '$3', desc: 'Coca-Cola, Sprite, Ginger Ale' },
          { name: 'Red Bull', price: '$5', desc: 'Regular or Sugar Free' },
          { name: 'Sparkling Water', price: '$3', desc: 'Still or sparkling' },
          { name: 'Juice', price: '$4', desc: 'Orange, cranberry, pineapple' }
        ]
      }
    ],
    note: 'Menu and prices subject to change without notice. Drink responsibly. 18+.'
  },

  simulateurs: {
    eyebrow: 'GolfoMax Simulators',
    headline: "PLAY THE WORLD'S GREATEST COURSES.",
    sub: "Full Swing — the technology used by the pros. Augusta, Pebble Beach, St Andrews — indoors, year-round in Candiac.",
    techTitle: 'Full Swing Technology',
    techDesc: "Our simulators use Full Swing technology, chosen by Tiger Woods and the world's top PGA pros. Infrared sensors, instant feedback, ultra-realistic ball physics on over 85 courses.",
    stats: [
      { value: '85+', label: 'Courses available' },
      { value: '6', label: 'Players per bay' },
      { value: '4K', label: 'Screen resolution' },
      { value: '240fps', label: 'Capture speed' }
    ],
    bays: {
      eyebrow: 'Our Bays',
      headline: 'Every Bay, an Experience',
      items: [
        { name: 'Standard Bay', capacity: '1–4 players', desc: '4K screen, full Full Swing simulator, bar delivery access.' },
        { name: 'Premium Bay', capacity: '1–6 players', desc: 'Larger space, surround sound, perfect for groups.' },
        { name: 'Private Bay', capacity: 'Up to 10 people', desc: 'Reserved for your group. Ideal for events.' }
      ]
    },
    pricing: {
      eyebrow: 'Pricing',
      headline: 'Per Person · Per Round',
      currentSeason: 'Current Season',
      seasons: [
        {
          id: 'summer',
          name: 'Summer',
          dates: 'May 18 – Nov 18',
          items: [
            { label: '9 Holes', price: '$5.75', unit: '/ person' },
            { label: '18 Holes', price: '$11.50', unit: '/ person' },
          ]
        },
        {
          id: 'winter',
          name: 'Winter',
          dates: 'Nov 19 – May 17',
          items: [
            { label: '9 Holes', price: '$11.50', unit: '/ person' },
            { label: '18 Holes', price: '$23.00', unit: '/ person' },
          ]
        }
      ]
    },
    howItWorks: {
      eyebrow: 'How It Works',
      headline: 'Simple as 1, 2, 3',
      steps: [
        { num: '01', title: 'Book Online', desc: "Book in advance or walk in — we'll take care of the rest." },
        { num: '02', title: 'Grab a Drink', desc: 'Head to the bar, order your favourites and settle in.' },
        { num: '03', title: 'Play', desc: 'Choose your course, step up to the tee and go. Our team will guide you.' }
      ]
    },
    cta: {
      headline: 'Ready to Play?',
      sub: 'Book your lane now. Walk-ins always welcome.',
      btn: 'Book a Lane'
    },
    form: {
      eyebrow: 'Online Booking',
      headline: 'Reserve Your Lane',
      sub: "Fill out the form below and we'll confirm by email shortly.",
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      date: 'Preferred date',
      time: 'Preferred time',
      players: 'Number of players (max 6)',
      package: 'Round',
      packagePlaceholder: 'Select a round',
      packageOptions: ['9 Holes', '18 Holes'],
      message: 'Special requests (optional)',
      submit: 'Confirm Booking',
      success: "Booking received! We'll confirm by email shortly.",
      note: 'Walk-ins always welcome — this form guarantees your lane.'
    }
  },

  evenements: {
    eyebrow: 'Group Events',
    headline: 'MAKE IT UNFORGETTABLE.',
    sub: 'Corporate events, stag nights, birthdays — we create custom experiences in Candiac.',
    packages: {
      eyebrow: 'Event Types',
      headline: 'For Every Occasion',
      items: [
        {
          name: 'Corporate',
          badge: 'Team Building',
          desc: 'Team building, client entertainment, office party. Private bay or full venue.',
          features: ['Custom packages', 'Bar service included', 'AV setup available', 'Corporate billing'],
          sports: ['⛳', '🏒', '⚽']
        },
        {
          name: 'Stag / Bachelor',
          badge: 'Private Party',
          desc: "An unforgettable night. Private bay, bottle service and plenty of competition.",
          features: ['Private bay', 'Group packages', 'Bottle service', 'Custom entertainment'],
          sports: ['⛳', '🎱', '🍺'],
          featured: true
        },
        {
          name: 'Birthdays',
          badge: 'Private Party',
          desc: "Celebrate big. We set up the space, you bring the crew.",
          features: ['Decoration allowed', 'Group packages', 'Personalized experience', 'Open bar available'],
          sports: ['⛳', '🎉', '🏆']
        }
      ]
    },
    tvPolicy: {
      eyebrow: 'During Your Event',
      headline: 'Your Game on the Big Screen',
      desc: "Booking an event on game night? No problem — our screens stay on. Enjoy golf AND your favourite team at the same time.",
      badge: 'Live sports included'
    },
    form: {
      eyebrow: 'Group Bookings',
      headline: 'Request a Quote',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      eventType: 'Event type',
      eventTypePlaceholder: 'Select',
      eventTypeOptions: ['Corporate', 'Stag / Bachelor', 'Birthday', 'Other'],
      groupSize: 'Group size',
      date: 'Preferred date',
      message: 'Tell us about your event',
      submit: 'Send Request',
      success: "Request received! We'll get back to you within 24 hours."
    }
  },

  infos: {
    eyebrow: 'Practical Information',
    headline: 'Come See Us.',
    sub: "Located in Candiac, QC. Walk-ins welcome — call ahead for large groups.",
    address: '19 Boul. Montcalm N',
    city: 'Candiac, QC  J5R 3L4',
    phone: '450-907-GOLF',
    email: 'info@golfomax.ca',
    hours: {
      title: 'Hours',
      rows: [
        { day: 'Monday – Sunday', hours: '8 am – 3 am' }
      ]
    },
    amenities: {
      eyebrow: 'What Makes Us Unique',
      headline: 'Everything You Need',
      items: [
        { title: 'Full Swing Simulators', desc: 'Technology used by PGA pros' },
        { title: 'Full Bar', desc: 'Beers, cocktails, spirits, wines' },
        { title: 'Live Sports', desc: 'All games on big screens' },
        { title: 'Pool Table', desc: 'Full-size table available' },
        { title: 'Lottery Machines', desc: 'Video machines available. 18+' },
        { title: 'Bring Your Food', desc: 'Outside food welcome' },
        { title: 'Free Parking', desc: 'On-site parking, no charge' },
        { title: 'Groups & Events', desc: 'Packages and private bays available' },
        { title: 'Walk-Ins Welcome', desc: 'Come anytime, subject to availability' }
      ]
    },
    rules: {
      eyebrow: 'Rules',
      headline: '18+ Entry · Valid ID Required',
      items: [
        'Valid photo ID required at entry',
        'Smart casual dress code (no cleats)',
        'Responsible consumption required',
        'Outside food permitted',
        'Reservations cancellable up to 2h before'
      ]
    },
    gettingHere: {
      eyebrow: 'Getting Here',
      headline: 'Easy Access from Montreal',
      desc: '25 minutes from downtown Montreal via Highway 15 South. Take the Candiac / Boul. Montcalm exit. Free parking on site.',
      directions: 'Get Directions'
    },
    social: {
      title: 'Follow Us'
    },
    form: {
      eyebrow: 'Got a question?',
      headline: 'Give us a call.',
      sub: 'Our team is here for you. Call us directly for any question, group booking or information.',
      note: 'Monday to Sunday · 8am – 3am'
    }
  },

  footer: {
    tagline: "Candiac's best-kept secret.",
    address: '19 Boul. Montcalm N, Candiac, QC J5R 3L4',
    phone: '450-907-GOLF',
    age: '18+ establishment. Please drink responsibly.',
    rights: '© 2026 GolfoMax. All rights reserved.',
    links: {
      privacy: 'Privacy',
      terms: 'Terms'
    }
  },

  notFound: {
    headline: '404',
    sub: 'Page not found.',
    cta: 'Back to Home'
  }
}
