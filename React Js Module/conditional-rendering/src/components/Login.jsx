import React from "react";
import InputForm from "./Input";

console.log(InputForm);
{
  /* <input type="text" placeholder="Username" />
<input type="password" placeholder="Password" /> */
}

function Login(props) {
  return (
    <form className="form">
      <InputForm type="text" placeholder="Username" />
      <InputForm type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
