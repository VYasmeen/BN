-- Bloom NOW - Expanded Supabase Schema (v2)
-- Run this in the Supabase SQL Editor

-- organisations table (enhanced)
CREATE TABLE IF NOT EXISTS organisations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'therapist', 'ngo', 'helpline', 'hospital', 'support_group', 'crisis_center'
  region TEXT NOT NULL, -- 'africa', 'asia', 'europe', 'north_america', 'south_america', 'oceania', 'worldwide'
  country TEXT, -- specific country name
  city TEXT, -- city/region if applicable
  cost_type TEXT NOT NULL, -- 'free', 'paid', 'sliding_scale'
  cost_per_session DECIMAL, -- if paid, cost in USD equivalent
  short_desc TEXT NOT NULL,
  long_desc TEXT,
  image_url TEXT, -- org logo/image
  website_url TEXT,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT DEFAULT 'active', -- 'draft', 'active', 'inactive', 'flagged'
  rating DECIMAL DEFAULT 0, -- 0-5 stars
  rating_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- modalities (call, chat, email, video, in_person)
CREATE TABLE IF NOT EXISTS org_modalities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  modality TEXT NOT NULL,
  UNIQUE(org_id, modality)
);

-- languages supported by each org
CREATE TABLE IF NOT EXISTS org_languages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL, -- 'en', 'es', 'hi', 'zh', 'ar', etc.
  UNIQUE(org_id, language_code)
);

-- contact info
CREATE TABLE IF NOT EXISTS org_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  contact_type TEXT NOT NULL, -- 'phone', 'phone2', 'email', 'website', 'whatsapp', 'telegram'
  value TEXT NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- availability/hours
CREATE TABLE IF NOT EXISTS org_availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  day_of_week INT, -- 0=Sunday, 6=Saturday, NULL=24/7
  opening_time TIME,
  closing_time TIME,
  timezone TEXT DEFAULT 'UTC',
  notes TEXT
);

-- verification audit trail
CREATE TABLE IF NOT EXISTS verification_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  verified_by TEXT NOT NULL,
  verified_at TIMESTAMPTZ DEFAULT NOW(),
  source_url TEXT,
  source_type TEXT, -- 'official_website', 'government_registry', 'phone_verified', 'email_verified'
  notes TEXT,
  status TEXT, -- 'pending', 'verified', 'flagged', 'expired'
  expires_at TIMESTAMPTZ,
  UNIQUE(org_id, verified_at)
);

-- translations
CREATE TABLE IF NOT EXISTS org_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  name TEXT NOT NULL,
  short_desc TEXT,
  long_desc TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(org_id, language_code)
);

-- critical helplines
CREATE TABLE IF NOT EXISTS helplines_critical (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  phone2 TEXT,
  region TEXT NOT NULL,
  country TEXT,
  hours TEXT, -- '24/7' or specific hours
  official_source_url TEXT NOT NULL,
  last_verified_at TIMESTAMPTZ NOT NULL,
  verified_by TEXT NOT NULL,
  status TEXT DEFAULT 'active'
);

-- education content (articles, resources)
CREATE TABLE IF NOT EXISTS education_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL, -- 'wellness', 'coping_strategies', 'understanding_mental_health', 'resources', 'self_care'
  description TEXT,
  content TEXT NOT NULL, -- markdown format
  author TEXT,
  featured_image_url TEXT,
  language_code TEXT DEFAULT 'en',
  status TEXT DEFAULT 'published', -- 'draft', 'published', 'archived'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- user profiles
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  full_name TEXT,
  country TEXT,
  preferred_language TEXT DEFAULT 'en',
  preferred_cost_type TEXT, -- filter preference
  preferred_modality TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- user bookmarks/favorites
CREATE TABLE IF NOT EXISTS user_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, org_id)
);

-- user ratings/reviews
CREATE TABLE IF NOT EXISTS user_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  org_id UUID NOT NULL REFERENCES organisations(id) ON DELETE CASCADE,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, org_id)
);

-- indexes for performance
CREATE INDEX IF NOT EXISTS idx_orgs_region_cost_verified ON organisations(region, cost_type, verified);
CREATE INDEX IF NOT EXISTS idx_orgs_status ON organisations(status);
CREATE INDEX IF NOT EXISTS idx_orgs_rating ON organisations(rating DESC);
CREATE INDEX IF NOT EXISTS idx_verification_logs_org_expires ON verification_logs(org_id, expires_at);
CREATE INDEX IF NOT EXISTS idx_education_category ON education_content(category, status);
CREATE INDEX IF NOT EXISTS idx_user_bookmarks ON user_bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_user_ratings ON user_ratings(org_id);

-- insert critical helplines (global)
INSERT INTO helplines_critical (name, phone, region, country, hours, official_source_url, last_verified_at, verified_by, status) VALUES
('National Suicide Prevention Lifeline (USA)', '1-800-273-8255', 'north_america', 'United States', '24/7', 'https://suicidepreventionlifeline.org', NOW(), 'admin@bloomenow.com', 'active'),
('Crisis Text Line (USA)', 'Text HOME to 741741', 'north_america', 'United States', '24/7', 'https://www.crisistextline.org', NOW(), 'admin@bloomenow.com', 'active'),
('Samaritans (UK)', '116 123', 'europe', 'United Kingdom', '24/7', 'https://www.samaritans.org', NOW(), 'admin@bloomenow.com', 'active'),
('Tele-MANAS (India)', '14416', 'asia', 'India', '24/7', 'https://telemanas.org', NOW(), 'admin@bloomenow.com', 'active'),
('Befrienders Kenya', '+254 722 178 177', 'africa', 'Kenya', '24/7', 'https://befrienderskenya.org', NOW(), 'admin@bloomenow.com', 'active'),
('LifeLine (Australia)', '13 11 14', 'oceania', 'Australia', '24/7', 'https://www.lifeline.org.au', NOW(), 'admin@bloomenow.com', 'active'),
('Teléfono de la Esperanza (Spain)', '914 59 00 50', 'europe', 'Spain', '24/7', 'https://www.telefonodelaesperanza.org', NOW(), 'admin@bloomenow.com', 'active'),
('AASRA (India)', '+91 9820466726', 'asia', 'India', '24/7', 'https://aasra.info', NOW(), 'admin@bloomenow.com', 'active')
ON CONFLICT (name) DO NOTHING;
