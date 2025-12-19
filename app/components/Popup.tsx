"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

type PopupProps = {
  open: boolean;
  onClose?: () => void;
};

/* 🎉 Confetti from LEFT-BOTTOM & RIGHT-BOTTOM */
const shootBottomSideConfetti = () => {
  const duration = 2500;
  const end = Date.now() + duration;

  const colors = ["#f6a81c", "#ff4d6d", "#ffffff"];

  (function frame() {
    // LEFT BOTTOM → UPWARD
    confetti({
      particleCount: 6,
      angle: 60,              // shoots upward-right
      spread: 70,
      origin: { x: 0, y: 1 }, // left bottom
      colors,
      startVelocity: 45,
      gravity: 0.9,
    });

    // RIGHT BOTTOM → UPWARD
    confetti({
      particleCount: 6,
      angle: 120,             // shoots upward-left
      spread: 70,
      origin: { x: 1, y: 1 }, // right bottom
      colors,
      startVelocity: 45,
      gravity: 0.9,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

const Popup = ({ open, onClose }: PopupProps) => {
  /* 🔥 Fire confetti when popup opens */
  useEffect(() => {
    if (open) {
      shootBottomSideConfetti();
    }
  }, [open]);

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
        <div className="relative bg-linear-to-b from-[#C5EEEE] to-[#40C7C7] rounded-2xl px-8 pt-14 pb-10 text-center shadow-xl w-[90%] max-w-md">

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
            <span className="text-white text-xl font-bold">✕</span>
          </button>

          {/* Message */}
          <h2 className="font-cronos font-bold text-black leading-tight text-2xl">
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
