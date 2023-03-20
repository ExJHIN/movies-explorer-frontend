import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/icon_profile.svg';
import  "./HeaderAuthorized.css";


export function HeaderAuthorized() {

  const [isActive, setIsActive] = useState(false);
  const [isActiveMoviesLink, setIsActiveMoviesLink] = useState(false);
  const [isActiveSavedMoviesLink, setIsActiveSavedMoviesLink] = useState(false);

  const onClickHandler = () => {
    setIsActive(prev => !prev);
  }

  const onClickMoviesLinkHandler = () => {
    setIsActiveMoviesLink(prev => !prev);
    console.log(isActiveMoviesLink);
  }

  const onClickSavedMoviesLinkHandler = () => {
    setIsActiveSavedMoviesLink(prev => !prev);
  }


  return (
    <header
      className="header_auth"
    >
      <div className="header_container container">
        <div className="header_link-logo">
          <Link to="/">
            <div className="header_logo"></div>
          </Link>
        </div>
        <nav className="header_auth_navigation">
            <div className="header_auth_navbar">
                <Link className={`${isActiveMoviesLink ? 'header__auth_navlink header__auth_navlink_active' : 'header__auth_navlink'}`} to="/movies" onClick={onClickMoviesLinkHandler}>Фильмы</Link>
                <Link className={`${isActiveSavedMoviesLink ? 'header__auth_navlink header__auth_navlink_active' : 'header__auth_navlink'}`} to="/saved-movies" onClick={onClickSavedMoviesLinkHandler}>Сохранённые фильмы</Link>
            </div>
            <Link className="header__auth_button" to="/profile">
                Аккаунт
                <img src={logo} alt="Icon profile" className="header_auth_icon"/>
            </Link>
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
            <Link to="/" className="header_auth_mobile-bord"><li>Главная</li></Link>
            <Link to="/movies" className="header_auth_mobile-bord"><li>Фильмы</li></Link>
            <Link to="/saved-movies" className="header_auth_mobile-bord"><li>Сохранённые&nbsp;фильмы</li></Link>
            <Link className="header__auth_button header__auth_button-burger" to="/profile">
                Аккаунт
                <img src={logo} alt="Icon profile" className="header_auth_icon"/>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

