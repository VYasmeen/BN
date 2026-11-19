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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription?.unsubscribe()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    setLoading(false)
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
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-4 shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex gap-6 items-center justify-between">
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setPage('search')}
              className={`font-semibold transition flex items-center gap-2 ${page === 'search' ? 'text-white' : 'text-blue-100 hover:text-white'}`}
            >
              🔍 Search
            </button>
            <button
              onClick={() => setPage('education')}
              className={`font-semibold transition flex items-center gap-2 ${page === 'education' ? 'text-white' : 'text-blue-100 hover:text-white'}`}
            >
              📚 Learn
            </button>
            <button
              onClick={() => setPage('directory')}
              className={`font-semibold transition flex items-center gap-2 ${page === 'directory' ? 'text-white' : 'text-blue-100 hover:text-white'}`}
            >
              📋 Directory
            </button>
            {user && (
              <button
                onClick={() => setPage('admin')}
                className={`font-semibold transition flex items-center gap-2 ${page === 'admin' ? 'text-white' : 'text-blue-100 hover:text-white'}`}
              >
                ⚙️ Admin
              </button>
            )}
          </div>

          {user ? (
            <button
              onClick={() => setPage('profile')}
              className={`font-semibold transition flex items-center gap-2 ${page === 'profile' ? 'text-white' : 'text-blue-100 hover:text-white'}`}
            >
              👤 {user.email.split('@')[0]}
            </button>
          ) : (
            <button
              onClick={() => setPage('profile')}
              className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50 transition"
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
