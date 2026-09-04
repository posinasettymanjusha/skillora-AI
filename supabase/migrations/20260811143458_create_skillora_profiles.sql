/*
# Create authenticated Skillora profiles

1. New Tables
- `profiles` stores one durable Skillora record per authenticated user.
- `id` is the database record identifier.
- `user_id` links the record to Supabase Authentication and is unique so a user cannot receive duplicate profiles.
- `name`, `email`, `college`, `branch`, `year`, and `skill_level` store the primary onboarding fields for direct querying.
- `onboarding_completed` controls whether the user should enter onboarding again.
- `data` stores the complete StudentProfile payload, including skills, interests, preferred technologies, roles, certifications, projects, recommendations, roadmap progress, topic progress, quiz attempts, activity, and learning history.
- `created_at` and `updated_at` track record lifetime.

2. Security
- Row Level Security is enabled on `profiles`.
- Authenticated users can select, insert, update, and delete only their own record using `auth.uid() = user_id`.
- The owner column defaults to the authenticated user's ID so the browser does not need to supply or trust ownership data.

3. Important Notes
- The complete application profile is kept in `data` so existing Skillora features remain intact while surviving browser restarts and device changes.
- The unique `user_id` constraint prevents profile creation on every login.
*/

CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  college text NOT NULL DEFAULT '',
  branch text NOT NULL DEFAULT '',
  year text NOT NULL DEFAULT '',
  skill_level text NOT NULL DEFAULT '',
  onboarding_completed boolean NOT NULL DEFAULT false,
  data jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_profiles" ON public.profiles;
CREATE POLICY "select_own_profiles" ON public.profiles FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_profiles" ON public.profiles;
CREATE POLICY "insert_own_profiles" ON public.profiles FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_profiles" ON public.profiles;
CREATE POLICY "update_own_profiles" ON public.profiles FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_profiles" ON public.profiles;
CREATE POLICY "delete_own_profiles" ON public.profiles FOR DELETE
  TO authenticated USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS profiles_user_id_idx ON public.profiles(user_id);
