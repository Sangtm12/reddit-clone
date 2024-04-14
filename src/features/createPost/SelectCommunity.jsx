import { useEffect, useRef, useState } from "react";
import { communities } from "../../data/communities";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import useOutsideClick from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";

function SelectCommunity({ community }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(community);
  const [input, setInput] = useState("");

  const searchResults = communities.filter((com) => {
    return input ? com.name.includes(input.toLowerCase()) : true;
  });

  const selectedCommunityData = communities.filter(
    (com) => com.name === selectedCommunity
  )[0];

  const inputRef = useRef();
  const { ref: containerRef, ref2 } = useOutsideClick(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (isOpen) {
      inputRef.current.value = selectedCommunity || "";
      inputRef.current?.select();
    }
  }, [isOpen, setInput, selectedCommunity]);

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
                src={selectedCommunityData.photo}
                className={
                  "w-5 h-5 rounded-full border-[1px] border-neutral-700"
                }
              />
              <span id="span" className="">
                r/{selectedCommunityData.name}
              </span>
            </>
          ) : (
            <div>Select community</div>
          )
        ) : (
          <span>
            <span>r/</span>
            <input
              ref={inputRef}
              className=" bg-transparent p-0 focus:outline-none"
              placeholder="...search"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </span>
        )}
        {!isOpen ? (
          <IoIosArrowDown
            className="absolute right-4 text-lg text-text-neutral"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
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
        <div
          className="w-64 max-h-80 bg-background-dark overflow-y-auto overflow-x-hidden absolute top-12 z-[1] rounded-b-lg overflow-hidden"
          ref={ref2}
        >
          {searchResults.map((com) => {
            return (
              <Link key={com.name} to={/r/ + com.name + "/create"}>
                <div
                  className="w-64 h-12 bg-background-dark flex gap-2 items-center p-2 pl-4 hover:bg-background-hover border-b-[1px] border-border"
                  onClick={() => {
                    setSelectedCommunity(com.name);
                    setIsOpen(false);
                  }}
                >
                  <img
                    src={com.photo}
                    className={
                      "w-5 h-5 rounded-full border-[1px] border-neutral-700"
                    }
                  />
                  {com.name}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SelectCommunity;
