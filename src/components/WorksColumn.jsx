import styled from "styled-components";

export default function WorksColumn() {
  return (
    <WorksWrapper>
      <Project>
        <ImageRow>
          <img src="/assets/tomyam.jpg" alt="" />
          <img src="/assets/thumbnail1.png" alt="" />
        </ImageRow>
        <FlexBetween>
          <p>Tjabba Thai</p>
          <p>Web design</p>
        </FlexBetween>
      </Project>

      <Project>
        <img src="/assets/wallpaper.png" alt="" />
        <FlexBetween>
          <p>Web Museum</p>
          <p>Front End</p>
        </FlexBetween>
      </Project>
    </WorksWrapper>
  );
}

const WorksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 5rem;
  padding: 2rem;
`;

const Project = styled.div`
  text-transform: uppercase;

  img {
    height: 320px;
    width: auto;
    display: block;
  }
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
