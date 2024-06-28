import React, { useState, useEffect } from "react";
import logo from "../assets/HKLogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { CiCircleRemove, CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  }
  return (
    <nav className="mb-5 relative flex items-center justify-between py-6 xl:py-14 lg:mb-2 lg:py-2">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16  text-2xl" src={logo} alt="logo" />
      </div>
      {/* <div>
          <button className='block sm:hidden transition'>{click ? <Fatime/> : <CiMenuFries/> }</button>
        </div> */}
      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="transition">
          <CiMenuFries size={30} />
        </button>
      </div>
      <div
        className={` fixed top-0 left-0 z-50 h-full w-64 bg-gray-800 transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } sm:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <img className="w-16 text-2xl" src={logo} alt="logo" />
          <button onClick={toggleMenu} className="text-white sm:hidden">
            <CiCircleRemove size={30} />
          </button>
        </div>
        <ul className=" m-8 flex flex-col items-center justify-center gap-6 text-2xl sm:mt-0 sm:flex-row">
          <li>
            <AnchorLink
              className=" no-underline text-white "
              offset={50}
              href="#home"
            >
              <p onClick={closeMenu}>Home</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="no-underline text-white "
              offset={50}
              href="#about"
            >
              <p onClick={closeMenu}>About</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="no-underline text-white "
              offset={50}
              href="#skills"
            >
              <p onClick={closeMenu}>Skills</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="no-underline text-white "
              offset={50}
              href="#experience"
            >
              <p onClick={closeMenu}>Experience</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="no-underline text-white "
              offset={50}
              href="#projects"
            >
              <p onClick={closeMenu}>Projects</p>
            </AnchorLink>
          </li>
        </ul>
      </div>
      <div className='hidden sm:flex sm:items-center sm:justify-center'>
        <ul className='flex items-center gap-6 text-2xl'>
          <li><AnchorLink className="no-underline text-white" offset={50} href='#home'>Home</AnchorLink></li>
          <li><AnchorLink className="no-underline text-white" offset={50} href='#about'>About</AnchorLink></li>
          <li><AnchorLink className="no-underline text-white" offset={50} href='#skills'>Skills</AnchorLink></li>
          <li><AnchorLink className="no-underline text-white" offset={50} href='#experience'>Experience</AnchorLink></li>
          <li><AnchorLink className="no-underline text-white" offset={50} href='#projects'>Projects</AnchorLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
