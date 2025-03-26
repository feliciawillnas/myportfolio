import React from "react";
import styled from "styled-components";

export default function Footer({ toggleTheme }) {
  return (
    <Main>
      <FlexedDiv>
        {/* <div>
          <p>socials</p>
          <p>gitHub</p>
          <p>linkedIn</p>
        </div> */}
        <div>
          <p onClick={toggleTheme}>darkMode: off</p>
        </div>
      </FlexedDiv>
    </Main>
  );
}

const Main = styled.footer`
  position: absolute;
  bottom: 0;
  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.04rem;
  font-size: 14px;
  font-weight: 400;
  /* text-transform: uppercase; */
  padding: 0rem 3rem 1rem 3rem;
`;

const FlexedDiv = styled.div`
  display: flex;
  gap: 3rem;
`;
