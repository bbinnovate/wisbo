"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Coords = { x: number; y: number };

interface CreepyButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, onClick }: CreepyButtonProps) {
  const eyesRef = useRef<HTMLSpanElement>(null);
  const controls = useAnimation();
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const [eyeCoords, setEyeCoords] = useState<Coords>({ x: 0, y: 0 });

  /* ---------------- AUTO LOOP ---------------- */
  const startAutoAnimation = () => {
    controls.start({
      rotate: [0, -12, -12, 0, 0],
      transition: {
        duration: 6,
        times: [0, 0.15, 0.32, 0.48, 1],
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAutoAnimation();
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  /* ---------------- EYES ---------------- */
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

  /* ---------------- HOVER HANDLERS ---------------- */
  const handleHoverStart = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

    controls.stop(); // ⛔ stop auto loop
    controls.start({
      rotate: -12,
      transition: { type: "spring", stiffness: 250, damping: 18 },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: 0,
      transition: { duration: 0.3 },
    });

    hoverTimeout.current = setTimeout(() => {
      startAutoAnimation(); // ▶ resume after 1s
    }, 1000);
  };

  return (
     <button
    type="button"        // ✅ ADD THIS (MOST IMPORTANT)
    onClick={onClick}    // already there ✔
    onMouseMove={updateEyes}
    onTouchMove={updateEyes}
    className="relative min-w-[9em] rounded-3xl bg-[#f6a81c] p-0.75 cursor-pointer font-poppins tracking-wide outline-none"
  >
      {/* Eyes */}
      <span ref={eyesRef} className="absolute bottom-2 right-4 flex gap-1">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="relative h-3 w-3 overflow-hidden rounded-3xl bg-(--gray1)"
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
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={{
          transformOrigin: "1.25em 50%",
          background: "linear-gradient(90deg, #FF6600 13%, #F9A91E 100%)",
        }}
        className="
          relative block rounded-3xl
          px-4 py-2 sm:px-6 sm:py-2.5
          text-xs sm:text-base text-white text-center
        "
      >
        {children}
      </motion.span>
    </button>
  );
}
