-- Create a table for leads requesting the guide
CREATE TABLE IF NOT EXISTS public.leads_guide (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL,
    nom TEXT,
    guide_name TEXT DEFAULT '10 erreurs visibilité Mulhouse',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.leads_guide ENABLE ROW LEVEL SECURITY;

-- Allow anonymous insertions (public lead capture)
CREATE POLICY "Allow public for lead insertion" 
ON public.leads_guide FOR INSERT 
WITH CHECK (true);

-- Allow admins to read (requires auth)
CREATE POLICY "Allow authenticated for lead selection" 
ON public.leads_guide FOR SELECT 
TO authenticated 
USING (true);
