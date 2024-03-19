import { useEffect, useRef } from "react";

function useOutsideClick(closeFn) {
  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => {
    function helper(e) {
      if (
        e.target !== ref.current &&
        !ref?.current.contains(e.target) &&
        !ref2?.current?.contains(e.target)
      ) {
        closeFn();
      }
    }
    document.addEventListener("click", helper, true);
    return () => {
      document.removeEventListener("click", helper, true);
    };
  }, [closeFn]);

  return { ref, ref2 };
}

export default useOutsideClick;
