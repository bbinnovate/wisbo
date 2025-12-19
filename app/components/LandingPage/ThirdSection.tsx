"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button";
import AnimatedRichText from "../Animation/AnimatedText";
import FadeInFromBottom from './../Animation/FadeInFromBottom';
import FadeInFromLeft from './../Animation/FadeInFromLeft';
import FadeInFromRight from './../Animation/FadeInFromRight';

const ThirdSection = () => {
  return (
    <section className="w-full py-10 sm:py-15 lg:py-30 bg-white">
      <div className="container mx-auto px-4">

        {/* Center Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <AnimatedRichText
  className="font-cronos black-text whitespace-nowrap"
  parts={[
    { text: "How it" },
    { text: "Works ", className: "text-highlight" },
  ]}
/>


     <FadeInFromBottom>


          <p className="mt-2 font-poppins black-text">
            A simple, screen-free way for children to learn through meaningful stories.
          </p>
     </FadeInFromBottom>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* STEP 1 */}
         <FadeInFromLeft>
  <div
    className="
      rounded-3xl
      bg-linear-to-b from-[#C5EEEE] to-[#40C7C7]
      p-4 sm:p-6
      outline
      outline-4
      outline-dashed
      outline-[#40C7C7]
      outline-offset-4
      sm:outline-offset-6
    "
  >
    <div className="flex flex-col sm:flex-row gap-6 items-start">

      {/* IMAGE */}
      <div className="w-full sm:w-40 aspect-square relative shrink-0">
        <Image
          src="/images/stepp1.webp"
          alt="Step 1"
          fill
          className="object-contain sm:object-cover rounded-xl"
        />
      </div>

      {/* TEXT */}
      <div>
        <h4 className="font-semibold font-poppins black-text">
          Place A Figure: Story Starts
        </h4>

        <p className="mt-3 black-text font-poppins leading-relaxed">
          Choose a story rooted in Indian culture, values, and imagination.
        </p>
      </div>

    </div>
  </div>
</FadeInFromLeft>

          {/* STEP 2 */}




                   <FadeInFromLeft>
  <div
    className="
      rounded-3xl
      bg-linear-to-b from-[#C5EEEE] to-[#40C7C7]
      p-4 sm:p-6
      outline
      outline-4
      outline-dashed
      outline-[#40C7C7]
      outline-offset-4
      sm:outline-offset-6
    "
  >
    <div className="flex flex-col sm:flex-row gap-6 items-start">

      {/* IMAGE */}
      <div className="w-full sm:w-40 aspect-square relative shrink-0">
        <Image
          src="/images/stepp2.webp"
          alt="Step 1"
          fill
          className="object-contain sm:object-cover rounded-xl"
        />
      </div>

      {/* TEXT */}
      <div>
        <h4 className="font-semibold font-poppins black-text">
           Pick It Up: Story Pauses
        </h4>

        <p className="mt-3 black-text font-poppins leading-relaxed">
          Pick it up anytime. The story pauses and resumes effortlessly.
        </p>
      </div>

    </div>
  </div>
</FadeInFromLeft>





    


        </div>

        <FadeInFromBottom>

        {/* CTA */}
        <div className="flex justify-center items-center py-10">
           <a href="#contact-form"> 

          <Button>Join Our Family</Button>
           </a>
        </div>
        </FadeInFromBottom>

      
      </div>
    </section>
  );
};

export default ThirdSection;
