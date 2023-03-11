import { useState } from "react";
import logo from '../../images/icon_profile.svg';
import  "./HeaderAuthorized.css";


export function HeaderAuthorized() {

  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => {
    setIsActive(prev => !prev);
  }

  return (
    <header
      className="header_auth"
    >
      <div className="header_container container">
        <div className="header_link-logo">
          <a href="/">
            <div className="header_logo"></div>
          </a>
        </div>
        <nav className="header_auth_navigation">
            <div className="header_auth_navbar">
                <a className="header__auth_navlink" href="/movies">Фильмы</a>
                <a className="header__auth_navlink" href="/saved-movies">Сохранённые фильмы</a>
            </div>
            <a className="header__auth_button" href="/profile">
                Аккаунт
                <img src={logo} alt="Icon profile" className="header_auth_icon"/>
            </a>
        </nav>
        <div id="menuToggle" className="header_togle_menu menuToggle">

          <input type="checkbox" onClick={onClickHandler}/>
          <div 
            className={`blur ${isActive ? 'blur_active' : '' }`}
          />

          <span className="header_auth_mobile-bord"></span>
          <span className="header_auth_mobile-bord"></span>
          <span className="header_auth_mobile-bord"></span>

          <ul id="menu">
            <a href="/" className="header_auth_mobile-bord"><li>Главная</li></a>
            <a href="/movies" className="header_auth_mobile-bord"><li>Фильмы</li></a>
            <a href="/saved-movies" className="header_auth_mobile-bord"><li>Сохранённые&nbsp;фильмы</li></a>
            <a className="header__auth_button header__auth_button-burger" href="/profile">
                Аккаунт
                <img src={logo} alt="Icon profile" className="header_auth_icon"/>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}

