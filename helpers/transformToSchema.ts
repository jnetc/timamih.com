// Types
import type { DataType, Employees } from '@Types';

export function createSchema(data: DataType) {
  const employees = new Set<Employees>();

  for (const team of data.whatweoffer.services) {
    for (const member of team.teammates) {
      const obj = {
        '@type': 'Person',
        name: member.title,
        jobTitle: member.proff,
        description: member.description,
        image: member.avatar.url,
      };
      employees.add(obj);
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Timamih',
    url: 'https://www.timamih.com',
    logo: 'https://www.timamih.com/icons/icon-512x512.png',
    sameAs: ['tg://resolve?domain=timamih_com', 'https://wa.me/358453491091', 'https://www.instagram.com/timamih_mainostoimisto'],

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hitsaajankatu 6',
      addressLocality: 'Helsinki',
      addressRegion: 'Uusimaa',
      postalCode: '00810',
      addressCountry: 'Finland',
    },

    employees: [...Array.from(employees)],
  };
  return schema;
}
