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
    items: [
      {
        routeLink: 'products/level1',
        label: 'Level 1',
        items: [
          {
            routeLink: 'products/level1.1',
            label: 'Level 1.1',
          },
          {
            routeLink: 'products/level1.2',
            label: 'Level 1.2',
            items: [
              {
                routeLink: 'products/level1.2.1',
                label: 'Level 1.2.1',
              },
              {
                routeLink: 'products/level1.2.2',
                label: 'Level 1.2.2',
              },
            ],
          },
        ],
      },
      {
        routeLink: 'products/level2',
        label: 'Level 2',
      },
      {
        routeLink: 'products/level3',
        label: 'Level 3',
      },
    ],
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
    items: [
      {
        routeLink: 'settings/profile',
        label: 'Profile',
      },
      {
        routeLink: 'settings/customize',
        label: 'Customize',
      },
    ],
  },
];
