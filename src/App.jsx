import { Routes, Route } from "react-router-dom";
import { Main } from './Pages/Main/index';
import { Movies } from './Pages/Movies/index';
import { SavedMovies } from './Pages/SavedMovies/index';
import { NotFound } from './Pages/NotFound/index';
import { Profile } from './Pages/Profile/index';
import { Register } from "./Pages/Register/index";
import { Login } from './Pages/Login/index';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/signin" element={<Login />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;