"use client";
import React, { ReactElement, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticProps {
  children: ReactElement;
  padding?: number;
}

export default function Magnetic({ children, padding = 20 }: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { top, left, width, height } = ref.current.getBoundingClientRect();
    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
        display: "inline-flex",
        padding: padding,
        margin: -padding,  // offsets layout so nothing shifts
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}