import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

export default function Header({ currentPath }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Main>
      <MobileFlexedNav>
        <HamburgerMenu onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </HamburgerMenu>
        <Nav open={open}>
          <ul>
            <li className={currentPath === "/" ? "active" : ""}>
              <a href="/">Home</a>
            </li>
            <li className={currentPath === "/contact" ? "active" : ""}>
              <a href="/contact">Contact</a>
            </li>
            <li className={currentPath === "/about" ? "active" : ""}>
              <a href="/about">About</a>
            </li>
            <li className={currentPath === "/works" ? "active" : ""}>
              <a href="/works">Works</a>
            </li>
          </ul>
        </Nav>
      </MobileFlexedNav>
    </Main>
  );
}

const Main = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 3rem;
  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.04rem;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

const MobileFlexedNav = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 3rem;

    @media (max-width: 768px) {
      display: ${({ open }) => (open ? "flex" : "none")};
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  li {
    :hover {
      cursor: pointer;
      background-color: #000;
      color: white;
    }

    &.active {
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

const HamburgerMenu = styled.span`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
