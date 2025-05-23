import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 10 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 10 });

  const [isHovering, setIsHovering] = useState(false);
  const [CursorColor, setCursorColor] = useState("#3fc1a3"); // Default Cursor color

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);

      const element = document.elementFromPoint(e.clientX, e.clientY);

      // Check if hovering on text or interactive elements
      if (element && (element.tagName === "A" || element.tagName === "H1" || element.tagName === "H2" || element.tagName === "P" || element.tagName === "H3" )) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // Dynamically update Cursor color from background
        if (element) {
          const bgColor = window.getComputedStyle(element).backgroundColor;
          setCursorColor(bgColor === "rgba(0, 0, 0, 0)" ? "#3fc1a3" : bgColor);
        }
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`w-8 h-8 rounded-full fixed left-0 top-0 pointer-events-none ${
        isHovering ? "mix-blend-difference border border-white" : ""
      }`}
      style={{
        x: smoothX,
        y: smoothY,
        backgroundColor: CursorColor,
      }}
    />
  );
}
