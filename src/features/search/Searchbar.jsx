import { HiOutlineSearch } from "react-icons/hi";

function Searchbar() {
  return (
    <div className="relative">
      <input
        type="text"
        className="rounded-3xl h-10 w-full bg-background-light hover:bg-background-hover pl-10 pr-4"
        placeholder="Search Reddit"
        onChange={() => {}}
      ></input>
      <HiOutlineSearch className="absolute top-1/2 left-4 -translate-y-1/2" />
    </div>
  );
}

export default Searchbar;
