class MainApi {
  constructor({baseUrl, headers, credentials}) {
    this._headers = headers;
    this._baseUrl = baseUrl;
    this.credentials = credentials;
  } 

  _checkHelper(res) {
    if (res.ok) {
      console.log(res);
      return res.json()}
    else {
      return Promise.reject(`Ошибка: ${res.status}`)};
  };

  readMoviesMe() {
    return fetch(this._baseUrl + "/movies", {
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkHelper)
  }

  gettingUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkHelper)
  }

  updateUser(name,email) {
    return fetch(this._baseUrl + "/users/me",{
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
          name,
          email
        }),
    credentials: 'include',
    })
    .then(this._checkHelper)
  }

  createMovie(movie) {
    const newData = {
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      movieId: movie.id,
      country: movie.country || 'Неизвестно',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };

    return fetch(this._baseUrl + "/movies", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(newData),
      credentials: 'include',
    })
    .then(this._checkHelper)
  }

  deleteMovie(_id) {
    return fetch(this._baseUrl + "/movies/" + _id, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkHelper)
  }

  updateToken(token) {
    this._headers['Authorization'] = `Bearer ${token}`;
  }
}

const token = localStorage.getItem('jwt');

export const Api = new MainApi({
  baseUrl: `https://vpm-movies.nomoredomains.work`,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  credentials: 'include',
});