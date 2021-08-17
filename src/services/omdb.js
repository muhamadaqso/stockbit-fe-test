const { apiUrl, apiKey } = require('../config')
const axios = require('axios')

module.exports = {
  getMovies,
  getMoviesDetail
}

function getMovies (movieTitle, moviePage) {
  return axios.get(`${apiUrl}?s=${movieTitle}&r=json&page=${moviePage}&apikey=${apiKey}`)
}

function getMoviesDetail (movieId) {
  return axios.get(`${apiUrl}?i=${movieId}&r=json&apikey=${apiKey}`)
}
