import React from "react";
import {
  AiFillFacebook,
  AiOutlineCopyright,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer--socials">
        <a href="tel:+1 470 563-7062" target="_blank" rel="noreferrer">
          <MdLocalPhone size={30} className="icons"/>
        </a>
        <a href="https://www.instagram.com/bigtracymelon100" target="_blank" rel="noreferrer">
          <AiOutlineInstagram size={30} className="icons"/>
        </a>
        <a href="https://twitter.com/Hello_getinside" target="_blank" rel="noreferrer">
          <AiOutlineTwitter size={30} className="icons"/>
        </a>
        <a href="https://www.facebook.com/bob.duke.7355" target="_blank" rel="noreferrer">
          <AiFillFacebook size={30} className="icons"/>
        </a>
      </div>
      
      <div className="footer--contact">
        <a href="mailto:melontracy6@gmail.com">melontracy6@gmail.com</a>
        <div className="line"></div>
        <a href="tel:+1 470 563-7062">+1 470 563-7062</a>
      </div>
      <span className="footer--copy">
        Copyright <AiOutlineCopyright size={12} style = {{margin : "0 4px"}}/> All rights reserved to Tracy Melon
      </span>
    </section>
  );
};

export default Footer;
