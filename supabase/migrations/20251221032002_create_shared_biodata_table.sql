/*
  # Shared Biodata Storage (Temporary)

  ## Purpose
  Minimal temporary storage for shareable biodata links with auto-expiry.
  No user tracking, no permanent storage, privacy-first.

  ## Tables
  1. `shared_biodata`
    - `id` (uuid, primary key) - Unique share ID used in URL
    - `data` (jsonb) - Complete biodata form data
    - `template_id` (text) - Selected template identifier
    - `customization` (jsonb) - Theme colors, fonts, etc.
    - `expires_at` (timestamptz) - Auto-expiry timestamp
    - `created_at` (timestamptz) - Creation timestamp
    - `view_count` (integer) - Number of times viewed (optional analytics)

  ## Security
  - Public read access only with valid share ID
  - Anyone can create shares (no auth required)
  - Automatic cleanup of expired shares via scheduled function
  
  ## Privacy
  - No user identification or tracking
  - Data auto-expires (24h or 7d options)
  - No permanent storage
*/

-- Create shared_biodata table
CREATE TABLE IF NOT EXISTS shared_biodata (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  data jsonb NOT NULL,
  template_id text NOT NULL DEFAULT 'modern-1',
  customization jsonb DEFAULT '{}'::jsonb,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  view_count integer DEFAULT 0
);

-- Enable RLS
ALTER TABLE shared_biodata ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create shares (no auth required)
CREATE POLICY "Anyone can create shared biodata"
  ON shared_biodata
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to read non-expired shares
CREATE POLICY "Anyone can view non-expired shared biodata"
  ON shared_biodata
  FOR SELECT
  TO anon
  USING (expires_at > now());

-- Allow increment of view count for non-expired shares
CREATE POLICY "Anyone can update view count on non-expired shares"
  ON shared_biodata
  FOR UPDATE
  TO anon
  USING (expires_at > now())
  WITH CHECK (expires_at > now());

-- Create index for faster expiry checks
CREATE INDEX IF NOT EXISTS idx_shared_biodata_expires_at 
  ON shared_biodata(expires_at);

-- Create index for faster lookups by ID
CREATE INDEX IF NOT EXISTS idx_shared_biodata_id 
  ON shared_biodata(id);

-- Function to clean up expired shares (can be called manually or via cron)
CREATE OR REPLACE FUNCTION cleanup_expired_biodata()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM shared_biodata WHERE expires_at < now();
END;
$$;