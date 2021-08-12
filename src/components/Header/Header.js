import React, { useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { Link } from "gatsby"
import "../Header/Header.scss";
import logo from "../../images/logo.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <BurgerButton open={open} setOpen={setOpen} />
      <Navigation open={open} setOpen={setOpen} />
    </header>
  );
};
