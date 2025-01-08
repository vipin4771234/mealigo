import React from "react";
import "./Header.css";
import headerlogo from "../../assets/images/MEALIGO.png";
import about from "../../assets/images/About.png";
import blog from "../../assets/images/blog.png";
import categories from "../../assets/images/categories.png";
import contact from "../../assets/images/call.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-item-container">
        <img src={blog} className="header-icons" alt="mealigo-logo" />
        <a className="header-item-text" href="https://www.mealigo.com">Blogs</a>
      </div>
      <div className="header-item-container">
        <img src={categories} className="header-icons" alt="mealigo-logo" />
        <a className="header-item-text" href="https://www.mealigo.com">Category</a>
      </div>
      <img src={headerlogo} className="header-logo" alt="mealigo-logo" />
      <div className="header-item-container">
        <img src={about} className="header-icons" alt="mealigo-logo" />
        <a className="header-item-text" href="https://www.mealigo.com">About me</a>
      </div>
      <div className="header-item-container">
        <img src={contact} className="header-icons" alt="mealigo-logo" />
        <a className="header-item-text" href="https://www.mealigo.com">Contact</a>
      </div>
    </div>
  );
};

export default Header;
