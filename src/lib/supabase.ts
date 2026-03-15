import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ContactMessage {
  id?: string
  name: string
  email: string
  company?: string
  project_type: string
  message: string
  created_at?: string
}
