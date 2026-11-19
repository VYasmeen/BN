import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import HelplineBar from '../components/HelplineBar'
import OrgCard from '../components/OrgCard'

export default function UserProfile() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [bookmarks, setBookmarks] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    country: '',
    preferred_language: 'en',
    preferred_cost_type: '',
    preferred_modality: ''
  })

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        // In a real app, fetch profile from DB
        // For now, use mock data
        setProfile({
          id: user.id,
          email: user.email,
          full_name: 'Jane Doe',
          country: 'United States',
          preferred_language: 'en',
          preferred_cost_type: 'sliding_scale',
          preferred_modality: 'video'
        })
        setFormData({
          full_name: 'Jane Doe',
          country: 'United States',
          preferred_language: 'en',
          preferred_cost_type: 'sliding_scale',
          preferred_modality: 'video'
        })
      }
    } catch (err) {
      console.error('Error checking user:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  const handleSaveProfile = async () => {
    setProfile({ ...profile, ...formData })
    setEditing(false)
    // In a real app, save to Supabase
  }

  const toggleBookmark = (orgId) => {
    setBookmarks(prev =>
      prev.includes(orgId) ? prev.filter(id => id !== orgId) : [...prev, orgId]
    )
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><p>Loading...</p></div>
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <HelplineBar />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold mb-4">Create Your Profile</h2>
            <p className="text-gray-600 mb-6">Sign in to save bookmarks, preferences, and access personalized recommendations.</p>
            <button
              onClick={() => {
                const email = window.prompt('Enter your email:')
                if (email) {
                  supabase.auth.signInWithOtp({ email })
                }
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700"
            >
              Sign In with Email
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HelplineBar />

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="bg-white p-8 rounded-lg shadow mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{profile?.full_name || 'Your Profile'}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Sign Out
            </button>
          </div>

          {!editing ? (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm">Country</p>
                  <p className="font-medium text-gray-900">{profile?.country || '-'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Language</p>
                  <p className="font-medium text-gray-900">{profile?.preferred_language?.toUpperCase() || '-'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Preferred Cost</p>
                  <p className="font-medium text-gray-900 capitalize">{profile?.preferred_cost_type || '-'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Preferred Method</p>
                  <p className="font-medium text-gray-900 capitalize">{profile?.preferred_modality || '-'}</p>
                </div>
              </div>
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Language</label>
                <select
                  value={formData.preferred_language}
                  onChange={(e) => setFormData({ ...formData, preferred_language: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="hi">Hindi</option>
                  <option value="fr">French</option>
                  <option value="pt">Portuguese</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Cost Type</label>
                <select
                  value={formData.preferred_cost_type}
                  onChange={(e) => setFormData({ ...formData, preferred_cost_type: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Any</option>
                  <option value="free">Free</option>
                  <option value="sliding_scale">Sliding Scale</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleSaveProfile}
                  className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="bg-gray-300 text-gray-900 px-6 py-2 rounded font-medium hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bookmarks Section */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Bookmarks ({bookmarks.length})</h2>

          {bookmarks.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>No bookmarks yet. Start saving your favorite services!</p>
              <a href="/search" className="text-blue-600 hover:underline font-medium mt-3 inline-block">
                Browse Services →
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">You have {bookmarks.length} saved services</p>
              {/* In a real app, fetch and display bookmarked services */}
            </div>
          )}
        </div>

        {/* Help & Support */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-blue-800 text-sm">
            If you have questions about your profile or need support, <a href="/search" className="underline font-medium">find a support service</a> or contact us.
          </p>
        </div>
      </div>
    </div>
  )
}
