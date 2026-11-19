import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { CRITICAL_HELPLINES } from '../constants/helplines'

export default function HelplineBar() {
  const [helplines, setHelplines] = useState(CRITICAL_HELPLINES)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    fetchHelplines()
  }, [])

  const fetchHelplines = async () => {
    try {
      const { data, error } = await supabase
        .from('helplines_critical')
        .select('*')
        .eq('status', 'active')
        .eq('region', 'india')
        .timeout(2000)

      if (error) throw error
      if (data && data.length > 0) {
        setHelplines(data)
      }
    } catch (err) {
      console.warn('Helpline fetch failed, using fallback', err)
    }
  }

  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left font-bold text-lg flex justify-between items-center hover:bg-red-700 px-2 py-1 rounded transition"
        >
          <span>🚨 In crisis? Call now</span>
          <span>{expanded ? '▼' : '▶'}</span>
        </button>

        {expanded && (
          <div className="mt-3 space-y-2 pb-2">
            {helplines.map((h) => (
              <div key={h.id || h.name} className="bg-red-700 p-3 rounded">
                <p className="font-semibold">{h.name}</p>
                <p className="text-lg">
                  <a href={`tel:${h.phone}`} className="underline hover:opacity-80">
                    {h.phone}
                  </a>
                </p>
                <p className="text-sm">{h.hours}</p>
                <p className="text-xs opacity-75">
                  Verified: {h.lastVerified || (h.last_verified_at ? new Date(h.last_verified_at).toLocaleDateString() : 'Unknown')}
                </p>
              </div>
            ))}
          </div>
        )}

        <p className="mt-2 text-sm italic opacity-90">
          Bloom NOW is a directory, not therapy. If you're in crisis, please reach out.
        </p>
      </div>
    </div>
  )
}
