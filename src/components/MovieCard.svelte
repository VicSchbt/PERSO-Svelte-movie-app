<script>
	import Card from './ui/card/Card.svelte';
	import Icon from '@iconify/svelte';

	export let movie;
</script>

<Card>
	<a href={'/movie/' + movie.id}>
		<img
			src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
			alt={movie.title}
		/>
	</a>

	<div class="description">
		<h2>{movie.title}</h2>
		<div class="sub-description">
			<div class="sub-description_year">
				<p>{movie.release_date.substring(0, 4)}</p>
			</div>
			<div class="sub-description_data">
				<Icon icon="ic:baseline-favorite-border" />
				<Icon icon="mdi:eye-outline" />
				<Icon icon="material-symbols:star-outline-rounded" />
				<p>{movie.vote_average} ({movie.vote_count})</p>
			</div>
		</div>
	</div>
</Card>

<style>
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
	.description {
		height: 6rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.sub-description {
		display: flex;
		justify-content: space-between;
	}
	.sub-description_data {
		display: flex;
		gap: 0.5rem;
	}
	h2 {
		font-size: 0.9rem;
    max-lines: 2;
	}
	p {
		font-size: 0.7rem;
	}
</style>
