<script>
	import PopularMovies from '../components/PopularMovies.svelte';

	export let data;
	let popular = data.popular;
	let topRated = data.topRated;
</script>

<section>
	<PopularMovies {popular} />
</section>
