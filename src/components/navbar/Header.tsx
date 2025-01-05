import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuComp from "./Menu";
import { HiBellAlert } from "react-icons/hi2";
import { notificationsMenu, userProfileMenu } from "../../config/data";
import { CgProfile } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md px-4 py-1 h-20 flex items-center justify-between">
      {/* Menu Icon for Small Screens */}
      <button onClick={toggleSidebar} className="text-gray-600 p-2 w-12 h-12">
        <GiHamburgerMenu size={24} />
      </button>

      {/* Logo */}
      <div className="text-xl font-semibold text-gray-700">Dashboard</div>

      {/* User Profile and Notifications */}
      <div
        className="inline-flex items-center space-x-4" // Using inline-flex and padding to restrict width
      >
        {/* Notifications */}
        <MenuComp
          menuItems={notificationsMenu}
          menuIcon={<HiBellAlert size={20} />}
        />

        {/* Profile Menu */}
        <MenuComp
          menuItems={userProfileMenu}
          menuIcon={
            <>
              <CgProfile size={24} />
              <MdArrowDropDown size={20} />
            </>
          }
        />
      </div>
    </header>
  );
};

export default Header;
