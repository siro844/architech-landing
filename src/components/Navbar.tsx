'use client'
import Image from "next/image";
import { useState } from "react";
import logoImage from "../assets/images/floor-plan.png"
import MenuIcon from "../assets/icons/menu.svg"

export const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0"></div>
            <Image src={logoImage} alt="SaaS Logo" className="h-12 w-12 relative"/>
          </div>
          <div 
            className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            <MenuIcon className="text-white"/>
          </div>
          <nav className={`gap-6 items-center hidden sm:flex ${isSidebarOpen ? 'fixed' : 'hidden'} sm:relative sm:flex`}>
            <a href="#features" className="text-opacity-60 text-white hover:text-opacity-100 transition">
              Features
            </a>
            <a href="#project" className="text-opacity-60 text-white hover:text-opacity-100 transition">
              Project Showcase
            </a>
            <a href="#pricing" className="text-opacity-60 text-white hover:text-opacity-100 transition">
              Pricing
            </a>
            <a href="#calltoaction" className="text-opacity-60 text-white hover:text-opacity-100 transition">
              Call to Action
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">Apply</button>
          </nav>
          {/* Sidebar for mobile */}
          <div 
  className={`fixed top-0 right-0 w-64 h-full bg-black text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden z-50`}
>
  <div className="p-4">
    
    <a href="#features" className="block py-2" onClick={toggleSidebar}>Features</a>
    <a href="#project" className="block py-2" onClick={toggleSidebar}>Project Showcase</a>
    <a href="#pricing" className="block py-2" onClick={toggleSidebar}>Pricing</a>
    <a href="#calltoaction" className="block py-2" onClick={toggleSidebar}>Call to Action</a>
    <button className="bg-white text-black py-2 px-4 rounded-lg mt-4 block mx-auto">Apply</button>
    <button onClick={toggleSidebar} className=" text-white py-2 px-4 rounded-lg mt-4 block mx-auto underline">Close Menu</button>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

