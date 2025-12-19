"use client";

import { motion, cubicBezier } from "framer-motion";
import React from "react";

type TextPart = {
  text: string;
  className?: string;
};

type AnimatedRichTextProps = {
  parts: TextPart[];
  className?: string;
  once?: boolean;
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 1, 1),
    },
  },
};

const AnimatedRichText = ({
  parts,
  className = "",
  once = true,
}: AnimatedRichTextProps) => {
  return (
    <motion.h2
      style={{ fontFamily: "CRONOS-KID" }}
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
    >
      {parts.map((part, partIndex) =>
        part.text.split(" ").map((word, wordIndex) => (
          <motion.span
            key={`${partIndex}-${wordIndex}`}
            variants={wordVariants}
            className={`inline-block mr-2 ${part.className || ""}`}
          >
            {word}
          </motion.span>
        ))
      )}
    </motion.h2>
  );
};

export default AnimatedRichText;
