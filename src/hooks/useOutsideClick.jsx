import { useEffect, useRef } from "react";

function useOutsideClick(closeFn) {
  const ref = useRef();

  useEffect(() => {
    function helper(e) {
      e.stopPropagation();

      if (e.target !== ref.current && !ref.current.contains(e.target)) {
        closeFn();
        console.log("from hook: " + ref.current.contains(e.target));
      }
    }
    document.addEventListener("click", helper);
    return () => {
      document.removeEventListener("click", helper);
    };
  }, [closeFn]);

  return ref;
}

export default useOutsideClick;
