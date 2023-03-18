import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Main } from './Pages/Main/index';
import { Movies } from './Pages/Movies/index';
import { SavedMovies } from './Pages/SavedMovies/index';
import { NotFound } from './Pages/NotFound/index';
import { Profile } from './Pages/Profile/index';
import { Register } from "./Pages/Register/index";
import { Login } from './Pages/Login/index';
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { Api } from './utils/MainApi';
import './index.css';

function App() {

const [currentUser, setCurrentUser] = useState({name: '', email: '', _id: ''});
const [logIn, setLogIn] = useState(false);
const [isLoading, setIsLoading] = useState(true);
const [isPreloader, setIsPreloader] = useState(false);

  useEffect(() => {
    if (logIn) {
      setIsPreloader(true)
      Api.getProfile()
      .then((user) => {
        setCurrentUser(user.user);
      })
      .catch((res) => console.log(res))
      .finally(()=> setIsPreloader(false))
    }
  },[logIn]
  );

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />}/>
        <Route path="/signin" element={<Login />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;