import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import HelplineBar from '../components/HelplineBar'
import GuideButtons from '../components/GuideButtons'
import OrgCard from '../components/OrgCard'

export default function Directory() {
  const [orgs, setOrgs] = useState([])
  const [filters, setFilters] = useState({ region: 'india', cost_type: null, type: null })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchOrganisations()
  }, [filters])

  const fetchOrganisations = async () => {
    setLoading(true)
    setError(null)
    try {
      let query = supabase
        .from('organisations')
        .select('*')
        .eq('status', 'active')
        .eq('region', filters.region || 'india')

      if (filters.cost_type) {
        query = query.eq('cost_type', filters.cost_type)
      }
      if (filters.type) {
        query = query.in('type', Array.isArray(filters.type) ? filters.type : [filters.type])
      }

      const { data, error: err } = await query.order('verified', { ascending: false })

      if (err) throw err
      setOrgs(data || [])
    } catch (err) {
      console.error('Failed to fetch organisations', err)
      setError('Could not load organisations. Please try again.')
      setOrgs([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HelplineBar />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bloom NOW</h1>
        <p className="text-gray-600 mb-6">
          Find mental health support. We're a directory, not a treatment provider. If you're in crisis, use the emergency bar above.
        </p>

        <GuideButtons onFilterChange={setFilters} />

        <div className="mt-8">
          {loading && <p className="text-gray-500 text-center">Loading...</p>}
          {error && <p className="text-red-600 bg-red-50 p-3 rounded">{error}</p>}
          {!loading && orgs.length === 0 && (
            <p className="text-gray-500 text-center">No organisations match your filters yet.</p>
          )}
          {!loading && orgs.length > 0 && (
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Showing {orgs.length} organisation{orgs.length !== 1 ? 's' : ''}
              </p>
              {orgs.map((org) => (
                <OrgCard key={org.id} org={org} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Disclaimer:</span> Bloom NOW is a directory of support options, not a medical provider.
            If you're experiencing a mental health crisis, contact emergency services or a helpline immediately.
          </p>
        </div>
      </div>
    </div>
  )
}
