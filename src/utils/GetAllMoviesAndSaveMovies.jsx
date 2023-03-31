import { ApiMovies } from './MoviesApi';
import { Api } from './MainApi';
import { localStorageWrapper } from './StorageWrapper';

export async function getAllMoviesAndSaveMovies() {
  async function fetchData() {
    const resultData = await Promise.all([
      ApiMovies.requestMovies(),
      Api.readMoviesMe(),
    ]);

    return resultData;
  }
  
  const data = await fetchData();
  
  const allMovies = data[0];
  const saveMovies = data[1];

  localStorageWrapper.set('allMovies', data[0]);

  return {
    allMovies,
    saveMovies,
  };
}