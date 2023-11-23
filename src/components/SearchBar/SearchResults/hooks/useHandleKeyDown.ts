import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";

type Props = {
  setFocusedResultIndex: Dispatch<SetStateAction<number | null>>;
  listLength: number;
  containerRef: RefObject<HTMLUListElement>;
};

function useHandleKeyDown({
  setFocusedResultIndex,
  listLength,
  containerRef,
}: Props) {
  const scrollAmount = 32;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const currentScroll = containerRef.current?.scrollTop || 0;

      if (event.key === "ArrowDown") {
        setFocusedResultIndex((prev) => {
          if (prev === null) return 0;

          if (prev > 7)
            containerRef.current?.scroll({
              top: currentScroll + scrollAmount,
              behavior: "smooth",
            });

          return Math.min(prev + 1, listLength - 1);
        });
      } else if (event.key === "ArrowUp") {
        setFocusedResultIndex((prev) => {
          if (prev === null) return listLength - 1;

          if (prev < listLength - 8)
            containerRef.current?.scroll({
              top: currentScroll - scrollAmount,
              behavior: "smooth",
            });
          return Math.max(prev - 1, 0);
        });
      }
    },
    [listLength, containerRef, setFocusedResultIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLength]);
}

export default useHandleKeyDown;
