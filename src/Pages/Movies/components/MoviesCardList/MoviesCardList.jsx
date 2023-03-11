import { MoviesCard } from "../MoviesCard/index";
import { MoviesStillButton } from '../MoviesStillButton/index';
import './MoviesCardList.css';

export function MoviesCardList() {

    return (
        <section className="moviescardlist_section">
            <div className="moviescardlist_gloval_container">
                <div className="moviescardlist_movies_container">
                    <MoviesCard/>
                </div>
                <MoviesStillButton/>
            </div>
        </section>
    );
}
