import { MoviesCard } from "../MoviesCard/index";
import { MoviesStillButton } from '../MoviesStillButton/index';
import './MoviesCardList.css';

export function MoviesCardList({
  setStateAction,
  movies,
  hiddenMovies,
  onClickSavedMovies,
  saveMovies,
  onClickDeleteMoviesHandler,
  addedActive,
  save,
  sortedArray,
}) {

  return (
    <section className="moviescardlist_section">
      <div className="moviescardlist_gloval_container">
        {movies.length
          ? (
              <div className="moviescardlist_movies_container">
                {movies.map((movie) => {
                    return(
                      <MoviesCard
                        key={movie.id}
                        movie={movie}
                        movies={movies}
                        onClickSavedMovies={onClickSavedMovies}
                        onClickDeleteMoviesHandler={onClickDeleteMoviesHandler}
                        saveMovies={saveMovies}
                        addedActive={addedActive}
                        image={movie.image}
                        hiddenMovies={hiddenMovies}
                        save={save}
                      />
                    )
                })}
              </div>
            )
          : (
            <div className="moviescardlist_movies_notfound">Ничего не найдено</div>
          )
        }
        {movies?.length !== (sortedArray?.length || 0) && <MoviesStillButton setStateAction={setStateAction}/>}
      </div>
    </section>
  );
}