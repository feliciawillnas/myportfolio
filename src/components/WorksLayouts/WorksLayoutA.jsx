import { motion } from "framer-motion";
import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";

export default function WorksLayoutA({ project }) {
  return (
    <div>
      {/* Big header image */}
      <ProjectImageWrapper>
        <ProjectImageText>
          <a href="/">
            Visit page
            <RiExternalLinkFill />
          </a>
        </ProjectImageText>
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

const ProjectImageText = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 2px;
  z-index: 10;

  a {
    display: flex;
    color: #f0f0f0;
    gap: 0.5rem;
    align-items: center;
  }
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

  &:hover ${ProjectImageText} {
    visibility: visible;
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
