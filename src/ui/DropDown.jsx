import { createContext, useContext, useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

const DropDownContext = createContext();

function DropDown({ children, initialState = true }) {
  const [open, setOpen] = useState(initialState);

  return (
    <DropDownContext.Provider value={{ open, setOpen }}>
      {children}
    </DropDownContext.Provider>
  );
}

function Title({ children }) {
  const { open, setOpen } = useContext(DropDownContext);
  return (
    <div
      className="hover:bg-background-hover rounded-lg flex gap-2 justify-between items-center p-2 select-none font-semibold"
      onClick={() => {
        setOpen((o) => !o);
      }}
    >
      <div className="flex-1">{children}</div>
      {open ? <HiChevronUp /> : <HiChevronDown />}
    </div>
  );
}

function Content({ children }) {
  const { open } = useContext(DropDownContext);
  return (
    <div
      className={`transition-[max-height] overflow-hidden ${
        open ? "max-h-96" : "max-h-0"
      }`}
    >
      {children}
    </div>
  );
}

function Item({ children }) {
  return (
    <div className="hover:bg-background-light rounded-md p-2">{children}</div>
  );
}

DropDown.Title = Title;
DropDown.Content = Content;
DropDown.Item = Item;

export default DropDown;
