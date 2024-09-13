"use client";

import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches); 

      const updateMatches = () => setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener("change", updateMatches);

      return () => mediaQueryList.removeEventListener("change", updateMatches);
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
