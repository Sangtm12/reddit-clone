import { HiOutlinePlus } from "react-icons/hi";
import DropDown from "../../ui/DropDown";

import { communities } from "../../data/communities";
import CommunitySideBar from "./CommunitySideBar";

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
          {communities.map((community) => {
            return (
              <DropDown.Item key="community.name">
                <CommunitySideBar community={community} />
              </DropDown.Item>
            );
          })}
        </DropDown.Content>
      </DropDown>
    </>
  );
}

export default YourCommunities;
