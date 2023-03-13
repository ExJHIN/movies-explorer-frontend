import { HeaderAuthorized } from '../../ui/HeaderAuthorized';
import '../Main/Main.css';
import { SearchForm } from '../../components/SearchForm/index';
import { MoviesCardList } from './components/MoviesCardList/index';
import { Footer } from '../../ui/Footer/index';
import './Movies.css';

export function Movies() {
    return (
      <>
        <HeaderAuthorized />
          <main className="main_container">
            <SearchForm />
            <MoviesCardList />
          </main>
        <Footer/>
      </>
    );
  }
