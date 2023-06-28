<script>
	import Card from '../Card.svelte';
	import Icon from '@iconify/svelte';

	export let movie;
</script>

<Card>
	<div class="content">
		<a href={'/movie/' + movie.id}>
			<img
				src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
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
					<Icon icon="material-symbols:star-outline-rounded" />
					<p>{movie.vote_average} ({movie.vote_count})</p>
				</div>
			</div>
		</div>
	</div>
</Card>

<style>
	img {
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
	.content {
		display: flex;
		height: 75px;
	}
	.description {
		width: calc(100% - 50px);
		padding: 0.2rem;
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
