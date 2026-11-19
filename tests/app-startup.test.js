import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

test('the app renders its search page without Supabase credentials', async () => {
  const envDir = await mkdtemp(path.join(tmpdir(), 'bloom-now-env-'))
  const originalUrl = process.env.VITE_SUPABASE_URL
  const originalKey = process.env.VITE_SUPABASE_ANON_KEY
  delete process.env.VITE_SUPABASE_URL
  delete process.env.VITE_SUPABASE_ANON_KEY

  let server
  try {
    server = await createServer({
      appType: 'custom',
      envDir,
      server: { middlewareMode: true }
    })
    const { default: App } = await server.ssrLoadModule('/src/App.jsx')
    const html = renderToString(createElement(App))
    assert.match(html, /Search Mental Health Services/)
  } finally {
    await server?.close()
    await rm(envDir, { recursive: true, force: true })
    if (originalUrl === undefined) delete process.env.VITE_SUPABASE_URL
    else process.env.VITE_SUPABASE_URL = originalUrl
    if (originalKey === undefined) delete process.env.VITE_SUPABASE_ANON_KEY
    else process.env.VITE_SUPABASE_ANON_KEY = originalKey
  }
})
