const { apiUrl, apiKey } = require('../config')
const axios = require('axios')

module.exports = {
  getMovies
}

function getMovies (movieTitle, moviePage) {
  return axios.get(`${apiUrl}?s=${movieTitle}&r=json&page=${moviePage}&apikey=${apiKey}`)
}
