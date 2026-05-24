import styled from "styled-components";

export default function Footer() {
  return (
    <Main>
      <ul>
        <li>
          <a
            href="https://github.com/feliciawillnas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/feliciawillnas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>feliciawillnas.portfolio@gmail.com</li>
      </ul>
    </Main>
  );
}

const Main = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0.5rem;

  // Font styling
  color: white;
  mix-blend-mode: difference;
  text-transform: uppercase;
  font-size: 13px;
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  letter-spacing: 0.04rem;

  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  li {
    cursor: pointer;
  }

  a {
    color: white;
  }
`;
