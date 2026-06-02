import { PageConfig, WorkerConfig } from './types/config'

// This controls the look of your public status page dashboard
export const pageConfig: PageConfig = {
  title: "Status",
  links: [
    { link: 'https://dash.marmo.cc', label: 'Dashboard', highlight: true },
    { link: 'https://github.com/marmocc', label: 'GitHub' },
  ],
}

// This controls the background worker that pings your tunnel
export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'aion_tunnel',
      name: 'AION Server Connectivity',
      method: 'GET',
      target: 'https://tunnel.marmo.cc/ready',
      timeout: 10000,
    },
  ],
}

export const maintenances: any[] = []
