import * as React from "react";
import "../Navigation/Navigation.scss";
import { Link } from "gatsby";
const links = [
  {
    name: "home",
    to: "/",
  },
  {
    name: "about",
    to: "/about",
  },
  {
    name: "portfolio",
    to: "/portfolio",
  },

  {
    name: "contact & quote",
    to: "/contact",
  },
];

export const Navigation = ({ open }) => {
  return (
    <nav className="nav">
      <ul className={open ? "active" : null}>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
