const express = require('express');
const {
  getMovies,
  getMovie,
  deleteMovie,
  postMovie,
  updateMovie,
} = require('../controllers/movie-controller.js');

const router = express.Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovie);
router.delete('/movies/:id', deleteMovie);
router.post('/movies', postMovie);
router.patch('/movies/:id', updateMovie);

module.exports = router;
