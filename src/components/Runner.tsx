type RunnerProps = {
  color: string;
  className?: string;
};

/**
 * A simple running figure. Limbs are nested <g> groups so the hip/shoulder
 * and knee/elbow can each rotate around their own joint:
 *   .leg-a / .leg-b   -> thigh, pivots at the hip
 *   .shin             -> pivots at the knee (inside its thigh)
 *   .arm-a / .arm-b   -> upper arm, pivots at the shoulder
 *   .forearm          -> pivots at the elbow
 * The whole figure bobs via .body.
 */
const Runner = ({ color, className = "" }: RunnerProps) => (
  <svg
    viewBox="0 0 80 120"
    className={className}
    fill="none"
    stroke={color}
    strokeWidth={7}
    strokeLinecap="round"
    strokeLinejoin="round"
    overflow="visible"
    aria-hidden="true"
  >
    <g className="body">
      {/* back arm */}
      <g className="arm-b" style={{ transformOrigin: "44px 34px" }} opacity={0.55}>
        <line x1="44" y1="34" x2="44" y2="54" />
        <g className="forearm" style={{ transformOrigin: "44px 54px", transform: "rotate(-80deg)" }}>
          <line x1="44" y1="54" x2="44" y2="70" />
        </g>
      </g>
      {/* back leg */}
      <g className="leg-b" style={{ transformOrigin: "40px 66px" }} opacity={0.55}>
        <line x1="40" y1="66" x2="40" y2="88" />
        <g className="shin" style={{ transformOrigin: "40px 88px" }}>
          <line x1="40" y1="88" x2="40" y2="110" />
        </g>
      </g>
      {/* head + torso, leaning forward */}
      <circle cx="48" cy="16" r="9" fill={color} stroke="none" />
      <line x1="45" y1="30" x2="40" y2="66" />
      {/* front leg */}
      <g className="leg-a" style={{ transformOrigin: "40px 66px" }}>
        <line x1="40" y1="66" x2="40" y2="88" />
        <g className="shin" style={{ transformOrigin: "40px 88px" }}>
          <line x1="40" y1="88" x2="40" y2="110" />
        </g>
      </g>
      {/* front arm */}
      <g className="arm-a" style={{ transformOrigin: "44px 34px" }}>
        <line x1="44" y1="34" x2="44" y2="54" />
        <g className="forearm" style={{ transformOrigin: "44px 54px", transform: "rotate(-80deg)" }}>
          <line x1="44" y1="54" x2="44" y2="70" />
        </g>
      </g>
    </g>
  </svg>
);

export default Runner;
