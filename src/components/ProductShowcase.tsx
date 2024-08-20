'use client'
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import {motion,useScroll, useTransform} from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const {scrollYProgress} = useScroll({
    target:appImage,
    offset:[
      "start end","end end"
    ]
  });
  useEffect(()=>{
    scrollYProgress.on('change',(latestValue) => 
      console.log("latestValue",latestValue))
  },[]);
  const rotateX = useTransform(scrollYProgress,[0,1],[15,0]);
  const opacity = useTransform(scrollYProgress,[0,1],[.5,1]);
  return (
    <section id="project">
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px]">
      <div className="container ">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center text-xl text-white/70 mt-5">Explore the brilliance of our stunning visuals and experience the power of our next-gen features. Immerse yourself in innovation like never before.</p>
        </div>
        <div className="flex items-center justify-center h-screen">
          <motion.div
          style={{
            opacity:opacity,
            rotateX:rotateX,
            transformPerspective: "800px",
          }}
          >
          <Image 
          height={800} 
          width={800} 
          src={appScreen} 
          alt="The product screenshot" 
          className="mt-14 rounded-lg"
          ref={appImage}
          />
          </motion.div>
        </div>

      </div>
    </div>
    </section>
  );
};
