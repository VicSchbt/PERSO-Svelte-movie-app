<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	import TopRatedMovies from '../components/TopRatedMovies.svelte';
	import HeroSection from '../components/HeroSection.svelte';

	export let data;
	let popular = data.popular;
	let topRated = data.topRated;
	let nowPlaying = data.nowPlaying;
</script>

<HeroSection {nowPlaying} />
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
