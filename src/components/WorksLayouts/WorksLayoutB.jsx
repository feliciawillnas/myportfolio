import { motion } from "framer-motion";
import styled from "styled-components";

export default function WorksLayoutB({ project }) {
  return (
    <div>
      <Wrapper>
        <motion.img
          src={project.image}
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
        />
        <motion.video
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          src={project.video}
          alt=""
          autoPlay
          loop
          muted
        />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 50%;
    height: auto;
  }

  video {
    width: 50%;
    height: auto;
  }
`;
