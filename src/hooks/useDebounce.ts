import { useEffect, useState } from "react";

function useDebounce<T>(
  onDebounce: () => void,
  depArr: T[],
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
  }, depArr);

  return isDebouncing;
}
export default useDebounce;
