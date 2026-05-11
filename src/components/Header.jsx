import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import styled from "styled-components";

export default function Header({ currentPath, toggleTheme, isDarkMode }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "home", type: "link", path: "/" },
    { id: "contact", label: "contact", type: "link", path: "/contact" },
    { id: "star", type: "icon", path: "/" },
    { id: "works", label: "works", type: "link", path: "/works" },
    { id: "darkmode", type: "theme" },
  ];

  return (
    <>
      <HeaderWrapper>
        <MobileFlexedNav>
          <HamburgerToggle onClick={() => setOpen(!open)}>
            <p>{open ? "Close" : "Menu"}</p>
          </HamburgerToggle>
          <Nav open={open}>
            <ul>
              {navItems.map((item) => {
                // Might merge icon & theme if statement
                if (item.type === "icon") {
                  return (
                    <li key={item.id} className="hideOnMobile">
                      <Icon href={item.path}>
                        <IoStarSharp />
                      </Icon>
                    </li>
                  );
                }
                if (item.type === "theme") {
                  return (
                    <li key={item.id} className="hideOnMobile">
                      <DarkmodeToggle onClick={toggleTheme}>
                        <p>Dark mode {isDarkMode ? "on" : "off"}</p>
                      </DarkmodeToggle>
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className={currentPath === item.path ? "active" : ""}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
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
  font-size: 15px;
  text-transform: uppercase;
  mix-blend-mode: difference;
  color: white;

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 14px;
  }
`;

const MobileFlexedNav = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    // for menu staying in right corner
    flex-direction: row-reverse;
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

    .hideOnMobile {
      @media (max-width: 768px) {
        display: none;
      }
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

const Icon = styled.a`
  font-size: 1.5rem;
`;

const DarkmodeToggle = styled.div`
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;
