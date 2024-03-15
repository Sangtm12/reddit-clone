import { useEffect, useRef, useState } from "react";
import { communities } from "../../data/communities";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import useOutsideClick from "../../hooks/useOutsideClick";

function SelectCommunity({ community }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(community);

  const inputRef = useRef();
  const containerRef = useOutsideClick(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      inputRef.current?.select();
    }
  }, [isOpen]);

  return (
    <div className="relative mt-4">
      <select name="community" id="community" className="hidden"></select>
      <div
        className=" w-64 h-12 bg-background-dark flex gap-2 items-center p-2 pl-4 border-[1px] border-border rounded-md relative"
        onClick={() => {
          setIsOpen(true);
        }}
        ref={containerRef}
        id="container"
      >
        {!isOpen ? (
          selectedCommunity ? (
            <>
              <img
                src={selectedCommunity.photo}
                className={
                  "w-5 h-5 rounded-full border-[1px] border-neutral-700"
                }
              />
              <h3
                id="h3"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                r/{selectedCommunity.name}
              </h3>
            </>
          ) : (
            <div>Select community</div>
          )
        ) : (
          <span>
            <span>r/</span>
            <input
              ref={inputRef}
              defaultValue={selectedCommunity.name || null}
              className=" bg-transparent p-0 focus:outline-none"
              placeholder="...search"
            />
          </span>
        )}
        {!isOpen ? (
          <IoIosArrowDown
            className="absolute right-4 text-lg text-text-neutral z-[2]"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
              console.log("clicked");
            }}
          />
        ) : (
          <IoIosArrowUp
            className="absolute right-4 text-lg text-text-neutral z-[2]"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
              console.log("clicked");
            }}
          />
        )}
      </div>
      {isOpen && (
        <div className="w-64 max-h-80 bg-background-dark overflow-y-auto overflow-x-hidden absolute top-12 z-[1]">
          {communities.map((com) => {
            return (
              <div
                className=" w-64 h-12 bg-background-dark flex gap-2 items-center p-2 pl-4"
                key={com.name}
                onClick={() => {
                  setSelectedCommunity(com.name);
                }}
              >
                {com.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SelectCommunity;
