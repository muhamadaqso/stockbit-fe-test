const { RECEIVE_MOVIES } = require('./').constants
const { getMovies } = require('../../services/omdb')

const receiveMovies = (movies) => {
  return {
    type: RECEIVE_MOVIES,
    movies
  }
}

const fetchMovies = (search) => (dispatch) => {
  return getMovies(search)
    .then(json => dispatch(receiveMovies(json)))
}

module.exports = {
  fetchMovies
}