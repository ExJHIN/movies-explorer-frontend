import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./ui/Header/index";
import { Main } from './Pages/Main/index';
import { Footer } from './ui/Footer/index';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;