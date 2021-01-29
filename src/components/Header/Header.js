import React, { useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import "../Header/Header.scss";
import logo from "../../images/logo.png";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <BurgerButton open={open} setOpen={setOpen} />
      <Navigation open={open} setOpen={setOpen} />
    </header>
  );
};
