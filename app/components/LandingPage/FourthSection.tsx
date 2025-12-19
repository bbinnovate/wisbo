"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button";
import AnimatedText from "../Animation/AnimatedText";
import AnimatedRichText from "../Animation/AnimatedText";
import FadeInFromBottom from './../Animation/FadeInFromBottom';
import FadeInFromLeft from './../Animation/FadeInFromLeft';
import FadeInFromRight from './../Animation/FadeInFromRight';

const FourthSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container">

        {/* Box Container */}
        <div className="relative rounded-3xl bg-[#FFF3E8]">

          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-16 py-5">


            

            {/* LEFT: Text + Button */}
            <div className="flex-1 max-w-8xl">
              <AnimatedRichText
  className="font-cronos black-text whitespace-nowrap"
  parts={[
    { text: "Stories that grow with your" },
    { text: "child", className: "text-highlight" },
  ]}
/>

        
                <FadeInFromBottom >


                
              <p className="mt-2 black-text font-poppins">
                Thoughtfully crafted audio stories designed to inspire imagination,
                curiosity, and strong values — without screens.
              </p>
              </FadeInFromBottom>

<FadeInFromLeft>
              <div className="mt-6">
                 <a href="#contact-form">
    <Button>Join the Waitlist</Button>
  </a>
              </div>
              </FadeInFromLeft>
            </div>

            {/* RIGHT: PNG Image (overflow from top) */}
            
            <div className="flex-1 flex justify-center md:justify-end relative">
              <div className="lg:-mt-40 -mt-10">
                <FadeInFromRight >
                <Image
                  src="/images/masscoat.webp"
                  alt="Illustration"
                  width={400}
                  height={400}
                  className="object-contain"
                />
                </FadeInFromRight>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FourthSection;
