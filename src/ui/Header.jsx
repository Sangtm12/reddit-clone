import Searchbar from "../features/search/Searchbar";
import Button from "./Button";
import { HiOutlinePlus } from "react-icons/hi2";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-border bg-background h-10 px-4 py-7 sticky top-0 z-10">
      <div className="basis-96">
        <Logo />
      </div>
      <div className=" basis-[80%] pr-[20%]">
        <Searchbar />
      </div>
      <div className="basis-40 flex gap-4">
        <Button>
          <HiOutlinePlus />
          <span className="ml-1">Create</span>
        </Button>
        <Button light>Login</Button>
      </div>
    </div>
  );
}

export default Header;
