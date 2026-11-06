-- SkillUp Haven: tighten trigger function execution and add FK indexes.
-- Core application tables already existed in the connected Supabase project.
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

CREATE INDEX IF NOT EXISTS enrollments_course_id_idx
  ON public.enrollments (course_id);

CREATE INDEX IF NOT EXISTS notifications_user_id_idx
  ON public.notifications (user_id);
