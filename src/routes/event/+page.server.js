import { error } from '@sveltejs/kit';
import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').PageServerLoad} */

export async function load({ params }) {	
    //const post = await getPostFromDatabase(params.slug);
	//if (post) {		
    //    return post;	
    //}

console.log(params)
    const { data } = await supabase
    .from('Events')
    .select('*')
    .eq('event_id', params.slug)
    //return {
    //  events: data[0] ?? [],
      //events: data ?? error(404, 'Not found'),
   // }



	//error(404, 'Not found');

  
    
  
}

/* async function getPostFromDatabase(slug) {
    const { data } = await supabase
    .from('Events')
    .select('*')
    .eq('event_id', slug)
    return {
      events: data ?? [],
    };
} */