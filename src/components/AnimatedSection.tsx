"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  style?: React.CSSProperties;
}

const variants = {
  up: { x: 0, y: 20 },
  left: { x: -30, y: 0 },
  right: { x: 30, y: 0 },
};

export default function AnimatedSection({ children, className, delay = 0, direction = "up", style }: Props) {
  const offset = variants[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
