'use client'
import Image from "next/image";
import bedImage from "../assets/images/emojistar.png"
import sofaImage from "../assets/images/helix2.png"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    scrollYProgress.on('change', (value) => 
      console.log("value", value))
  }, []);

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="calltoaction">
      <div className="bg-black text-white py-[72px] sm:py-24 text-center" ref={containerRef}>
        <div className="container max-w-xl relative">
          <motion.div style={{ translateY }}>
            <Image 
              src={sofaImage} 
              alt="Image" 
              className="absolute top-6 left-[calc(100%+36px)] hidden sm:block" 
            />
          </motion.div>
          <motion.div style={{ translateY }}>
            <Image 
              src={bedImage} 
              alt="Image" 
              className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:block" 
            />
          </motion.div>

          <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h2>
          <p className="text-xl text-white/70 mt-5">
            Unlock exclusive access and elevate your experience—get started today!
          </p>
          <div className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="bg-white text-black h-14 w-full rounded-lg px-5 flex items-center justify-center text-lg font-semibold"
            >
              {showForm ? 'Fill the details below' : 'Click here to get access!'}
            </button>
          </div>
          {showForm && (
            <div className="mt-10">
              <iframe 
                src="https://3xzlhnjfyx4.typeform.com/to/dGW0v4fr" 
                width="100%" 
                height="500px" 
                className="border-none"
                title="Access Form"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};