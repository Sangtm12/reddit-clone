import Recent from "../features/community/Recent";
import SortBy from "./SortBy";
import YourCommunities from "../features/community/YourCommunities";

function Container({ children }) {
  return (
    <div className="border-b-[1px] border-border py-2 select-none font-medium">
      {children}
    </div>
  );
}

function Sidebar() {
  return (
    <>
      <Container>
        <SortBy />
      </Container>
      <Container>
        <Recent />
      </Container>
      <Container>
        <YourCommunities />
      </Container>
    </>
  );
}

export default Sidebar;
