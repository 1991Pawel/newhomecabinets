import React from "react";
import "../FormInput/FormInput.scss";

export const FormInput = ({ handleChange, label, textarea, ...otherProps }) => (
  <div className="group">
    {textarea ? (
      <textarea className="textarea" onChange={handleChange} {...otherProps} />
    ) : (
      <input className="input" onChange={handleChange} {...otherProps} />
    )}
    {label && (
      <label
        className={`${otherProps.value.length ? "label__shrink" : "label"}`}
        htmlFor={label}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
