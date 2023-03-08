import { FilterCheckBox } from './components/FilterCheckbox/index';
import './SearchForm.css';

export function SearchForm() {

    return (
        <section className="searchform_section">
            <div className="promo_global_container-content">
                <div className="searchform_section_container">
                    <input className="searchform_section_input" placeholder="Фильм"></input>
                    <button className="searchform_section_button">Найти</button>
                </div>
                <FilterCheckBox />
            </div>
        </section>
    );
}
