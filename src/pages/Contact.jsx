import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Main>
      <Content>
        <h1>GET IN TOUCH</h1>
        <h2>feliciawillnas@gmail.com</h2>
      </Content>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    font-size: 8rem;

    @media (max-width: 768px) {
      font-size: 5rem;
      line-height: 0.8;
    }
  }

  h2 {
    font-size: 3rem;
    text-decoration: underline;
    line-height: 1.5;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-family: "Courier New", monospace;
  }

  span {
    font-family: "Courier New", monospace;
  }
`;
