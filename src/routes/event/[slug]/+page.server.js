import { error } from '@sveltejs/kit';
import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */

export async function load({ params }) {	
  const { data } = await supabase
  .from('Events')
  .select('*')
  .eq('event_id', params.slug);
  return {
    events: data ?? error(404, 'Not found'),
  };
}
