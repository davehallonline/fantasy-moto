import { error, fail, redirect } from '@sveltejs/kit';
import { supabase } from "$lib/supabaseClient";


import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

/** @type {import('./$types').PageServerLoad} */

export async function load({ params, locals:{supabase, getSession} }) {	
  const session = await getSession()

  if (!session) {
    throw redirect(303, '/')
  }
  
  const { data } = await supabase
  .from('Events')
  .select('*')
  .eq('event_id', params.slug);

  return {
    events: data ?? error(404, 'Not found'),
    form: await superValidate(data.events, zod(formSchema)),
    session: session,
  };
}

export const actions = {
  default: async ({request, locals: { supabase, getSession}}) => {
    const form = await superValidate(request, zod(formSchema));
    if (!form.valid) return fail(400, { form });

    const session = await getSession();

    if (!form.data.id) {
      //insert record
      const eventpicks = { ...form.data };
      console.log(JSON.stringify(eventpicks ))
      const { error } = await supabase
        .from('EventPicks')
        .upsert({ 
          user_id: session?.user.id,
          event_id: eventpicks.event_id,
          pick_1: eventpicks.constructor_id,
        })

        if(error){
          console.log(error)
        }
    } else {
      //update record
      console.log('do update')
    }
    

    return { form };
  },
}

/* async function upsert(formData) {
console.log('in upsert')
console.log(formData)
  const { data, error } = await supabase
  .from('EventPicks')
  .upsert({ 
    user_id: 'someValue',
    event_id: 'eventId',
    pick_1: formData.data.username
  })
  .select()
        

}
 */

