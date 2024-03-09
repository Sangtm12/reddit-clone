import Searchbar from "../features/search/Searchbar";
import Button from "./Button";
import { HiOutlinePlus } from "react-icons/hi2";

function Header() {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-border h-10 px-4 py-7 ">
      <div className="flex items-center basis-96">
        <img src="/logo.png" className="py-2 h-12" />
        <span className="font-logo font-bold ml-2 text-3xl leading-[100%]">
          reddit
        </span>
      </div>
      <div className=" basis-[80%] pr-[20%]">
        <Searchbar />
      </div>
      <div className="basis-40 flex gap-4">
        <Button>
          <HiOutlinePlus />
          <span className="ml-1">Create</span>
        </Button>
        <Button bg="light">Login</Button>
      </div>
    </div>
  );
}

export default Header;
