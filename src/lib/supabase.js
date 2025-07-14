import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://eksroipcbpnykdwcystr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrc3JvaXBjYnBueWtkd2N5c3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTMzMjgsImV4cCI6MjA2Nzg2OTMyOH0.tBGD9rn2IWrFj5kDRl3L6KkK6cjvDSAUut-O6rnj5wA'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)