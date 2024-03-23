import useLogout from "./useLogout";
import Spinner from "../../ui/Spinner";

function Logout() {
  const { status, logout } = useLogout();
  return (
    <div className=" w-[30rem] p-8">
      <h3 className="text-xl border-b-[1px] border-border text-white py-3">
        Logout
      </h3>
      {status === "pending" ? (
        <Spinner />
      ) : (
        <p className="py-8 text-md text-center">
          Are you sure you want to logout?
        </p>
      )}
      <button
        type="submit"
        className="bg-orange w-full py-3 rounded-md font-bold"
        onClick={() => logout(null, { onSuccess: () => document.body.click() })}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
