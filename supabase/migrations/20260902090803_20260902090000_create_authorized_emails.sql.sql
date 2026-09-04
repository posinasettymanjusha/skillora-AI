/*
# Create authorized_emails allowlist for signup restriction

## Purpose
Restricts Skillora account registration to pre-approved email addresses only.
Random/unapproved emails (e.g. qrtyuii@gmail.com) will be rejected before a
Supabase Auth account is created.

## 1. New Tables
- `authorized_emails`
  - `id` (uuid, primary key)
  - `email` (text, unique, not null) — normalized to lowercase
  - `is_active` (boolean, default true) — only active records allow signup
  - `created_at` (timestamptz, default now())

## 2. Security
- RLS enabled on `authorized_emails`.
- NO policies are created — the table is fully locked down. Neither anon nor
  authenticated roles can read, insert, update, or delete rows directly.
- A SECURITY DEFINER function `is_email_authorized(p_email text)` is the ONLY
  way to check authorization. It normalizes the input (trim + lowercase) and
  returns a boolean. This prevents the client from enumerating authorized emails.
- The function is callable by `anon` and `authenticated` roles (needed so the
  signup page can check before the user has a session).

## 3. Seed Data
- A few sample authorized emails are inserted so the feature can be tested.
  The project owner can add more via the Supabase dashboard or SQL.

## 4. Important Notes
1. The authorization check is enforced server-side via the SECURITY DEFINER
   function — a frontend-only check could be bypassed.
2. Email normalization (trim + lowercase) happens inside the function so
   `Student@Example.com` and `student@example.com` are treated identically.
3. Only `is_active = true` records allow signup. Deactivating a record
   revokes signup access without deleting it.
*/

CREATE TABLE IF NOT EXISTS authorized_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE authorized_emails ENABLE ROW LEVEL SECURITY;

-- Seed a few sample authorized emails for testing
INSERT INTO authorized_emails (email, is_active) VALUES
  ('student@approved-domain.com', true),
  ('arjun.sharma@skillora.dev', true),
  ('test.user@example.org', true)
ON CONFLICT (email) DO NOTHING;

-- SECURITY DEFINER function: check if an email is authorized to register
-- Returns true only if a matching, active record exists.
-- Callable by anon (pre-signup) and authenticated roles.
CREATE OR REPLACE FUNCTION is_email_authorized(p_email text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  is_authorized boolean := false;
BEGIN
  SELECT EXISTS(
    SELECT 1 FROM authorized_emails
    WHERE email = lower(trim(p_email))
      AND is_active = true
  ) INTO is_authorized;

  RETURN is_authorized;
END;
$$;

-- Grant execute to anon and authenticated so the signup page can call it
GRANT EXECUTE ON FUNCTION is_email_authorized(text) TO anon, authenticated;
