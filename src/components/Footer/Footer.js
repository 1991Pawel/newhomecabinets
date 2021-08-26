import React from "react";
import "../Footer/Footer.scss";
import { FaFacebookSquare, FaRegEnvelope, FaInstagram } from "react-icons/fa";

export const Footer = () => (
  <div className="footer">
    {/* <div className="feature">
      <div className="feature__item">
        Free delivery <span>$50 & over</span>
      </div>
      <div className="feature__item">
        Next day delivery.
        <span>order before 8pm</span>
      </div>
      <div className="feature__item">free returns</div>
    </div> */}
    <div className="footer__inner">
      <div className="socials">
        <div className="socials__inner">
          <a className="socials__item">
            <FaRegEnvelope />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/NewHomeCabinets/"
            className="socials__item"
          >
            <FaFacebookSquare />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/newhomecabinets/"
            className="socials__item"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
    {/* <p className="footer__copyright">© 2021 P.L All Rights Reserved</p> */}
  </div>
);
