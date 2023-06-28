<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	import TopRatedMovies from '../components/TopRatedMovies.svelte';

	export let data;
	let popular = data.popular;
	let topRated = data.topRated;
</script>

<section class="content">
	<PopularMovies {popular} />
	<aside>
		<TopRatedMovies {topRated} />
	</aside>
</section>

<style>
	.content {
		display: flex;
		gap: 1rem;
	}
</style>
