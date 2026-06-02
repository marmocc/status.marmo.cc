import { PageConfig, WorkerConfig } from './types/config'

// This controls the look of your public status page dashboard
export const pageConfig: PageConfig = {
  title: "Status",
  links: [{ link: 'https://github.com/marmocc/status.marmo.cc', label: 'GitHub' }],
  group: {
    'AION': ['aion_tunnel', 'aion_dashboard'],
  },
}

// This controls the background worker that pings your tunnel
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
