import { useState, useEffect } from 'react';
import { HeaderAuthorized } from '../../ui/HeaderAuthorized';
import { SearchForm } from '../../components/SearchForm/index';
import { MoviesCardList } from './components/MoviesCardList/index';
import { Footer } from '../../ui/Footer/index';
import { ApiMovies } from '../../utils/MoviesApi';
import { Preloader } from '../Movies/components/Preloader/index';

import '../Main/Main.css';
import './Movies.css';

export function Movies() {
  const [preloadMovies, setPreloadMovies] = useState(false);
  const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) || []);
  const [additionCard, setAdditionCard] = useState(0);
  const [valueSearchField, setValueSearchField] = useState(localStorage.getItem('searchValue'));
  const [isSearchOne, setIsSearchOne] = useState(false);

  useEffect(() => {
    if (valueSearchField) {
      localStorage.setItem('searchValue', valueSearchField);
    }
    if (valueSearchField === '' && !isSearchOne) {
      setAllMovies([]);
    }
  }, [valueSearchField])

  function getDynamicMovies() {
    let adaptiveCount;
    const width = window.innerWidth;
    const config = {'1200': [12, 3], '900': [9, 3],'768': [8, 2],'240': [5, 2]};
    Object.keys(config).sort((a, b) => a - b).forEach((key) => {
        if (width > +key) {
          adaptiveCount = config[key];
        }
      });
    return adaptiveCount;
  }

  function setPropertyIsSaved(moviesList) {
    if (!moviesList.length) return [];

    return moviesList.map((movie) => ({
      ...movie,
      isSaved: false,
    }))
  }

  function getRequestAllMovies() {
    if (JSON.parse(localStorage.getItem('allMovies')) !== null) return;

    ApiMovies.requestMovies()
      .then((movies) => {
        localStorage.setItem(
          'allMovies',
          JSON.stringify(setPropertyIsSaved(movies)),
        );
        setPreloadMovies(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloadMovies(false);
      });
  }

  useEffect(() => {
    const handlerResize = () => getDynamicMovies();
    window.addEventListener('resize', handlerResize);
    
    getRequestAllMovies();

    if (valueSearchField === null) {
      localStorage.setItem('searchValue', '');
    }

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

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
    setAllMovies(setIsSavedMovies(allMovies, idMovies));
    localStorage.setItem(
      'allMovies',
      JSON.stringify(setIsSavedMovies(allMoviesFromLocalStorage, idMovies)),
    );
  }

  function resultArrayAllMovies() {
    const dynamicMovies = getDynamicMovies();

    return allMovies.slice(0, dynamicMovies[0] + dynamicMovies[1] * additionCard);
  }

  return (
    <>
      <HeaderAuthorized />
        <main className="main_container">
          <SearchForm
            setMoviesAction={setAllMovies}
            valueSearchField={valueSearchField}
            setValueSearchField={setValueSearchField}
            setIsSearchOne={setIsSearchOne}
          />
          {preloadMovies
          ? <Preloader />
          : (
            <MoviesCardList 
              movies={resultArrayAllMovies()}
              sortedArray={allMovies}
              onClickDeleteMoviesHandler={onClickToggleMovieHandler}
              setStateAction={setAdditionCard}
            />
          )}
        </main>
      <Footer/>
    </>
  );
}
