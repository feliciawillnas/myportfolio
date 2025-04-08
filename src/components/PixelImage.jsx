import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const PixelImage = ({ src, width, height }) => {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let percent = 0.01;

    const scaleCanvas = (percent) => {
      const pixelRatio = window.devicePixelRatio || 1;
      const fullWidth = width * pixelRatio;
      const fullHeight = height * pixelRatio;

      const scaledWidth = fullWidth * percent;
      const scaledHeight = fullHeight * percent;

      ctx.clearRect(0, 0, fullWidth, fullHeight);
      ctx.imageSmoothingEnabled = false;

      ctx.drawImage(image, 0, 0, scaledWidth, scaledHeight);
      ctx.drawImage(
        canvas,
        0,
        0,
        scaledWidth,
        scaledHeight,
        0,
        0,
        fullWidth,
        fullHeight
      );
    };

    const reveal = () => {
      // Adjust "animation" speed
      percent = Math.min(percent + (percent < 0.1 ? 0.005 : 0.5), 1);
      scaleCanvas(percent);
      if (percent < 1) requestAnimationFrame(reveal);
    };

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    scaleCanvas(percent);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      // 1.0 = 100% of image needs to be in viewport for the animation to trigger
      // 0.1 = 10% of image needs to be in viewport for the animation to trigger
      { rootMargin: "0px", threshold: 0.1 }
    );

    observer.observe(canvas);

    return () => observer.disconnect();
  }, [width, height]);

  return (
    <Container style={{ width, height }}>
      <StyledImg ref={imgRef} src={src} alt="pixelated image" />
      <Canvas ref={canvasRef} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const StyledImg = styled.img`
  display: none;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
`;

export default PixelImage;
