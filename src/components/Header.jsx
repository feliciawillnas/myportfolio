import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

export default function Header({ currentPath }) {
  const [open, setOpen] = useState(false);

  // const menuVariants = {
  //   hidden: { x: "100%" },
  //   visible: {
  //     x: 0,
  //     transition: { staggerChildren: 0.2, when: "beforeChildren" },
  //   },
  // };

  // const linkVariants = {
  //   hidden: { x: 50, opacity: 0 },
  //   visible: { x: 0, opacity: 1 },
  // };

  const navItems = [
    { id: "home", label: "home", path: "/" },
    { id: "contact", label: "contact", path: "/contact" },
    { id: "about", label: "about", path: "/about" },
    { id: "works", label: "works", path: "/works" },
  ];

  return (
    <Main>
      <MobileFlexedNav>
        <HamburgerMenu onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </HamburgerMenu>
        <Nav
          open={open}
          // as={motion.nav}
          // initial="hidden"
          // animate="visible"
          // exit="hidden"
          // variants={menuVariants}
        >
          <ul>
            {navItems.map((item) => (
              <motion.li
              // variants={linkVariants}
              >
                <a
                  key={item.id}
                  to={item.path}
                  className={currentPath === item.path ? "active" : ""}
                  href={item.path}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
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

  @media (max-width: 768px) {
    padding: 1.1rem;
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
    gap: 3rem;

    @media (max-width: 768px) {
      display: ${({ open }) => (open ? "flex" : "none")};
      flex-direction: column;
      gap: 0rem;
    }
  }

  li {
    @media (max-width: 768px) {
      :hover {
        background-color: #000;
        color: white;
      }
    }
  }
  // Inte nödvändig
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
