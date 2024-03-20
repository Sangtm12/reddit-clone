function ChangePassword() {
  return (
    <div className=" w-[30rem] p-8">
      <h3 className="text-xl border-b-[1px] border-border text-white py-3">
        Change Password
      </h3>
      <form className="pt-8">
        <div className="flex flex-col mb-4">
          <label htmlFor="currentPassword" className="text-text-neutral pb-2">
            Current password
          </label>
          <input
            type="text"
            id="currentPassword"
            name="currentPassword"
            className="bg-background-dark p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="newPassword" className="text-text-neutral pb-2">
            New password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="bg-background-dark p-2 rounded-md"
          />
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
            name="newPasswordConfirm"
            className="bg-background-dark p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-orange w-full py-3 rounded-md font-bold"
        >
          Change Username
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
