import axios from "axios";
import type { Movie } from "./types/movie";

const API_KEY = "7df2fa6696347ec7f081ef69f3fa997d";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

function getLatestMovies() {
  return axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  );
}

function mountMovies(movies: Movie[]): Movie[] {
  return movies.map((movie) => ({
    ...movie,
    poster_path: `${IMG_BASE_URL}/${movie.poster_path}`,
    backdrop_path: `${IMG_BASE_URL}/${movie.backdrop_path}`
  }));
}

export { getLatestMovies, mountMovies };
