import styled from "styled-components";
import WorksColumn from "../components/WorksColumn";

export default function Home() {
  return (
    <>
      <Main>
        <PageTitle>Portfolio</PageTitle>
        {/* Business card section */}
        <BusinessCardWrapper>
          <BusinessCard>
            <RoleTitle>Front end developer</RoleTitle>
            <NameTitleWrapper>
              <p>Felicia</p>
              <p>Willnäs</p>
            </NameTitleWrapper>
            {/* Links */}
            <Links>
              <li>
                <h5>Github</h5>
                <a
                  href="https://github.com/feliciawillnas"
                  data-text="https://github.com/feliciawillnas"
                >
                  https://github.com/feliciawillnas
                </a>
              </li>
              <li>
                <h5>Linkedin</h5>
                <a
                  href="https://www.linkedin.com/in/feliciawillnas/"
                  data-text="https://www.linkedin.com/in/feliciawillnas/"
                >
                  https://www.linkedin.com/in/feliciawillnas/
                </a>
              </li>
              <li>
                <h5>Mail</h5>
                <a
                  href="mailto:felicia.willnas@gmail.com"
                  data-text="felicia.willnas@gmail.com"
                >
                  felicia.willnas@gmail.com
                </a>
              </li>
            </Links>
          </BusinessCard>
        </BusinessCardWrapper>
        <WorksColumn />
      </Main>
    </>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Portfolio title
const PageTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem 1rem 0 1rem;
  width: 100vw;
  font-size: 17.4vmax;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.2rem;
  text-transform: uppercase;
  font-family: inter, sans-serif;
  line-height: 0.9;
  /* filter: url(#distressed-noise); */
  filter: url(#goo);

  // Not working
  @media (max-width: 768px) {
    overflow-wrap: break-word;
  }
`;

const BusinessCardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BusinessCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RoleTitle = styled.h3`
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 100;
  margin-bottom: 1rem;
`;

const NameTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;

  /* Individual names */
  p {
    font-family: "Miss Fajardose";
    font-size: 60px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  h5 {
    font-family: "Source Code Pro", monospace;
    letter-spacing: 0.04rem;
    font-weight: 400;
    font-size: 15px;
    text-transform: uppercase;
  }

  a {
    font-size: 15px;
    text-transform: lowercase;
    filter: url(#wonky);
  }

  a:hover {
    /* add some filter */
    /* filter: url(); */
  }
`;
