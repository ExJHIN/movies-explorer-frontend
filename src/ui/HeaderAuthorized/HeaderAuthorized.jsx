import  "./HeaderAuthorized.css";
import logo from '../../images/icon_profile.svg';

export function HeaderAuthorized() {
  return (
    <header
      className="header_auth"
    >
      <div className="header_container container">
        <div className="header_link-logo">
            <div className="header_logo" href="#"></div>
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
        <button className="header_auth_mobile">
            <div className="header_auth_mobile-bord"></div>
            <div className="header_auth_mobile-bord"></div>
            <div className="header_auth_mobile-bord"></div>
        </button>
      </div>
    </header>
  );
}

