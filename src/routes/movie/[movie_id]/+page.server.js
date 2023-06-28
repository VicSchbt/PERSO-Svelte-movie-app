import { API_KEY } from '../../../dev.js';

export const load = async ({ fetch, params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${API_KEY}&language=en-US`
  );
  const movieDetails = await res.json();
  if (res.ok) {
    return {
      movieDetails
    };
  }
};