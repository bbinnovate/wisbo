"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container h-20 flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center">
  <Link href="/">
    <Image
      src="/images/logo.webp"
      alt="Logo"
      width={200}
      height={100}
      className="object-contain w-28 sm:w-36 lg:w-50"
      priority
    />
  </Link>
</div>


        {/* RIGHT: Button */}
        <Button
  onClick={() => {
    const section = document.getElementById("contact-section");

    if (!section) {
      console.log("❌ contact-section not found");
      return;
    }

    const top =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }}
>
  Join the Waitlist
</Button>


      </div>
    </header>
  );
};

export default Navbar;
