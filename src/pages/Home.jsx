import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Main>
        <PageTitle>
          <h1>
            Hi, welcome to my portfolio. My name is Felicia Willnäs and I'm a
            front end developer based in Gothenburg.
          </h1>
        </PageTitle>
      </Main>
    </>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const PageTitle = styled.div`
  text-align: justify;
  padding: 0 33rem;
  line-height: 1.3;

  h1 {
    margin-top: 5rem;
    padding: 1rem;
  }
`;
