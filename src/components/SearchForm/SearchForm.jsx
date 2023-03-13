import { FilterCheckBox } from './components/FilterCheckbox/index';
import './SearchForm.css';

export function SearchForm() {

    return (
        <section className="searchform_section">
            <div className="promo_global_container-content">
                <form className="searchform_section_container" noValidate>
                    <input className="searchform_section_input" placeholder="Фильм" required></input>
                    <button className="searchform_section_button">Найти</button>
                </form>
                <FilterCheckBox />
            </div>
        </section>
    );
}
