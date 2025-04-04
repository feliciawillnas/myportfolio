import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
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
              <h4>&nbsp;</h4>
              <h4>Tech stack</h4>
              <h4>Details</h4>
            </FlexedDiv>
            <FlexedDiv>
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
              <p>{project.tech}</p>
              <p>{project.text}</p>
            </FlexedDiv>
          </ProjectWrapper>
          <ProjectImageWrapper>
            <img src={project.image} alt="image not found" />
            <ProjectImageText>
              <a href="/">
                Visit page
                <RiExternalLinkFill />
              </a>
            </ProjectImageText>
          </ProjectImageWrapper>
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

  @media (max-width: 768px) {
    gap: 3rem;
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
    gap: 0.2rem;
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

  li {
    :hover {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
    }
  }

  h4 {
    text-transform: uppercase;
  }
`;
