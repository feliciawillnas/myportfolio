export default function SvgFilters() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="distressed-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="30"
            />
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>

          <filter id="wonky">
            <feTurbulence
              baseFrequency="0.01 0.001"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="R"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
