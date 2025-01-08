import React from "react";
import "./Header.css";
import headerlogo from "../../assets/images/MEALIGO.png";
import about from "../../assets/images/About.png";
import blog from "../../assets/images/blog.png";
import categories from "../../assets/images/categories.png";
import contact from "../../assets/images/call.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
  return (
    <div className="header-container">
      <Link
        to={"/"}
        className={`header-item-text ${
          location.pathname === "/" ? "selected" : ""
        }`}
      >
        <div className="header-item-container">
          <img src={blog} className="header-icons" alt="mealigo-logo" />
          <a className="header-item-text" href="https://www.mealigo.com">
            Blogs
          </a>
        </div>
      </Link>
      <Link
        to={"/"}
        className={`header-item-text ${
          location.pathname === "/" ? "selected" : ""
        }`}
      >
      <div className="header-item-container">
        <img src={categories} className="header-icons" alt="mealigo-logo" />
        <a className="header-item-text" href="https://www.mealigo.com">
          Category
        </a>
      </div>
      </Link>
      <img src={headerlogo} className="header-logo" alt="mealigo-logo" />
      <Link
        to={"/about"}
        className={`header-item-text ${
          location.pathname === "/" ? "selected" : ""
        }`}
      >
      <div className="header-item-container">
        <img src={about} className="header-icons" alt="mealigo-logo" />
        <a className="header-item-text" href="https://www.mealigo.com">
          About me
        </a>
      </div>
      </Link>
      <Link
        to={"/contact"}
        className={`header-item-text ${
          location.pathname === "/" ? "selected" : ""
        }`}
      >
      <div className="header-item-container">
        <img src={contact} className="header-icons" alt="mealigo-logo" />
        <a className="header-item-text" href="https://www.mealigo.com">
          Contact
        </a>
      </div>
      </Link>
    </div>
  );
};

export default Header;
