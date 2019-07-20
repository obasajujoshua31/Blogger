import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <div>
          <span>
            <i className="fab fa-facebook-f" />
          </span>
          <span>Facebook</span>
        </div>
        <div>
          <span>
            <i className="fab fa-twitter" />
          </span>
          <span>Twitter</span>
        </div>
        <div>
          <span>
            <i className="fab fa-google-plus-g" />
          </span>
          <span>Google +</span>
        </div>
        <div>
          <span>
            <i className="fab fa-instagram" />
          </span>
          <span>Instagram</span>
        </div>
      </div>
      <div className="footer-copyright">
        <span>
          Copyright 2016. All rights reserved Theme of Rigorous Themes
        </span>
      </div>
      <div className="footer-top">
        <span>Back to the Top</span>
      </div>
    </div>
  );
};

export default Footer;
