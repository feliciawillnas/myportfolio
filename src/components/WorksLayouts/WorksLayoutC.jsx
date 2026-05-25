import { motion } from "framer-motion";
import styled from "styled-components";

export default function WorksLayoutC({ project }) {
  return (
    <Main>
      {/* Big header image */}
      <ProjectImageWrapper>
        {project.website_link ? (
          <a
            href={project.website_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              initial={{ filter: "blur(80px)" }}
              whileInView={{ filter: "none", delay: 0.1 }}
              src={project.image}
              alt="Header image of the project"
            />
          </a>
        ) : (
          <motion.img
            initial={{ filter: "blur(80px)" }}
            whileInView={{ filter: "none", delay: 0.1 }}
            src={project.image}
            alt="Header image of the project"
          />
        )}
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
    border: 5rem solid ${({ theme }) => theme.details};

    @media (max-width: 768px) {
      border: 2rem solid ${({ theme }) => theme.details};
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
