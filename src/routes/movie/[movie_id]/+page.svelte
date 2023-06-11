<script>
	export let data;
  const movieDetails = data.movieDetails;
	console.log(data);
</script>

<div class="movie-details">
  <div class="img-container">
    <img src={"https://image.tmdb.org/t/p/original" + movieDetails.poster_path} alt={movieDetails.title}>
  </div>
  <div class="text-container">
    <h1>{movieDetails.title}</h1>
    <p class="overview">{movieDetails.overview}</p>
    <p><span>Release Date </span>{movieDetails.release_date} <br/></p>
  </div>
</div>


<style>
  h1 {
    padding: 1rem 0rem 2rem;
  }
  p {
    padding: 1rem 0rem;
  }
  .img-container {
    width: 100%;
  }
  img {
    width: 100%;
    border-radius: 1rem;
  }
  .movie-details {
    display: flex;
    gap: 2rem;
    margin: 0 10%;
  }
  span {
    font-weight: bold;
  }
</style>