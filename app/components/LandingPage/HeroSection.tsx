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
    <section id="contact-form" className="relative w-full overflow-visible">
      {/* Background Image */}
    <div className="relative w-full h-[40vh] md:h-[70vh]">
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
     <div className="container mx-auto px-4">
  <div className="relative md:flex md:justify-end">
    <div className="relative md:right-10 md:bottom-20 mt-6 -md:mt-0 z-10">


      {/* ROW ON DESKTOP */}
      <div className="flex flex-col md:flex-row md:items-end lg:gap-16 gap-10">

        {/* TEXT BLOCK */}
        <div className="max-w-230">
          <AnimatedRichText
            className="font-cronos black-text whitespace-nowrap"
            parts={[
              { text: "Why we built" },
              { text: "Wisbo?", className: "text-highlight" },
            ]}
          />

          <FadeInFromBottom>
            <p className=" black-text font-poppins ">
              We believe children grow best through stories rooted in Indian values,
              traditions, and imagination — not screens.
            </p>
          </FadeInFromBottom>
        </div>

        {/* FORM */}
<FadeInFromBottom>
  <div className="md:-mt-85">
    <ContactPage
      onSuccess={handleSuccess}
      resetKey={resetFormKey}
    />
  </div>
</FadeInFromBottom>


      </div>

    </div>
  </div>
</div>


      {/* ✅ FULL SCREEN POPUP */}
      <Popup open={showPopup}>
        <p className="font-semibold Black-text">
          Thank you for joining the waitlist.
        </p>
        <ImageSuccess
          src="/images/masscoat.webp"
          alt="Success"
          width={250}
          height={250}
          className="mx-auto mb-4"
        />
        
      </Popup>
    </section>
  );
};

export default HeroSection;
