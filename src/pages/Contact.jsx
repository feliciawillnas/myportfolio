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

  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 3rem;
    text-decoration: underline;
  }

  h4 {
    /* font-family: "Source Code Pro", monospace; */
    font-family: "Courier New", monospace;
  }

  span {
    /* xfont-family: "Source Code Pro", monospace; */
    font-family: "Courier New", monospace;
  }
`;
