<script>
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { goto } from '$app/navigation';

    export let event;

    const handleClick = (eventId) => {
	    goto('/event/'+eventId);
    }

    let timeNow = new Date().toISOString();

</script>

<Card.Root>
    <Card.Header>
      <Card.Title>{event.event_name}</Card.Title>
      <Card.Description>{event.event_desc}</Card.Description>
    </Card.Header>
    <!-- <Card.Content>
      <p>Track Image?</p>
    </Card.Content> -->
    <Card.Footer>
        {#if event.start_date > timeNow}
        <Button variant="outline" on:click={() => handleClick(event.event_id)}>Make your picks</Button>
        {:else if event.end_date <= timeNow}
        <Button variant="outline" on:click={() => handleClick(event.event_id)}>View Results</Button>
        {/if}
    </Card.Footer>
  </Card.Root>

