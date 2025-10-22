import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PixelImage = ({ src }) => {
  // References to the image, canvas, and container elements
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // State to track if the image is loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  // Effect hook that runs once the component is mounted and when the image is loaded
  useEffect(() => {
    const image = imgRef.current; // The actual image element
    const canvas = canvasRef.current; // The canvas element for rendering pixelation
    const ctx = canvas.getContext("2d"); // The 2D context of the canvas
    const pixelRatio = window.devicePixelRatio || 1; // Account for device pixel density (Retina displays)

    // Variable to control the level of pixelation
    let percent = 0.01;

    // Function to draw the scaled image on the canvas
    const scaleCanvas = (percent) => {
      // The actual size of the image considering device pixel ratio
      const fullWidth = image.naturalWidth * pixelRatio;
      const fullHeight = image.naturalHeight * pixelRatio;

      // Calculate scaled dimensions for pixelation effect
      const scaledWidth = fullWidth * percent;
      const scaledHeight = fullHeight * percent;

      // Prevent error:
      // The image argument is a canvas element with a width or height of 0
      if (scaledWidth === 0 || scaledHeight === 0) return;

      // Clear the canvas and then draw the image with pixelation
      ctx.clearRect(0, 0, fullWidth, fullHeight); // Clear any previous content
      ctx.imageSmoothingEnabled = false; // Disable image smoothing for pixelation

      // Draw the image at the scaled resolution (this causes the pixelation effect)
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Fix error: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': The image argument is a canvas element with a width or height of 0.
      ctx.drawImage(image, 0, 0, scaledWidth, scaledHeight);
      //   console.log("scaledWidth: ", scaledWidth, "scaledHeight: ", scaledHeight);

      // Draw the previous canvas on top to create the progressive reveal effect
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

    // Function to progressively reveal the image (increase pixelation)
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // This function is called repeatedly using requestAnimationFrame
    // Error: [Violation] 'requestAnimationFrame' handler took <N>ms
    const reveal = () => {
      // Increase the percent until it reaches 1 (fully revealed)
      percent = Math.min(percent + (percent < 0.1 ? 0.005 : 0.5), 1);

      // Redraw the canvas with the new pixelation level
      scaleCanvas(percent);

      // If the image is not fully revealed, keep calling `reveal` using `requestAnimationFrame`
      if (percent < 1) requestAnimationFrame(reveal);
    };

    // Function to start the animation once the image has loaded and is in view
    const startAnimation = () => {
      const fullWidth = image.naturalWidth; // Original width of the image
      const fullHeight = image.naturalHeight; // Original height of the image

      // Set the canvas dimensions to match the image size (taking device pixel ratio into account)
      canvas.width = fullWidth * pixelRatio;
      canvas.height = fullHeight * pixelRatio;

      // Redundant?
      //   canvas.style.width = "100%";
      //   canvas.style.height = "auto";

      // Initially draw the pixelated version of the image
      scaleCanvas(percent);

      // Begin the reveal animation
      reveal();
    };

    // Intersection Observer to start the animation when the canvas comes into view
    // Intersection Observer = detect when the canvas is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation(); // Start animation if the canvas is in the viewport
        }
      },
      { rootMargin: "0px", threshold: 0.1 } // Trigger when 10% of the canvas is in view
    );

    // Observe the canvas element
    if (canvas) {
      observer.observe(canvas);
    }

    // Clean up observer when the component is unmounted or updated
    return () => observer.disconnect();
  }, [imageLoaded]); // Only run this effect when the image is loaded

  return (
    <Container ref={containerRef}>
      {/* Image element (hidden, used only to load the image and get its natural size) */}
      <StyledImg
        ref={imgRef}
        src={src}
        alt="pixelated"
        onLoad={() => setImageLoaded(true)} // Set state to true once the image is loaded
      />
      {/* Canvas where the pixelated-to-clear animation happens */}
      <Canvas ref={canvasRef} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

// Hidden, only used to load the image
const StyledImg = styled.img`
  display: none;
`;

// Canvas where the pixelated image will be drawn
const Canvas = styled.canvas`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`;

export default PixelImage;
