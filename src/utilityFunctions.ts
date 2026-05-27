import { useEffect, useState } from "react";

export function useMediaQuery(maxWidth: Number) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(`(max-width: ${maxWidth}px)`).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler); // cleanup
  }, [maxWidth]);
  return matches;
}
