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
    if (!supabase) return

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
    <div className="sticky top-0 z-50 bg-rose-700 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-lg font-bold transition hover:bg-rose-800"
        >
          <span>🚨 In crisis? Call now</span>
          <span>{expanded ? '▼' : '▶'}</span>
        </button>

        {expanded && (
          <div className="mt-3 space-y-2 pb-2">
            {helplines.map((h) => (
              <div key={h.id || h.name} className="rounded bg-rose-800 p-3">
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
          You don't have to figure it out alone. Bloom NOW can help you find the right support, one step at a time.
        </p>
      </div>
    </div>
  )
}
