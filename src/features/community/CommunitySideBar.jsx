import { Link } from "react-router-dom";

function CommunitySideBar({ community }) {
  return (
    <Link to={`r/${community.name}`} className="flex items-center gap-2">
      <img src={community.photo} className="w-6 h-6 rounded-full" />
      r/{community.name}
    </Link>
  );
}

export default CommunitySideBar;
