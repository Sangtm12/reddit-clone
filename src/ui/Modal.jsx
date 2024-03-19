import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const modalContext = createContext();

function Modal({ children }) {
  const [currentOpen, setCurrentOpen] = useState("");
  return (
    <modalContext.Provider value={{ currentOpen, setCurrentOpen }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { setCurrentOpen } = useContext(modalContext);
  const ref = useRef();
  ref.current?.addEventListener("click", (e) => {
    e.stopPropagation(); //to stop event from reaching document and close the modal window
    setCurrentOpen((prev) => (prev === "" ? opens : ""));
    console.log(children);
  });

  return cloneElement(children, {
    onClick: (e) => {
      e.stopPropagation(); //to stop event from reaching document and close the modal window
      setCurrentOpen((prev) => (prev === "" ? opens : ""));
      console.log(children);
    },
  });
}

function Window({ children, name }) {
  const { currentOpen, setCurrentOpen } = useContext(modalContext);
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setCurrentOpen("");
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [setCurrentOpen]);

  return (
    <>
      {currentOpen !== name ||
        createPortal(
          <div className="absolute w-full h-full top-0 backdrop-blur-md backdrop-brightness-[90%]">
            <div
              className="bg-background border-[1px] border-border rounded-xl absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ref={ref}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
