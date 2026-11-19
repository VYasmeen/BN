import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Admin() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
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

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {!user ? (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {loading ? 'Sending...' : 'Send Magic Link'}
            </button>
            {message && <p className="text-sm text-gray-700 bg-blue-50 p-2 rounded">{message}</p>}
          </form>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-4">Logged in as <span className="font-semibold">{user.email}</span></p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Coming in Week 2:</span> Admin form to add/edit organisations and verification logs.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
