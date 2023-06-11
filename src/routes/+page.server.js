

export const load = async ({ fetch }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (res.ok) {
    return {
      popular: data.results
    };
  }
};