import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FilterCheckBox } from './components/FilterCheckbox/index';
import './SearchForm.css';

export function SearchForm({
  setMoviesAction,
  valueSearchField,
  setValueSearchField,
  setIsSearchOne,
}) {
  const { pathname } = useLocation();

  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('isShortfilms')));
  
  function onChangeSetValueSearchFieldHandler(e) {
    setValueSearchField(e.target.value);
  }
  
  const allMovies = JSON.parse(localStorage.getItem('allMovies'));

  function onClickSearchByMoviesHandler() {
    if (!valueSearchField && pathname === '/movies') return;

    setIsSearchOne(true);
    const valueSearchFieldUpperCase = valueSearchField.toUpperCase();
    
    setMoviesAction(allMovies.filter(({ nameRU, nameEN, duration }) => {
      if (isChecked) {
        return duration <= 40 && (nameRU.toUpperCase().includes(valueSearchFieldUpperCase) || nameEN.toUpperCase().includes(valueSearchFieldUpperCase));
      }
      return nameRU.toUpperCase().includes(valueSearchFieldUpperCase) || nameEN.toUpperCase().includes(valueSearchFieldUpperCase);
    }))
  }

  useEffect(() => {
    onClickSearchByMoviesHandler();
  }, [isChecked]);

  function onChangeSetIsShorFilmsHandler() {
    if (JSON.parse(localStorage.getItem('isShortfilms')) !== null) {
      localStorage.setItem('isShortfilms', !isChecked);
      setIsChecked(JSON.parse(localStorage.getItem('isShortfilms')));
    }
  }

  const { register, formState : 
    {errors},
    handleSubmit,
  } = useForm({
      mode: "onSubmit",
    }
  );

  useEffect(() => {
    if (isChecked === null) {
      localStorage.setItem('isShortfilms', false);
    }
  }, []);

  return (
    <section className="searchform_section">
      <div className="promo_global_container-content">
        <form className="searchform_section_container" name="search" noValidate onSubmit={handleSubmit(onClickSearchByMoviesHandler)}>
          <input className="searchform_section_input" type="text" placeholder="Фильм" required value={valueSearchField || ''}
              {...register    
                ('searchForm', 
                  {
                    required: 'Введите ключевое слово для поиска',
                    minLength: {
                      value: 1,
                      message: 'Необходимо ввести ключевое слово'
                    },
                    onChange: (e) => onChangeSetValueSearchFieldHandler(e),
                  }
                )
              }
          />
          <button className="searchform_section_button" onClick={onClickSearchByMoviesHandler} type="submit">Найти</button>
        </form>
        {errors?.searchForm && 
          <span className="register_form_input-error">
            {errors?.searchForm?.message || "Что-то пошло не так..."}
          </span>
        }
        <FilterCheckBox
          onChange={onChangeSetIsShorFilmsHandler}
          checkbox={isChecked}
        />
      </div>
    </section>
  );
}
