import { Link } from "react-router-dom";
import ProfilePhoto from "../../ui/ProfilePhoto";

function CommunitySideBar({ community }) {
  return (
    <Link to={`r/${community.name}`} className="flex items-center gap-2">
      <ProfilePhoto src={community.photo} />
      r/{community.name}
    </Link>
  );
}

export default CommunitySideBar;
