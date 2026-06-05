import { PageConfig, WorkerConfig } from './types/config'

export const pageConfig: PageConfig = {
  title: "Status",
  links: [{ link: 'https://github.com/marmocc/status.marmo.cc', label: 'Source' }],
  group: {
    'Cloudflare': [ 'pages_status', 'pages_portfolio' ],
    'AION': ['aion_tunnel', 'aion_files' ],
  },
}

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'pages_status',
      name: 'Status',
      method: 'GET',
      target: 'https://status.marmo.cc',
      statusPageLink: 'https://status.marmo.cc',
      tooltip: 'Status',
    },
    {
      id: 'pages_portfolio',
      name: 'Portfolio',
      method: 'GET',
      target: 'https://marmo.cc',
      statusPageLink: 'https://marmo.cc',
      tooltip: 'Portfolio',
    },
    {
      id: 'aion_tunnel',
      name: 'Tunnel',
      method: 'GET',
      target: 'https://tunnel.marmo.cc/ready',
    },
    {
      id: 'aion_files',
      name: 'Files',
      method: 'GET',
      target: 'https://files.marmo.cc/health',
      statusPageLink: 'https://files.marmo.cc',
      tooltip: 'Files',
    },
  ],
}

export const maintenances: any[] = []
