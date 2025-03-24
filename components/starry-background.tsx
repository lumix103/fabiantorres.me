"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  movementFactor: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const StarryBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = (): Star[] => {
      const newStars: Star[] = [];
      const starCount = 150;
      const stationaryRatio = 0.6;
      for (let i = 0; i < starCount; i++) {
        const isStationary = Math.random() < stationaryRatio;
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          color: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`,
          movementFactor: isStationary ? 0 : Math.random() * 0.05,
        });
      }

      return newStars;
    };

    setStars(generateStars());

    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="-z-10"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {stars.map((star) => {
        const dx = (mousePosition.x - star.x) * star.movementFactor;
        const dy = (mousePosition.y - star.y) * star.movementFactor;

        return (
          <motion.div
            key={star.id}
            initial={{
              x: star.x,
              y: star.y,
              opacity: 0,
            }}
            animate={{
              x: star.x + dx,
              y: star.y + dy,
              opacity: star.opacity,
            }}
            style={{
              position: "absolute",
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              backgroundColor: star.color,
            }}
          />
        );
      })}
    </div>
  );
};

export default StarryBackground;
