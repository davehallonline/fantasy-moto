import { supabase } from "$lib/supabaseClient";
import { redirect } from '@sveltejs/kit'

export async function load({ params, locals:{supabase, getSession} }) {	

  const session = await getSession()

  if (!session) {
    throw redirect(303, '/')
  }

  const { data } = await supabase.from('Events').select('*');
  return {
    events: data ?? [],
  };
}