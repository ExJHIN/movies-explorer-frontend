import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FilterCheckBox } from './components/FilterCheckbox/index';
import { localStorageWrapper } from '../../utils/StorageWrapper';
import './SearchForm.css';

export function SearchForm({
  dataMovies, // Данные всех фильмов; [{}, ..., {}]
  setSateDataAction, // Действие, на изменение данных фильмов; Dispatch<SetStateAction<[{}, ..., {}]>>
  valueFieldSearch, // Зачение в поиске; string
  setStateValueFieldAction, // Действие, на изменение значения поля поиска; Dispatch<SetStateAction<string>>
  isCheckbox, // Состояние переключателя; boolean
  setStateCheckboxAction, // Действие на изменение состояния переключателя; Dispatch<SetStateAction<boolean>>
  activeFilter, // Актиные фильтры; boolean
  setActiveFilter, // Действие на установление активных фильтров; Dispatch<SetStateAction<boolean>>
  isSaveValueInput, // Нужно ли сохранять значение в поиске; boolean?
  storageInputKey, // Ключ для сохранения данных в поиске; string?
  isSaveValueCheckbox, // Нужно ли сохранять значение переключателя; boolean?
  storageCheckboxKey, // Ключ для сохранения данных переключателя; string?
  setIsSearchOne, // Сделан ли первый запрос; Dispatch<SetStateAction<boolean>>
}) {
  const { pathname } = useLocation();
  const isSavedMovies = pathname === '/saved-movies';

  // Функция фильтрации данных, зависит от переключателя
  const dataFiltering = () => {
    const valueField = activeFilter.toUpperCase();

    setSateDataAction(dataMovies.filter(({ nameRU, nameEN, duration }) => {
      const data = isCheckbox
        ? duration <= 40 && (nameRU.toUpperCase().includes(valueField) || nameEN.toUpperCase().includes(valueField))
        : nameRU.toUpperCase().includes(valueField) || nameEN.toUpperCase().includes(valueField);
      
      return data;
    }))
  }

  useEffect(() => {
    isSavedMovies && dataFiltering();
  }, [dataMovies])

  const onClickFilteringDataHandler = () => {
    if (valueFieldSearch) {
      setActiveFilter(valueFieldSearch);

      if (isSaveValueInput && storageInputKey) {
        localStorageWrapper.set(storageInputKey, valueFieldSearch);
      }

      dataFiltering();
  
      setIsSearchOne && setIsSearchOne(true);
    }
  }

  // Функция на изменение данных в input; event - ChangeEvent<HTMLInputElement>
  const onChangeValueInputHandler = (event) => {
    const value = event.target.value;

    setStateValueFieldAction(value);
  }

  // Функция по смене состояния переключателя
  const onChangeValueCheckboxHandler = () => {
    setStateCheckboxAction((prev) => !prev);

    if (isSaveValueCheckbox && storageCheckboxKey) {
      localStorageWrapper.set(storageCheckboxKey, isCheckbox);
    }
  }

  // Если изменили состояние переключателя - фильтруем
  useEffect(() => {
    if (isSaveValueCheckbox && storageCheckboxKey) {
      localStorageWrapper.set(storageCheckboxKey, isCheckbox);
    }

    dataFiltering();
  }, [isCheckbox]);

  // Вылидания формы
  const { register, formState : 
    {errors},
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  return (
    <section className="searchform_section">
      <div className="promo_global_container-content">
        <form className="searchform_section_container" name="search" noValidate onSubmit={handleSubmit(onClickFilteringDataHandler)}>
          <input className="searchform_section_input" type="text" placeholder="Фильм" required value={valueFieldSearch || ''}
              {...register    
                ('searchForm', 
                  {
                    required: 'Введите ключевое слово для поиска',
                    minLength: {
                      value: 1,
                      message: 'Необходимо ввести ключевое слово',
                    },
                    onChange: (event) => onChangeValueInputHandler(event),
                  }
                )
              }
          />
          <button
            className="searchform_section_button"
            onClick={onClickFilteringDataHandler}
            type="submit"
          >
            Найти
          </button>
        </form>
        {errors?.searchForm && 
          <span className="register_form_input-error">
            {errors?.searchForm?.message || "Что-то пошло не так..."}
          </span>
        }
        <FilterCheckBox
          onChange={onChangeValueCheckboxHandler}
          checkbox={isCheckbox}
        />
      </div>
    </section>
  );
}
