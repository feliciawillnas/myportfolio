import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import styled from "styled-components";
import CurrentDate from "./CurrentDate";

export default function Header({ currentPath, toggleTheme, isDarkMode }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "home", path: "/" },
    { id: "contact", label: "contact", path: "/contact" },
    // { id: "about", label: "about", path: "/about" },
    { id: "works", label: "works", path: "/works" },
  ];

  return (
    <>
      <NavWrapper>
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
        {/* Fixa så den försvinner på mobil */}
      </NavWrapper>
      <FunctionsWrapper>
        <div>
          <CurrentDate />
          <DarkmodeToggle onClick={toggleTheme}>
            <p>darkMode:{isDarkMode ? " on " : " off"}</p>
          </DarkmodeToggle>
          <ExtramodeToggle>
            <p>
              <IoStarSharp />
            </p>
          </ExtramodeToggle>
        </div>
      </FunctionsWrapper>
    </>
  );
}

const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  z-index: 999;
  mix-blend-mode: difference;

  @media (max-width: 768px) {
    padding: 0.7rem;
    // Ta bort på mobil
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
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

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
  }

  a {
    display: block;
    color: white;

    // Funkar inte, måste fixa
    /* :hover {
      mix-blend-mode: normal;
    } */
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

const FunctionsWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 15px;
  right: 15px;
  /* Not working entirely */
  color: ${({ theme }) => theme.text};
  mix-blend-mode: difference;

  div {
    display: flex;
    gap: 0.1rem;
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DarkmodeToggle = styled.div`
  cursor: pointer;
  border: none;
  height: fit-content;
  width: 100%;
`;

const ExtramodeToggle = styled.div`
  cursor: pointer;
  border: none;
  height: fit-content;
  width: 100%;
`;
