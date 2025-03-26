import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <div>
      <Test>
        <h1>About</h1>
        <p>This is the About page.</p>
      </Test>
    </div>
  );
}

const Test = styled.main`
  margin-top: 100px;
`;
