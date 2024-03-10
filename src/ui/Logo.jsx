import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center ">
      <img src="/logo.png" className="py-2 h-12" />
      <span className="font-logo font-bold ml-2 text-3xl leading-[100%]">
        reddit
      </span>
    </Link>
  );
}

export default Logo;
