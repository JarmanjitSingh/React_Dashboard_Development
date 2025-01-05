import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaBell, FaEnvelope, FaExclamationTriangle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RxExit } from "react-icons/rx";

// Define the type for menu items
interface MenuItemType {
  label: string;
  icon: string;
  shortcut: string;
}

// Props for dynamic menu
interface MenuCompProps {
  heading?: string;
  menuItems: MenuItemType[];
  menuIcon: React.ReactNode;
}

const MenuComp: React.FC<MenuCompProps> = ({
  heading = "",
  menuItems,
  menuIcon,
}) => {
  // Function to dynamically render icons based on icon name
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "edit":
        return <MdEdit className="w-6 h-6" />;
      case "settings":
        return <IoMdSettings className="w-6 h-6" />;
      case "logout":
        return <RxExit className="w-6 h-6" />;
      case "message":
        return <FaEnvelope className="w-6 h-6" />;
      case "update":
        return <FaBell className="w-6 h-6" />;
      case "alert":
        return <FaExclamationTriangle className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-primary py-1.5 px-4 text-sm font-semibold text-white shadow-md focus:outline-none hover:bg-secondary h-10">
          {heading}
          {menuIcon}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-primary/70 p-1 text-sm text-white transition duration-100 ease-out focus:outline-none"
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-primary/40">
                {renderIcon(item.icon)}
                {item.label}
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">
                  {item.shortcut}
                </kbd>
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default MenuComp;
