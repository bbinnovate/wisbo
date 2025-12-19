
"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

import AnimatedRichText from "../Animation/AnimatedText";
import FadeInFromBottom from "../Animation/FadeInFromBottom";


const programmes = [
  {
    title: "Rooted in Culture",
    age: " ",
    desc:
      "Drawing from mythology, history, folklore, and real-life role models.",
    bg: "#ff4d6d",
    border: "#ff4d6d",
    icon: "/images/icon1.svg",
  },
  {
    title: "Made for Modern Kids",
    age: "",
    desc:
      "Featuring simple language, fun dialogues, sound effects, and humor.",
      
    bg: "#6a4c93",
    border: " #6a4c93",
    icon: "/images/icon2.svg",
  },
  {
    title: "Quietly Powerful",
    age: "",
    desc:
      "Every story carries values like kindness, courage, empathy, grit, and respect.",
    bg: "#00bbf9",
    border: "#00bbf9",
    icon: "/images/icon3.svg",
  },
];

export default function OurProgrammes() {
  return (
<section className="relative w-full bg-[#FFF3E8] py-10 sm:py-15 lg:py-30 lg:mt-0 mt-10 overflow-hidden">

      {/* Decorative SVGs */}
<div className="pointer-events-none absolute inset-0 z-0">

  {/* Top Left Scribble */}
<div className="absolute top-13 left-55 block sm:top-6 sm:left-6">
    <svg width="160" height="80" viewBox="0 0 160 80">
      <path
        d="M10 40 Q30 10, 50 40 T90 40 T130 40"
        fill="none"
        stroke="#FF77B7"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  </div>

  {/* Bottom Right Outline Star */}
<div className="absolute bottom-0 right-78 block md:bottom-10 md:right-10">

    <svg width="90" height="90" viewBox="0 0 90 90">
      <path
        d="M45 10 L55 35 L80 45 L55 55 L45 80 L35 55 L10 45 L35 35 Z"
        fill="#FFD6A5"
      />
    </svg>
  </div>

</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">

         <AnimatedRichText
  className="black-text text-center mb-12"
  parts={[
    { text: "What Makes Our " },
    { text: "Stories Special", className: "text-highlight" },
  ]}
/>

        {/* Heading */}




    <FadeInFromBottom>


    
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
          {programmes.map((item, i) => (
            <div key={i} className="relative">

              {/* Dashed Border */}
              <div
                className="absolute inset-0 rounded-[55%_45%_60%_40%/55%_60%_40%_45%] border-4 border-dashed"
                style={{
                  borderColor: item.border,
                  transform: "scale(1.05)",
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative text-white px-8 py-14 rounded-[55%_45%_60%_40%/55%_60%_40%_45%]"
                style={{ backgroundColor: item.bg }}
              >
                {/* Icon */}
                <div className="w-15 h-15 rounded-full flex items-center justify-center mx-auto mb-6">
  <Image
    src={item.icon}
    alt={item.title}
    width={55}
    height={55}
    className="object-contain invert brightness-0"
  />
</div>


                {/* Content */}
                <h4 className="font-poppins font-bold text-center mb-3">
                  {item.title}
                </h4>

                {item.age && (
                  <p className="text-center  opacity-90 mb-4">
                    {item.age}
                  </p>
                )}

                <p className="text-center font-poppins leading-relaxed opacity-95">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        </FadeInFromBottom>
      </div>
    </section>
  );
}








