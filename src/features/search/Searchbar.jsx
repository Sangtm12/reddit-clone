import { HiOutlineSearch } from "react-icons/hi";

function Searchbar() {
  return (
    <form className="relative">
      <input
        type="text"
        className="rounded-3xl h-10 w-full bg-background-light hover:bg-background-hover pl-10 pr-4"
        placeholder="Search Reddit"
      ></input>
      <HiOutlineSearch className="absolute top-1/2 left-4 -translate-y-1/2" />
    </form>
  );
}

export default Searchbar;
