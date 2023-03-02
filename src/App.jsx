import { BrowserRouter } from "react-router-dom";
import { Header } from "./ui/Header/index";
import { Main } from './Pages/Main/index';
import './index.css'

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;