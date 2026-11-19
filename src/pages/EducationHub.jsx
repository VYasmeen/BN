import { useState } from 'react'
import { mockEducationContent } from '../data/mockOrganisations'
import HelplineBar from '../components/HelplineBar'

const CATEGORIES = [
  { value: 'all', label: 'All Articles' },
  { value: 'understanding_mental_health', label: 'Understanding Mental Health' },
  { value: 'coping_strategies', label: 'Coping Strategies' },
  { value: 'self_care', label: 'Self-Care' },
  { value: 'wellness', label: 'Wellness' },
  { value: 'resources', label: 'Resources' }
]

export default function EducationHub() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedArticle, setSelectedArticle] = useState(null)

  const filteredContent = selectedCategory === 'all'
    ? mockEducationContent
    : mockEducationContent.filter(c => c.category === selectedCategory)

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-blush-50">
        <HelplineBar />
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 flex items-center gap-2 font-medium text-olive-700 hover:text-olive-900"
          >
            ← Back to articles
          </button>

          <article className="bg-white p-8 rounded-lg shadow prose prose-sm max-w-none">
            <h1 className="text-4xl font-bold mb-4">{selectedArticle.title}</h1>
            <p className="text-gray-600 mb-8">{selectedArticle.description}</p>

            <div className="text-gray-500 text-sm mb-6 flex gap-4">
              <span>By {selectedArticle.author || 'Bloom NOW'}</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>

            <div className="border-t pt-6 prose prose-sm max-w-none">
              {selectedArticle.content.split('\n').map((line, idx) => {
                if (line.startsWith('# ')) {
                  return <h1 key={idx} className="text-3xl font-bold mt-6 mb-4">{line.replace('# ', '')}</h1>
                }
                if (line.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-4 mb-3">{line.replace('## ', '')}</h2>
                }
                if (line.startsWith('- ')) {
                  return <li key={idx} className="ml-6 mb-2">{line.replace('- ', '')}</li>
                }
                if (line.trim()) {
                  return <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{line}</p>
                }
                return <div key={idx} className="mb-2" />
              })}
            </div>

            <div className="mt-12 rounded border border-blush-200 bg-blush-100 p-6">
              <p className="text-sm text-olive-900">
                <span className="font-semibold">Need professional help?</span> Find qualified therapists and support services in the <a href="/search" className="underline">directory</a>.
              </p>
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blush-50">
      <HelplineBar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mental Health Education Hub</h1>
        <p className="text-gray-600 mb-8">Learn about mental health, coping strategies, and self-care from experts.</p>

        {/* Category Filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition ${
                selectedCategory === cat.value
                  ? 'bg-olive-700 text-white shadow-sm'
                  : 'border border-blush-200 bg-white text-gray-700 hover:border-olive-500 hover:bg-blush-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(article => (
            <button
              key={article.id}
              type="button"
              onClick={() => setSelectedArticle(article)}
              className="w-full cursor-pointer rounded-xl border border-blush-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-olive-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-block rounded-full bg-blush-100 px-3 py-1 text-xs font-medium text-blush-800">
                  {CATEGORIES.find(c => c.value === article.category)?.label}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{article.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500">By {article.author || 'Bloom NOW'}</span>
                <span className="text-sm font-medium text-olive-700">Read more →</span>
              </div>
            </button>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles in this category yet.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-lg border border-blush-200 bg-gradient-to-r from-blush-100 to-blush-50 p-6">
          <h3 className="text-lg font-bold mb-2">Want to contribute?</h3>
          <p className="text-gray-700 mb-4">We're looking for mental health professionals and educators to contribute content.</p>
          <button className="rounded bg-olive-700 px-6 py-2 font-medium text-white hover:bg-olive-800">
            Contribute Content
          </button>
        </div>
      </div>
    </div>
  )
}
