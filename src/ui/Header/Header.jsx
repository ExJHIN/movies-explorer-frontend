import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import  "./Header.css";

export function Header({isLogged}) {

// Стиль в зависимости от logIn
  const headerStyle = isLogged 
    ? 'header  header_login' 
    : 'header';

//   const [isLog, setLog] = useState(true);
//   const [isMenuOpened, setIsMenuOpened] = useState(false);
//   const loc = useLocation();
  

//   useEffect(() => {
//     setIsMenuOpened(false);
//   }, [loc]);

  return (
    <header
      className={headerStyle}
    >
      <div className="header_container container">
        <div className="header_link-logo">
            <div className="header_logo" href="#"></div>
        </div>
        <nav className="header_navigation">
            <a className="header_films-link header_custom-link" href="/signup">Регистрация</a>
            <a className="header_films-link_button" href="/signin">Войти</a>
        </nav>
      </div>
    </header>
  );
}

