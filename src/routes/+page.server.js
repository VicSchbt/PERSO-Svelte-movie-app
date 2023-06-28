import { API_KEY } from '../dev.js';

export const load = async ({ fetch }) => {
	const resPopular = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
	);
	const dataPopular = await resPopular.json();

	const resTopRated = await fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
	);
	const dataTopRated = await resTopRated.json();

	if (resPopular.ok && resTopRated.ok) {
		return {
			popular: dataPopular.results,
			topRated: dataTopRated.results.slice(0, 10),
		};
	}
};
