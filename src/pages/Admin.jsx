import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import HelplineBar from '../components/HelplineBar'
import { mockOrganisations } from '../data/mockOrganisations'

export default function Admin() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(null)
  const [tab, setTab] = useState('stats')
  const [orgs, setOrgs] = useState(mockOrganisations)
  const [newOrg, setNewOrg] = useState({
    name: '',
    type: 'therapist',
    region: 'worldwide',
    country: '',
    cost_type: 'free',
    short_desc: '',
    website_url: ''
  })

  useEffect(() => {
    if (!supabase) return

    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      setMessage('Check your email for a login link')
    } catch (err) {
      setMessage(`Error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setEmail('')
  }

  const handleAddOrg = (e) => {
    e.preventDefault()
    if (!newOrg.name || !newOrg.country) {
      alert('Please fill in all required fields')
      return
    }
    const org = {
      id: String(orgs.length + 1),
      ...newOrg,
      verified: false,
      rating: 0,
      rating_count: 0,
      modalities: [],
      languages: ['en'],
      contacts: []
    }
    setOrgs([...orgs, org])
    setNewOrg({
      name: '',
      type: 'therapist',
      region: 'worldwide',
      country: '',
      cost_type: 'free',
      short_desc: '',
      website_url: ''
    })
    alert('Organisation added successfully!')
  }

  const handleVerifyOrg = (orgId) => {
    setOrgs(orgs.map(org =>
      org.id === orgId ? { ...org, verified: !org.verified } : org
    ))
  }

  const verifiedCount = orgs.filter(o => o.verified).length
  const stats = {
    total: orgs.length,
    verified: verifiedCount,
    byType: orgs.reduce((acc, org) => {
      acc[org.type] = (acc[org.type] || 0) + 1
      return acc
    }, {})
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-blush-50">
        <HelplineBar />
        <div className="max-w-2xl mx-auto py-12 px-4">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            {supabase ? (
              <>
                <h2 className="text-lg font-semibold mb-4">Login Required</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-olive-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-olive-700 py-2 font-semibold text-white transition hover:bg-olive-800 disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Magic Link'}
                  </button>
                  {message && <p className="rounded bg-blush-100 p-2 text-sm text-gray-700">{message}</p>}
                </form>
              </>
            ) : (
              <p className="text-gray-600">Admin sign-in requires Supabase configuration.</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blush-50">
      <HelplineBar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Logged in as {user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded bg-rose-700 px-4 py-2 font-semibold text-white transition hover:bg-rose-800"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8">
            {['stats', 'organisations', 'add-org', 'verification'].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-3 font-medium border-b-2 transition ${
                  tab === t
                    ? 'border-olive-700 text-olive-800'
                    : 'border-transparent text-gray-700 hover:text-gray-900'
                }`}
              >
                {t === 'stats' && '📊 Statistics'}
                {t === 'organisations' && '🏢 Organisations'}
                {t === 'add-org' && '➕ Add Organisation'}
                {t === 'verification' && '✓ Verification'}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Tab */}
        {tab === 'stats' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 text-sm font-medium">Total Organisations</p>
              <p className="text-4xl font-bold text-gray-900 mt-2">{stats.total}</p>
            </div>
            <div className="rounded-lg bg-olive-50 p-6 shadow">
              <p className="text-sm font-medium text-olive-800">Verified</p>
              <p className="mt-2 text-4xl font-bold text-olive-900">{stats.verified}</p>
              <p className="mt-2 text-xs text-olive-800">{Math.round((stats.verified / stats.total) * 100)}% verified</p>
            </div>
            <div className="rounded-lg bg-blush-100 p-6 shadow">
              <p className="text-sm font-medium text-olive-800">Regions</p>
              <p className="mt-2 text-4xl font-bold text-olive-900">7</p>
            </div>
            <div className="rounded-lg bg-blush-50 p-6 shadow">
              <p className="text-sm font-medium text-blush-800">Languages</p>
              <p className="mt-2 text-4xl font-bold text-blush-900">15+</p>
            </div>
          </div>
        )}

        {/* Organisations Tab */}
        {tab === 'organisations' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Country</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cost</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orgs.map((org) => (
                    <tr key={org.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{org.name}</td>
                      <td className="px-6 py-4 text-gray-700 capitalize">{org.type}</td>
                      <td className="px-6 py-4 text-gray-700">{org.country}</td>
                      <td className="px-6 py-4 text-gray-700 capitalize">{org.cost_type.replace('_', ' ')}</td>
                      <td className="px-6 py-4">
                        {org.verified ? (
                          <span className="inline-block rounded bg-olive-100 px-3 py-1 text-xs font-semibold text-olive-800">
                            ✓ Verified
                          </span>
                        ) : (
                          <span className="inline-block rounded bg-blush-100 px-3 py-1 text-xs font-semibold text-blush-900">
                            ⚠ Unverified
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleVerifyOrg(org.id)}
                          className="text-sm font-medium text-olive-700 hover:text-olive-900"
                        >
                          {org.verified ? 'Unverify' : 'Verify'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Organisation Tab */}
        {tab === 'add-org' && (
          <div className="bg-white p-8 rounded-lg shadow max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Organisation</h2>
            <form onSubmit={handleAddOrg} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={newOrg.name}
                  onChange={(e) => setNewOrg({ ...newOrg, name: e.target.value })}
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-olive-500"
                  placeholder="Organization name"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={newOrg.type}
                    onChange={(e) => setNewOrg({ ...newOrg, type: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  >
                    <option value="therapist">Therapist</option>
                    <option value="ngo">NGO</option>
                    <option value="helpline">Helpline</option>
                    <option value="hospital">Hospital</option>
                    <option value="support_group">Support Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                  <select
                    value={newOrg.region}
                    onChange={(e) => setNewOrg({ ...newOrg, region: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  >
                    <option value="worldwide">Worldwide</option>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="north_america">North America</option>
                    <option value="south_america">South America</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                  <input
                    type="text"
                    value={newOrg.country}
                    onChange={(e) => setNewOrg({ ...newOrg, country: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    placeholder="Country"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cost Type</label>
                  <select
                    value={newOrg.cost_type}
                    onChange={(e) => setNewOrg({ ...newOrg, cost_type: e.target.value })}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  >
                    <option value="free">Free</option>
                    <option value="sliding_scale">Sliding Scale</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newOrg.short_desc}
                  onChange={(e) => setNewOrg({ ...newOrg, short_desc: e.target.value })}
                  className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-olive-500"
                  placeholder="Brief description"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                <input
                  type="url"
                  value={newOrg.website_url}
                  onChange={(e) => setNewOrg({ ...newOrg, website_url: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="https://example.com"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 rounded bg-olive-700 py-2 font-semibold text-white transition hover:bg-olive-800"
                >
                  Add Organisation
                </button>
                <button
                  type="button"
                  onClick={() => setNewOrg({
                    name: '',
                    type: 'therapist',
                    region: 'worldwide',
                    country: '',
                    cost_type: 'free',
                    short_desc: '',
                    website_url: ''
                  })}
                  className="rounded bg-blush-200 px-6 py-2 font-semibold text-gray-900 transition hover:bg-blush-300"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Verification Tab */}
        {tab === 'verification' && (
          <div className="rounded-lg border border-blush-200 bg-blush-100 p-8">
            <h2 className="mb-4 text-2xl font-bold text-olive-900">Verification Management</h2>
            <p className="mb-6 text-olive-900">
              All organisations are verified by our community. Click on an organisation above to manage its verification status.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Verification Guidelines</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Verify only organisations with official documentation</li>
                <li>✓ Update verification status when contact info changes</li>
                <li>✓ Re-verify every 6 months to ensure current info</li>
                <li>✓ Remove unresponsive or invalid organisations</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
