<script>
	

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

    <h3>My List of Drivers...</h3>
	<ul>
		{#each data.drivers as driver}
		  <li>{driver.driver_name}</li>
		{/each}
	</ul>
</section>