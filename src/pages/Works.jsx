import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";
import WorksLayoutA from "../components/WorksLayouts/WorksLayoutA";
import WorksLayoutB from "../components/WorksLayouts/WorksLayoutB";
import WorksLayoutC from "../components/WorksLayouts/WorksLayoutC";
import WorksLayoutD from "../components/WorksLayouts/WorksLayoutD";
import projectData from "../data/projectData.json";

const layouts = {
  A: WorksLayoutA,
  B: WorksLayoutB,
  C: WorksLayoutC,
  D: WorksLayoutD,
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
                  <a
                    href={project.website_link}
                    className={!project.website_link ? "disabled" : ""}
                  >
                    View site
                    <RiExternalLinkFill />
                  </a>
                </li>
                <li>
                  <a
                    href={project.github_link}
                    className={!project.github_link ? "disabled" : ""}
                  >
                    View on GitHub
                    <RiExternalLinkFill />
                  </a>
                </li>
              </ul>
              {/* Fixa bättre lösning */}
              <h4 className="hideOnMobile">&nbsp;</h4>
              <h4 className="hideOnMobile">&nbsp;</h4>
              <h4 className="hideOnMobile">Tech stack</h4>
              <p>{project.tech}</p>
              <h4 className="hideOnMobile">Details</h4>
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
  font-size: 15px;

  // Gap between each project
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 0.7rem;
    margin-top: 5.5rem;
    font-size: 14px;
  }
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    // Between project number and title
    margin-top: 0.5rem;
    // Between project description and images
    margin-bottom: 0.5rem;
  }

  ul {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .hideOnMobile {
    @media (max-width: 768px) {
      display: none;
    }
  }

  // For the links
  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .disabled {
    pointer-events: none;
    color: ${({ theme }) => theme.disabled};
  }

  li {
    width: 100%;

    :hover {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;
