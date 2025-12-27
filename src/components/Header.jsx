import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import styled from "styled-components";
import CurrentDate from "./CurrentDate";

export default function Header({
  currentPath,
  toggleTheme,
  isDarkMode,
  toggleExtraMode,
  isExtraMode,
}) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "home", path: "/" },
    { id: "contact", label: "contact", path: "/contact" },
    // { id: "about", label: "about", path: "/about" },
    { id: "works", label: "works", path: "/works" },
  ];

  return (
    <>
      <HeaderWrapper>
        {/* Left side */}
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
        {/* Right side */}
        <FunctionsWrapper>
          <div>
            <CurrentDate />
            <DarkmodeToggle onClick={toggleTheme}>
              <p>darkMode:{isDarkMode ? " on " : " off"}</p>
            </DarkmodeToggle>
            <ExtramodeToggle>
              <p>
                <IoStarSharp
                  onClick={toggleExtraMode}
                  color={isExtraMode ? "#FFD700" : "white"}
                  style={{ transition: "color 0.3s ease" }}
                />
              </p>
            </ExtramodeToggle>
          </div>
        </FunctionsWrapper>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 1rem;
  z-index: 999;
  // Must be white for mix-blend-mode to work
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

// Left side
const Nav = styled.nav`
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
    mix-blend-mode: difference;
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

// Right side
const FunctionsWrapper = styled.div`
  // Göra något mer dynamiskt
  width: 210px;

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
