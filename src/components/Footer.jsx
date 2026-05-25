import { useState } from "react";
import { IoCheckmark, IoCopyOutline } from "react-icons/io5";
import styled from "styled-components";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("feliciawillnas.portfolio@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Main>
      <ul>
        <EmailItem onClick={handleCopy} $copied={copied}>
          feliciawillnas.portfolio@gmail.com
          {copied ? <IoCheckmark /> : <IoCopyOutline />}
        </EmailItem>
        <li>
          <a
            href="https://github.com/feliciawillnas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/feliciawillnas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </Main>
  );
}

const Main = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;

  // Font styling
  color: white;
  mix-blend-mode: difference;
  text-transform: uppercase;
  font-size: 13px;
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  letter-spacing: 0.04rem;
  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  a {
    color: white;
  }
`;

const EmailItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: copy;

  &:hover {
    cursor: pointer;
  }
`;
