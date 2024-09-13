import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", updateMatches);
    return () => mediaQueryList.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
};

export default useMediaQuery;
