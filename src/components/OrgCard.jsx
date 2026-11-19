const MODALITY_ICONS = {
  phone: '☎️',
  chat: '💬',
  video: '📹',
  email: '📧',
  in_person: '🤝'
}

const TYPE_ICONS = {
  therapist: '👨‍⚕️',
  ngo: '🤝',
  helpline: '☎️',
  hospital: '🏥',
  support_group: '👥',
  crisis_center: '🚨'
}

export default function OrgCard({ org }) {
  const renderStars = (rating) => {
    const stars = '⭐'.repeat(Math.round(rating))
    const empty = '☆'.repeat(5 - Math.round(rating))
    return stars + empty
  }

  const typeIcon = TYPE_ICONS[org.type] || '📌'

  return (
    <div className="rounded-xl border border-blush-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-olive-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">{typeIcon}</span>
            <h3 className="text-xl font-bold text-gray-900">{org.name}</h3>
          </div>
          <p className="text-sm text-gray-500">{org.city ? `${org.city}, ${org.country}` : org.country}</p>
        </div>
        <div className="flex gap-2">
          {org.verified && (
            <span className="whitespace-nowrap rounded bg-olive-100 px-2 py-1 text-xs font-semibold text-olive-800">
              ✓ Verified
            </span>
          )}
          {org.rating && org.rating > 0 && (
            <span title={`${org.rating}/5 stars (${org.rating_count} reviews)`} className="text-sm font-medium">
              {renderStars(org.rating)}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{org.short_desc}</p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {/* Cost */}
        <span className="inline-block rounded-full bg-blush-100 px-3 py-1 text-xs font-medium text-blush-800">
          {org.cost_type === 'free' && '🆓 Free'}
          {org.cost_type === 'sliding_scale' && '💰 Sliding Scale'}
          {org.cost_type === 'paid' && org.cost_per_session && `💳 $${org.cost_per_session}/session`}
          {org.cost_type === 'paid' && !org.cost_per_session && '💳 Paid'}
        </span>

        {/* Modalities */}
        {org.modalities && org.modalities.map(mod => (
          <span key={mod} className="inline-block rounded-full bg-blush-50 px-3 py-1 text-xs font-medium text-blush-800">
            {MODALITY_ICONS[mod] || '📌'} {mod.replace('_', ' ')}
          </span>
        ))}
      </div>

      {/* Languages */}
      {org.languages && org.languages.length > 0 && (
        <div className="mb-4 p-3 bg-gray-50 rounded">
          <p className="text-xs text-gray-600 font-medium mb-1">Languages: </p>
          <div className="flex flex-wrap gap-2">
            {org.languages.map(lang => (
              <span key={lang} className="text-sm font-medium text-gray-700">
                {lang === 'en' && '🇬🇧 English'}
                {lang === 'es' && '🇪🇸 Spanish'}
                {lang === 'hi' && '🇮🇳 Hindi'}
                {lang === 'fr' && '🇫🇷 French'}
                {lang === 'pt' && '🇧🇷 Portuguese'}
                {lang === 'zh' && '🇨🇳 Chinese'}
                {lang === 'ja' && '🇯🇵 Japanese'}
                {lang === 'de' && '🇩🇪 German'}
                {lang === 'ta' && '🇮🇳 Tamil'}
                {lang === 'tl' && '🇵🇭 Tagalog'}
                {lang === 'id' && '🇮🇩 Indonesian'}
                {lang === 'zu' && '🇿🇦 Zulu'}
                {lang === 'xh' && '🇿🇦 Xhosa'}
                {lang === 'sw' && '🇰🇪 Swahili'}
                {lang === 'ms' && '🇲🇾 Malay'}
                {!['en', 'es', 'hi', 'fr', 'pt', 'zh', 'ja', 'de', 'ta', 'tl', 'id', 'zu', 'xh', 'sw', 'ms'].includes(lang) && lang.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Availability */}
      {org.availability?.notes && (
        <div className="mb-4 text-sm text-gray-600">
          <span className="font-medium">Hours:</span> {org.availability.notes}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-gray-200">
        {org.website_url && (
          <a
            href={org.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded border border-olive-300 bg-olive-50 px-4 py-2 text-center font-medium text-olive-800 hover:bg-olive-100"
          >
            Visit Website
          </a>
        )}
        {org.contacts && org.contacts[0] && org.contacts[0].type === 'phone' && (
          <a
            href={`tel:${org.contacts[0].value}`}
            className="flex-1 rounded bg-olive-700 px-4 py-2 text-center font-medium text-white hover:bg-olive-800"
          >
            Call Now
          </a>
        )}
      </div>

      {/* Footer */}
      {org.verified && (
        <p className="text-xs text-gray-400 mt-3">
          ✓ Verified by community
        </p>
      )}
    </div>
  )
}
