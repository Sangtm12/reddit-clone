import { createContext, useContext, useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

const DropDownContext = createContext();

function DropDown({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <DropDownContext.Provider value={{ open, setOpen }}>
      <div className="border-b-[1px] border-border pb-4 mb-4 select-none font-medium">
        {children}
      </div>
    </DropDownContext.Provider>
  );
}

function Title({ children }) {
  const { open, setOpen } = useContext(DropDownContext);
  return (
    <div
      className="hover:bg-background-hover p-2 rounded-lg flex justify-between items-center"
      onClick={() => {
        setOpen((o) => !o);
      }}
    >
      <h2>{children}</h2>
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
    <div className="hover:bg-background-light rounded-md py-2 pl-2">
      {children}
    </div>
  );
}

DropDown.Title = Title;
DropDown.Content = Content;
DropDown.Item = Item;

export default DropDown;
