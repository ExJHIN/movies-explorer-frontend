import { useState, useEffect } from 'react';

import { HeaderAuthorized } from '../../ui/HeaderAuthorized';
import '../Main/Main.css';
import { SearchForm } from '../../components/SearchForm/index';
import { MoviesCardList } from '../Movies/components/MoviesCardList/index';
import { Footer } from '../../ui/Footer/index';
import { getSaveMovies } from '../../utils/GetSaveMovies';
import './SavedMovies.css';

export function SavedMovies() {
  const [saveMoviesForFiltering, setSaveMoviesForFiltering] = useState([]);
  const [seveMovies, setSaveMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [isCheckbox, setIsCheckbox] = useState(false);

  const onRequestAllSaveMovie = async () => {
    const response = await getSaveMovies();

    setSaveMoviesForFiltering(response);
    setSaveMovies(response);
  };

  useEffect(() => {
    onRequestAllSaveMovie();
  }, []);

  return (
    <>
      <HeaderAuthorized />
      <main className="main_container">
        <SearchForm
          dataMovies={saveMoviesForFiltering}
          setSateDataAction={setSaveMovies}
          valueFieldSearch={searchValue}
          setStateValueFieldAction={setSearchValue}
          isCheckbox={isCheckbox}
          setStateCheckboxAction={setIsCheckbox}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <MoviesCardList
          saveMovies={seveMovies}
          setSaveMovies={setSaveMovies}
          setSaveMoviesForFiltering={setSaveMoviesForFiltering}
        />
      </main>
      <Footer/>
    </>
  );
}
