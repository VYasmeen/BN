import { useState, useEffect } from 'react'
import { supabase } from './lib/supabaseClient'
import Directory from './pages/Directory'
import Admin from './pages/Admin'

function App() {
  const [page, setPage] = useState('directory')
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
      {user && (
        <nav className="bg-gray-800 text-white px-4 py-3 shadow">
          <div className="max-w-4xl mx-auto flex gap-4 items-center">
            <button
              onClick={() => setPage('directory')}
              className={`font-semibold ${page === 'directory' ? 'text-white' : 'text-gray-300 hover:text-white'} transition`}
            >
              Directory
            </button>
            <button
              onClick={() => setPage('admin')}
              className={`font-semibold ${page === 'admin' ? 'text-white' : 'text-gray-300 hover:text-white'} transition`}
            >
              Admin
            </button>
            <span className="text-gray-400 text-sm ml-auto">{user.email}</span>
          </div>
        </nav>
      )}

      {page === 'directory' && <Directory />}
      {page === 'admin' && <Admin />}
    </div>
  )
}

export default App
