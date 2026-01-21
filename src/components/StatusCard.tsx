'use client'

import { useState, useEffect } from 'react'
import type { StateIncentive, IncentiveStatus } from '@/data/incentives'
import { formatDate, isStale } from '@/data/incentives'

interface StatusCardProps {
  incentive: StateIncentive
}

function getStatusConfig(status: IncentiveStatus) {
  switch (status) {
    case 'open':
      return {
        icon: '🟢',
        label: 'Open',
        bgClass: 'bg-green-50',
        borderClass: 'border-green-200',
        textClass: 'text-green-800'
      }
    case 'limited':
      return {
        icon: '🟡',
        label: 'Limited / Region-Dependent',
        bgClass: 'bg-yellow-50',
        borderClass: 'border-yellow-200',
        textClass: 'text-yellow-800'
      }
    case 'paused':
      return {
        icon: '🔴',
        label: 'Paused / Closed',
        bgClass: 'bg-red-50',
        borderClass: 'border-red-200',
        textClass: 'text-red-800'
      }
  }
}

export default function StatusCard({ incentive }: StatusCardProps) {
  const [displayStatus, setDisplayStatus] = useState<IncentiveStatus>(incentive.status)
  const [stale, setStale] = useState(false)

  useEffect(() => {
    const isDataStale = isStale(incentive.lastVerified)
    setStale(isDataStale)
    setDisplayStatus(isDataStale ? 'limited' : incentive.status)
  }, [incentive])

  const config = getStatusConfig(displayStatus)
  const formattedDate = formatDate(incentive.lastVerified)

  return (
    <div className={`rounded-xl border-2 ${config.borderClass} ${config.bgClass} p-6 md:p-8`}>
      {/* Status Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{config.icon}</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{incentive.stateName}</h2>
          <p className={`font-semibold ${config.textClass}`}>{config.label}</p>
        </div>
      </div>

      {/* Stale Warning */}
      {stale && (
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
          <p className="text-yellow-800 text-sm font-medium">
            ⚠️ Status may be outdated — last verified {formattedDate}
          </p>
        </div>
      )}

      {/* Timestamps */}
      <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600">
        <div>
          <span className="font-medium">As of:</span> {formattedDate}
        </div>
        <div>
          <span className="font-medium">Last verified:</span> {formattedDate}
        </div>
      </div>

      {/* Summary */}
      <p className="text-gray-700 mb-6">
        {incentive.summary}
      </p>

      {/* Sources */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-500 mb-2">Sources:</p>
        <div className="flex flex-wrap gap-3">
          {incentive.sources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-600 hover:underline"
            >
              {source.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
