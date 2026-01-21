export type StateCode = 'CA'

export type IncentiveStatus = 'open' | 'limited' | 'paused'

export interface IncentiveSource {
  label: string
  url: string
}

export interface StateIncentive {
  stateCode: StateCode
  stateName: string
  status: IncentiveStatus
  lastVerified: string // YYYY-MM-DD
  summary: string
  sources: IncentiveSource[]
}

export const incentives: Record<StateCode, StateIncentive> = {
  CA: {
    stateCode: 'CA',
    stateName: 'California',
    status: 'limited',
    lastVerified: '2026-01-19',
    summary: 'California heat pump rebates are currently limited and vary by region. Some state and utility-run programs remain active, but funding caps, pauses, or waitlists apply in many areas. Availability depends on where you live and which utility serves your home.',
    sources: [
      {
        label: 'California Energy Commission',
        url: 'https://www.energy.ca.gov/'
      }
    ]
  }
}

// Helper to format dates
export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

// Check if data is stale (> 30 days old)
export function isStale(lastVerified: string): boolean {
  const verifiedDate = new Date(lastVerified + 'T00:00:00')
  const today = new Date()
  const diffTime = today.getTime() - verifiedDate.getTime()
  const diffDays = diffTime / (1000 * 60 * 60 * 24)
  return diffDays > 30
}

// Get display status (force to limited if stale)
export function getDisplayStatus(incentive: StateIncentive): {
  status: IncentiveStatus
  isStale: boolean
} {
  const stale = isStale(incentive.lastVerified)
  return {
    status: stale ? 'limited' : incentive.status,
    isStale: stale
  }
}
