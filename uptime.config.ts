import { PageConfig, WorkerConfig } from './types/config'

export const pageConfig: PageConfig = {
  title: "Status",
  links: [{ link: 'https://github.com/marmocc/status.marmo.cc', label: 'Source' }],
  group: {
    'Cloudflare': ['pages_portfolio', 'pages_status' ],
    'AION': ['aion_tunnel', 'aion_dashboard'],
  },
}

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'pages_status',
      name: 'Status',
      method: 'GET',
      target: 'https://status.marmo.cc',
      timeout: 10000,
      statusPageLink: 'https://status.marmo.cc',
      tooltip: 'Status',
    },
    {
      id: 'pages_portfolio',
      name: 'Portfolio',
      method: 'GET',
      target: 'https://marmo.cc',
      timeout: 10000,
      statusPageLink: 'https://marmo.cc',
      tooltip: 'Portfolio',
    },
    {
      id: 'aion_tunnel',
      name: 'Tunnel',
      method: 'GET',
      target: 'https://tunnel.marmo.cc/ready',
      timeout: 10000,
    },
    {
      id: 'aion_dashboard',
      name: 'Dashboard',
      method: 'GET',
      target: 'https://dash.marmo.cc',
      timeout: 10000,
      statusPageLink: 'https://dash.marmo.cc',
      tooltip: 'Dashboard',
    },
  ],
}

export const maintenances: any[] = [
  {
    id: 'aion_backup',
    title: 'Scheduled Backups',
    description: 'AION containers are temporarily paused to be backed up.',
    
    startString: '20260603T0300',
    durationString: '5m',
    rruleString: 'FREQ=DAILY',
    monitors: ['aion_dashboard']
  }
]
