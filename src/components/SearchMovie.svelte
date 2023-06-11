<script>
	let inputValue;
</script>

<form class="search">
	<label for="search_movie">Search Movie</label>
	<input
		bind:value={inputValue}
		name="search_movie"
		type="text"
	/>
	<button>Search</button>
</form>

<style>
</style>
