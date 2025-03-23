import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Main>
      <HamburgerIcon onClick={() => setOpen(!open)} />
      <Nav open={open}>
        <ul>
          <li>
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a href="/resume" onClick={() => setOpen(false)}>
              Resume
            </a>
          </li>
          <li>
            <a href="/works" onClick={() => setOpen(false)}>
              Works
            </a>
          </li>
        </ul>
      </Nav>
    </Main>
  );
}

const Main = styled.header`
  position: absolute;
  top: 0;
  padding: 3rem;
  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.04rem;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 3rem;

    @media (max-width: 768px) {
      display: ${({ open }) => (open ? "flex" : "none")};
      flex-direction: column;
      margin-top: 2rem;
    }
  }

  a {
    color: #000;
  }
`;

const HamburgerIcon = styled(GiHamburgerMenu)`
  display: none;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
