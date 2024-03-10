import DropDown from "../../ui/DropDown";

import { communities } from "../../data/communities";
import CommunitySideBar from "./CommunitySideBar";

function Recent() {
  console.log(communities);
  return (
    <>
      <DropDown>
        <DropDown.Title>Recent</DropDown.Title>
        <DropDown.Content>
          {communities.map((community) => {
            return (
              <DropDown.Item key={community.title}>
                <CommunitySideBar community={community} />
              </DropDown.Item>
            );
          })}
        </DropDown.Content>
      </DropDown>
    </>
  );
}

export default Recent;
