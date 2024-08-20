'use client'
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import bedImage from "../assets/images/office.png"
import houseImage from "../assets/images/house.png"
import {motion} from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero">
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
        <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
          <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
            New Version is here
          </span>
          <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon/>
          </span>
        </a>
        </div>
        <div className="flex justify-center mt-8">
        <div className="inline-flex relative">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center ">
          One Space<br/> at a Time
        </h1>
        <motion.div className="absolute right-[450px] top-[10px] hidden sm:inline"
        drag
        dragSnapToOrigin
        >
        <Image 
          src={bedImage} 
          height="400" 
          width="400" 
          className="max-w-none" 
          alt=""
          draggable="false"
        /></motion.div>
        <motion.div className="absolute top-[30px] left-[508px] hidden sm:inline"
        drag
        dragSnapToOrigin>
        <Image 
          src={houseImage} 
          height="250" 
          width="250"
          className="max-w-none" 
          alt=""
          draggable="false"
        /></motion.div>
        </div>
        </div>
        <div className="flex justify-center">
        <p className="text-center text-xl mt-8 max-w-md">
        Celebrate the joy of design with a website tailored to help architects create and refine their floorplans, turning visions into reality.
        </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get started</button>
        </div>
      </div>
      
    </div>
    </section>
  );
};
