import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Link className="nav-logo">
        EX<span>OO</span>TIK
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/">About us</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Reviews</Link>
        <Link to="/">Contact us</Link>
        
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon/> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Navbar;