import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <InnerBox>
        <h1>Home</h1>
        <p>This is the Home page.</p>
      </InnerBox>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  padding: 1rem;
  background-color: ${({ theme }) => theme.secondary};
`;

const InnerBox = styled.div`
  height: 100%;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.primary};
`;
