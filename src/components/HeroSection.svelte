<script>
	export let nowPlaying;

	let slideWidth;
	let slidesContainer;

	const handleNextClick = (event) => {
		slidesContainer.scrollLeft += slideWidth;
	};

	const handlePrevClick = (event) => {
		slidesContainer.scrollLeft -= slideWidth;
	};
</script>

<section class="carousel">
	<button
		on:click={handlePrevClick}
		class="slide-arrow"
		id="slide-arrow-prev"
	>
		&#8249;
	</button>
	<button
		on:click={handleNextClick}
		class="slide-arrow"
		id="slide-arrow-next"
	>
		&#8250;
	</button>

	<ul
		bind:this={slidesContainer}
		class="slides-container"
	>
		<li
			bind:clientWidth={slideWidth}
			class="slide"
		>
			{nowPlaying[0].title}
		</li>
		{#each nowPlaying.slice(1) as movie}
			<li class="slide">
				{movie.title}
			</li>
		{/each}
	</ul>
</section>

<style>
	.carousel {
		margin: 1rem;
		position: relative;
		overflow: hidden;
	}

	.slides-container {
		height: calc(50vh - 2rem);
		width: 100%;
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		overflow: scroll;
		scroll-behavior: smooth;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.slides-container::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	.slide {
		width: 100%;
		height: 100%;
		flex: 1 0 100%;
		background-color: blue;
	}

	.slide-arrow {
		position: absolute;
		display: flex;
		top: 0;
		bottom: 0;
		margin: auto;
		height: 4rem;
		background-color: white;
		border: none;
		width: 2rem;
		font-size: 3rem;
		padding: 0;
		cursor: pointer;
		opacity: 0.5;
		transition: opacity 100ms;
		z-index: 10;
	}

	.slide-arrow:hover,
	.slide-arrow:focus {
		opacity: 1;
	}
	#slide-arrow-prev {
		left: 0;
		padding-left: 0.25rem;
		border-radius: 0 2rem 2rem 0;
	}
	#slide-arrow-next {
		right: 0;
		padding-left: 0.75rem;
		border-radius: 2rem 0 0 2rem;
	}
</style>
