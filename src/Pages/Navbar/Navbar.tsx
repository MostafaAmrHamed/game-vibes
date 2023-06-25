import React from "react";
import logo from "../../Assets/Images/logo.png";
const Navbar = () => {
  return (
    <div className="mt-5 lg:fixed">
      <img alt="Game Vibes" src={logo} className="w-[100px] h-[100px]" />
    </div>
  );
};

export default Navbar;
