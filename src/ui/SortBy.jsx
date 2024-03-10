import { useSearchParams } from "react-router-dom";
import DropDown from "./DropDown";

import { CiCalendarDate } from "react-icons/ci";
import { PiArrowFatUp } from "react-icons/pi";
import { MdOutlineInsertComment } from "react-icons/md";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e) {
    searchParams.set("sort-by", e.target.dataset.value);
    setSearchParams(searchParams);
  }

  return (
    <>
      <DropDown>
        <DropDown.Title>Sort By</DropDown.Title>
        <DropDown.Content>
          <DropDown.Item>
            <button
              onClick={handleClick}
              data-value="abc"
              className="w-full h-full text-left flex items-center gap-2"
            >
              <CiCalendarDate className="text-xl" />
              Date posted
            </button>
          </DropDown.Item>
          <DropDown.Item>
            <button
              onClick={handleClick}
              data-value="def"
              className="w-full h-full text-left flex items-center gap-2"
            >
              <PiArrowFatUp className="text-xl" />
              Upvotes
            </button>
          </DropDown.Item>
          <DropDown.Item>
            <button
              onClick={handleClick}
              data-value="ghi"
              className="w-full h-full text-left flex items-center gap-2"
            >
              <MdOutlineInsertComment className="text-xl" />
              Comments
            </button>
          </DropDown.Item>
        </DropDown.Content>
      </DropDown>
    </>
  );
}

export default SortBy;
