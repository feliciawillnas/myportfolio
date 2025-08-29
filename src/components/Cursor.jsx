import { motion } from "framer-motion";
import styled from "styled-components";

export function Cursor({ variants, cursorVariant }) {
  return (
    <>
      <StyledCursor>
        <motion.div
          className={`cursor`}
          variants={variants}
          animate={cursorVariant}
        />
      </StyledCursor>
    </>
  );
}

const StyledCursor = styled.div`
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    pointer-events: none;
    background-color: #000000;
  }
`;

export default Cursor;
