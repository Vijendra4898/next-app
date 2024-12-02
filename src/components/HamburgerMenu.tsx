import React, { useState } from "react";
import { Home, Info, Mail } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "About", href: "/about", icon: <Info /> },
  { name: "Contact", href: "/contact", icon: <Mail /> },
];

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="flex flex-col space-y-1.5 w-8 h-8 focus:outline-none md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div
          className={`h-1 w-full bg-gray-800 rounded transition-transform duration-300 ${
            isOpen ? "transform rotate-45 translate-y-2.5" : ""
          }`}
        />
        <div
          className={`h-1 w-full bg-gray-800 rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`h-1 w-full bg-gray-800 rounded transition-transform duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-2.5" : ""
          }`}
        />
      </button>

      {/* Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col p-8 text-white z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            &times;
          </button>
          <nav className="space-y-6 mt-10 flex flex-col">
            <ul className="mt-24 space-y-4">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 space-x-2 hover:text-white hover:bg-blue-300 rounded-md 
                      ${router.pathname === item.href } 
                           bg-gradient-to-r from-blue-400 via-white-500 to-white-700 text-white
                    `}
                  >
                    <span>{item.icon}</span>
                    {isOpen && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
