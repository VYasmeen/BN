# Bloom NOW

Mental health support directory. Find therapists, NGOs, and helplines.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create Supabase project
- Go to [supabase.com](https://supabase.com)
- Create a new project (free tier)
- Note the project URL and anon key

### 3. Run the SQL schema
In Supabase SQL Editor, run the commands from `docs/supabase-schema.sql`

### 4. Create `.env.local`
Copy `.env.local.example` to `.env.local` and add your Supabase credentials:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your Supabase URL and anon key.

### 5. Start development server
```bash
npm run dev
```

The app will be available at http://localhost:5173

### 6. Build for production
```bash
npm run build
```

## Deployment

Deploy to [Vercel](https://vercel.com):
1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
4. Vercel auto-deploys on push to main

## Architecture

- **Frontend**: React + Vite + Tailwind
- **Backend**: Supabase (Postgres)
- **Hosting**: Vercel (frontend), Supabase (database)
- **PWA**: Service worker for offline support

## Safety Features

- Helpline bar on every screen
- Offline fallback for critical helplines
- Verification tracking (source, date, who verified)
- No personal data collection (v1)
- Crisis disclaimers on every page

## Development

### Folder structure
```
src/
├── components/     # React components
├── pages/          # Full page components
├── lib/            # Utilities (Supabase client, etc.)
├── constants/      # Hardcoded data (helplines, etc.)
└── App.jsx         # Main app component
```

### Admin access
- Login at `/` with admin email
- Magic link sent to your email
- Admin page to add/verify organisations (coming in Week 2)

## Next Steps (Week 2)

- [ ] Add organisations via admin form
- [ ] Verification workflow
- [ ] Multi-language support
- [ ] Advanced filters

## Legal Notes

- Review with a healthcare lawyer before launch in India
- Check DPDP Act 2023 compliance
- Verify helpline numbers only from official sources
