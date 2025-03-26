import React from "react";
import styled from "styled-components";

export default function Footer({ toggleTheme, isDarkMode }) {
  return (
    <Main>
      <FlexedDiv>
        <Socials>
          <p>socials</p>
          <p>gitHub</p>
          <p>linkedIn</p>
        </Socials>
        <p onClick={toggleTheme}>
          {isDarkMode ? "darkMode: on " : "darkMode: off"}
        </p>
      </FlexedDiv>
    </Main>
  );
}

const Main = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 0rem 3rem 1rem 3rem;
`;

const FlexedDiv = styled.div`
  display: flex;
  gap: 3rem;
`;

const Socials = styled.div`
  text-transform: uppercase;
`;
