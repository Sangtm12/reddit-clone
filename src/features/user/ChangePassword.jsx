import { useState } from "react";
import useChangePassword from "./useChangePassword";
import Spinner from "../../ui/Spinner";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [newPasswordConfirmError, setNewPasswordConfirmError] = useState("");

  const { status, changePassword } = useChangePassword();

  function handleSubmit(e) {
    e.preventDefault();
    if (!currentPassword || !newPassword || !newPasswordConfirm) {
      setCurrentPasswordError(
        currentPassword ? "" : "Please enter current password"
      );
      setNewPasswordError(newPassword ? "" : "Please enter a new password");
      setNewPasswordConfirmError(
        newPasswordConfirm ? "" : "Please confirm new password"
      );
    } else if (newPasswordConfirm !== newPassword) {
      setNewPasswordConfirmError("Passwords have to match");
    } else {
      changePassword(
        { currentPassword, newPassword },
        {
          onSuccess: () => document.body.click(),
        }
      );
    }
  }

  return (
    <div className=" w-[30rem] p-8">
      <h3 className="text-xl border-b-[1px] border-border text-white py-3">
        Change Password
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
          <div className="flex flex-col mb-4">
            <label htmlFor="newPassword" className="text-text-neutral pb-2">
              New password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                if (!e.target.value) {
                  setNewPasswordError("Please enter current password");
                }
              }}
              className="bg-background-dark p-2 rounded-md"
            />
            {newPasswordError && (
              <p className="text-red-500">{newPasswordError}</p>
            )}
          </div>
          <div className="flex flex-col mb-8">
            <label
              htmlFor="newPasswordConfirm"
              className="text-text-neutral pb-2"
            >
              Confirm new password
            </label>
            <input
              type="password"
              id="newPasswordConfirm"
              value={newPasswordConfirm}
              onChange={(e) => {
                setNewPasswordConfirm(e.target.value);
                if (!e.target.value) {
                  setNewPasswordConfirmError("Please enter current password");
                }
              }}
              className="bg-background-dark p-2 rounded-md"
            />
            {newPasswordConfirmError && (
              <p className="text-red-500">{newPasswordConfirmError}</p>
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

export default ChangePassword;
