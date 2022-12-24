import { StyledMovieCover } from "./MovieCoverStyles";

type MovieCoverProps = {
  src: string;
  size?: "sm" | "md" | "xl";
};

function MovieCover({ src, size = "md" }: MovieCoverProps) {
  return <StyledMovieCover src={src} />;
}

export { MovieCover, MovieCoverProps };
