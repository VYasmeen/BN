import { useState, useMemo } from 'react'
import HelplineBar from '../components/HelplineBar'
import OrgCard from '../components/OrgCard'
import { mockOrganisations } from '../data/mockOrganisations'

export default function Directory() {
  const [filters, setFilters] = useState({ region: 'worldwide', cost_type: null, type: null })

  const filteredOrgs = useMemo(() => {
    return mockOrganisations.filter(org => {
      if (filters.region && filters.region !== 'worldwide' && org.region !== filters.region) {
        return false
      }
      if (filters.cost_type && org.cost_type !== filters.cost_type) {
        return false
      }
      if (filters.type && org.type !== filters.type) {
        return false
      }
      return true
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-gray-50">
      <HelplineBar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bloom NOW Directory</h1>
        <p className="text-gray-600 mb-6">
          Browse our verified mental health services directory. For advanced search with multiple filters, visit our <a href="/search" className="text-blue-600 hover:underline">Search page</a>.
        </p>

        {/* Quick Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Filter</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Region Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select
                value={filters.region}
                onChange={(e) => setFilters({ ...filters, region: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="worldwide">🌍 Worldwide</option>
                <option value="africa">🌍 Africa</option>
                <option value="asia">🌏 Asia</option>
                <option value="europe">🌍 Europe</option>
                <option value="north_america">🌎 North America</option>
                <option value="south_america">🌎 South America</option>
                <option value="oceania">🌏 Oceania</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={filters.type || ''}
                onChange={(e) => setFilters({ ...filters, type: e.target.value || null })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                <option value="therapist">👨‍⚕️ Therapist</option>
                <option value="ngo">🤝 NGO</option>
                <option value="helpline">☎️ Helpline</option>
                <option value="hospital">🏥 Hospital</option>
                <option value="support_group">👥 Support Group</option>
              </select>
            </div>

            {/* Cost Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cost</label>
              <select
                value={filters.cost_type || ''}
                onChange={(e) => setFilters({ ...filters, cost_type: e.target.value || null })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Costs</option>
                <option value="free">🆓 Free</option>
                <option value="sliding_scale">💰 Sliding Scale</option>
                <option value="paid">💳 Paid</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8">
          {filteredOrgs.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>No organisations match your filters.</p>
              <button
                onClick={() => setFilters({ region: 'worldwide', cost_type: null, type: null })}
                className="text-blue-600 hover:underline font-medium mt-2"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 text-sm font-medium">
                Showing {filteredOrgs.length} organisation{filteredOrgs.length !== 1 ? 's' : ''}
              </p>
              {filteredOrgs.map((org) => (
                <OrgCard key={org.id} org={org} />
              ))}
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Disclaimer:</span> Bloom NOW is a directory of support options, not a medical provider. All services are verified by our community. If you're experiencing a mental health crisis, contact emergency services or a helpline immediately.
          </p>
        </div>
      </div>
    </div>
  )
}
