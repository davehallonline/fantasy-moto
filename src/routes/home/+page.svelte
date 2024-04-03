<script>

  import Scoreboard from "./Scoreboard.svelte";
  import EventList from "./EventList.svelte";

  export let data;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="App Home" />
</svelte:head>

<div class="text-column">
	<h1>Fantasy Moto Home</h1>

  <div class="grid grid-flow-row sm:grid-flow-col gap-3">
    <div class="sm:col-span-4 flex justify-center">
      <Scoreboard/>
    </div>
    <div class="flex justify-center">
      <EventList data={data}/>
    </div>
  </div>
    
    
	

	
</div>
