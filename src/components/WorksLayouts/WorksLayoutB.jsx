import { motion } from "framer-motion";
import styled from "styled-components";
import VisitPage from "../VisitPage";

export default function WorksLayoutB({ project }) {
  return (
    <Main>
      <Wallpaper>
        {/* Visit page component */}
        <VisitPage project={project} />
        <motion.img
          src={project.wallpaper}
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          alt=""
        />
      </Wallpaper>
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
    </Main>
  );
}

const Main = styled.div`
  position: relative;
`;

const Wallpaper = styled.div`
  position: relative;
  filter: blur(4px);

  img {
    width: 100%;
    height: auto;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    filter: blur(1px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img,
  video {
    height: auto;
    width: 45vw;

    @media (max-width: 768px) {
      width: 43vw;
    }
  }
`;
