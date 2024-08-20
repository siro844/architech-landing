import Image from "next/image";
import logoImage from "../assets/images/floor-plan.png"
import MenuIcon from "../assets/icons/menu.svg"

export const Navbar = () => {
  return( 
  <div className=" bg-black">
  <div className="px-4">
    <div className="py-4 flex items-center justify-between">
      <div className="relative">
        <div className="absolute w-full top-2 bottom-0"></div>
        <Image src={logoImage} alt="SaaS Logo" className="h-12 w-12 relative"/>
      </div>
      <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
        <MenuIcon className="text-white"/>
      </div>
      <nav className="gap-6 items-center hidden sm:flex">
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
        <button className="bg-white py-2 px-4 rounded-lg">Get for free</button>
      </nav>
    </div>
  </div>
  </div>
  );
};
