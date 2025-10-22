import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";
import WorksLayoutA from "../components/WorksLayouts/WorksLayoutA";
import WorksLayoutB from "../components/WorksLayouts/WorksLayoutB";
import projectData from "../data/projectData.json";

const layouts = {
  A: WorksLayoutA,
  B: WorksLayoutB,
};

export default function Works() {
  return (
    <Main>
      {projectData.map((project) => {
        const Layout = layouts[project.layoutType] || WorksLayoutA;

        return (
          <div key={project.id}>
            {/* Shared section across layouts */}
            <h4>0{project.id}</h4>
            <ProjectWrapper>
              <h4>{project.title}</h4>
              <ul>
                <li>
                  <a href={project.website_link}>
                    View site
                    <RiExternalLinkFill />
                  </a>
                </li>
                <div></div>
                <li>
                  <a href={project.github_link}>
                    View on GitHub
                    <RiExternalLinkFill />
                  </a>
                </li>
              </ul>
              <h4>&nbsp;</h4>
              <h4>&nbsp;</h4>
              <h4>Tech stack</h4>
              <p>{project.tech}</p>
              <h4>Details</h4>
              <p>{project.text}</p>
            </ProjectWrapper>
            <Layout project={project} />
          </div>
        );
      })}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 5rem;
  width: 100%;

  // Gap between each project
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 0.7rem;
  }
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  // For the links
  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  li {
    width: 100%;

    :hover {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;
