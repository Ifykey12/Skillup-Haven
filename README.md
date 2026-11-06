# SkillUp Haven
Responsive learning academy website built with React, Vite, TypeScript, Motion and Supabase.

## Features
- Responsive landing page based on the supplied visual reference
- Blue, light-blue, white, yellow, pink and black brand palette
- Bricolage Grotesque typography and subtle motion
- Supabase email/password sign-up and login
- Published course loading and enrolment requests
- Contact enquiries saved in Supabase

## Local setup
1. Install Node.js.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Add your Supabase project URL and publishable key.
5. Run `npm run dev`.

Never expose a Supabase secret/service-role key in browser code.

## Existing Supabase database
The connected project already has profiles, courses, ebooks, enquiries, enrollments, notifications and tasks tables with RLS enabled. This app uses the existing schema fields `enquiries.full_name` and `enrollments.student_id`. The current public enquiry policy and course policies are already present.

## Before launch
- Replace the text logo with the official SkillUp Haven logo.
- Set real social links and contact information.
- Add course and ebook content.
- Configure Supabase Auth email confirmation and redirect URLs.
- Configure storage policies before distributing paid ebook files.
- Test signup, login, enquiry and course enrolment with a test account.
