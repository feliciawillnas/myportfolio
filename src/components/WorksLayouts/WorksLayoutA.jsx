import { motion } from "framer-motion";
import styled from "styled-components";
import VisitPage from "../VisitPage";

export default function WorksLayoutA({ project }) {
  return (
    <div>
      {/* Big header image */}
      <ProjectImageWrapper>
        {/* Visit page component */}
        <VisitPage project={project} />
        <motion.img
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          src={project.image}
          alt="Header image of the project"
        />
      </ProjectImageWrapper>
      {/* Thumbnails */}
      <ThumbnailWrapper>
        <motion.img
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          src={project.thumbnailFirst}
          alt="Thumbnail image of the project"
        />
        <motion.img
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          src={project.thumbnailSecond}
          alt="Thumbnail image of the project"
        />
      </ThumbnailWrapper>
    </div>
  );
}

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

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  img {
    margin-top: 2rem;
    width: auto;
    height: 40vw;
    object-fit: cover;
  }
`;
