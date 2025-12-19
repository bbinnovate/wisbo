import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full container bg-white">
      <div className="mt-3 py-5">
        {/* Bottom Section */}
        <div className="mt-4 border-t pt-4 lg:pt-1 flex justify-center items-center text-gray-500 text-sm">
          {/* Copyright */}
          <p className="text-center black-text font-poppins">
            Copyright ©2025 Wisbo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
