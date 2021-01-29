import React from "react";
import "../BurgerButton/BurgerButton.scss";

export const BurgerButton = ({ setOpen, open }) => (
  <button
    onClick={() => setOpen((prev) => !prev)}
    type="button"
    aria-label="menu burger"
    className={`${open ? "hamburger__active" : "hamburger"}`}
  >
    <span className="hamburger__box">
      <span className="hamburger__inner" />
    </span>
  </button>
);
