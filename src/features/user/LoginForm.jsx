import { Form, useSubmit } from "react-router-dom";

function LoginForm({ setHaveAccount }) {
  const submit = useSubmit();

  return (
    <>
      <Form className="pt-8" action="/login" method="post" onSubmit={submit}>
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
        <button
          type="submit"
          className="bg-orange w-full py-3 rounded-md font-bold"
        >
          Login
        </button>
      </Form>
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
