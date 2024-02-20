<script>
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
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

      <br/>

      <Card.Root>
        <Card.Header>
          <Card.Title>Next Event</Card.Title>
          <Card.Description>Bahrain - Formula 1 Gulf Air Grand Prix</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Track Image?</p>
        </Card.Content>
        <Card.Footer>
            <Button variant="outline">Make your picks</Button>
        </Card.Footer>
      </Card.Root>

    

	

	
</div>
