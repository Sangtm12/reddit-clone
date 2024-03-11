import { HiOutlinePlus } from "react-icons/hi";
import DropDown from "../../ui/DropDown";

import { communities } from "../../data/communities";
import CommunitySideBar from "./CommunitySideBar";

function YourCommunities() {
  return (
    <>
      <DropDown>
        <DropDown.Title>
          <h2>Your Communities</h2>
        </DropDown.Title>
        <DropDown.Content>
          <DropDown.Item>
            <button className="flex items-center">
              <HiOutlinePlus className="inline text-2xl mr-2" />
              Create a community
            </button>
          </DropDown.Item>
          {communities.map((community) => {
            return (
              <DropDown.Item key={community.name}>
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
