import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import styled from "styled-components";

export default function Categories() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Main>
      <CategoryHeader onClick={toggleDiv}>
        <div>
          <h4>Filter by category</h4>
          <BiChevronDown />
        </div>
      </CategoryHeader>
      {isVisible && (
        <CategoryItems>
          <ul>
            <li>
              <h4>[ ] Category</h4>
            </li>
            <li>
              <h4>[ ] Category</h4>
            </li>
            <li>
              <h4>[ ] Category</h4>
            </li>
          </ul>
        </CategoryItems>
      )}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryHeader = styled.div`
  display: block;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;

const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
`;
