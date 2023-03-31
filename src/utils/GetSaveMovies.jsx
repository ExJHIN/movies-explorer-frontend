import { Api } from './MainApi';

export async function getSaveMovies() {
  const fetchData = async () => {
    const data = await Api.readMoviesMe();

    return data;
  }

  const saveMovies = await fetchData();

  return saveMovies;
}