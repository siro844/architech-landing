'use client'
import Image from "next/image";
import bedImage from "../assets/images/emojistar.png"
import sofaImage from "../assets/images/helix2.png"
import { useScroll, useTransform,motion } from "framer-motion";
import { useRef,useEffect } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end','end end'],
  })
  useEffect(()=>{
    scrollYProgress.on('change',(value )=> 
      console.log("value",value))
  },[]);

  const translateY=useTransform(scrollYProgress,[0,1],[40,-40])

  return (
    <section id="calltoaction">
    <div className="bg-black text-white py-[72px] sm:py-24 text-center" ref={containerRef}>
      <div className="container max-w-xl relative">
      <motion.div style={{translateY}}><Image src={sofaImage} alt="Bed Image" className="absolute top-6 left-[calc(100%+36px)]"/></motion.div>
      <motion.div style={{translateY}}><Image src={bedImage} alt="Bed Image" className="absolute -top-[120px] right-[calc(100%+24px)]"/></motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5">
        Unlock exclusive access and elevate your experience—get started today!
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
        <a href="https://3xzlhnjfyx4.typeform.com/to/dGW0v4fr" className="bg-white text-black h-14 w-full rounded-lg px-5 flex items-center justify-center text-lg font-semibold">
            Click here to get access!
        </a>
        </form>
      </div>
    </div>
    </section>
  );
};
