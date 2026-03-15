export default function SvgFilters() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="distressed-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="100"
            />
            <feDisplacementMap in="SourceGraphic" scale="5" />
          </filter>

          <filter id="wonky">
            <feTurbulence
              baseFrequency="0.01 0.001"
              numOctaves="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="R"
            />
          </filter>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 18 -10
              "
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
