import DropDown from "../../ui/DropDown";

import { communities } from "../../data/communities";
import CommunitySideBar from "./CommunitySideBar";

function Recent() {
  return (
    <>
      <DropDown>
        <DropDown.Title>
          <h2>Recent</h2>
        </DropDown.Title>
        <DropDown.Content>
          {communities.map((community) => {
            return (
              <DropDown.Item key={"recent" + community.name}>
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
