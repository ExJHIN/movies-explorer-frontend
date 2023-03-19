import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
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
import * as Authorization from './utils/Authorization';
import './index.css';
import { ProtectedRoute } from './components/ProtectedRoute/index';

function App() {
const history = useNavigate();

const [isLoad, setIsLoad] = useState(false);

const [currentUser, setCurrentUser] = useState({name: '', email: '', _id: ''});
const [logIn, setLogIn] = useState(false);

const [isLoadTrue, setIsLoadTrue] = useState(true);

const [isAuthorizedCompleted, setisAuthorizedCompleted] = useState(false);

  useEffect(() => {
    if (logIn) {
      setIsLoad(true)
      Api.getProfile()
      .then((user) => {
        setCurrentUser(user.user);
      })
      .catch((res) => console.log(res))
      .finally(
        ()=> setIsLoad(false)
      )
    }
  },[logIn]);


  const handleRegister = (name, email, password) => {
    Authorization.createUser(name, email, password)
    .then(() => {
			handleLogin(email, password);
		})
		.catch((err) => {
			// handleInfoTooltipPopupClick();
      setisAuthorizedCompleted(false);
      // setInfoTooltipText(`${err.message}`);
		});
	};

  const handleLogin = (email, password) => {
    return Authorization.login(email, password)
    .then((res) => {
      Api.updateToken(res['token']);
      setLogIn(true);
      if (res.token) {
        localStorage.setItem("jwt", res['token']);
        tokenCheck();
        history.push("/movies");
        // Navigate("/movies");
      }})
    .catch((err) => {
        console.log(err);
        // handleInfoTooltipPopupClick();
        setisAuthorizedCompleted(false);
        // setInfoTooltipText(`${err.message}`);
      });
    };

  const exit = () => {
    setCurrentUser({});
    localStorage.removeItem('jwt');
    setLogIn(false);
    localStorage.clear();
    history.push('/');
    // Navigate("/");
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
      if (jwt) {
        setIsLoad(true)
        Authorization.gettingUserInfo(jwt).then((res) =>  {
          if (res) {
            setLogIn(true);
            setIsLoad(true)
            setIsLoadTrue(false);
          } else {
            setLogIn(false);
          }})
          .catch((err) => {
            console.log(err);
          });
        } else {
          setIsLoadTrue(false);
        }
    };

  useEffect(() => {
    tokenCheck();
  }, []);

  if (isLoadTrue) return null;
  
  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main isLogin={logIn} />} />
        <Route exact path="/signup" 
          element={!logIn 
            ? (<Register handleRegister={handleRegister}/>) 
            : (<Navigate to='/'/>)} 
        />
        <Route exact path="/signin" 
          element={!logIn 
            ? (<Login handleLogin={handleLogin}/>) 
            : (<Navigate to='/'/> )} 
        />
        <Route path="/movies" element={<ProtectedRoute logIn={logIn} component={Movies} />} />
        <Route path="/saved-movies" element={<ProtectedRoute logIn={logIn} component={SavedMovies} />} />
        <Route path="/profile" element={<ProtectedRoute logIn={logIn} component={Profile} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;