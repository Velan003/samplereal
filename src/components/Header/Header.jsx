import React, { useState } from "react";
import "./Header.css";
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened,SetMenuOpened]=useState(false)
  const getMenuStyles= ( menuOpened )=>{
    if(document.documentElement.clientWidth  <= 800){
      return{right: !menuOpened && "-100%" }
    }
  }
  return (
    <section className="h-wrapper flexCenter">
      <div className=" flexCenter paddings innerWidth h-container ">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            SetMenuOpened(() => {
              return false;
            });
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Values</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
            
          </div>

          <div
            className="menu-icon"
            onClick={() => SetMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
