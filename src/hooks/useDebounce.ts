import { useEffect, useState } from "react";

function useDebounce<T, D>(
  value: T,
  searchArray: D[],
  onDebounce: () => void,
  debounceTime: number = 1000
) {
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const timeoutId = setTimeout(() => {
      onDebounce();
      setIsDebouncing(false);
    }, debounceTime);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, searchArray]);

  return isDebouncing;
}
export default useDebounce;
