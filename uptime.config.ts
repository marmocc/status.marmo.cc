import { PageConfig, WorkerConfig } from './types/config'

export const pageConfig: PageConfig = {
  title: "Status",
  links: [{ link: 'https://github.com/marmocc/status.marmo.cc', label: 'Source' }],
  group: {
    'AION': ['aion_tunnel', 'aion_dashboard'],
  },
}

export const workerConfig: WorkerConfig = {
  monitors: [
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

export const maintenances: any[] = []
