import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from('Drivers').select('*');
  return {
    drivers: data ?? [],
  };
}