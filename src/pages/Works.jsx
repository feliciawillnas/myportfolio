import React from "react";
import styled from "styled-components";
import projectData from "../data/projectData.json";

export default function Works() {
  return (
    <Main>
      {projectData.map((project) => (
        <div key={project.id}>
          <ProjectWrapper>
            <FlexedDiv>
              <h4>{project.title}</h4>
              <h4>Tech stack</h4>
              <h4>Info</h4>
            </FlexedDiv>
            <FlexedDiv>
              <a href="/">
                <p>Visit site</p>
              </a>
              <p>{project.tech}</p>
              <p>{project.text}</p>
            </FlexedDiv>
          </ProjectWrapper>
          <ProjectImage>
            <img src={project.image} alt="image not found" />
          </ProjectImage>
        </div>
      ))}
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem;
  margin-top: 5rem;
`;

const ProjectImage = styled.div`
  img {
    width: 10vw;
    height: auto;
    object-fit: cover;
    border-radius: 2px;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 8rem;
`;

const FlexedDiv = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    text-transform: uppercase;
  }
`;
