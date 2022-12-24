import { useEffect, useState } from "react";
import { getLatestMovies, mountMovies } from "./movies-service";
import type { Movie as MovieType } from "./types/movie";
import { Movie } from "./components/movie/Movie";
import { MoviesContainer } from "./MoviesStyles";

function Movies() {
  const [latestMovies, setLatestMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    getLatestMovies().then(({ data }) => {
      console.log(data.results);
      setLatestMovies(mountMovies(data.results));
    });
  }, []);

  return (
    <MoviesContainer>
      {latestMovies.map((movie: MovieType) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MoviesContainer>
  );
}

export { Movies };
