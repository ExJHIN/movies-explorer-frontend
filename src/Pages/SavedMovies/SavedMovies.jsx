import { HeaderAuthorized } from '../../ui/HeaderAuthorized';
import '../Main/Main.css';
import { SearchForm } from '../../components/SearchForm/index';
import { MoviesCardList } from './components/MoviesCardList/index';
import { Footer } from '../../ui/Footer/index';
import './SavedMovies.css';

export function SavedMovies() {
    return (
      <main className="main_container">
        <HeaderAuthorized />
        <SearchForm />
        <MoviesCardList />
        <Footer/>
      </main>
    );
  }
