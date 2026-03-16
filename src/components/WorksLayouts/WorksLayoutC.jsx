import { motion } from "framer-motion";
import styled from "styled-components";

export default function WorksLayoutC({ project }) {
  return (
    <Main>
      {/* Big header image */}
      <ProjectImageWrapper>
        <motion.img
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          src={project.image}
          alt="Header image of the project"
        />
      </ProjectImageWrapper>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
`;

const ProjectImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
  }
`;
