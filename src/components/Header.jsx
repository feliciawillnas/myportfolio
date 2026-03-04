import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import styled from "styled-components";

export default function Header({ currentPath, toggleTheme, isDarkMode }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "home", path: "/" },
    { id: "contact", label: "contact", path: "/contact" },
    { id: "works", label: "works", path: "/works" },
  ];

  return (
    <>
      <HeaderWrapper>
        <MobileFlexedNav>
          <HamburgerToggle onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </HamburgerToggle>
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
              <Icon>
                <IoStarSharp />
              </Icon>
              <DarkmodeToggle onClick={toggleTheme}>
                <p>Dark mode{isDarkMode ? " on " : " off"}</p>
              </DarkmodeToggle>
            </ul>
          </Nav>
        </MobileFlexedNav>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 1rem;
  z-index: 999;

  color: white;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    padding: 0.7rem;
  }
`;

const MobileFlexedNav = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    height: fit-content;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      display: ${({ open }) => (open ? "flex" : "none")};
      flex-direction: column;
      align-items: flex-start;
      gap: 0.1rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    color: white;
    mix-blend-mode: difference;
    gap: 0.2rem;
  }
`;

// Not visible unless on mobile
const HamburgerToggle = styled.p`
  display: none;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Icon = styled.svg`
  font-size: 1.5rem;

  // Utan dessa orsakar svg att height och width blir större än fit content
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DarkmodeToggle = styled.div`
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;
