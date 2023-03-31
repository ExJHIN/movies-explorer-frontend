export const isSaveMovie = (saveMovies, id) => {
  const item = saveMovies.find((movie) => movie.movieId === id);
  return !!item;
};