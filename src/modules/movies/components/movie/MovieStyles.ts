import styled from "styled-components";

const MovieContainer = styled.a`
  .movie-title {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 12px;
  }

  &:hover {
    scale: 1.2;
    transform: rotate(-25deg);
    transition: all 0.2s ease-in-out;
  }
`;

export { MovieContainer };
