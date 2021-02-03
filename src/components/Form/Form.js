import React from "react";
import "../Form/Form.scss";
import FormInput from "../FormInput/FormInput";
import { useMutation } from "react-query";
import { encode } from "../../helpers/encode";
import { useForm } from "../../hooks/useForm";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Form = () => {
  const { values, setValues, handleChange } = useForm(initialState);

  const sendMessage = () => {
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    });
  };

  const { mutate, isSuccess, isLoading, isError, reset } = useMutation(
    sendMessage,
    {
      enabled: false,
      onSettled: () => {
        setTimeout(() => {
          reset();
        }, 3000);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ values });
    setValues(initialState);
  };

  return (
    <form
      className="form"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <div className="form__message">
        {isError && <p className="form__error">error</p>}
        {isSuccess && <p>success</p>}
      </div>
      <FormInput
        handleChange={(e) => handleChange(e)}
        label="name"
        type="text"
        name="name"
        required
        value={values.name}
        aria-label="name"
      />
      <FormInput
        handleChange={(e) => handleChange(e)}
        label="Email"
        type="email"
        name="email"
        required
        value={values.email}
        aria-label="email"
      />
      <FormInput
        handleChange={(e) => handleChange(e)}
        label="message"
        type="text"
        name="message"
        required
        value={values.message}
        textarea
        aria-label="message"
      />
      <button disabled={isLoading} className="form__btn" type="submit">
        {`${isLoading ? "sending..." : "submit"}`}
      </button>
    </form>
  );
};
