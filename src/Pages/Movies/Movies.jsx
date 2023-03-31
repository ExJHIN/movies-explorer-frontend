import { useState, useEffect } from 'react';
import { HeaderAuthorized } from '../../ui/HeaderAuthorized';
import { SearchForm } from '../../components/SearchForm';
import { MoviesCardList } from './components/MoviesCardList';
import { Footer } from '../../ui/Footer/index';
import { getAllMoviesAndSaveMovies } from '../../utils/GetAllMoviesAndSaveMovies';
import { getDynamicMovies } from '../../utils/GetDynamicMovies';
import { localStorageWrapper } from '../../utils/StorageWrapper';
import { getSaveMovies } from '../../utils/GetSaveMovies';

import '../Main/Main.css';
import './Movies.css';

export function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const [seveMovies, setSaveMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(localStorageWrapper.get('moviesInput') || '');
  const [activeFilter, setActiveFilter] = useState(localStorageWrapper.get('moviesInput') || '');
  const [isCheckbox, setIsCheckbox] = useState(localStorageWrapper.get('moviesCheckbox') || false);
  const [stepForViewCard, setStepForViewCard] = useState(0);
  const [isSearchOne, setIsSearchOne] = useState(false);

  const allDataMovies = localStorageWrapper.get('allMovies') || [];

  const onRequestAllFilms = async () => {
    const { allMovies, saveMovies } = await getAllMoviesAndSaveMovies();

    setAllMovies(allMovies);
    setSaveMovies(saveMovies);
  };

  const onRequestAllSaveMovie = async () => {
    const response = await getSaveMovies();

    setSaveMovies(response);
  }

  function resultArrayAllMovies(data) {
    const dynamicMovies = getDynamicMovies();

    return data.slice(0, dynamicMovies[0] + dynamicMovies[1] * stepForViewCard);
  }

  useEffect(() => {
    const handlerResize = () => getDynamicMovies();
    window.addEventListener('resize', handlerResize);

    onRequestAllSaveMovie();

    return () => {
      window.removeEventListener('resize', handlerResize);
    }
  }, []);

  useEffect(() => {
    if (isSearchOne && !allDataMovies.length) {
      onRequestAllFilms();
    }
  }, [isSearchOne]);

  return (
    <>
      <HeaderAuthorized />
        <main className="main_container">
          <SearchForm
            dataMovies={allDataMovies}
            setSateDataAction={setAllMovies}
            valueFieldSearch={searchValue}
            setStateValueFieldAction={setSearchValue}
            isCheckbox={isCheckbox}
            setStateCheckboxAction={setIsCheckbox}
            isSaveValueInput={true}
            storageInputKey={'moviesInput'}
            isSaveValueCheckbox={true}
            storageCheckboxKey={'moviesCheckbox'}
            setIsSearchOne={setIsSearchOne}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <MoviesCardList
            saveMovies={seveMovies}
            setSaveMovies={setSaveMovies}
            dataMovies={resultArrayAllMovies(allMovies)}
            maxLength={allMovies.length}
            setStateStepForViewCardAction={setStepForViewCard}
          />
        </main>
      <Footer/>
    </>
  );
}