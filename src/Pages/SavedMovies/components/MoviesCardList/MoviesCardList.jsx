import { MoviesCard } from "../MoviesCard/index";
import './MoviesCardList.css';

export function MoviesCardList() {

    return (
        <section className="moviescardlist_section">
            <div className="moviescardlist_gloval_container">
                <div className="moviescardlist_movies_saved-container">
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                </div>
            </div>
        </section>
    );
}
