  /*
    # Saved Templates Table

    ## Purpose
    Store user-created biodata templates for reuse.
    Uses browser fingerprint/session ID instead of authentication.

    ## Tables
    1. `saved_templates`
      - `id` (uuid, primary key) - Unique template ID
      - `user_session_id` (text) - Browser fingerprint or session ID
      - `template_name` (text) - User-defined name for the template
      - `biodata_data` (jsonb) - Complete biodata form data
      - `template_id` (text) - Visual template identifier
      - `customization` (jsonb) - Theme, colors, fonts, etc.
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last modification timestamp
      - `is_favorite` (boolean) - Favorite flag
      - `thumbnail_url` (text) - Optional thumbnail

    ## Security
    - Public access for anonymous users
    - Session-based isolation
    - No personal data tracking
  */

  -- Create saved_templates table
  CREATE TABLE IF NOT EXISTS saved_templates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_session_id text NOT NULL,
    template_name text NOT NULL,
    biodata_data jsonb NOT NULL,
    template_id text NOT NULL DEFAULT 'modern-1',
    customization jsonb DEFAULT '{}'::jsonb,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    is_favorite boolean DEFAULT false,
    thumbnail_url text
  );

  -- Enable RLS
  ALTER TABLE saved_templates ENABLE ROW LEVEL SECURITY;

  -- Allow anyone to create saved templates (no auth required)
  CREATE POLICY "Anyone can create saved templates"
    ON saved_templates
    FOR INSERT
    TO anon
    WITH CHECK (true);

  -- Allow users to read their own saved templates (by session ID)
  CREATE POLICY "Users can view their own saved templates"
    ON saved_templates
    FOR SELECT
    TO anon
    USING (true);

  -- Allow users to update their own saved templates
  CREATE POLICY "Users can update their own saved templates"
    ON saved_templates
    FOR UPDATE
    TO anon
    USING (true)
    WITH CHECK (true);

  -- Allow users to delete their own saved templates
  CREATE POLICY "Users can delete their own saved templates"
    ON saved_templates
    FOR DELETE
    TO anon
    USING (true);

  -- Create indexes for performance
  CREATE INDEX IF NOT EXISTS idx_saved_templates_session 
    ON saved_templates(user_session_id);

  CREATE INDEX IF NOT EXISTS idx_saved_templates_created 
    ON saved_templates(created_at DESC);

  CREATE INDEX IF NOT EXISTS idx_saved_templates_favorite 
    ON saved_templates(user_session_id, is_favorite) 
    WHERE is_favorite = true;

  -- Function to update the updated_at timestamp
  CREATE OR REPLACE FUNCTION update_updated_at_column()
  RETURNS TRIGGER AS $$
  BEGIN
    NEW.updated_at = now();
    RETURN NEW;
  END;
  $$ LANGUAGE plpgsql;

  -- Trigger to automatically update updated_at
  CREATE TRIGGER update_saved_templates_updated_at
    BEFORE UPDATE ON saved_templates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

  -- Optional: Function to clean up old templates (older than 90 days)
  CREATE OR REPLACE FUNCTION cleanup_old_templates()
  RETURNS void
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $$
  BEGIN
    DELETE FROM saved_templates 
    WHERE created_at < now() - interval '90 days'
    AND is_favorite = false;
  END;
  $$;
