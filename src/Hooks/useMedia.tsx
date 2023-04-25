import { useState, useEffect } from "react";

export const useMedia = (media: string): boolean | null => {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };

    changeMatch();
    window.addEventListener("resize", changeMatch);

    return () => window.removeEventListener("resize", changeMatch);
  }, [media]);

  return match;
};
