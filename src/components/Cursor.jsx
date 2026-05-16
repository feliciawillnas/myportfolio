import { motion } from "framer-motion";
import { IoStarSharp } from "react-icons/io5";
import styled from "styled-components";

export function Cursor({
  variants,
  cursorVariant,
  hidden,
  starRef,
  cursorActive,
}) {
  const getStarCenter = () => {
    if (!starRef?.current) return { x: 0, y: 0 };
    const rect = starRef.current.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - 13,
      y: rect.top + rect.height / 2 - 13,
    };
  };

  return (
    <StyledCursor
      animate={
        cursorActive ? cursorVariant : { ...getStarCenter(), opacity: 0 } // fade out when resting
      }
      variants={cursorActive ? variants : undefined}
      transition={
        cursorActive
          ? undefined
          : { type: "spring", stiffness: 150, damping: 18 }
      }
      variants={cursorActive ? variants : undefined}
      transition={
        cursorActive
          ? undefined
          : {
              type: "spring",
              stiffness: 150,
              damping: 18,
              opacity: { delay: 0.5, duration: 0.4 },
            }
      }
      // style={{ opacity: hidden ? 0 : 1 }}
    >
      <IoStarSharp className="cursor-icon" />
    </StyledCursor>
  );
}

const StyledCursor = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;

  .cursor-icon {
    width: 26px;
    height: 26px;
    color: ${({ theme }) => theme.cursor};
    display: block;
  }
`;

export default Cursor;
