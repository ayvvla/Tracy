import React, { useState } from "react";
import logo from "../assets/logo.png";
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'
import { Link, animateScroll as scroll } from "react-scroll";



const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  
  return (
    <section className="navbar">
      <nav className="nav">
        <img src={logo} alt="Tracy Melon" height="50px" onClick={scrollToTop}/>
        <ul className={`nav--list ${navOpen ? "open" : ""}`}>
          <li className="list--item">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Projects
            </Link>
            {/* <a href="#project" className="list--link">Projects</a> */}
          </li>
          <li className="list--item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="list--item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {navOpen ? <div className="menu"><IoMdClose size={40} onClick={toggleNav}/></div> 
 :<div className="menu"><RxHamburgerMenu size={40} onClick={toggleNav}/></div>        }
      </nav>
    </section>
  );
};

export default Navbar;
