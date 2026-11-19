-- Bloom NOW - Supabase Schema
-- Run this in the Supabase SQL Editor

-- organisations table
CREATE TABLE organisations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'therapist', 'ngo', 'helpline', 'hospital', etc.
  region TEXT NOT NULL, -- 'india', 'worldwide', etc.
  cost_type TEXT NOT NULL, -- 'free', 'paid', 'sliding_scale'
  short_desc TEXT NOT NULL,
  long_desc TEXT,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT DEFAULT 'draft', -- 'draft', 'active', 'inactive', 'flagged'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- modalities (call, chat, email, video, in_person)
CREATE TABLE org_modalities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  modality TEXT NOT NULL,
  UNIQUE(org_id, modality)
);

-- contact info
CREATE TABLE org_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  contact_type TEXT NOT NULL, -- 'phone', 'phone2', 'email', 'website', 'whatsapp'
  value TEXT NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- verification audit trail (crucial for safety)
CREATE TABLE verification_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  verified_by TEXT NOT NULL, -- email of admin who verified
  verified_at TIMESTAMPTZ DEFAULT NOW(),
  source_url TEXT, -- where you confirmed the data
  source_type TEXT, -- 'official_website', 'government_registry', 'phone_verified', 'email_verified'
  notes TEXT,
  status TEXT, -- 'pending', 'verified', 'flagged', 'expired'
  expires_at TIMESTAMPTZ, -- when to re-verify (e.g., 6 months)
  UNIQUE(org_id, verified_at)
);

-- translations (for future multilinguality)
CREATE TABLE org_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL, -- 'en', 'hi', 'ta', 'te', etc.
  name TEXT NOT NULL,
  short_desc TEXT,
  long_desc TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(org_id, language_code)
);

-- critical helplines (cached, offline-safe)
CREATE TABLE helplines_critical (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  phone2 TEXT,
  region TEXT NOT NULL,
  hours TEXT, -- '24/7' or 'Mon-Fri 9am-5pm IST'
  official_source_url TEXT NOT NULL,
  last_verified_at TIMESTAMPTZ NOT NULL,
  verified_by TEXT NOT NULL,
  status TEXT DEFAULT 'active' -- 'active', 'suspended', 'unverified'
);

-- indexes for performance
CREATE INDEX idx_orgs_region_cost_verified ON organisations(region, cost_type, verified);
CREATE INDEX idx_orgs_status ON organisations(status);
CREATE INDEX idx_verification_logs_org_expires ON verification_logs(org_id, expires_at);

-- insert test helpline (replace placeholders with real data)
INSERT INTO helplines_critical (
  name, phone, region, hours, official_source_url,
  last_verified_at, verified_by, status
) VALUES (
  'Tele-MANAS (India)',
  '[PLACEHOLDER - verify on official government health website]',
  'india',
  '24/7',
  'https://[placeholder-official-source]',
  NOW(),
  'you@example.com',
  'active'
) ON CONFLICT (name) DO NOTHING;

-- insert test organisation (optional, for development)
INSERT INTO organisations (
  name, type, region, cost_type, short_desc, verified, status
) VALUES (
  'AASRA (Placeholder)',
  'ngo',
  'india',
  'free',
  'Mental health support via helpline (placeholder, not verified)',
  FALSE,
  'active'
) ON CONFLICT DO NOTHING;

-- Enable Row Level Security (optional, for multi-tenant apps)
-- For now, Supabase defaults allow authenticated users full access
