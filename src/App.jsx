import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './Pages/Main/index';
import { Movies } from './Pages/Movies/index';
import { Footer } from './ui/Footer/index';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;