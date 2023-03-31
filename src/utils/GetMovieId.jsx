export const getMovieId = (saveMovies, id) => {
  return saveMovies.find((movie) => movie.movieId === id)._id;
};