import { MovieCover } from "../../../../components/movie-cover/MovieCover";
import type { Movie as MovieType } from "../../types/movie";
import { MovieContainer } from "./MovieStyles";

type MovieProps = {
  href?: string;
  movie: MovieType;
};

function Movie(props: MovieProps) {
  return (
    <MovieContainer href={props.href}>
      <MovieCover src={props.movie.poster_path} />
      <h2 className="movie-title">{props.movie.original_title}</h2>
    </MovieContainer>
  );
}

export { Movie };
