import DropDown from "./DropDown";
import { Link } from "react-router-dom";

function Recent() {
  return (
    <>
      <DropDown>
        <DropDown.Title>Recent</DropDown.Title>
        <DropDown.Content>
          <DropDown.Item>
            <Link to="/abc" className="block">
              Abc
            </Link>
          </DropDown.Item>
          <DropDown.Item>
            <Link to="/">Abc</Link>
          </DropDown.Item>
          <DropDown.Item>
            <Link to="/">Abc</Link>
          </DropDown.Item>
        </DropDown.Content>
      </DropDown>
    </>
  );
}

export default Recent;
