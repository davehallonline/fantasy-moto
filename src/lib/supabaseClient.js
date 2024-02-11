
import { createClient } from '@supabase/supabase-js'
import { building } from '$app/environment'
import { env } from '$env/dynamic/public'

const fallbackURL = 'http://localhost:3067'
export const PUBLIC_SUPABASE_URL = building ? fallbackURL : env.PUBLIC_SUPABASE_URL || 'http://localhost:3067'

const fallbackKey = 'abcdef'
export const PUBLIC_SUPABASE_ANON_KEY = building ? fallbackKey : env.PUBLIC_SUPABASE_ANON_KEY || 'abcdef'

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)


//export const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY)
