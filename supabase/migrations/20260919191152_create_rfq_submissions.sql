/*
# Create rfq_submissions table (single-tenant, no auth)

1. New Tables
- `rfq_submissions`
  - `id` (uuid, primary key)
  - `company_name` (text, not null) — buyer's company name
  - `contact_name` (text, not null) — buyer's contact person
  - `email` (text, not null) — buyer's email address
  - `phone` (text, nullable) — buyer's phone number
  - `country` (text, not null) — buyer's country
  - `product_category` (text, not null) — Electronics, Textiles, Machinery, or Other
  - `product_details` (text, nullable) — free-text description of what they need
  - `volume` (text, nullable) — estimated order volume/quantity
  - `timeline` (text, nullable) — desired delivery timeline
  - `message` (text, nullable) — additional notes from the buyer
  - `status` (text, default 'new') — lead status for internal tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `rfq_submissions`.
- Allow anon + authenticated INSERT so overseas buyers can submit RFQs without signing in.
- No SELECT/UPDATE/DELETE for anon — only internal staff (via service role) can read or manage submissions.

3. Notes
- This is a public contact form; anyone can submit an RFQ.
- Read access is restricted to the backend/service role only.
*/

CREATE TABLE IF NOT EXISTS rfq_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text NOT NULL,
  product_category text NOT NULL,
  product_details text,
  volume text,
  timeline text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rfq_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_rfq" ON rfq_submissions;
CREATE POLICY "anon_insert_rfq" ON rfq_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
