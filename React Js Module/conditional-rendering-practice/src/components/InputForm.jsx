import React from "react";

function InputForm(props) {
  console.log(props);
  return <input type={props.type} placeholder={props.placeholder} />;
}

export default InputForm;
