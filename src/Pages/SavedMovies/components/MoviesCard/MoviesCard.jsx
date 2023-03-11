import filmOne from '../../../../images/cover_films-1.jpg';
import './MoviesCard.css';


export function MoviesCard() {

    return (
        <>
            <article className="movie_card">
                <div className="movie_flex_container">
                    <span className="movie_span_text">В погоне за Бенкси</span>
                    <p className="movie_paragraph_text">27 минут</p>
                </div>
                <div className="movies_image_button">
                    <img  className="movie_cover" src={filmOne} alt="Обложка фильма" />
                    <button className="movie_add_button_saved"/>
                </div>
            </article>
        </>
            
    );
}
