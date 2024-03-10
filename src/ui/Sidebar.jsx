import Recent from "../features/communities/Recent";
import SortBy from "./SortBy";
import YourCommunities from "../features/communities/YourCommunities";

function Sidebar() {
  return (
    <>
      <SortBy />
      <Recent />
      <YourCommunities />
    </>
  );
}

export default Sidebar;
