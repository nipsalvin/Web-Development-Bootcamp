import React from "react";
import InputForm from "./InputForm";

function Form(props) {
  console.log(props);
  return (
    <form className="form">
      <InputForm type="text" placeholder="Username" />
      <InputForm type="password" placeholder="Password" />
      {/* You can also use:*/}
      {/* {!props.userIsRegistered && (  */}
      {props.userIsRegistered === false && (
        <InputForm type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
