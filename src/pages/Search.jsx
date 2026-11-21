import { useState, useMemo } from 'react'
import HelplineBar from '../components/HelplineBar'
import OrgCard from '../components/OrgCard'
import { mockOrganisations } from '../data/mockOrganisations'
import { filterOrganisations } from '../lib/searchOrganisations'

const REGIONS = [
  { value: 'worldwide', label: '🌍 Worldwide' },
  { value: 'africa', label: '🌍 Africa' },
  { value: 'asia', label: '🌏 Asia' },
  { value: 'europe', label: '🌍 Europe' },
  { value: 'north_america', label: '🌎 North America' },
  { value: 'south_america', label: '🌎 South America' },
  { value: 'oceania', label: '🌏 Oceania' }
]

const TYPES = [
  { value: 'therapist', label: '👨‍⚕️ Therapist' },
  { value: 'ngo', label: '🤝 NGO' },
  { value: 'helpline', label: '☎️ Helpline' },
  { value: 'hospital', label: '🏥 Hospital' },
  { value: 'support_group', label: '👥 Support Group' },
  { value: 'crisis_center', label: '🚨 Crisis Center' }
]

const MODALITIES = [
  { value: 'phone', label: '☎️ Phone' },
  { value: 'chat', label: '💬 Chat' },
  { value: 'video', label: '📹 Video' },
  { value: 'email', label: '📧 Email' },
  { value: 'in_person', label: '🤝 In-Person' }
]

const COST_TYPES = [
  { value: 'free', label: '🆓 Free' },
  { value: 'sliding_scale', label: '💰 Sliding Scale' },
  { value: 'paid', label: '💳 Paid' }
]

const LANGUAGES = [
  { value: 'en', label: '🗣️ English' },
  { value: 'es', label: '🗣️ Spanish' },
  { value: 'hi', label: '🗣️ Hindi' },
  { value: 'fr', label: '🗣️ French' },
  { value: 'pt', label: '🗣️ Portuguese' },
  { value: 'zh', label: '🗣️ Chinese' },
  { value: 'ja', label: '🗣️ Japanese' },
  { value: 'de', label: '🗣️ German' }
]

export default function Search() {
  const [searchText, setSearchText] = useState('')
  const [filters, setFilters] = useState({
    regions: [],
    types: [],
    modalities: [],
    costTypes: [],
    languages: []
  })

  const filteredOrgs = useMemo(
    () => filterOrganisations(mockOrganisations, searchText, filters),
    [searchText, filters]
  )
  const hasActiveFilters =
    searchText !== '' || Object.values(filters).some(values => values.length > 0)

  const toggleFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }))
  }

  const clearFilters = () => {
    setFilters({
      regions: [],
      types: [],
      modalities: [],
      costTypes: [],
      languages: []
    })
    setSearchText('')
  }

  return (
    <div className="min-h-screen bg-blush-50">
      <HelplineBar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Mental Health Services</h1>
        <p className="text-gray-600 mb-6">Find support worldwide. All services are verified.</p>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by name, type, location..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-olive-500"
          />
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-olive-700 hover:text-olive-900 text-sm font-medium"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Region Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Region</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {REGIONS.map(region => (
                <label key={region.value} className="flex cursor-pointer items-center rounded-md px-2 py-1 transition-colors hover:bg-blush-50">
                  <input
                    type="checkbox"
                    checked={filters.regions.includes(region.value)}
                    onChange={() => toggleFilter('regions', region.value)}
                    className="rounded border-gray-300 text-olive-700"
                  />
                  <span className="ml-2 text-sm text-gray-700">{region.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Service Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {TYPES.map(type => (
                <label key={type.value} className="flex cursor-pointer items-center rounded-md px-2 py-1 transition-colors hover:bg-blush-50">
                  <input
                    type="checkbox"
                    checked={filters.types.includes(type.value)}
                    onChange={() => toggleFilter('types', type.value)}
                    className="rounded border-gray-300 text-olive-700"
                  />
                  <span className="ml-2 text-sm text-gray-700">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Cost Type Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Cost</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {COST_TYPES.map(cost => (
                <label key={cost.value} className="flex cursor-pointer items-center rounded-md px-2 py-1 transition-colors hover:bg-blush-50">
                  <input
                    type="checkbox"
                    checked={filters.costTypes.includes(cost.value)}
                    onChange={() => toggleFilter('costTypes', cost.value)}
                    className="rounded border-gray-300 text-olive-700"
                  />
                  <span className="ml-2 text-sm text-gray-700">{cost.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Modality Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Support Method</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {MODALITIES.map(mod => (
                <label key={mod.value} className="flex cursor-pointer items-center rounded-md px-2 py-1 transition-colors hover:bg-blush-50">
                  <input
                    type="checkbox"
                    checked={filters.modalities.includes(mod.value)}
                    onChange={() => toggleFilter('modalities', mod.value)}
                    className="rounded border-gray-300 text-olive-700"
                  />
                  <span className="ml-2 text-sm text-gray-700">{mod.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Language Filter */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Language</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {LANGUAGES.map(lang => (
                <label key={lang.value} className="flex cursor-pointer items-center rounded-md px-2 py-1 transition-colors hover:bg-blush-50">
                  <input
                    type="checkbox"
                    checked={filters.languages.includes(lang.value)}
                    onChange={() => toggleFilter('languages', lang.value)}
                    className="rounded border-gray-300 text-olive-700"
                  />
                  <span className="ml-2 text-sm text-gray-700">{lang.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              {filteredOrgs.length} result{filteredOrgs.length !== 1 ? 's' : ''} found
            </h2>
          </div>

          {filteredOrgs.length === 0 ? (
            <div className="rounded-lg border border-blush-200 bg-blush-100 p-6 text-center">
              <p className="text-blush-900">No services match your filters. Try adjusting your search.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOrgs.map(org => (
                <OrgCard key={org.id} org={org} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 rounded border border-blush-200 bg-blush-100 p-4">
          <p className="text-sm text-olive-900">
            <span className="font-semibold">Tip:</span> All listed services are verified. If you can't find what you need, contact your local health authority for recommendations.
          </p>
        </div>
      </div>
    </div>
  )
}
