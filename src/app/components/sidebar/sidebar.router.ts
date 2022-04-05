import { IMenu } from 'src/app/models/IMenu';

export const SidebarRoutes: IMenu[] = [
  {
    name: 'Get a Quote',
    title: 'Get a Quote',
    url: '/wazen/quotes',
    icon:'icon-bg get-quote'
  },
  {
    name: 'Manage Policy',
    title: 'Manage Policy',
    url: '/wazen/',
    icon: 'icon-bg manage-policy',
    children: [
      {
        name: 'Cancel Policy',
        title: 'Cancel Policy',
        url: '/wazen/',
      },
      {
        name: 'Upgrade / Replace Policy',
        title: 'Upgrade / Replace Policy',
        url: '/wazen/',
      },
      {
        name: 'Add/Delete Features',
        title: 'Add/Delete Features',
        url: '/wazen/',
      },
      {
        name: 'Renew Policy',
        title: 'Renew Policy',
        url: '/wazen/',
      },
    ],
  },
  {
    name: 'Submit Claim',
    title: 'Submit Claim',
    url: '/wazen/',
    icon: 'icon-bg submit-clamin',
    children: [
      {
        name: 'Cover Type',
        title: 'Cover Type',
        url: '/wazen/',
      },
      {
        name: 'Own Damage',
        title: 'Own Damage',
        url: '/wazen/',
      },
      {
        name: 'Third Party',
        title: 'Third Party',
        url: '/wazen/',
      },
    ],
  },
  {
    name: 'What We offer?',
    title: 'What We offer?',
    url: '/wazen/',
    icon: 'icon-bg we-offer',
  },
  {
    name: 'Who We Are?',
    title: 'Who We Are?',
    url: '/wazen/',
    icon: 'icon-bg who-we',
  },
  {
    name: 'More info',
    title: 'More info',
    url: '/wazen/',
    icon: 'icon-bg more-info',
  },
  {
    name: 'FAQs',
    title: 'FAQs',
    url: '/wazen/',
    icon: 'icon-bg faq',
  },
];
