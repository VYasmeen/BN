function isWithinOneEdit(query, word) {
  if (Math.abs(query.length - word.length) > 1) return false

  let queryIndex = 0
  let wordIndex = 0
  let edits = 0

  while (queryIndex < query.length && wordIndex < word.length) {
    if (query[queryIndex] === word[wordIndex]) {
      queryIndex += 1
      wordIndex += 1
      continue
    }

    edits += 1
    if (edits > 1) return false

    if (query.length > word.length) queryIndex += 1
    else if (query.length < word.length) wordIndex += 1
    else {
      queryIndex += 1
      wordIndex += 1
    }
  }

  return true
}

export function matchesOrganisationSearch(org, searchText) {
  const normalize = value => value?.replaceAll('_', ' ').toLowerCase() || ''
  const query = normalize(searchText.trim())
  if (!query) return true

  const searchableFields = [
    org.name,
    org.short_desc,
    org.city,
    org.country,
    org.region,
    org.type
  ]
  if (searchableFields.some(value => normalize(value).includes(query))) return true
  if (query.length < 5 || query.includes(' ')) return false

  return searchableFields.some(value =>
    normalize(value).split(/\s+/).some(word => isWithinOneEdit(query, word))
  )
}

export function filterOrganisations(organisations, searchText, filters) {
  return organisations.filter(org => {
    if (!matchesOrganisationSearch(org, searchText)) return false

    if (
      filters.regions.length > 0 &&
      !filters.regions.includes('worldwide') &&
      !filters.regions.includes(org.region)
    ) {
      return false
    }

    if (filters.types.length > 0 && !filters.types.includes(org.type)) return false
    if (filters.costTypes.length > 0 && !filters.costTypes.includes(org.cost_type)) return false

    if (
      filters.modalities.length > 0 &&
      !filters.modalities.some(modality => org.modalities?.includes(modality))
    ) {
      return false
    }

    if (
      filters.languages.length > 0 &&
      !filters.languages.some(language => org.languages?.includes(language))
    ) {
      return false
    }

    return true
  })
}
