import { useSearchParams } from "react-router-dom";
import DropDown from "./DropDown";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e) {
    searchParams.set("sort-by", e.target.dataset.value);
    setSearchParams(searchParams);
  }

  return (
    <>
      <DropDown>
        <DropDown.Title>Sort By</DropDown.Title>
        <DropDown.Content>
          <DropDown.Item>
            <button
              onClick={handleClick}
              data-value="abc"
              className="w-full h-full text-left"
            >
              abccccc
            </button>
          </DropDown.Item>
          <DropDown.Item>
            <button
              onClick={handleClick}
              data-value="def"
              className="w-full h-full text-left"
            >
              Def
            </button>
          </DropDown.Item>
          <DropDown.Item>
            <button
              onClick={handleClick}
              data-value="ghi"
              className="w-full h-full text-left"
            >
              Ghi
            </button>
          </DropDown.Item>
        </DropDown.Content>
      </DropDown>
    </>
  );
}

export default SortBy;
