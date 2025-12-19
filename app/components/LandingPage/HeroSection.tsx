"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactPage from "./ContactPage";
import Popup from "../Popup";
import ImageSuccess from "next/image";
import FadeInFromBottom from "../Animation/FadeInFromBottom";
import AnimatedRichText from "../Animation/AnimatedText";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [resetFormKey, setResetFormKey] = useState(0);

  const handleSuccess = () => {
    setShowPopup(true);

    // ⏱️ Close popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
      setResetFormKey((prev) => prev + 1); // 🔥 reset form
    }, 5000);
  };

  return (
    <section  className="relative w-full overflow-visible">
      {/* Background Image */}
    <div className="relative w-full h-[60vh] md:h-[70vh]">
  {/* Mobile Image */}
  <Image
    src="/images/bannermob.webp"
    alt="Hero Background Mobile"
    fill
    className="object-cover md:hidden"
    priority
  />

  {/* Desktop Image */}
  <Image
    src="/images/bannerdex.webp"
    alt="Hero Background Desktop"
    fill
    className="object-cover hidden md:block"
    priority
  />
</div>


      {/* Content */}
     <div className="container mx-auto">
  <div className="relative md:flex md:justify-end">
    <div className="relative md:right-10 md:bottom-20 mt-6 -md:mt-0 z-10">


      {/* ROW ON DESKTOP */}
      <div className="flex flex-col md:flex-row md:items-end lg:gap-16 gap-10">

        {/* TEXT BLOCK */}
        <div className="max-w-230 lg:mt-20 mt-0">
          <AnimatedRichText
            className="font-cronos black-text whitespace-nowrap"
            parts={[
              { text: "Why we built" },
              { text: "Wisbo?", className: "text-highlight" },
            ]}
          />

          <FadeInFromBottom>
            <p className=" black-text font-poppins ">
              As parenting gets trickier in this infinite digital maze, it is becoming harder to find things that actually nourish a child's mind. Yet, every parent wants the same result: to raise a child who is kind, resilient, curious, and rooted in the right values. <br />
<span className=" font-bold"> That’s why we built Wisbo. </span> <br />
Wisbo is a storytelling companion for parents who care deeply about what their children absorb. While the digital world focuses on keeping their attention, Wisbo focuses on building their character.
</p>
          </FadeInFromBottom>
        </div>

        {/* FORM */}
{/* <FadeInFromBottom> */}
<div id="contact-section" className="hidden md:block md:-mt-110">
  <ContactPage
  
    onSuccess={handleSuccess}
    resetKey={resetFormKey}
  />
</div>

{/* </FadeInFromBottom> */}


      </div>

    </div>
  </div>
</div>


      {/* ✅ FULL SCREEN POPUP */}
      <Popup open={showPopup} onClose={() => setShowPopup(false)} />

    </section>
  );
};

export default HeroSection;
