import { useEffect, useState } from "react";
import styled from "styled-components";
import { Cursor } from "../components/Cursor";
import { useCursor } from "../hooks/useCursor";

export default function Contact({ starRef, onCursorActive }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [mouseOnPage, setMouseOnPage] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFooterHovered, setIsFooterHovered] = useState(false);

  const cursorActive = mouseOnPage && !isHeaderHovered && !isFooterHovered;

  useEffect(() => {
    const header = document.querySelector("header");
    const onMouseMove = (e) => {
      setMouseOnPage(true);

      if (!header) return;
      const headerRect = header.getBoundingClientRect();
      setIsHeaderHovered(
        e.clientX >= headerRect.left &&
          e.clientX <= headerRect.right &&
          e.clientY >= headerRect.top &&
          e.clientY <= headerRect.bottom,
      );

      const footer = document.querySelector("footer");
      if (!footer) return;
      const footerRect = footer.getBoundingClientRect();
      setIsFooterHovered(
        e.clientX >= footerRect.left &&
          e.clientX <= footerRect.right &&
          e.clientY >= footerRect.top &&
          e.clientY <= footerRect.bottom,
      );
    };

    const onLeave = () => setMouseOnPage(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Notify App of cursorActive state
  useEffect(() => {
    onCursorActive(cursorActive);
  }, [cursorActive]);

  // Reset when leaving contact page
  useEffect(() => {
    return () => onCursorActive(false);
  }, []);

  // Detect if the user is on a desktop device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const { variants, cursorVariant, textEnter, textLeave } = useCursor(
    starRef,
    cursorActive,
  );

  const links = [
    { href: "https://linkedin.com/in/feliciawillnas/", label: "LinkedIn" },
    { href: "https://github.com/feliciawillnas", label: "GitHub" },
    { href: "/resume.pdf", label: "Resume" },
    { href: "mailto:feliciawillnas.portfolio@gmail.com", label: "Email" },
  ];

  return (
    <Main $isDesktop={isDesktop}>
      {isDesktop && (
        <Cursor
          variants={variants}
          cursorVariant={cursorVariant}
          hidden={isHeaderHovered}
          starRef={starRef}
          cursorActive={cursorActive}
        />
      )}

      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <LinkStyling>
                <h2>{link.label}</h2>
              </LinkStyling>
            </a>
          </li>
        ))}
      </ul>
    </Main>
  );
}

const Main = styled.main`
  cursor: ${({ $isDesktop }) => ($isDesktop ? "none" : "auto")};
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 3rem 1rem;
    list-style: none;
    padding: 0;

    li:nth-child(1) {
      grid-column: 2;
    }

    li:nth-child(2) {
      grid-column: 1;
      margin-right: -3rem;
    }

    li:nth-child(3) {
      grid-column: 3;
      margin-left: -3rem;
    }

    li:nth-child(4) {
      grid-column: 2;
    }

    @media (max-width: 768px) {
      display: block;
      li:nth-child(2) {
        margin-right: 0rem;
      }
      li:nth-child(3) {
        margin-left: 0rem;
      }
    }
  }

  li {
    display: block;
    width: fit-content;
  }
`;

const LinkStyling = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* filter: url(#wonky); */

  transition: transform 0.2s;
  transform-origin: left center;

  svg {
    font-size: 45px;
  }

  &:hover {
    transform: scale(1.1);
    // For the custom cursor
    cursor: none;
  }
`;
