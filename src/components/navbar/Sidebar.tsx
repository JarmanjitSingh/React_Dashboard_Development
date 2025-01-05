import React from "react";
import { RxCross1 } from "react-icons/rx";
import SidebarContent from "./SidebarContent";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={` bg-black bg-opacity-20 w-full h-full absolute transition-all ${
        isOpen ? "block" : "hidden"
      } `}
    >
      <div className="p-4 space-y-4 w-72 h-full bg-white text-black transition-all">
        <button onClick={toggleSidebar} className="text-gray-600">
          <RxCross1 />
        </button>

        <SidebarContent />
      </div>
    </div>
  );
};

export default Sidebar;
