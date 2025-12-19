"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

type Coords = { x: number; y: number };

interface CreepyButtonProps {
    children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}



export default function Button({
  children,
  onClick,
}: CreepyButtonProps) {
  const eyesRef = useRef<HTMLSpanElement>(null);
  const [eyeCoords, setEyeCoords] = useState<Coords>({ x: 0, y: 0 });

  const updateEyes = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    const event = "touches" in e ? e.touches[0] : e;
    const rect = eyesRef.current?.getBoundingClientRect();
    if (!rect) return;

    const eyesCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const dx = event.clientX - eyesCenter.x;
    const dy = event.clientY - eyesCenter.y;

    const angle = Math.atan2(-dy, dx) + Math.PI / 2;
    const distance = Math.hypot(dx, dy);

    setEyeCoords({
      x: (Math.sin(angle) * distance) / 180,
      y: (Math.cos(angle) * distance) / 75,
    });
  };

  const pupilStyle = {
    x: `${-50 + eyeCoords.x * 50}%`,
    y: `${-50 + eyeCoords.y * 50}%`,
  };

  return (
    <button
    
      onClick={onClick}
      onMouseMove={updateEyes}
      onTouchMove={updateEyes}
      className="relative min-w-[9em] rounded-3xl blod-text bg-[#f6a81c] p-0.75 cursor-pointer font-poppins tracking-wide black-text outline-none"
    >
      {/* Eyes */}
      <span
        ref={eyesRef}
        className="absolute bottom-2 right-4 flex gap-1"
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className="eye relative h-3 w-3 overflow-hidden rounded-3xl bg-(--gray1)"
          >
            <motion.span
              className="absolute h-1.5 w-1 rounded-3xl bg-black"
              animate={pupilStyle}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ left: "50%", top: "50%" }}
            />
          </span>
        ))}
      </span>

      {/* Cover */}
     <motion.span
  whileHover={{ rotate: -12 }}
  whileFocus={{ rotate: -12 }}
  whileTap={{ rotate: 0 }}
  transition={{ type: "spring", stiffness: 250, damping: 18 }}
  style={{
    transformOrigin: "1.25em 50%",
    background: "linear-gradient(90deg, #FF6600 13%, #F9A91E 100%)",
  }}
  className="
  relative
  block
  rounded-3xl
  px-4 py-2
  sm:px-6 sm:py-2.5
  text-sm sm:text-base
  white-text
  text-center
"

>
  {children}
</motion.span>

    </button>
  );
}
