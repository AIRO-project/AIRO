import { useEffect, useRef, useState } from "react";

import Result from "./Result";

import { DeviceT } from "/src/types/DeviceT";

import { Container } from "./SearchResults.styles";
import useHandleKeyDown from "./hooks/useHandleKeyDown";

type Props = {
  results: DeviceT[];
  searchValue: string;
  onResultClick: (device: DeviceT) => void;
  onResultFocus: (device: DeviceT) => void;
};

function SearchResults({
  results,
  onResultClick,
  onResultFocus,
  searchValue,
}: Props) {
  const [focusedResultIndex, setFocusedResultIndex] = useState<number | null>(
    null
  );
  const scrollNeeded = results.length > 10;
  const containerRef = useRef<HTMLUListElement>(null);

  useHandleKeyDown({
    setFocusedResultIndex,
    containerRef,
    listLength: results.length,
  });

  useEffect(() => {
    setFocusedResultIndex(null);
  }, [searchValue]);

  useEffect(() => {
    if (focusedResultIndex != null && focusedResultIndex < results.length) {
      onResultFocus(results[focusedResultIndex]);
    }
  }, [focusedResultIndex, onResultFocus, results]);

  return (
    <Container $scrollNeeded={scrollNeeded} ref={containerRef}>
      {results.map((result, index) => {
        return (
          <Result
            key={result.id}
            onClick={onResultClick}
            isFocused={index === focusedResultIndex}
            value={result}
          >
            {result.address}
          </Result>
        );
      })}
    </Container>
  );
}

export default SearchResults;
