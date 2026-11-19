# Week 1 Checklist: Bloom NOW MVP

## Day 1-2: Setup ✅
- [x] Initialize git repo
- [x] Create React + Vite + Tailwind scaffold
- [x] Create Supabase project
- [x] Set up environment variables

## Day 2: Supabase Schema ✅
- [ ] Go to supabase.com and create a project
- [ ] Copy SQL schema from `docs/supabase-schema.sql`
- [ ] Paste into Supabase SQL Editor and run
- [ ] Copy VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
- [ ] Create `.env.local` and add credentials
- [ ] Test: `npm install && npm run dev`

## Day 3-4: Components ✅
- [x] HelplineBar (sticky, hardcoded, falls back to Supabase)
- [x] GuideButtons (filter buttons)
- [x] OrgCard (displays org details)
- [x] Directory page (fetches orgs, displays cards)

## Day 5: Admin + PWA ✅
- [x] Admin auth (magic link login)
- [x] PWA manifest
- [x] Service worker (offline support)

## Now: Next Steps

### Today
- [ ] Install dependencies: `npm install`
- [ ] Create `.env.local` with Supabase credentials
- [ ] Run `npm run dev` and test locally

### This week
- [ ] Set up Supabase project (if not done yet)
- [ ] Run SQL schema in Supabase
- [ ] Test helpline bar offline (disable network in DevTools)
- [ ] Test mobile responsiveness (Chrome DevTools)

### Before v1 launch
- [ ] Get legal review (privacy policy, terms, disclaimers)
- [ ] Verify Tele-MANAS number on official government website
- [ ] Add more verified listings
- [ ] Deploy to Vercel

## Testing Checklist

### Helpline Bar
- [ ] Bar appears at top of every page
- [ ] Click to expand/collapse
- [ ] "Call Now" button works (opens phone app on mobile)
- [ ] Works offline (use DevTools network > Offline)

### Directory
- [ ] Loads organisations from Supabase
- [ ] Filter buttons work (cost, type, region)
- [ ] Cards display correctly on mobile
- [ ] "Call Now" button works for each org

### Admin
- [ ] Can log in with email (magic link)
- [ ] Can log out
- [ ] (Week 2: add/edit organisations)

### Mobile
- [ ] Test on iPhone/Android (or Chrome mobile emulation)
- [ ] Touch targets are 44px+ (easy to tap)
- [ ] No horizontal scroll
- [ ] Text is readable

## Deployment (after legal review)

1. Push to GitHub main branch
2. Connect to Vercel
3. Add environment variables
4. Vercel auto-deploys

## Week 2 Tasks

- [ ] Admin form to add organisations
- [ ] Verification workflow (track who verified, when, source)
- [ ] Search functionality
- [ ] Advanced filters (by modality)
- [ ] Handle read errors gracefully
