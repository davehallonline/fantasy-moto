<script>
	import SuperDebug from 'sveltekit-superforms';

	// import type { PageData } from "./$types";
	import EventForm from './event-form.svelte';

	import ConstructorList from "../ConstructorList.svelte";

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="App Home" />
</svelte:head>

<div class="text-column">
	<h1>{data.events[0].event_name} Event Page</h1>

	<h2>{data.events[0].event_desc}</h2>
	
	<ConstructorList data={data.constructors} />

	<EventForm data={data.form} />


	<!-- <SuperDebug data={data.form} /> -->

  
</div>
