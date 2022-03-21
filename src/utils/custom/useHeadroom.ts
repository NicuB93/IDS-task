import React from "react";

type Props = {
  onPin?: () => any;
  onUnpin?: () => any;
  fixAt?: number;
  onFix?: () => any;
  onUnfix?: () => any;
};
export const useHeadroom = ({
  onPin,
  onUnpin,
  fixAt = 0,
  onFix,
  onUnfix,
}: Props) => {
  const [scroll, setScroll] = React.useState<number>(0);

  // Tracking scroll value
  React.useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRef = React.useRef({ scroll: scroll });

  // Handle onPin callback
  const isPinned =
    scroll < fixAt ? scroll < fixAt : scrollRef.current.scroll <= scroll;
  const callOnPin = React.useCallback(
    () =>
      !!onPin && scrollRef.current.scroll > scroll && scroll > fixAt && onPin(),
    [isPinned]
  );
  React.useEffect(() => callOnPin, [callOnPin]);

  const scrollCheck =
    scroll < fixAt ? scroll < fixAt : scrollRef.current.scroll >= scroll;
  // Handle onUnpin callback
  React.useEffect(() => {
    if (!!onUnpin && scrollRef.current.scroll <= scroll && scroll > fixAt)
      onUnpin();
  }, [scrollCheck]);

  // Handle onFix callback
  React.useEffect(() => {
    if (!!onFix && scroll <= fixAt) onFix();
  }, [scroll <= fixAt]);

  // Handle onUnfix callback
  React.useEffect(() => {
    if (!!onUnfix && scroll > fixAt) onUnfix();
  }, [scroll > fixAt]);

  // Handling the backward scroll behavior
  React.useEffect(() => {
    scrollRef.current.scroll = scroll;
  }, [scroll]);

  return scrollRef.current.scroll >= scroll || scroll <= fixAt;
};

export default useHeadroom;
