import Searchbar from "../features/search/Searchbar";
import Button from "./Button";
import { HiOutlinePlus } from "react-icons/hi2";
import Logo from "./Logo";
import { Link, useParams } from "react-router-dom";
import Modal from "./Modal";
import Login from "../features/auth/Login";
import ProfilePhoto from "./ProfilePhoto";
import useUser from "../features/user/useUser";

function Header() {
  const { communityId } = useParams();

  const { data, isLoading, error } = useUser();

  return (
    <div className="flex items-center justify-between border-b-[1px] border-border bg-background h-10 px-4 py-7 sticky top-0 z-10">
      <div className="basis-96">
        <Logo />
      </div>
      <div className=" basis-[80%] pr-[20%]">
        <Searchbar />
      </div>
      <div className="basis-40 flex gap-4">
        <Link to={communityId ? "/r/" + communityId + "/create" : "/create"}>
          <Button>
            <HiOutlinePlus />
            <span className="ml-1">Create</span>
          </Button>
        </Link>
        <Modal>
          <Modal.Open opens="login">
            <Button light>Login</Button>
          </Modal.Open>
          <Modal.Window name="login">
            <Login />
          </Modal.Window>
        </Modal>
        <Link to="/u/sangtm">
          <ProfilePhoto src="/users/sangtm.png" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
