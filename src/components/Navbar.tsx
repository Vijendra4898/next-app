import { Menu } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

interface NavbarProps {
    toggleSidebar: () => void;
  }
  
  export default function Navbar({ toggleSidebar }: NavbarProps) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-400 via-white-500 to-white-700 text-white text-white h-16 flex items-center px-4 shadow-md">
      {/* <HamburgerMenu /> */}
        <button
          onClick={toggleSidebar}
          className="text-white p-2 rounded-md hover:bg-blue-300"
        >
          <Menu />
        </button>
        <span className="ml-4 text-lg">My App</span>
      </nav>
    );
  }
  