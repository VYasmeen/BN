export default function GuideButtons({ onFilterChange }) {
  const guides = [
    { label: '😢 Emotional support', filter: { type: ['therapist', 'ngo'], cost_type: 'free', region: 'india' } },
    { label: '🆘 I\'m in crisis', filter: { type: 'helpline', region: 'india' } },
    { label: '💰 I can pay', filter: { cost_type: 'paid', region: 'india' } },
    { label: '🌍 Worldwide', filter: { region: 'worldwide' } }
  ]

  return (
    <div className="rounded-lg border border-blush-200 bg-blush-50 p-4">
      <p className="font-semibold text-gray-700 mb-3">What would help most?</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {guides.map((g) => (
          <button
            key={g.label}
            onClick={() => onFilterChange(g.filter)}
            className="rounded border border-olive-300 bg-white px-3 py-2 text-sm font-medium text-olive-800 transition hover:-translate-y-0.5 hover:bg-olive-50 hover:shadow-sm active:bg-olive-100"
          >
            {g.label}
          </button>
        ))}
      </div>
    </div>
  )
}
