import { useEffect, useRef } from "react";

const useClickOutside = (ref1, ref2, callback, dependency) => {
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  });

  const handler = (event) => {
    if (
      ref1.current.classList.contains("toggleOn")
      && !ref2.current.contains(event.target)
      && !ref1.current.contains(event.target)
    ) {
      saveCallback.current();
    }
    return null;
  };

  useEffect(() => {
    if (dependency) {
      document.addEventListener("click", handler);
    }
    // return null;
    return () => document.removeEventListener("click", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);

  return null;
};

export default useClickOutside;
