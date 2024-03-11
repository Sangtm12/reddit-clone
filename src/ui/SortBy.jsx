import { Link } from "react-router-dom";
import DropDown from "./DropDown";

import { CiCalendarDate } from "react-icons/ci";
import { PiArrowFatUp } from "react-icons/pi";
import { MdOutlineInsertComment } from "react-icons/md";

function SortBy() {
  return (
    <>
      <DropDown>
        <DropDown.Title>
          <h2>Sort By</h2>
        </DropDown.Title>
        <DropDown.Content>
          <DropDown.Item>
            <Link
              to="/?sort-by=date"
              className="w-full h-full text-left flex items-center gap-2"
            >
              <CiCalendarDate className="text-xl" />
              Date posted
            </Link>
          </DropDown.Item>
          <DropDown.Item>
            <Link
              to="/?sort-by=upvotes"
              className="w-full h-full text-left flex items-center gap-2"
            >
              <PiArrowFatUp className="text-xl" />
              Upvotes
            </Link>
          </DropDown.Item>
          <DropDown.Item>
            <Link
              to="/?sort-by=comments"
              className="w-full h-full text-left flex items-center gap-2"
            >
              <MdOutlineInsertComment className="text-xl" />
              Comments
            </Link>
          </DropDown.Item>
        </DropDown.Content>
      </DropDown>
    </>
  );
}

export default SortBy;
