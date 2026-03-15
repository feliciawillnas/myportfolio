import { useEffect, useState } from "react";

export const useCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      // cursor size 26px, so offset is 13px
      x: mousePosition.x - 13,
      y: mousePosition.y - 13,
      transition: {
        type: "tween",
        ease: "easeOut", // for smooth movement
        duration: 0.1,
      },
    },
    text: {
      x: mousePosition.x - 13,
      y: mousePosition.y - 13,
      scale: 2,
      rotate: 50,
      mixBlendMode: "difference",

      transition: {
        type: "spring",
        stiffness: 300, // lower value makes it more springy
        damping: 20, // higher damping makes it settle faster
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return { variants, cursorVariant, textEnter, textLeave };
};
