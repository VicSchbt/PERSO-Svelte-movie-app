<script>
  import MovieCard from "./MovieCard.svelte";
  import Divider from "./ui/divider/Divider.svelte";
	import Icon from '@iconify/svelte';

	export let popular;
</script>

<div class="title">
  <Icon icon="fa6-solid:arrow-trend-up" /> 
  <h3>Popular Movies</h3>
</div>


<Divider color={"#c4c4c4"}/>

<div class="popular_movies">
	{#each popular as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
  .title {
    display: flex;
    align-items: baseline;
  }

  h3 {
    padding: 0 0.5rem;
  }
  .popular_movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
</style>
