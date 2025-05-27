import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <InnerBox>
        {/* <InformationBox> */}
        <Grid>
          <Titles>
            <h1>Portfolio</h1>
            <h4>Something</h4>
          </Titles>
          <Information>
            <h4>Felicia Will</h4>
            <h4>Front end developer</h4>
          </Information>
        </Grid>
        {/* <PortfolioLogo>portfolio</PortfolioLogo> */}
        {/* </InformationBox> */}
      </InnerBox>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5rem 1rem 0 1rem;
  background-color: ${({ theme }) => theme.primary};
`;

const InnerBox = styled.div`
  width: 100%;
  height: 80vh;
  border-radius: 1px;
  /* background-color: ${({ theme }) => theme.secondary}; */
  background-color: ${({ theme }) => theme.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  color: white;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
  text-transform: uppercase;

  h2 {
    font-size: 5rem;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
  text-transform: uppercase;
`;
