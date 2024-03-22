import { useState } from "react";
import useLogin from "./useLogin";

function LoginForm({ setHaveAccount }) {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { isLoading, mutate: login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (userName && password && !userNameError && !passwordError) {
      console.log("Logging in");
      login({ userName, password });
    } else {
      setUserNameError(userName ? "" : "Please enter a username");
      setPasswordError(password ? "" : "Please enter a password");
    }
  }

  return (
    <>
      <form className="pt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="text-text-neutral pb-2">
            Username
          </label>
          <input
            type="text"
            value={userName}
            id="username"
            onChange={(e) => {
              setUserName(e.target.value);
              if (!e.target.value) {
                setUserNameError("Please enter a username");
              } else {
                setUserNameError("");
              }
            }}
            className="bg-background-dark p-2 rounded-md"
          />
          {userNameError && <p className="text-red-500">{userNameError}</p>}
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="password" className="text-text-neutral pb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (!e.target.value) {
                setPasswordError("Please enter a password");
              } else {
                setPasswordError("");
              }
            }}
            className="bg-background-dark p-2 rounded-md"
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <button
          type="submit"
          className="bg-orange w-full py-3 rounded-md font-bold"
        >
          Login
        </button>
      </form>
      <button
        onClick={() => {
          setHaveAccount(false);
        }}
        className="block mt-4 text-text-neutral hover:underline"
      >
        <span>Or create a new account</span>
      </button>
    </>
  );
}

export default LoginForm;
