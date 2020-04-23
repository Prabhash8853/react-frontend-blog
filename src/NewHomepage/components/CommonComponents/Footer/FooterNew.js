import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterNew = (props) => {
  return (
    <div className="Footer_section">
      <div className="footer_category">
        <ul className="footer__ul">
          <li className="footer__ul--item">
            <Link to="/">Home</Link>
          </li>
          <li className="footer__ul--item">
            <Link to="/category-list/">Categories</Link>
          </li>
          <li className="footer__ul--item">
            <a href="../api/about-us/">About Us</a>
          </li>
          <li className="footer__ul--item">
            <a href="../api/contact-us/">Contact Us</a>
          </li>
          <li className="footer__ul--item">
            <Link to="/terms-and-conditions/">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="copyright_data">
        Copyright 2018-2020. All Rights Reserved
      </div>
    </div>
  );
};

export default FooterNew;
