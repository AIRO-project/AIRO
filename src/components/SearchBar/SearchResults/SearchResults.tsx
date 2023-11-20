import { MouseEventHandler } from "react";
import { styled } from "styled-components";

import Result from "./Result";

import { fadeIn } from "/src/styles/global/animations";

const Container = styled.div<{ $scrollNeeded: boolean }>`
  position: absolute;
  top: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  max-width: 34.9rem;
  width: 100%;
  border-radius: 0.4rem;
  overflow: scroll;
  height: ${({ $scrollNeeded }) => ($scrollNeeded ? "32rem" : "unset")};
  box-shadow: var(--shadow-md);
  animation: ${fadeIn} 0.3s ease;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export type Device = {
  name: string;
  description: string;
  coords: { lat: number; lng: number };
  address: string;
  user: string;
  id?: string;
};

type Props = { results: Device[]; onResultClick: MouseEventHandler };

function SearchResults({ results, onResultClick }: Props) {
  const scrollNeeded = results.length > 10;

  return (
    <Container $scrollNeeded={scrollNeeded}>
      {results.map(({ address, id }) => (
        <Result key={id} onClick={onResultClick}>
          {address}
        </Result>
      ))}
    </Container>
  );
}

export default SearchResults;
