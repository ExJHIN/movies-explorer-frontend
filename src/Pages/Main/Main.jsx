import { Promo } from "./components/Promo/index";
import { AboutProject } from './components/AboutProject/index';
import { Techs } from './components/Techs/index';
import { Header } from '../../ui/Header/index';
import { AboutMe } from './components/AboutMe/index';
import { Footer} from '../../ui/Footer/index';
import './Main.css';

export function Main({isLogin}) {
    return (
      <>
        <Header isLogin={isLogin} />
        <main className="main_container">
          <Promo />
          <AboutProject/>
          <Techs/>
          <AboutMe/>
        </main>
        <Footer/>
      </>
    );
  }
