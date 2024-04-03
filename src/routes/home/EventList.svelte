<script>
	import EventCard from "./EventCard.svelte";

    export let data;
</script>

<div>
    {#each data.events as event_data}
        <EventCard event={event_data}/>
    {/each}
</div>
	