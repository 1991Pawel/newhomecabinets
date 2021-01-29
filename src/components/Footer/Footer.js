import React from "react";
import "../Footer/Footer.scss";
import { FaFacebookSquare, FaRegEnvelope, FaInstagram } from "react-icons/fa";

export const Footer = () => (
  <div className="footer">
    <div className="feature">
      <div className="feature__item">
        Free delivery <span>$50 & over</span>
      </div>
      <div className="feature__item">
        Next day delivery.
        <span>order before 8pm</span>
      </div>
      <div className="feature__item">free returns</div>
    </div>
    <div className="socials">
      <div className="socials__inner">
        <a className="socials__item">
          <FaRegEnvelope />
        </a>
        <a className="socials__item">
          <FaFacebookSquare />
        </a>
        <a className="socials__item">
          <FaInstagram />
        </a>
      </div>
    </div>
    <p className="footer__copyright">© 2021 P.L All Rights Reserved</p>
  </div>
);
