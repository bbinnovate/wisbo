import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full container bg-white ">
      <div className=" mt-3 py-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start lg:gap-8 gap-4 text-left">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="Bombay Blokes Logo"
              width={250}
              height={60}
              className="object-contain"
            />
            </Link>
          </div>


          {/* Mail */}
          {/* <div>
            <p className="black-text font-semibold font-poppins">Mail Us</p>
            <h5 className="font-bold  black-text font-poppins ">
              hello@bombayblokes.com
            </h5>
          </div> */}

          {/* Call */}
          <div>
            <p className="black-text font-semibold font-poppins">Call Us</p>
            <h5 className="font-bold black-text font-poppins">+91 99204 48823</h5>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 border-t pt-4 lg:pt-1 flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-gray-500 text-sm">
          {/* Links */}
        
          {/* Copyright */}
          <p className="text-left md:order-1 mt-2 black-text font-poppins ">
            Copyright ©2025 Wisbo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}