import { motion } from "framer-motion";
import styled from "styled-components";

export default function WorksLayoutE({ project }) {
  return (
    <Main>
      <Header>
        <motion.img
          src={project.thumbnailFirst}
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          alt={project.title}
        />
        <motion.img
          src={project.thumbnailSecond}
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          alt={project.title}
        />
        <motion.img
          src={project.image}
          initial={{ filter: "blur(80px)" }}
          whileInView={{ filter: "none", delay: 0.1 }}
          alt={project.title}
        />
      </Header>
      <Gallery>
        {project.gallery.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            initial={{ filter: "blur(80px)" }}
            whileInView={{ filter: "none", delay: 0.1 }}
            alt={project.title}
          />
        ))}
      </Gallery>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  img {
    width: 100%;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
