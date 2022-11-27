export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Constructions',
    icon: 'box',
    items: [
      {
        text: 'Visió general',
        path: '/builds-overview',
        icon: 'checklist'
      },
      {
        text: 'Evolució',
        path: '/builds_evolution',
        icon: 'chart'
      },
      {
        text: 'Configuració',
        path: '/builds_config',
        icon: 'preferences'
      }
    ]
  },
  {
    text: 'Desplegaments',
    icon: 'video',
    items: [
      {
        text: 'Visió general',
        path: '/deploys-overview',
        icon: 'checklist'
      },
      {
        text: 'Evolució',
        path: '/deployments_evolution',
        icon: 'chart'
      },
      {
        text: 'Configuració',
        path: '/deployments_config',
        icon: 'preferences'
      }
    ]
  },
  {
    text: 'Anàlisis codi',
    icon: 'check',
    items: [
      {
        text: 'Visió general',
        path: '/analysis_overview',
        icon: 'checklist'
      },
      {
        text: 'Evolució',
        path: '/analysis_evolution',
        icon: 'chart'
      },
      {
        text: 'Configuració',
        path: '/analysis_config',
        icon: 'preferences'
      }
    ]
  },
  {
    text: 'Versions',
    icon: 'bookmark',
    items: [
      {
        text: 'Visió general',
        path: '/versions_overview',
        icon: 'checklist'
      },
      {
        text: 'Evolució',
        path: '/versions_comparison',
        icon: 'chart'
      },
      {
        text: 'Configuració',
        path: '/versions_config',
        icon: 'preferences'
      }
    ]
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      }
    ]
  }
];
