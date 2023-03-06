import '../Main/Main.css';
import { SearchForm } from './components/SearchForm/index';
import './Movies.css';

export function Movies() {
    return (
      <main className="main_container">
        <SearchForm />
      </main>
    );
  }
