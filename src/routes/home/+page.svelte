<script>
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { goto } from '$app/navigation';

    export let data;

    const handleClick = (eventId) => {
	    goto('/event/'+eventId);
    }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="App Home" />
</svelte:head>

<div class="text-column">
	<h1>Fantasy Moto Home</h1>

    <Card.Root>
        <Card.Header>
          <Card.Title>Current Position</Card.Title>
          <Card.Description>1st of 8 Comptetitors</Card.Description>
        </Card.Header>
      </Card.Root>

    {#each data.events as event}
      <Card.Root>
        <Card.Header>
          <Card.Title>{event.event_name}</Card.Title>
          <Card.Description>{event.event_desc}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Track Image?</p>
        </Card.Content>
        <Card.Footer>
            <Button variant="outline" on:click={() => handleClick(event.event_id)}>Make your picks</Button>
        </Card.Footer>
      </Card.Root>
    {/each}
	

	
</div>
