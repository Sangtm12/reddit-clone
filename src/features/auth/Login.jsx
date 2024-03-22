import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import { useState } from "react";

function Login() {
  const [haveAccount, setHaveAccount] = useState(true);
  return (
    <div className=" w-[30rem] p-8">
      <h3 className="text-xl border-b-[1px] border-border text-white py-3">
        {haveAccount ? "Login to Reddit" : "Create a new account"}
      </h3>
      {haveAccount ? (
        <LoginForm setHaveAccount={setHaveAccount} />
      ) : (
        <CreateAccountForm setHaveAccount={setHaveAccount} />
      )}
    </div>
  );
}

export default Login;
