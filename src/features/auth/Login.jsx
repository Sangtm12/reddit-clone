import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" w-[30rem] p-8">
      <h3 className="text-xl border-b-[1px] border-border text-white py-3">
        Login to Reddit
      </h3>
      <form className="pt-8">
        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="text-text-neutral pb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-background-dark p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="password" className="text-text-neutral pb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-background-dark p-2 rounded-md"
          />
        </div>
        <button type="submit" className="bg-orange w-full py-3 rounded-md">
          Login
        </button>
      </form>
      <Link to="/" className="block mt-4 text-text-neutral hover:underline">
        <span>Or create a new account</span>
      </Link>
    </div>
  );
}

export default Login;
