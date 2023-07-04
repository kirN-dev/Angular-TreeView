import { INavbarData } from '../models/helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'far fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'far fa-box-open',
    label: 'Products',
  },
  {
    routeLink: 'statistics',
    icon: 'far fa-chart-bar',
    label: 'Statistics',
  },
  {
    routeLink: 'coupens',
    icon: 'far fa-tags',
    label: 'Coupens',
    items: [
      {
        routeLink: 'coupens/list',
        label: 'List Coupens',
      },
      {
        routeLink: 'coupens/create',
        label: 'Create Coupens',
      },
    ],
  },
  {
    routeLink: 'pages',
    icon: 'far fa-file',
    label: 'Pages',
  },
  {
    routeLink: 'media',
    icon: 'far fa-camera',
    label: 'Media',
  },
  {
    routeLink: 'settings',
    icon: 'far fa-cog',
    label: 'Settings',
  },
];
