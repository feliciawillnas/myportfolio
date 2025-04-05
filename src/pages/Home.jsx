import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <InnerBox>
        <InformationBox>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et
            tempora corrupti reprehenderit totam iure ab vero facilis, in
            temporibus, minus adipisci dicta laborum quam hic doloribus ipsam
            fuga quis.
          </h1>
        </InformationBox>
      </InnerBox>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  padding: 0.6rem;
  background-color: ${({ theme }) => theme.secondary};
`;

const InnerBox = styled.div`
  height: 100%;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.primary};
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;
