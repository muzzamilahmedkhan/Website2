/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Submitter's full name
      - `email` (text) - Submitter's email address
      - `phone` (text) - Submitter's phone number (optional)
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public to insert their own submissions
    - No read/update/delete policies (admin-only access via direct DB queries)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);