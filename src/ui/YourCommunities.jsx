import { HiOutlinePlus } from "react-icons/hi";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

function YourCommunities() {
  return (
    <>
      <DropDown>
        <DropDown.Title>Your Communities</DropDown.Title>
        <DropDown.Content>
          <DropDown.Item>
            <button>
              <HiOutlinePlus className="inline text-2xl mr-2" />
              Create a new community
            </button>
          </DropDown.Item>
          <DropDown.Item>
            <Link to="/abc" className="block">
              Abc
            </Link>
          </DropDown.Item>
          <DropDown.Item>
            <Link to="/">Abc</Link>
          </DropDown.Item>
          <DropDown.Item>
            <Link to="/">Abc</Link>
          </DropDown.Item>
        </DropDown.Content>
      </DropDown>
    </>
  );
}

export default YourCommunities;
