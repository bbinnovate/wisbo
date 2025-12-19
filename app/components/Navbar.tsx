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
        <div>
         <Button
  onClick={() => {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
>
  Join the Waitlist
</Button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
