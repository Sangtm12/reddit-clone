import UserInfo from "../features/user/UserInfo";
import { users } from "../data/users";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { BiSolidImageAdd } from "react-icons/bi";

function User() {
  const { userId } = useParams();
  const currentUser = users.filter((user) => {
    return (user.name = userId);
  })[0];

  const { pathname } = useLocation();

  const currentPage =
    pathname.split("/").at(-1) === "" ||
    pathname.split("/").at(-1) === currentUser.name
      ? "index"
      : pathname.split("/").at(-1);

  return (
    <div className="h-[90vh] overflow-y-auto grow">
      <div className="grid grid-cols-[auto_370px] w-full">
        <div className=" mt-8 px-6">
          <div className="flex relative">
            <img
              src={currentUser.photo}
              className=" w-16 h-16 rounded-full border-2 border-neutral-700"
            />
            <BiSolidImageAdd />
            <div className="flex flex-col justify-center pl-3">
              <p className=" font-extrabold text-2xl">{currentUser.name}</p>
              <p className="text-text-secondary font-semibold">
                u/{currentUser.name}
              </p>
            </div>
          </div>
          <div className="flex my-4 text-text-secondary">
            <Link to={`/u/${currentUser.name}`} className="hover:underline">
              <button
                className={`flex justify-center items-center font-semibold px-4 py-2 rounded-full ${
                  currentPage === "index" && "bg-background-light text-white"
                }`}
              >
                Overview
              </button>
            </Link>
            <Link
              to={`/u/${currentUser.name}/posts`}
              className="hover:underline"
            >
              <button
                className={`flex justify-center items-center font-semibold px-4 py-2 rounded-full ${
                  currentPage === "posts" && "bg-background-light text-white"
                }`}
              >
                Posts
              </button>
            </Link>
            <Link
              to={`/u/${currentUser.name}/comments`}
              className="hover:underline"
            >
              <button
                className={`flex justify-center items-center font-semibold px-4 py-2 rounded-full ${
                  currentPage === "comments" && "bg-background-light text-white"
                }`}
              >
                Comments
              </button>
            </Link>
            <Link
              to={`/u/${currentUser.name}/settings`}
              className="hover:underline"
            >
              <button
                className={`flex justify-center items-center font-semibold px-4 py-2 rounded-full ${
                  currentPage === "settings" && "bg-background-light text-white"
                }`}
              >
                Settings
              </button>
            </Link>
          </div>
          <Outlet />
        </div>
        <div className="overflow-y-auto">
          <UserInfo user={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default User;
