"use client";

import React from "react";
import Image from "next/image";

type PopupProps = {
  open: boolean;
  onClose?: () => void;
};

const Popup = ({ open, onClose }: PopupProps) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/90 z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative  bg-linear-to-b from-[#C5EEEE] to-[#40C7C7] rounded-2xl px-8 pt-14 pb-10 text-center shadow-xl w-[90%] max-w-md">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute
              -top-6
              left-1/2
              -translate-x-1/2
              w-12
              h-12
              rounded-full
              bg-[#f6a81c]
              flex
              items-center
              justify-center
              shadow-lg
              hover:scale-105
              transition
            "
          >
            <span className="white-text text-xl font-bold leading-none">
              ✕
            </span>
          </button>

          {/* Message */}
          <h2 className="font-cronos  font-bold black-text leading-tight">
            Thank You <br /> For Joining!
          </h2>

          {/* Image */}
          <Image
            src="/images/masscoat.webp"
            alt="Success"
            width={250}
            height={250}
            className="mx-auto mt-6"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
