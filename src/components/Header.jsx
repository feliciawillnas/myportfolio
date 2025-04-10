import React, { useState } from "react";
import styled from "styled-components";

export default function Header({ currentPath }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "home", path: "/" },
    { id: "contact", label: "contact", path: "/contact" },
    // { id: "about", label: "about", path: "/about" },
    { id: "works", label: "works", path: "/works" },
  ];

  return (
    <Main>
      <MobileFlexedNav>
        <HamburgerMenu onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </HamburgerMenu>
        <Nav open={open}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  key={item.id}
                  to={item.path}
                  className={currentPath === item.path ? "active" : ""}
                  href={item.path}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Nav>
      </MobileFlexedNav>
    </Main>
  );
}

const Main = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 0.7rem;
  }
`;

const MobileFlexedNav = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  width: 100%;

  ul {
    display: flex;
    /* flex-direction: row; */
    flex-direction: column;
    gap: 0.1rem;
    /* gap: 3rem; */

    @media (max-width: 768px) {
      display: ${({ open }) => (open ? "flex" : "none")};
      flex-direction: column;
      gap: 0.1rem;
    }
  }

  li {
    display: block;

    :hover {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
    }

    .active {
      /* text-decoration: underline; */
      /* text-underline-offset: 0.1rem; */
      /* text-decoration-thickness: 1.2px; */
    }
  }

  a {
    display: block;
  }
`;

const HamburgerMenu = styled.p`
  display: none;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
