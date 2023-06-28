<script>
	import SmallMovieCard from './ui/card/movie-card/SmallMovieCard.svelte';
	import Divider from './ui/divider/Divider.svelte';
	import Icon from '@iconify/svelte';

	export let topRated;
</script>

<div class="content">
	<div class="title">
		<Icon icon="material-symbols:star-rate-rounded" />
		<h3>Top Rated Movies</h3>
	</div>

	<Divider color={'#c4c4c4'} />

	<div class="top_rated_movies">
		{#each topRated as movie}
			<SmallMovieCard {movie} />
		{/each}
	</div>
</div>

<style>
	.content {
		flex-basis: 10%;
	}
	.title {
		display: flex;
		align-items: baseline;
	}
	h3 {
		padding: 0 0.5rem;
	}
	.top_rated_movies {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
