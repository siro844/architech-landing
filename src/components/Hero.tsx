'use client'
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import bedImage from "../assets/images/office.png"
import houseImage from "../assets/images/house.png"
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="hero">
      <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
        <div className="container relative">
          <div className="flex items-center justify-center">
          </div>
          <div className="flex justify-center mt-8">
            <div className="inline-flex relative">
              <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center ">
                One Space<br /> at a Time
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
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-white text-black py-3 px-5 rounded-lg font-medium"
            >
              {showForm ? 'Fill your Details Below' : 'Apply for Beta Access!'}
            </button>
          </div>
          {showForm && (
            <div className="mt-10">
              <iframe
                src="https://tally.so/embed/mOLE2M?hideTitle=1"
                width="100%"
                height="500px"
                className="border-none"
                title="Beta Access Form"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};