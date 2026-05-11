import { motion } from "framer-motion";
import styled from "styled-components";

export default function WorksLayoutD({ project }) {
  return (
    <Main>
      <Wallpaper>
        <motion.img
          src={project.wallpaper}
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          alt="Wallpaper image for the project"
        />
      </Wallpaper>
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
