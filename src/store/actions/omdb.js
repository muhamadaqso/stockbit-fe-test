const { RECEIVE_MOVIES } = require('./').constants
const { getMovies, getMoviesDetail } = require('../../services/omdb')

const receiveMovies = (movies) => {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

const fetchMovies = (search, page) => (dispatch) => {
  return getMovies(search, page)
    .then(json => dispatch(receiveMovies(json)))
}

const fetchMoviesByID = (id) => (dispatch) => {
  return getMoviesDetail(id)
    .then(json => dispatch(receiveMovies(json)))
}

module.exports = {
  fetchMovies,
  fetchMoviesByID
}