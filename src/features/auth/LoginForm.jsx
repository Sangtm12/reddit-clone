import { useState } from "react";
import useLogin from "./useLogin";
import Spinner from "../../ui/Spinner";

function LoginForm({ setHaveAccount }) {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { status, mutate: login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password && !usernameError && !passwordError) {
      login(
        { username, password },
        {
          onSuccess: () => {
            document.body.click(); //close modal
          },
        }
      );
    } else {
      setUsernameError(username ? "" : "Please enter a username");
      setPasswordError(password ? "" : "Please enter a password");
    }
  }

  return (
    <>
      {status === "pending" ? (
        <Spinner />
      ) : (
        <form className="pt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="text-text-neutral pb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
                if (!e.target.value) {
                  setUsernameError("Please enter a username");
                } else {
                  setUsernameError("");
                }
              }}
              className="bg-background-dark p-2 rounded-md"
            />
            {usernameError && <p className="text-red-500">{usernameError}</p>}
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
      )}
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
