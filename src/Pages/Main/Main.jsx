import { Promo } from "./components/Promo/index";
import { AboutProject } from './components/AboutProject/index';
import { Techs } from './components/Techs/index';
import { AboutMe } from './components/AboutMe/index';
import './Main.css';

export function Main() {
    return (
      <main className="main_container">
        <Promo />
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </main>
    );
  }
