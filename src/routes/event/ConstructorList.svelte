<script>
	import ConstructorCard from "./ConstructorCard.svelte";

    export let data;
    
    //console.log(data)
</script>

<div>
    List of constructor cards
    {#each data as constructor_data}
        <ConstructorCard data={constructor_data}/>
    {/each} 
   
</div>
	