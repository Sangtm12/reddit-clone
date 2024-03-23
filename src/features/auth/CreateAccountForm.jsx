import { useState } from "react";
import useCreateAccount from "./useCreateAccount";
import Spinner from "../../ui/Spinner";

function CreateAccountForm({ setHaveAccount }) {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { status, createAccount } = useCreateAccount();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords have to match");
    } else if (!password || !username) {
      setPasswordError(password ? "" : "Please enter a password");
      setUsernameError(username ? "" : "Please enter a username");
    } else if (password && username && !passwordError && !usernameError) {
      createAccount(
        { username, password },
        {
          onSuccess: () => {
            document.body.click();
          },
        }
      );
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
              id="username"
              value={username}
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
          <div className="flex flex-col mb-4">
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
          <div className="flex flex-col mb-8">
            <label htmlFor="confirmPassword" className="text-text-neutral pb-2">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (!e.target.value) {
                  setConfirmPasswordError("Please confirm your password");
                } else {
                  setConfirmPasswordError("");
                }
              }}
              className="bg-background-dark p-2 rounded-md"
            />
            {confirmPasswordError && (
              <p className="text-red-500">{confirmPasswordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-orange w-full py-3 rounded-md font-bold"
          >
            Create new account
          </button>
        </form>
      )}
      <button
        onClick={() => {
          setHaveAccount(true);
        }}
        className="block mt-4 text-text-neutral hover:underline"
      >
        <span>Already have an account? Login</span>
      </button>
    </>
  );
}

export default CreateAccountForm;
