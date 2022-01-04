import { useEffect, useState } from "react";

export const usePageYOffsetTop = () => {
  const [pageYOffset, setPageYOffset] = useState(0);
  const onScroll = () => {
    setPageYOffset(window.pageYOffset);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => {
      return document.removeEventListener("scroll", onScroll);
    };
  });

  return { pageYOffset };
};
