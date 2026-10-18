import type { CSSProperties, ReactNode } from "react";

const INK = "#202a25";
const PAPER = "#fdfdf9";
const HAND = "Caveat, 'Comic Sans MS', cursive";

/** Deterministic wobbly rectangle path (hand-drawn feel, no randomness). */
function doodleRect(x: number, y: number, w: number, h: number, wobble = 1.2) {
  const m = wobble;
  return [
    `M${x + m} ${y}`,
    `Q${x + w / 2} ${y - m} ${x + w - m} ${y + m * 0.6}`,
    `Q${x + w} ${y + h / 2} ${x + w - m * 0.7} ${y + h - m}`,
    `Q${x + w / 2} ${y + h + m} ${x + m * 0.8} ${y + h}`,
    `Q${x} ${y + h / 2} ${x + m * 0.5} ${y + m}`,
    "Z",
  ].join(" ");
}

type Hair = "spiky" | "flat" | "part" | "cap" | "bald";
type MoverSpec = {
  id: "a" | "b1" | "b2" | "c1" | "c2" | "c3";
  /** x offset (px) while staged at the door */
  dx: number;
  /** x offset (px) while loading at the truck */
  tx: number;
  scale: number;
  hair: Hair;
  beard?: "full" | "mustache";
  /** symmetric fit anchor span (px) so scaling pivots at the feet */
  fitSpan: number;
  arm: "a" | "b" | "b2" | "c" | "c3";
  item?: ReactNode;
  itemClass?: string;
};

function MoverLeg({ back }: { back?: boolean }) {
  return (
    <g className={back ? "mv-leg mv-leg--b" : "mv-leg mv-leg--f"}>
      <path
        d={back ? "M-1.5 -25 C-3 -17 -2 -9 -2.5 -2" : "M1.5 -25 C3 -17 1 -9 2 -2"}
        stroke={INK}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={
          back
            ? "M-7 -4.5 Q-7 0 -1.5 0 L5 0 Q6.5 -1.5 3.5 -4.5 Z"
            : "M-3.5 -4.5 Q-3.5 0 2 0 L8.5 0 Q10 -1.5 7 -4.5 Z"
        }
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
    </g>
  );
}

function MoverArm({
  back,
  className,
  children,
}: {
  back?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const x = back ? -3.5 : 4.5;
  return (
    <g className={className ?? (back ? "mv-arm mv-arm--b" : "mv-arm mv-arm--f")}>
      <path
        d={`M${x} -51 Q${x + (back ? -1.5 : 1.5)} -43 ${x} -32`}
        stroke={INK}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={x} cy="-30.5" r="2.9" fill={PAPER} stroke={INK} strokeWidth="2.2" />
      {children}
    </g>
  );
}

function HairDoodle({ hair }: { hair: Hair }) {
  switch (hair) {
    case "spiky":
      return (
        <path
          d="M-4 -65.5 L-2 -70 L-0.5 -66.5 L1.5 -71.5 L3 -66.8 L5 -70.5 L6.5 -65.8"
          fill="none"
          stroke={INK}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case "flat":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.3" strokeLinecap="round">
          <path d="M-4.8 -66 Q-5.5 -69.5 -2.5 -69.5 L6 -69.5 Q8.3 -69.5 8 -66.2" />
          <path d="M1 -69.5 L1 -66.5" strokeWidth="1.5" />
        </g>
      );
    case "part":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.3" strokeLinecap="round">
          <path d="M-4.8 -64.5 Q-5.5 -70.5 1 -70.5 Q7.5 -70.5 8 -64" />
          <path d="M2.5 -70.5 L3.5 -66.5" strokeWidth="1.5" />
        </g>
      );
    case "cap":
      return (
        <g>
          <path
            d="M-4.9 -61.5 Q-5.5 -68.5 2.5 -68.5 Q10.5 -68.5 9.9 -61.5 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 -63.5 L14.5 -64.5 Q16 -64.5 15.7 -62.7 L7 -61.5 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="2.5" cy="-66" r="1.2" fill={PAPER} />
        </g>
      );
    case "bald":
      return (
        <path
          d="M-4.5 -63 Q-6 -66.5 -3.5 -68.5"
          fill="none"
          stroke={INK}
          strokeWidth="2"
          strokeLinecap="round"
        />
      );
  }
}

function MoverHead({ hair, beard }: { hair: Hair; beard?: "full" | "mustache" | undefined }) {
  return (
    <g className="mv-head">
      <rect x="0" y="-58" width="5.5" height="5" fill={PAPER} stroke={INK} strokeWidth="2" />
      <circle cx="2.5" cy="-60.5" r="7.4" fill={PAPER} stroke={INK} strokeWidth="3.2" />
      <circle className="mv-eye" cx="6.6" cy="-61.8" r="1.15" fill={INK} />
      <path
        d="M5.4 -64.6 L8.6 -65.2"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M5 -57.6 Q6.6 -56.4 8.2 -57.6"
        stroke={INK}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        className="mv-mouth"
        cx="6.8"
        cy="-56.9"
        r="1.6"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
      />
      <HairDoodle hair={hair} />
      {beard === "full" ? (
        <path
          d="M-2 -55 Q2.5 -50.5 8.8 -55.2 L8.2 -51.8 Q2.5 -47.8 -1.2 -51.5 Z"
          fill={INK}
          opacity="0.85"
        />
      ) : null}
      {beard === "mustache" ? (
        <path
          d="M3.6 -55.2 Q6.5 -53.6 9.4 -55.2"
          fill="none"
          stroke={INK}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      ) : null}
      <path
        className="mv-sweat"
        d="M10.5 -66 Q13 -63 10.5 -61 Q8 -63 10.5 -66 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Mover({ spec, foreman = false }: { spec: MoverSpec; foreman?: boolean }) {
  const vars = {
    "--dx": `${spec.dx}px`,
    "--tx": `${spec.tx}px`,
    "--s": spec.scale,
  } as CSSProperties;

  return (
    <g className={`mv ${foreman ? "mv-foreman" : `mv--${spec.id}`}`} style={vars}>
      <ellipse className="mv-shadow" cx="0" cy="2.5" rx="15" ry="3" fill={INK} opacity="0.12" />
      <g className="mv-flip">
        <g className="mv-wobble">
          <g className="mv-bob">
            <g className="mv-fit">
              <rect x={-spec.fitSpan} y="-78" width={spec.fitSpan * 2} height="78" fill="none" />
              <MoverLeg back />
              <MoverArm back />
              <g className="mv-torso-g">
                <path
                  d="M-9 -30 Q-10.5 -45 -7.5 -53.5 Q0 -57 7.5 -53.5 Q10.5 -45 9 -30 Q0 -27.5 -9 -30 Z"
                  fill={PAPER}
                  stroke={INK}
                  strokeWidth="3.2"
                  strokeLinejoin="round"
                />
                {foreman ? (
                  <g>
                    <path
                      d="M-9 -30 Q-10.5 -45 -7.5 -53.5 Q0 -57 7.5 -53.5 Q10.5 -45 9 -30 Q0 -27.5 -9 -30 Z"
                      fill="url(#mv-hatch-fine)"
                      opacity="0.5"
                    />
                    <path
                      d="M-1.5 -54 L-2.5 -30.5 M6.5 -54 L7.5 -30.5"
                      stroke={INK}
                      strokeWidth="1.4"
                      fill="none"
                    />
                  </g>
                ) : (
                  <text
                    x="0"
                    y="-37"
                    textAnchor="middle"
                    fontFamily={HAND}
                    fontSize="9"
                    fontWeight="700"
                    fill={INK}
                  >
                    SN
                  </text>
                )}
              </g>
              <MoverHead hair={spec.hair} beard={spec.beard} />
              {spec.item ? <g className={`mv-item ${spec.itemClass}`}>{spec.item}</g> : null}
              <MoverArm
                className={
                  foreman
                    ? "mv-arm mv-arm--f mv-arm--foreman"
                    : `mv-arm mv-arm--f mv-arm--${spec.arm}`
                }
              >
                {foreman ? (
                  <g className="mv-clipboard">
                    <rect
                      x="-2.3"
                      y="-45.3"
                      width="11"
                      height="15"
                      rx="1.5"
                      fill={PAPER}
                      stroke={INK}
                      strokeWidth="2"
                    />
                    <rect x="0.2" y="-47.3" width="6" height="3.5" rx="1" fill={INK} />
                    <path
                      d="M-0.5 -39 L6.5 -39 M-0.5 -35.5 L6.5 -35.5 M-0.5 -32 L3.5 -32"
                      stroke={INK}
                      strokeWidth="1.3"
                      fill="none"
                    />
                  </g>
                ) : null}
              </MoverArm>
              <MoverLeg />
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}

/** Medium cargo: a hand-drawn box, held at chest level. */
function ItemBox() {
  return (
    <g className="mv-rock mv-rock--box">
      <path
        d="M5 -51 Q19 -52.6 33 -51 Q34.6 -39 33.5 -27 Q19 -25.4 4.5 -27 Q3.4 -39 5 -51 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M5.5 -45 Q19 -43 33 -45" stroke={INK} strokeWidth="1.6" fill="none" />
      <path
        d="M18.5 -51.5 L18.5 -26 M21.5 -51.5 L21.5 -26"
        stroke={INK}
        strokeWidth="1.4"
        opacity="0.65"
        fill="none"
      />
      <path
        d="M10 -33.5 L10 -41 M7.8 -39 L10 -41.4 L12.2 -39 M21 -32.5 L21 -40 M18.8 -38 L21 -40.4 L23.2 -38"
        stroke={INK}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

/** Heavy cargo: an oversized crate for the coordinated 2-man lift. */
function ItemCrate() {
  return (
    <g className="mv-rock mv-rock--crate">
      <path
        d="M-7 -53 Q24 -54.6 55 -53 Q56.6 -37 55.5 -21 Q24 -19.4 -7.5 -21 Q-8.6 -37 -7 -53 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path
        d="M14 -53.5 L14 -20.5 M17.5 -53.5 L17.5 -20.5"
        stroke={INK}
        strokeWidth="1.5"
        opacity="0.6"
        fill="none"
      />
      <path
        d="M36 -53.5 L36 -20.5 M39.5 -53.5 L39.5 -20.5"
        stroke={INK}
        strokeWidth="1.5"
        opacity="0.6"
        fill="none"
      />
      <path
        d="M-7 -53 L-1.5 -47.5 M55 -53 L49.5 -47.5 M-7.5 -21 L-2 -26.5 M55.5 -21 L50 -26.5"
        stroke={INK}
        strokeWidth="1.8"
        fill="none"
      />
      <rect
        x="-2"
        y="-37"
        width="23"
        height="12"
        rx="1.5"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2"
      />
      <text
        x="9.5"
        y="-28"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="10"
        fontWeight="700"
        fill={INK}
      >
        HEAVY
      </text>
    </g>
  );
}

/** Elite cargo: a hand-drawn sofa paced in by the three-man crew. */
function ItemSofa() {
  return (
    <g>
      <path
        d="M-25 -45 Q26 -47.5 77 -45 Q79.5 -33 78 -21.5 Q26 -24 -26 -21.5 Q-28.5 -33 -25 -45 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M26 -46 L26 -22.5" stroke={INK} strokeWidth="1.8" fill="none" />
      <circle cx="0" cy="-33" r="1.2" fill={INK} />
      <circle cx="52" cy="-33" r="1.2" fill={INK} />
      <path
        d="M-26 -21.5 Q26 -19.5 78 -21.5 L77.5 -10.5 Q26 -13 -26.5 -10.5 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M-31 -38 Q-32.5 -41.5 -28 -41.5 L-20 -41.5 Q-16 -41.5 -17 -37.5 L-18 -10.5 Q-24.5 -8.5 -30.5 -11.5 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M67 -38 Q65.5 -41.5 70 -41.5 L78 -41.5 Q82 -41.5 81 -37.5 L80 -10.5 Q73.5 -8.5 67.5 -11.5 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M-18 -10.5 L-18 -6.5 M64 -10.5 L64 -6.5"
        stroke={INK}
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function House() {
  return (
    <g className="mv-house">
      <ellipse cx="170" cy="342.5" rx="115" ry="4.5" fill={INK} opacity="0.08" />
      {/* roof water tank — every Indian home has one */}
      <path
        d="M238 142 L238.5 118 Q249 115.5 260 118 L260.5 142"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M236 118 L262.5 118" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M252 142 L252 196" stroke={INK} strokeWidth="2.2" fill="none" />
      {/* walls */}
      <path
        d="M66 340 L67.5 258 Q67 228 68.5 197 L169 105.5 L271 196.5 Q271.5 262 272 340 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path d="M74 340 L74 262" stroke={INK} strokeWidth="1.4" opacity="0.3" fill="none" />
      {/* roof */}
      <path
        d="M48 197 L169 103 L290 197"
        fill="none"
        stroke={INK}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 191 L169 109 L283 191"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
        opacity="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 199 Q170 192 288 199"
        fill="none"
        stroke={INK}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* windows */}
      <g>
        <rect x="84" y="226" width="32" height="32" fill={PAPER} stroke={INK} strokeWidth="2.8" />
        <path d="M100 226 L100 258 M84 242 L116 242" stroke={INK} strokeWidth="2" fill="none" />
        <path d="M88 254 L96 230" stroke={INK} strokeWidth="1.3" opacity="0.4" fill="none" />
        <rect
          x="81"
          y="257"
          width="38"
          height="4"
          rx="1.5"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.8"
        />
      </g>
      <g>
        <rect x="196" y="226" width="32" height="32" fill={PAPER} stroke={INK} strokeWidth="2.8" />
        <path d="M212 226 L212 258 M196 242 L228 242" stroke={INK} strokeWidth="2" fill="none" />
        <path d="M200 254 L208 230" stroke={INK} strokeWidth="1.3" opacity="0.4" fill="none" />
        <rect
          x="193"
          y="257"
          width="38"
          height="4"
          rx="1.5"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.8"
        />
      </g>
      {/* open main door */}
      <rect x="128" y="262" width="52" height="78" fill={INK} opacity="0.88" />
      <rect x="146" y="318" width="22" height="22" fill="none" stroke={PAPER} strokeWidth="2" />
      <path d="M146 326 L168 326" stroke={PAPER} strokeWidth="1.4" fill="none" />
      <rect x="150" y="306" width="16" height="12" fill="none" stroke={PAPER} strokeWidth="2" />
      <path
        d="M128 262 L104 270 L104 332 L128 340 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M112 276 L112 326" stroke={INK} strokeWidth="1.4" opacity="0.5" fill="none" />
      <circle cx="110" cy="300" r="2.4" fill={INK} />
      <rect
        x="124"
        y="256"
        width="60"
        height="6"
        rx="1.5"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
      />
      <rect x="178" y="262" width="6" height="78" fill={PAPER} stroke={INK} strokeWidth="2.4" />
      <rect x="122" y="262" width="6" height="78" fill={PAPER} stroke={INK} strokeWidth="2.4" />
      <path
        d="M122 343 L186 343 M118 347.5 L190 347.5"
        stroke={INK}
        strokeWidth="2.2"
        opacity="0.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* SN plaque */}
      <rect
        x="136"
        y="238"
        width="28"
        height="14"
        rx="2"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
      />
      <text
        x="150"
        y="249.5"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="12"
        fontWeight="700"
        fill={INK}
      >
        SN
      </text>
      {/* potted plant */}
      <path
        d="M189 340 L190.5 326 L203.5 326 L205 340 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M197 326 Q192 318 195 310 M197 326 Q202 316 205 311 M197 326 Q197 315 194 308"
        fill="none"
        stroke={INK}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  );
}

function Truck() {
  return (
    <g className="mv-truck">
      <ellipse cx="738" cy="342.5" rx="198" ry="5" fill={INK} opacity="0.09" />
      {/* cargo box */}
      <path
        d="M556 157 L835 156 Q837 226 836 295 L557 296 Q555 226 556 157 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path d="M602 160 L602 293" stroke={INK} strokeWidth="1.4" opacity="0.25" fill="none" />
      {/* SN roundel + hand-painted lettering */}
      <circle cx="640" cy="200" r="17" fill={PAPER} stroke={INK} strokeWidth="3" />
      <text
        x="640"
        y="206.5"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="17"
        fontWeight="700"
        fill={INK}
      >
        SN
      </text>
      <text x="672" y="205" fontFamily={HAND} fontSize="27" fontWeight="700" fill={INK}>
        SHREE NATH
      </text>
      <text
        x="672"
        y="222"
        fontFamily={HAND}
        fontSize="12.5"
        fontWeight="500"
        letterSpacing="2.5"
        fill={INK}
      >
        PACKERS &amp; MOVERS
      </text>
      <path
        d="M559 263 Q700 260 834 262"
        stroke={INK}
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M559 291 Q700 293.5 834 291"
        stroke={INK}
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="718"
        y="283"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="11.5"
        fontWeight="500"
        letterSpacing="1.5"
        fill={INK}
      >
        SHREE NATH PACKERS &amp; MOVERS
      </text>
      {/* open cargo bay with loaded boxes inside */}
      <rect x="556" y="190" width="44" height="106" fill={INK} opacity="0.9" />
      <rect x="563" y="252" width="26" height="20" fill="none" stroke={PAPER} strokeWidth="1.8" />
      <rect x="566" y="224" width="22" height="24" fill="none" stroke={PAPER} strokeWidth="1.8" />
      <rect x="556" y="190" width="44" height="6" fill={INK} />
      <path
        d="M556 196 L534 204 L534 300 L556 296 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M541 209 L541 294 M547 211 L547 296"
        stroke={INK}
        strokeWidth="1.2"
        opacity="0.4"
        fill="none"
      />
      {/* cab */}
      <path
        d="M836 296 L836 214 Q836 204 846 204 L878 204 Q887 204 892.5 211.5 L908 236 Q912 242 912 250 L912 296 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M848 212 L878 212 L896 240 L848 240 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M856 236 L872 216" stroke={INK} strokeWidth="1.4" opacity="0.5" fill="none" />
      <path d="M862 244 L862 296" stroke={INK} strokeWidth="2" fill="none" />
      <path d="M866 256 L873 256" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M888 212 L894 205 L900 205" fill="none" stroke={INK} strokeWidth="2" />
      <rect
        x="897"
        y="201"
        width="6"
        height="8"
        rx="1.5"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.8"
      />
      <circle cx="907" cy="255" r="3.6" fill={PAPER} stroke={INK} strokeWidth="2.2" />
      <rect
        x="912"
        y="282"
        width="12"
        height="14"
        rx="2"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
      />
      {/* chassis + exhaust */}
      <path
        d="M548 304 L926 303"
        stroke={INK}
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M548 310 L926 309.5" stroke={INK} strokeWidth="1.4" opacity="0.4" fill="none" />
      <path
        d="M546 306 L546 336 L554 336 L554 306"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* stationary wheels: bottoms rest exactly on the road line (y = 340) */}
      <g>
        <circle cx="622" cy="314" r="26" fill={PAPER} stroke={INK} strokeWidth="4" />
        <circle cx="622" cy="314" r="13.5" fill={PAPER} stroke={INK} strokeWidth="2.8" />
        <circle cx="622" cy="314" r="3" fill={INK} />
        <path
          d="M622 303 L622 309 M622 319 L622 325 M611 314 L617 314 M627 314 L633 314"
          stroke={INK}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M606 330 L612 324 M612 335 L618 329"
          stroke={INK}
          strokeWidth="1.6"
          opacity="0.5"
          fill="none"
        />
      </g>
      <g>
        <circle cx="880" cy="314" r="26" fill={PAPER} stroke={INK} strokeWidth="4" />
        <circle cx="880" cy="314" r="13.5" fill={PAPER} stroke={INK} strokeWidth="2.8" />
        <circle cx="880" cy="314" r="3" fill={INK} />
        <path
          d="M880 303 L880 309 M880 319 L880 325 M869 314 L875 314 M885 314 L891 314"
          stroke={INK}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M864 330 L870 324 M870 335 L876 329"
          stroke={INK}
          strokeWidth="1.6"
          opacity="0.5"
          fill="none"
        />
      </g>
    </g>
  );
}

function Dog() {
  return (
    <g className="mv-dog">
      <ellipse cx="0" cy="1.5" rx="16" ry="2.6" fill={INK} opacity="0.1" />
      <g className="mv-wobble mv-wobble--dog">
        <path
          className="mv-tail"
          d="M-14 -5 Q-21 -9 -23 -17"
          fill="none"
          stroke={INK}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M-15 0 Q-18 -13 -8 -20 Q2 -26 8 -19 Q11 -9 6 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="-8" cy="-10" r="2.2" fill={INK} opacity="0.8" />
        <path
          d="M5 -11 L5 0 M11 -11 L11 0"
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <g className="mv-doghead">
          <circle cx="14" cy="-20" r="7" fill={PAPER} stroke={INK} strokeWidth="3" />
          <path className="mv-ear" d="M9.5 -25 L7.5 -32 L14 -28.5 Z" fill={INK} opacity="0.9" />
          <path d="M20 -19.5 L24 -17.5" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="24.5" cy="-17" r="1.6" fill={INK} />
          <circle className="mv-eye" cx="15" cy="-21.5" r="1.2" fill={INK} />
          <path
            d="M11 -16 Q13 -15 15 -16"
            fill="none"
            stroke={INK}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </g>
      </g>
    </g>
  );
}

function SceneArt({ uid }: { uid: string }) {
  const crew: MoverSpec[] = [
    {
      id: "a",
      dx: 0,
      tx: 0,
      scale: 1,
      hair: "spiky",
      fitSpan: 36,
      arm: "a",
      item: <ItemBox />,
      itemClass: "mv-item--a",
    },
    {
      id: "b1",
      dx: 0,
      tx: 0,
      scale: 1.06,
      hair: "flat",
      fitSpan: 58,
      arm: "b",
      item: <ItemCrate />,
      itemClass: "mv-item--b",
    },
    { id: "b2", dx: 18, tx: 30, scale: 0.96, hair: "part", beard: "full", fitSpan: 30, arm: "b2" },
    { id: "c1", dx: 0, tx: 0, scale: 0.94, hair: "cap", fitSpan: 30, arm: "c" },
    {
      id: "c2",
      dx: 14,
      tx: 34,
      scale: 1.02,
      hair: "bald",
      beard: "mustache",
      fitSpan: 30,
      arm: "c",
    },
    { id: "c3", dx: 28, tx: 68, scale: 1.08, hair: "part", fitSpan: 30, arm: "c3" },
  ];

  const foreman: MoverSpec = {
    id: "a",
    dx: 0,
    tx: 0,
    scale: 1.04,
    hair: "cap",
    beard: "mustache",
    fitSpan: 34,
    arm: "a",
  };

  return (
    <>
      <defs>
        <filter id={`mv-rough-${uid}`} x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.016"
            numOctaves="2"
            seed={uid === "wide" ? 7 : 11}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <pattern
          id={`mv-hatch-${uid}`}
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="7" height="7" fill={PAPER} />
          <line x1="0" y1="0" x2="0" y2="7" stroke={INK} strokeWidth="1.1" opacity="0.5" />
        </pattern>
        <pattern
          id="mv-hatch-fine"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="5" stroke={INK} strokeWidth="0.8" opacity="0.5" />
        </pattern>
      </defs>

      {/* paper */}
      <rect x="0" y="0" width="960" height="400" fill={PAPER} />
      {/* scattered pencil marks */}
      <g stroke={INK} strokeWidth="1.2" opacity="0.14" strokeLinecap="round">
        <path d="M96 60 L104 56" />
        <path d="M318 40 L324 44" />
        <path d="M520 34 L527 30" />
        <path d="M886 120 L893 124" />
        <path d="M60 120 L66 124" />
        <path d="M920 60 L927 57" />
      </g>

      {/* drifting doodle clouds */}
      <g
        className="mv-cloud mv-cloud--a"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      >
        <path d="M-32 6 Q-36 -4 -24 -8 Q-20 -18 -6 -14 Q4 -22 16 -13 Q28 -16 30 -6 Q38 -2 32 6 Q0 12 -32 6 Z" />
      </g>
      <g
        className="mv-cloud mv-cloud--b"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M-24 5 Q-27 -3 -18 -6 Q-14 -13 -4 -10 Q4 -16 12 -9 Q21 -11 22 -4 Q28 -1 23 5 Q-2 9 -24 5 Z" />
      </g>
      {/* a bird crossing the sky */}
      <g className="mv-bird">
        <g className="mv-birdbob">
          <path
            d="M0 0 Q4 -5.5 8 0 Q12 -5.5 16 0"
            fill="none"
            stroke={INK}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* hand-wobbled environment (road line + house + truck wobble together) */}
      <g filter={`url(#mv-rough-${uid})`}>
        {/* skyline */}
        <g opacity="0.55">
          <path
            d="M330 340 L330.5 216 L388 216 L388 340"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.2"
          />
          <path
            d="M394 340 L394 176 L470 176 L470 340"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.2"
          />
          <path
            d="M476 340 L476 240 L522 240 L522 340"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.2"
          />
          <g fill={INK} opacity="0.55">
            <rect x="404" y="190" width="11" height="11" />
            <rect x="424" y="190" width="11" height="11" />
            <rect x="404" y="214" width="11" height="11" />
            <rect x="424" y="214" width="11" height="11" />
            <rect x="404" y="238" width="11" height="11" />
            <rect x="424" y="238" width="11" height="11" />
          </g>
          <path d="M432 176 L432 158 M427 162 L437 162" stroke={INK} strokeWidth="2" fill="none" />
          <path
            d="M342 232 L376 232 M342 256 L376 256 M486 258 L512 258"
            stroke={INK}
            strokeWidth="1.6"
            opacity="0.5"
            fill="none"
          />
        </g>
        {/* road: the wavy line the truck sits on */}
        <path
          d="M0 340 Q240 337.5 480 340 T960 339.4"
          fill="none"
          stroke={INK}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M0 372 Q480 369 960 372"
          fill="none"
          stroke={INK}
          strokeWidth="2.6"
          strokeDasharray="30 26"
          opacity="0.45"
        />
        <g stroke={INK} strokeWidth="1.6" opacity="0.3" strokeLinecap="round">
          <path d="M120 356 L132 352" />
          <path d="M300 386 L314 382" />
          <path d="M520 352 L534 348" />
          <path d="M760 388 L776 384" />
          <path d="M900 358 L912 354" />
        </g>
        <House />
        <Truck />
      </g>

      {/* chimney smoke curls (kept outside the wobble filter) */}
      <g fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round">
        <path className="mv-curl mv-curl--1" d="M248 112 Q243 107 248 102 Q253 97 248 92" />
        <path className="mv-curl mv-curl--2" d="M254 110 Q249 105 254 100 Q259 95 254 90" />
      </g>

      {/* exhaust smoke puffs, hand-drawn */}
      <g className="mv-smoke" fill={PAPER} stroke={INK} strokeWidth="2" strokeLinejoin="round">
        <path
          className="mv-smoke-puff mv-smoke-puff--1"
          d="M544 300 Q541 295 546 293 Q547 289 552 290 Q557 290 556 295 Q559 298 554 301 Q548 303 544 300 Z"
        />
        <path
          className="mv-smoke-puff mv-smoke-puff--2"
          d="M550 303 Q546 297 552 295 Q554 290 560 292 Q566 292 564 298 Q568 302 562 305 Q554 307 550 303 Z"
        />
        <path
          className="mv-smoke-puff mv-smoke-puff--3"
          d="M540 305 Q537 301 541 299 Q543 296 547 297 Q551 297 550 301 Q553 304 548 306 Q543 308 540 305 Z"
        />
      </g>

      {/* the crew */}
      {crew.map((spec) => (
        <Mover key={spec.id} spec={spec} />
      ))}

      {/* foreman watching the load-in */}
      <Mover spec={foreman} foreman />

      {/* sofa travels as its own load so the crew can pace behind it */}
      <g className="mv mv-cargo" style={{ "--dx": "14px", "--tx": "34px" } as CSSProperties}>
        <g className="mv-flip">
          <g className="mv-wobble mv-wobble--cargo">
            <g className="mv-bob">
              <rect x="-80" y="-78" width="160" height="78" fill="none" />
              <g className="mv-item mv-item--c">
                <g className="mv-rock mv-rock--sofa">
                  <ItemSofa />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>

      <Dog />

      {/* foreman's bubble pops when the sofa crew lifts */}
      <g className="mv-speech" transform="translate(585 168)">
        <path
          d="M8 36 Q2 28 8 20 Q2 8 16 8 Q22 0 34 5 Q46 -2 58 4 Q72 -2 84 4 Q98 -2 108 6 Q122 8 118 18 Q126 28 112 31 Q106 40 92 35 Q78 41 64 35 Q48 41 34 35 Q20 40 14 33 Q6 38 8 36 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M52 35 L40 52 L62 36"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <text
          x="63"
          y="24"
          textAnchor="middle"
          fontFamily={HAND}
          fontSize="17"
          fontWeight="700"
          fill={INK}
        >
          Easy does it!
        </text>
        <path
          d="M38 29 Q62 32 88 29"
          fill="none"
          stroke={INK}
          strokeWidth="1.4"
          opacity="0.5"
          strokeLinecap="round"
        />
      </g>
    </>
  );
}

export function MoveSceneAnimation() {
  return (
    <>
      <svg
        className="move-scene move-scene--wide"
        viewBox="0 0 960 400"
        role="img"
        aria-labelledby="move-scene-title move-scene-description"
      >
        <title id="move-scene-title">
          Shree Nath Packers &amp; Movers crew loading a moving truck
        </title>
        <desc id="move-scene-description">
          A hand-drawn black and white scene: uniformed loaders walk out of an open home door, carry
          boxes and a sofa across the road, and load them into a parked Shree Nath truck while a
          foreman oversees, a dog watches from the curb, and smoke drifts from the exhaust.
        </desc>
        <SceneArt uid="wide" />
      </svg>

      <svg
        className="move-scene move-scene--compact"
        viewBox="40 100 900 300"
        role="img"
        aria-labelledby="move-scene-compact-title move-scene-compact-description"
      >
        <title id="move-scene-compact-title">Shree Nath Packers &amp; Movers moving crew</title>
        <desc id="move-scene-compact-description">
          A hand-drawn black and white scene: uniformed loaders carry items from an open home door
          into a parked Shree Nath truck while a foreman oversees and a dog watches.
        </desc>
        <SceneArt uid="compact" />
      </svg>
    </>
  );
}
