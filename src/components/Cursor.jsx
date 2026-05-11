import { motion } from "framer-motion";
import { IoStarSharp } from "react-icons/io5";
import styled from "styled-components";

export function Cursor({ variants, cursorVariant, hidden }) {
  return (
    <StyledCursor
      variants={variants}
      animate={cursorVariant}
      style={{ opacity: hidden ? 0 : 1 }}
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
