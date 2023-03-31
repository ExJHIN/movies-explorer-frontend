import { Link, useLocation } from "react-router-dom";
import './MoviesCard.css';

export function MoviesCard({
    movie,
    onClickToggleHandler,
    isSave,
}) {
  const { pathname } = useLocation();
  const isSavedMovies = pathname === '/saved-movies';

  return (
    <>
      <article className="movie_card">
        <div className="movie_flex_container">
          <span className="movie_span_text">{movie.nameRU}</span>
          <p className="movie_paragraph_text">
            {Math.floor(movie.duration / 60)}ч&#32;{movie.duration - (Math.floor(movie.duration / 60)) * 60}м
          </p>
        </div>
        <Link className="movies_image_button" to={movie.trailerLink} target="_blank">
          {isSavedMovies
            ? (
              <img
                className="movie_cover"
                src={movie.image}
                alt={movie.nameRU}
              />
            )
            : (
              <img
                className="movie_cover"
                src={`https://api.nomoreparties.co${movie.image.url}`}
                alt={movie.nameRU}
              />
            )}
        </Link>
        {isSavedMovies
          ? (
            <button
              className={isSavedMovies ? "movie_add_button_saved" : "movie_add_button"}
              onClick={() => onClickToggleHandler(movie)}
            />
          )
          : (
            <button
              className={!isSave  ? "movie_saved_button" : "movie_add_button"}
              onClick={() => onClickToggleHandler(movie)}
            >{!isSave ? 'Сохранить' : ''}</button>
          )
        }
      </article>
    </>
  );
}
