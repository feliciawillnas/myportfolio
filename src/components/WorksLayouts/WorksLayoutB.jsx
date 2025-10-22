import { motion } from "framer-motion";
import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";

export default function WorksLayoutB({ project }) {
  return (
    <Main>
      <Wallpaper>
        <ProjectImageText>
          <a href="/">
            <p>
              Visit page
              <RiExternalLinkFill />
            </p>
          </a>
        </ProjectImageText>
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

const ProjectImageText = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 2px;
  z-index: 10;

  a {
    color: #f0f0f0;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Wallpaper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  &:hover ${ProjectImageText} {
    visibility: visible;
  }

  &:hover {
    cursor: pointer;
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
  }
`;
