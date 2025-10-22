import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Main>
        <Title>Portfolio</Title>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 1rem 0 1rem;
`;

const Title = styled.h1`
  width: 100vw;
  font-size: 17.4vmax;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.2rem;
  text-transform: uppercase;
  font-family: inter, sans-serif;
  line-height: 0.9;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
