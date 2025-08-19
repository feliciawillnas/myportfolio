import { RiExternalLinkFill } from "react-icons/ri";
import styled from "styled-components";
import { Cursor } from "../components/Cursor";
import { useCursor } from "../hooks/useCursor";

export default function Contact() {
  const { variants, cursorVariant, textEnter, textLeave } = useCursor();

  const links = [
    {
      href: "https://linkedin.com/in/feliciawillnas/",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/feliciawillnas",
      label: "GitHub",
    },
    {
      href: "/",
      label: "Resume",
    },
  ];

  return (
    <Main>
      <Cursor variants={variants} cursorVariant={cursorVariant} />
      <Content>
        <h2 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          feliciamail@mail.com
        </h2>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <LinkStyling onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  <h2>{link.label}</h2>
                  <RiExternalLinkFill />
                </LinkStyling>
              </a>
            </li>
          ))}
        </ul>
      </Content>
    </Main>
  );
}

const Main = styled.main`
  cursor: none;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 3rem;

  a {
    text-transform: lowercase;

    &:hover {
      text-decoration: uppercase;
    }
  }

  /* h2 {
    overflow-wrap: break-word;
    width: fit-content;
  } */
`;

const LinkStyling = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 45px;
  }
`;
