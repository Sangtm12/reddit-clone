import { HiOutlinePlus } from "react-icons/hi";
import DropDown from "../../ui/DropDown";

import { communities } from "../../data/communities";
import CommunitySideBar from "./CommunitySideBar";
import Modal from "../../ui/Modal";
import CreateCommunity from "./CreateCommunity";

function YourCommunities() {
  return (
    <>
      <DropDown>
        <DropDown.Title>
          <h2>Your Communities</h2>
        </DropDown.Title>
        <DropDown.Content>
          <DropDown.Item>
            <Modal>
              <Modal.Open opens="createCommunity">
                <button className="flex items-center w-full ">
                  <HiOutlinePlus className="inline text-2xl mr-2" />
                  Create a community
                </button>
              </Modal.Open>
              <Modal.Window name="createCommunity">
                <CreateCommunity />
              </Modal.Window>
            </Modal>
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
