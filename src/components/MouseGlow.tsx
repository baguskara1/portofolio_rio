"use client";

import { useState, useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden -z-10 transition-[background] duration-1000"
      style={{
        background: `radial-gradient(600px at ${pos.x}% ${pos.y}%, rgba(124, 58, 237, 0.12), transparent 80%)`,
      }}
    />
  );
}
