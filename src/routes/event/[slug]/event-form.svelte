<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import * as Select from "$lib/components/ui/select";
    import { constructors, formSchema, type FormSchema } from "./schema";
    import {
      type SuperValidated,
      type Infer,
      superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
   
    export let data: SuperValidated<Infer<FormSchema>>;
   
    const form = superForm(data, {
      validators: zodClient(formSchema),
    });
   
    const { form: formData, enhance } = form;

    $: selectedConstructor = {
		label: constructors[$formData.constructor_id],
		value: $formData.constructor_id,
	};
  
  </script>
   
  <form method="POST" use:enhance>
   
    <Form.Field {form} name="user_id">
      <Form.Control let:attrs>
        <Form.Label>User Id</Form.Label>
        <Input {...attrs} bind:value={$formData.user_id} />
      </Form.Control>
      <Form.Description>This is your userid.</Form.Description>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Field {form} name="event_id">
        <Form.Control let:attrs>
          <Form.Label>Event Id</Form.Label>
          <Input {...attrs} bind:value={$formData.event_id} />
        </Form.Control>
        <Form.Description>This is your eventid.</Form.Description>
        <Form.FieldErrors />
      </Form.Field>

      <Form.Field {form} name="constructor_id">
        <Form.Control let:attrs>
          <Form.Label>Constructor Pick</Form.Label>       
            <Select.Root 
            selected={selectedConstructor}
            onSelectedChange={(s) => {
                s && ($formData.constructor_id = s.value);
            }}
            >
                <Select.Input name={attrs.name} />
                <Select.Trigger {...attrs}>
                    <Select.Value placeholder="Pick a Constructor" />
                </Select.Trigger>
                <Select.Content>
                    {#each Object.entries(constructors) as [value, label]}
						<Select.Item {value} {label} />
					{/each}
                </Select.Content>
                </Select.Root>
        </Form.Control>
        <Form.Description>This is your Constructor pick for this event.</Form.Description>
        <Form.FieldErrors />
      </Form.Field>

    <Form.Button>Submit</Form.Button>
  </form>