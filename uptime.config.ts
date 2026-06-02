import { PageConfig, WorkerConfig } from './types/config'

// This controls the look of your public status page dashboard
export const pageConfig: PageConfig = {
  title: "Status",
  links: [{ link: 'https://github.com/marmocc', label: 'GitHub' }],
  showSummary: false,
}

// This controls the background worker that pings your tunnel
export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'aion_tunnel',
      name: 'Tunnel to AION',
      method: 'GET',
      target: 'https://tunnel.marmo.cc/ready',
      timeout: 10000,

      statusPageLink: 'https://dash.marmo.cc',
      tooltip: 'AION Dashboard',
    },
  ],
}

export const maintenances: any[] = []
