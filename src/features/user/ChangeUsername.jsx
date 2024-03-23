import { useState } from "react";
import useChangeUsername from "./useChangeUsername";
import Spinner from "../../ui/Spinner";

function ChangeUsername() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newUsernameError, setNewUsernameError] = useState("");

  const { status, changeUsername } = useChangeUsername();

  function handleSubmit(e) {
    e.preventDefault();
    if (!currentPassword || !newUsername) {
      setCurrentPasswordError(
        currentPassword ? "" : "Please enter current password"
      );
      setNewUsernameError(newUsername ? "" : "Please enter a new username");
    } else {
      changeUsername(
        { currentPassword, newUsername },
        {
          onSuccess: () => {
            document.body.click();
          },
        }
      );
    }
  }

  return (
    <div className=" w-[30rem] p-8">
      <h3 className="text-xl border-b-[1px] border-border text-white py-3">
        Change Username
      </h3>
      {status === "pending" ? (
        <Spinner />
      ) : (
        <form className="pt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="currentPassword" className="text-text-neutral pb-2">
              Current password
            </label>
            <input
              type="text"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
                if (!e.target.value) {
                  setCurrentPasswordError("Please enter current password");
                }
              }}
              className="bg-background-dark p-2 rounded-md"
            />
            {currentPasswordError && (
              <p className="text-red-500">{currentPasswordError}</p>
            )}
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="newUsername" className="text-text-neutral pb-2">
              New username
            </label>
            <input
              type="text"
              id="newUsername"
              value={newUsername}
              onChange={(e) => {
                setNewUsername(e.target.value);
                if (!e.target.value) {
                  setNewUsernameError("Please enter a new username");
                }
              }}
              className="bg-background-dark p-2 rounded-md"
            />
            {newUsernameError && (
              <p className="text-red-500">{newUsernameError}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-orange w-full py-3 rounded-md font-bold"
          >
            Change Username
          </button>
        </form>
      )}
    </div>
  );
}

export default ChangeUsername;
