import Recent from "./Recent";
import SortBy from "./SortBy";
import YourCommunities from "./YourCommunities";

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
