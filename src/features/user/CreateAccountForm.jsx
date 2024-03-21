import { Form } from "react-router-dom";

function CreateAccountForm({ setHaveAccount }) {
  return (
    <>
      <Form className="pt-8" action="/create-new-user" method="post">
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
        <div className="flex flex-col mb-4">
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
        <div className="flex flex-col mb-8">
          <label htmlFor="confirmPassword" className="text-text-neutral pb-2">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="bg-background-dark p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-orange w-full py-3 rounded-md font-bold"
        >
          Create new account
        </button>
      </Form>
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
