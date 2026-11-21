import assert from 'node:assert/strict'
import { test } from 'node:test'
import { mockOrganisations } from '../src/data/mockOrganisations.js'
import {
  filterOrganisations,
  matchesOrganisationSearch
} from '../src/lib/searchOrganisations.js'

test('searching for a city finds organisations there', () => {
  const results = mockOrganisations.filter(org => matchesOrganisationSearch(org, 'Mumbai'))

  assert.deepEqual(results.map(org => org.name), ['iCall Foundation', 'Vandrevala Foundation'])
})

test('searching with a one-character typo still finds a city', () => {
  const results = mockOrganisations.filter(org => matchesOrganisationSearch(org, 'banglore'))
  const multipleTypos = mockOrganisations.filter(org => matchesOrganisationSearch(org, 'bangoore'))

  assert.deepEqual(results.map(org => org.name), ['The Wellness Collective India'])
  assert.deepEqual(multipleTypos, [])
})

test('searching for a country or region is case-insensitive', () => {
  const indiaService = mockOrganisations.find(org => org.name === 'iCall Foundation')
  const northAmericanService = mockOrganisations.find(org => org.region === 'north_america')

  assert.ok(matchesOrganisationSearch(indiaService, ' india '))
  assert.ok(matchesOrganisationSearch(northAmericanService, 'North America'))
})

test('Worldwide region filter includes listings from every region', () => {
  const results = filterOrganisations(mockOrganisations, '', {
    regions: ['worldwide'],
    types: [],
    modalities: [],
    costTypes: [],
    languages: []
  })

  assert.equal(results.length, mockOrganisations.length)
})

test('specific region filters continue to restrict listings', () => {
  const results = filterOrganisations(mockOrganisations, '', {
    regions: ['asia'],
    types: [],
    modalities: [],
    costTypes: [],
    languages: []
  })

  assert.ok(results.length > 0)
  assert.ok(results.every(org => org.region === 'asia'))
})
