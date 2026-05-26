import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Main>
        <PageTitle>
          <h2>
            Hi, welcome to my portfolio. My name is Felicia Willnäs and I'm a
            front end developer based in Gothenburg.
          </h2>
        </PageTitle>
      </Main>
    </>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const PageTitle = styled.div`
  text-align: justify;
  width: 28%;
  line-height: 1.3;
  /* filter: url(#wonky); */

  h2 {
    margin-top: 5rem;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
