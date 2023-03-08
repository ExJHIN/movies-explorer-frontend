import { HeaderAuthorized } from '../../ui/HeaderAuthorized';
import '../Main/Main.css';
import { SearchForm } from './components/SearchForm/index';
import './Movies.css';

export function Movies() {
    return (
      <main className="main_container">
        <HeaderAuthorized />
        <SearchForm />
      </main>
    );
  }
