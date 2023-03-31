import { useLocation } from "react-router-dom";

import { MoviesCard } from "../MoviesCard/index";
import { MoviesStillButton } from '../MoviesStillButton/index';
import { getSaveMovies } from '../../../../utils/GetSaveMovies';
import { getMovieId } from '../../../../utils/GetMovieId';
import { checkUniquenss } from '../../../../utils/CheckUniquenss';
import { isSaveMovie } from '../../../../utils/IsSaveMovie';
import { Api } from '../../../../utils/MainApi';
import './MoviesCardList.css';

export function MoviesCardList({
  saveMovies,
  setSaveMovies,
  dataMovies,
  maxLength,
  setStateStepForViewCardAction,
  setSaveMoviesForFiltering,
}) {
  const { pathname } = useLocation();
  const isSavedMovies = pathname === '/saved-movies';

  const dataForRender = dataMovies ? dataMovies : saveMovies;
  const dataLenght = dataForRender.length;
  const dataMaxLenght = maxLength || dataLenght;

  // Получает данные всех сохранненных фильмов
  const onRequestAllSaveMovie = async () => {
    const response = await getSaveMovies();

    setSaveMovies(response);

    if (isSavedMovies && setSaveMoviesForFiltering) {
      setSaveMoviesForFiltering(response);
    }
  };

  // Добовляет фильм в сохраненные
  const onRequestSaveMovie = async (movie) => {
    const isMovieUniquenss = checkUniquenss(saveMovies, movie.id);
    
    if (isMovieUniquenss) return;
    
    const fetchData = async (movie) => {
      const response = await Api.createMovie(movie);
      return response;
    }

    await fetchData(movie);
    await onRequestAllSaveMovie();
  };

  // Удаляет сохраненный фильм
  const onRequestDeleteMovie = async (id) => {
    const isMovieUniquenss = checkUniquenss(saveMovies, id);
    
    if (!isMovieUniquenss) return;

    const getId = getMovieId(saveMovies, id);

    const fetchData = async (id) => {
      const data = await Api.deleteMovie(id);
      return data;
    }
    
    await fetchData(getId);
    await onRequestAllSaveMovie();
  };

  // Добавляет или удаляет фильм и получает актуальные сохраненные фильмы
  const onClickToggleHandler = async (movie) => {
    const getId = isSavedMovies ? movie.movieId : movie.id;
    const isSave = isSaveMovie(saveMovies, getId);

    isSave
      ? await onRequestDeleteMovie(getId)
      : await onRequestSaveMovie(movie);
  };

  return (
    <section className="moviescardlist_section">
      <div className="moviescardlist_gloval_container">
        {dataLenght
          ? (
              <div className="moviescardlist_movies_container">
                {dataForRender.map((movie) => {
                    return(
                      <MoviesCard
                        key={dataMovies ? movie.id : movie.movieId}
                        movie={movie}
                        onClickToggleHandler={onClickToggleHandler}
                        isSave={isSaveMovie(saveMovies, movie.id)}
                      />
                    )
                })}
              </div>
            )
          : (
            <div className="moviescardlist_movies_notfound">Ничего не найдено</div>
          )
        }
        {dataLenght !== dataMaxLenght && dataMovies && <MoviesStillButton setStateStepForViewCardAction={setStateStepForViewCardAction}/>}
      </div>
    </section>
  );
}