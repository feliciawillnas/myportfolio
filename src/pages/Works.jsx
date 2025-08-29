import { motion } from "framer-motion";
import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";
import projectData from "../data/projectData.json";

export default function Works() {
  return (
    <Main>
      {/* <Categories /> */}
      {projectData.map((project) => (
        <div key={project.id}>
          <h4>0{project.id}</h4>
          <ProjectWrapper>
            <FlexedDiv>
              <h4>{project.title}</h4>
              <h4>&nbsp;</h4>
              <h4>Tech stack</h4>
              <h4>Details</h4>
            </FlexedDiv>
            <FlexedDiv>
              <ul>
                <li>
                  <a href={project.website_link}>
                    View site
                    <RiExternalLinkFill />
                  </a>
                </li>
                <li>
                  <a href={project.github_link}>
                    View on github
                    <RiExternalLinkFill />
                  </a>
                </li>
              </ul>
              <p>{project.tech}</p>
              <p>{project.text}</p>
            </FlexedDiv>
          </ProjectWrapper>
          <ProjectImageWrapper>
            {/* <PixelImage src={project.image} /> */}
            <motion.img
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1,
              }}
              src={project.image}
              alt=""
            />
            <ProjectImageText>
              <a href="/">
                Visit page
                <RiExternalLinkFill />
              </a>
            </ProjectImageText>
          </ProjectImageWrapper>
          <ImageWrapper>
            {project.thumbnailFirst && (
              <motion.img
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 13,
                  delay: 0.1,
                }}
                src={project.thumbnailFirst}
                alt=""
              />
            )}
            {project.thumbnailSecond && (
              <motion.img
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 13,
                  delay: 0.1,
                }}
                src={project.thumbnailSecond}
                alt=""
              />
            )}
          </ImageWrapper>
        </div>
      ))}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 5rem;
  gap: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.7rem;
  }
`;

const ProjectImageText = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 2px;

  a {
    display: flex;
    color: #f0f0f0;
    gap: 0.5rem;
    align-items: center;
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  margin-top: 0.5rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 2px;
  }

  :hover {
    cursor: pointer;
  }

  &:hover ${ProjectImageText} {
    visibility: visible;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  gap: 8rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

const FlexedDiv = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  li {
    :hover {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
    }
  }

  h4 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  img {
    margin-top: 2rem;
    width: auto;
    height: 40vw;
    object-fit: cover;
  }
`;
