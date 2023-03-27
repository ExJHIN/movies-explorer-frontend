import { MoviesCard } from "../MoviesCard/index";
import { MoviesStillButton } from '../MoviesStillButton/index';
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';

export function MoviesCardList({
    onChangeShowMoreHandler, // Показать еще карточки
    movies, // Все фильмы Array[]
    hiddenMovies, // Достает следующие 3 карточки (Action)
    onClickSavedMovies,  // Сохранение фильма по onClick (добавить/удалить)
    saveMovies, // Сохранненые фильмы Array[]
    onClickDeleteMoviesHandler, // Удаление фильма со старницы сохраненных фильмов
    addedActive, // какая-то ненужная хуйня, автор сам не ебет что это такое
    save, // Сохранена/Не сохранена boolean (isSave)
}) {
    const path = useLocation();
    return (
        <section className="moviescardlist_section">
            <div className="moviescardlist_gloval_container">      
                {movies.length
                    ? (
                        <div className="moviescardlist_movies_container">
                            {movies.map((movie) => {
                                return(
                                    <MoviesCard
                                        key={movie.id || movie.movieId}
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
                                })
                            }
                        </div>
                    )
                    : (
                        <div className="moviescardlist_movies_notfound">Ничего не найдено</div>
                    )
                }
                
                {hiddenMovies.length > 0 && path.pathname === '/movies' && (
                    <MoviesStillButton onChangeShowMoreHandler={onChangeShowMoreHandler}/>
                )}
            </div>
        </section>
    );
}
