-- Fix: Recreate is_email_authorized to ensure reliable RPC access from the anon role.
-- The function is SECURITY DEFINER so it bypasses RLS on authorized_emails.
-- Using SET search_path is already present; this recreates the function cleanly.

DROP FUNCTION IF EXISTS is_email_authorized(text);

CREATE FUNCTION is_email_authorized(p_email text)
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

GRANT EXECUTE ON FUNCTION is_email_authorized(text) TO anon, authenticated;
