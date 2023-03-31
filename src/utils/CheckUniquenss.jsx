export const checkUniquenss = (saveMovies, id) => {
  return !!saveMovies.find(({ movieId }) => movieId === id);
}