import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { HeaderAuthorized } from '../../ui/HeaderAuthorized';
import '../Main/Main.css';
import { SearchForm } from '../../components/SearchForm/index';
import { MoviesCardList } from '../Movies/components/MoviesCardList/index';
import { Footer } from '../../ui/Footer/index';
import { Preloader } from '../Movies/components/Preloader/index';
import './SavedMovies.css';

export function SavedMovies() {
  const path = useLocation();

  const [preloadMovies, setPreloadMovies] = useState(false);
  const [isSearchOne, setIsSearchOne] = useState(false);
  const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) || []);
  const [saveMovies, setSaveMovies] = useState(allMovies.filter((movie) => movie.isSaved));
  const [valueSearchField, setValueSearchField] = useState('');
  
  function setIsSavedMovies(movies, idMovies) {
    return movies.map((movie) => {
      if (movie.id === idMovies) {
        return {
          ...movie,
          isSaved: !movie.isSaved,
        }
      }
      
      return movie;
    })
  }
  
  const allMoviesFromLocalStorage = JSON.parse(localStorage.getItem('allMovies'));

  function onClickToggleMovieHandler(idMovies) {
    setAllMovies(setIsSavedMovies(allMovies, idMovies))
    localStorage.setItem(
      'allMovies',
      JSON.stringify(setIsSavedMovies(allMoviesFromLocalStorage, idMovies)),
    );
  }

  useEffect(() => {
    setSaveMovies(allMovies.filter((movie) => movie.isSaved));
  }, [allMovies]);

  useEffect(() => {
    setValueSearchField('');
  }, [path]);

  return (
    <>
      <HeaderAuthorized />
      <main className="main_container">
        <SearchForm
          setMoviesAction={setAllMovies}
          valueSearchField={valueSearchField}
          setValueSearchField={setValueSearchField}
          setPreloadMovies={setPreloadMovies}
          setIsSearchOne={setIsSearchOne}
        />
        {preloadMovies
        ? <Preloader />
        : (
          <MoviesCardList 
            movies={saveMovies}
            sortedArray={saveMovies}
            onClickDeleteMoviesHandler={onClickToggleMovieHandler}
          />
        )}
      </main>
      <Footer/>
    </>
  );
}
