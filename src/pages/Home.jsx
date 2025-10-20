import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Main>
        <InnerBox>
          <Title>Portfolio</Title>
          <Titles>{/* <h4>Something</h4> */}</Titles>
        </InnerBox>
      </Main>
    </>
  );
}

const Title = styled.h1`
  /* width: 100%; */
  width: 100vw;
  /* font-size: 100vw; */
  font-size: 17.4vmax;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.2rem;
  text-transform: uppercase;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-family: inter, sans-serif;

  line-height: 0.9;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
  padding: 5rem 1rem 0 1rem;
  background-color: ${({ theme }) => theme.primary};

  /* h1 {
    font-size: 10vmax;
    font-family: Arial, Helvetica, sans-serif;
  } */
`;

const InnerBox = styled.div`
  width: 100vw;
  height: 80vh;
  border-radius: 1px;
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
