import { useState, useEffect } from 'react'
import { supabase } from './lib/supabaseClient'
import Directory from './pages/Directory'
import Search from './pages/Search'
import EducationHub from './pages/EducationHub'
import UserProfile from './pages/UserProfile'
import Admin from './pages/Admin'

function App() {
  const [page, setPage] = useState('search')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(Boolean(supabase))

  useEffect(() => {
    if (!supabase) return

    checkUser()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription?.unsubscribe()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    } catch (error) {
      console.error('Error checking user:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div>
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 bg-gradient-to-r from-olive-900 to-olive-800 px-4 py-4 text-white shadow-lg">
        <div className="max-w-6xl mx-auto flex gap-6 items-center justify-between">
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setPage('search')}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-base font-bold text-white transition hover:bg-white/15 md:text-lg ${page === 'search' ? 'bg-white/20' : 'hover:text-white'}`}
            >
              🔍 Search
            </button>
            <button
              onClick={() => setPage('education')}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-base font-bold text-white transition hover:bg-white/15 md:text-lg ${page === 'education' ? 'bg-white/20' : 'hover:text-white'}`}
            >
              📚 Learn
            </button>
            <button
              onClick={() => setPage('directory')}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-base font-bold text-white transition hover:bg-white/15 md:text-lg ${page === 'directory' ? 'bg-white/20' : 'hover:text-white'}`}
            >
              📋 Directory
            </button>
            {user && (
              <button
                onClick={() => setPage('admin')}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-base font-bold text-white transition hover:bg-white/15 md:text-lg ${page === 'admin' ? 'bg-white/20' : 'hover:text-white'}`}
              >
                ⚙️ Admin
              </button>
            )}
          </div>

          {user ? (
            <button
              onClick={() => setPage('profile')}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-base font-bold text-white transition hover:bg-white/15 md:text-lg ${page === 'profile' ? 'bg-white/20' : 'hover:text-white'}`}
            >
              👤 {user.email.split('@')[0]}
            </button>
          ) : (
            <button
              onClick={() => setPage('profile')}
              className="rounded-lg bg-blush-50 px-4 py-2 font-medium text-olive-800 shadow-sm hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      {/* Pages */}
      {page === 'search' && <Search />}
      {page === 'directory' && <Directory />}
      {page === 'education' && <EducationHub />}
      {page === 'profile' && <UserProfile />}
      {page === 'admin' && <Admin />}
    </div>
  )
}

export default App
