import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import  "./Header.css";

export function Header({logIn}) {

  // Стиль в зависимости от logIn
  const className = logIn ? 
  'header  header_login' 
  : 'header';

//   const [isLog, setLog] = useState(true);
//   const [isMenuOpened, setIsMenuOpened] = useState(false);
//   const loc = useLocation();
  

//   useEffect(() => {
//     setIsMenuOpened(false);
//   }, [loc]);

  return (
    <header
      class={className}
    >
      <div class="header_container">
        <div class="header_link-logo">
            <div class="header_logo"></div>
        </div>
        <nav class="header_navigation">
            <div class="header_films-container">
                <a class="header_films-link" href="#">Фильмы</a>
                <a class="header_films-link" href="#">Сохраненные фильмы</a>
            </div>
            <a class="header_icon-login" href="#">Аккаунт</a>
        </nav>
      </div>
    </header>
  );
}

