import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Main>
      <Test>
        {/* <HamburgerIcon onClick={() => setOpen(!open)} /> */}
        <HamburgerMenu onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </HamburgerMenu>
        <Nav open={open}>
          <ul>
            <li className="hover-underline-animation left">
              <a href="/" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li className="hover-underline-animation left">
              <a href="/contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>
            <li className="hover-underline-animation left">
              <a href="/about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>
            <li className="hover-underline-animation left">
              <a href="/works" onClick={() => setOpen(false)}>
                Works
              </a>
            </li>
          </ul>
        </Nav>
      </Test>
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
  width: 100%;
`;

const Test = styled.div`
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
      /* margin-top: 2rem; */
    }
  }

  li {
    :hover {
      cursor: pointer;
      background-color: #000;
      color: white;
    }
  }

  /* .hover-underline-animation {
    display: inline-block;
    position: relative;
  }

  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: -2px;
    left: 0;
    background-color: black;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
  }

  .hover-underline-animation.left::after {
    transform-origin: bottom right;
  }

  .hover-underline-animation.left:hover::after {
    transform-origin: bottom left;
  } */

  a {
    color: #000;
  }
`;

// const HamburgerIcon = styled(GiHamburgerMenu)`
//   display: none;
//   font-size: 1rem;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

const HamburgerMenu = styled.span`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
