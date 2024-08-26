import React, { useState } from "react";
import { BiBorderAll } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">egybusiness.ae</span>
      <div className="filter">

        <div className="dropdown">
          <button onClick={toggleDropdown}>
            <span>
              <BiBorderAll />
            </span>

            {selectedOption || "Menus"}

            <span>
            { isOpen ? <IoIosArrowUp/> : <IoIosArrowDown /> }
             </span>


          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              {options.map((option) => (
                <li key={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
          

        </div>
        <div className="search">
          <input type="text" placeholder="Search over 30 million product"/>
          <button>
            <CiSearch />
          </button>
        </div>
      </div>

      <div className="auth">
        <Link to={"/login"} className="loginBtn">
          <IoPerson /> Log in
        </Link>
        <Link to={"/signUp"}  className="signBtn">
          <IoPerson /> Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
