import { SITE } from './site';

export const SEO_CONFIG = {
  baseUrl: 'https://studiosatamelia.com',
  siteName: 'Studios at Amelia',
  locale: 'en_US',
  geo: {
    region: 'US-FL',
    placename: 'Fernandina Beach, Amelia Island, Florida',
    position: `${SITE.coordinates.lat};${SITE.coordinates.lng}`,
    icbm: `${SITE.coordinates.lat}, ${SITE.coordinates.lng}`,
  },
  defaultOgImage: 'https://studiosatamelia.com/images/contact/hero-reception.jpg',
};

export const CORE_SERVICES = [
  {
    name: 'Luxury Lash Extensions',
    description:
      'Classic, Hybrid, Volume, Mega Volume, and Lash Lift styling customized to your natural eye shape in Fernandina Beach, FL.',
    serviceType: 'Eyelash Extensions & Lash Lifts',
  },
  {
    name: 'Eyebrow Styling & Lamination',
    description:
      'Professional brow lamination, custom precision tinting, and sculpting waxing in Amelia Island.',
    serviceType: 'Brow Lamination & Shaping',
  },
  {
    name: 'Dominican Blowout & Silk Press',
    description:
      'Authentic Dominican blowout techniques delivering silky smoothness, bouncy volume, and deep hair protection.',
    serviceType: 'Hair Styling & Dominican Blowouts',
  },
  {
    name: 'High-Glamour & Event Makeup',
    description:
      'Editorial, bridal, and special occasion makeup artistry tailored for longevity and radiance under any lighting.',
    serviceType: 'Makeup Artistry',
  },
  {
    name: 'Professional Photography Sessions',
    description:
      'Executive headshots, personal branding, beauty portraits, and creative milestone studio sessions in Fernandina Beach, FL.',
    serviceType: 'Portrait & Commercial Photography',
  },
  {
    name: 'Hands-on Makeup Masterclasses',
    description:
      'Private 1-on-1 lessons, self-makeup masterclasses, and group beauty workshops taught by founder Cris Emiliano.',
    serviceType: 'Beauty Education & Workshops',
  },
];

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['BeautySalon', 'HairSalon', 'LocalBusiness'],
        '@id': 'https://studiosatamelia.com/#business',
        name: 'Studios at Amelia',
        legalName: 'Studios at Amelia LLC',
        url: 'https://studiosatamelia.com',
        logo: 'https://studiosatamelia.com/images/shared/studios-at-amelia-logo.jpg',
        image: [
          'https://studiosatamelia.com/images/contact/hero-reception.jpg',
          'https://studiosatamelia.com/images/classes/hero-vanity.jpg',
          'https://studiosatamelia.com/images/about/hero-cris.jpg',
        ],
        description:
          'Premier luxury multi-concept studio in Fernandina Beach, Amelia Island, FL. Specializing in lash extensions, Dominican blowouts, brow lamination, makeup artistry, photography, and masterclasses.',
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: '$$',
        currenciesAccepted: 'USD',
        paymentAccepted: 'Cash, Credit Card, Apple Pay, Debit Card',
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address1,
          addressLocality: 'Fernandina Beach',
          addressRegion: 'FL',
          postalCode: '32034',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.coordinates.lat,
          longitude: SITE.coordinates.lng,
        },
        hasMap: SITE.mapsUrl,
        areaServed: [
          { '@type': 'City', name: 'Fernandina Beach' },
          { '@type': 'AdministrativeArea', name: 'Amelia Island' },
          { '@type': 'City', name: 'Yulee' },
          { '@type': 'AdministrativeArea', name: 'Nassau County' },
          { '@type': 'City', name: 'Jacksonville' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday'],
            description: 'By Appointment Only',
          },
        ],
        founder: {
          '@type': 'Person',
          name: 'Cris Emiliano',
          jobTitle: 'Founder, Master Lash Artist, Educator & Photographer',
          image: 'https://studiosatamelia.com/images/about/hero-cris.jpg',
        },
        sameAs: [
          SITE.socials.instagram,
          SITE.socials.facebook,
          SITE.socials.tiktok,
          SITE.socials.pinterest,
          SITE.socials.youtube,
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Studios at Amelia Services & Classes',
          itemListElement: CORE_SERVICES.map((srv, idx) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: srv.name,
              description: srv.description,
              serviceType: srv.serviceType,
            },
            position: idx + 1,
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://studiosatamelia.com/#website',
        url: 'https://studiosatamelia.com',
        name: 'Studios at Amelia',
        publisher: {
          '@id': 'https://studiosatamelia.com/#business',
        },
        inLanguage: 'en-US',
      },
    ],
  };
}

export function getFaqSchema(faqList: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
