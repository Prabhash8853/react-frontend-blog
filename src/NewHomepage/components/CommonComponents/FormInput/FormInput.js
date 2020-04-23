import React, { useState } from "react";
import "./FormInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const FormInput = props => {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState(props.value);

  const handleChange = event => {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
    console.log(inputValue);
  };

  let classes = ["inputclass"];
  classes.push(props.className);
  return (
    <React.Fragment>
      <label htmlFor={props.htmlFor} className="profile_label">
        {props.label}
      </label>
      <br />
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        className={classes.join(" ")}
        placeholder={props.placeholder}
        style={props.style}
      />
      {props.isPassword ? (
        props.isPasswordShown ? (
          <div onClick={props.onClick}>
            <FontAwesomeIcon icon={faEye} className="show_pass" />
          </div>
        ) : (
          <div onClick={props.onClick}>
            <FontAwesomeIcon icon={faEyeSlash} className="show_pass" />
          </div>
        )
      ) : null}
    </React.Fragment>
  );
};
export default FormInput;
