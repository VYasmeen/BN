export default function OrgCard({ org }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-800 flex-1">{org.name}</h3>
        {org.verified && (
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded ml-2 whitespace-nowrap">
            ✓ Verified
          </span>
        )}
        {!org.verified && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded ml-2 whitespace-nowrap">
            ⚠ Unverified
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-3">{org.short_desc}</p>

      <div className="mb-4 text-sm space-y-1">
        <p className="text-gray-700">
          <span className="font-semibold">Type:</span> {org.type}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Cost:</span> {org.cost_type}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Region:</span> {org.region}
        </p>
      </div>

      {org.phone && (
        <a
          href={`tel:${org.phone}`}
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 active:bg-blue-800 transition"
        >
          Call Now
        </a>
      )}

      {org.verified && org.last_verified_at && (
        <p className="text-xs text-gray-500 mt-3">
          Last verified: {new Date(org.last_verified_at).toLocaleDateString()}
        </p>
      )}
    </div>
  )
}
