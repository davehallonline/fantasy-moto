<script>
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { goto } from '$app/navigation';

    export let data;

    /* const handleClick = (eventId) => {
	    goto('/event/'+eventId);
    } */


</script>

<Card.Root>
    <Card.Header>
        <Card.Title>{data.constructor_name}</Card.Title>
      <Card.Description>Team Desc<br>
        Remaining Picks Counter<br> 
        Select/Deselect animated icon<br>
        3/4 wide cards so 3 rows centered list with logos
      </Card.Description>
      <!-- Card.Title>{event.event_name}</Card.Title>
      <Card.Description>{event.event_desc}</Card.Description> -->
    </Card.Header>
    <!-- <Card.Content>
      <p>Track Image?</p>
    </Card.Content> -->
    <Card.Footer>
    </Card.Footer>
  </Card.Root>