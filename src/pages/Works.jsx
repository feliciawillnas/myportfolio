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
              <FlexedDiv>
                <Titles>
                  <h4>{project.title}</h4>
                  <h4>&nbsp;</h4>
                  <h4>&nbsp;</h4>
                  <h4>Tech stack</h4>
                  <h4>Details</h4>
                </Titles>
              </FlexedDiv>
              <FlexedDiv>
                <Descriptions>
                  <ul>
                    <li>
                      <a href={project.website_link}>
                        View site
                        <RiExternalLinkFill />
                      </a>
                    </li>
                    <li>
                      {project.github_link ? (
                        <a href={project.github_link}>
                          View on GitHub <RiExternalLinkFill />
                        </a>
                      ) : (
                        <a href="#">
                          View on GitHub <RiExternalLinkFill />
                        </a>
                      )}
                    </li>
                  </ul>
                  <h4>&nbsp;</h4>
                  <p>{project.tech}</p>
                  <p>{project.text}</p>
                </Descriptions>
              </FlexedDiv>
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
  gap: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.7rem;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

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

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
