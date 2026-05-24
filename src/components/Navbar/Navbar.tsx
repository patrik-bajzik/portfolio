import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu.tsx";
import profilePicture from "../../assets/fotka-mna-anime-mikina.png";
import AnimateHeight from 'react-animate-height';
import {MenuOutlined} from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<number | 'auto'>(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? 0 : 'auto');
  };

  return (
    <div className="navigation-container">
      <nav className="navigation-inner-container">
        <div className="flex justify-between items-center p-3 mx-auto w-[90%] max-w-[1340px] lg:w-[95%]">

          {/* Logo Section */}
          <div className="navigation-logo flex justify-start items-center h-10 w-10">
            <img className="rounded-sm" src={profilePicture} alt="Profile picture"></img>
          </div>

          {/* Navigation Links */}
          <div className="navbar-links-container hidden lg:block">
            <div className="navigation-links-wrapper flex gap-x-8 w-auto h-auto">

              {/* Home */}
              <div className="link-wrapper group flex justify-center gap-x-1 pt-5 pb-3">
                <Link to="/" className="font-semibold text-xl bg-left-bottom bg-gradient-to-r from-red-400 to-red-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Home</Link>
              </div>

              {/* Projects */}
              <div className="link-wrapper group flex justify-center gap-x-1 pt-5 pb-3">
                <Link to="/projects" className="font-semibold text-xl bg-left-bottom bg-gradient-to-r from-red-400 to-red-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Projects</Link>
              </div>

              {/* Contact */}
              <div className="link-wrapper group flex justify-center gap-x-1 pt-5 pb-3">
                <Link to="/contact" className="font-semibold text-xl bg-left-bottom bg-gradient-to-r from-red-400 to-red-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Contact</Link>
              </div>
            </div>
          </div>

          {/* Menu Button for Mobile */}
          <div className="menu-button lg:hidden flex justify-end items-center">
            <button onClick={toggleMenu}>
              <MenuOutlined />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Display */}
      <div className="mobile-menu overflow-hidden absolute top-16 left-0 w-full z-50 lg:hidden">
        <AnimateHeight
          height={height}
          duration={700}
        >
          <div className="flex flex-col items-start bg-white shadow-md p-4">
            <Menu />
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
};

export default Navbar;
