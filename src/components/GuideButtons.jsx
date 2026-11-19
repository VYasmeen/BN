export default function GuideButtons({ onFilterChange }) {
  const guides = [
    { label: '😢 Emotional support', filter: { type: ['therapist', 'ngo'], cost_type: 'free', region: 'india' } },
    { label: '🆘 I\'m in crisis', filter: { type: 'helpline', region: 'india' } },
    { label: '💰 I can pay', filter: { cost_type: 'paid', region: 'india' } },
    { label: '🌍 Worldwide', filter: { region: 'worldwide' } }
  ]

  return (
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <p className="font-semibold text-gray-700 mb-3">What would help most?</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {guides.map((g) => (
          <button
            key={g.label}
            onClick={() => onFilterChange(g.filter)}
            className="bg-white border border-blue-300 text-blue-700 py-2 px-3 rounded hover:bg-blue-100 active:bg-blue-200 text-sm font-medium transition"
          >
            {g.label}
          </button>
        ))}
      </div>
    </div>
  )
}
