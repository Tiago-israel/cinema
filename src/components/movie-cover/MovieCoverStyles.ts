import styled from "styled-components";
import type { MovieCoverProps } from "./MovieCover";

const StyledMovieCover = styled.div<MovieCoverProps>`
  width: 200px;
  height: 300px;
  border-radius: 8px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  cursor: pointer;
  box-shadow: -2px 4px 23px 0px rgba(132, 140, 148, 1);
`;

export { StyledMovieCover };
