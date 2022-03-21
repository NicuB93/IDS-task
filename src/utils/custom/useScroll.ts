/* eslint-disable import/no-anonymous-default-export */
import React from "react";

// A hook for tracking vertical scroll
export default (): number => {
  const [scroll, setScroll] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = (e: any): void =>
      setScroll(e.target.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
};
