<script>
	import PopularMovies from '../components/PopularMovies.svelte';

	export let data;
	let popular = data.popular;
</script>

<section>
	<PopularMovies {popular} />
</section>
