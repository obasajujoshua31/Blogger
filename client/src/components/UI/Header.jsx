import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="header-location">
        <span>
          <i className="fas fa-map-marker-alt" />
        </span>
        <span className="header-location-content">Kathmandu, Nepal</span>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Search..." className="input-field" />
        <span>
          <i className="fas fa-search search-submit" />
        </span>
      </div>
    </header>
  );
};

export default Header;
