import type { CSSProperties, ReactNode } from "react";

const NAVY = "#1f3a5f";
const NAVY_DEEP = "#182f4d";
const NAVY_CAP = "#16294a";
const PANTS = "#2b3442";
const PANTS_BACK = "#232b36";
const SHIRT_LIGHT = "#f4f7fb";

type MoverSpec = {
  id: "a" | "b1" | "b2" | "c1" | "c2" | "c3";
  /** x offset (px) while staged at the door */
  dx: number;
  /** x offset (px) while loading at the truck */
  tx: number;
  skin: string;
  /** body scale for height diversity */
  scale: number;
  beard?: string;
  /** symmetric fit anchor span (px) so scaling pivots at the feet */
  fitSpan: number;
  arm: "a" | "b" | "b2" | "c" | "c3";
  item?: ReactNode;
  itemClass?: string;
};

function MoverLeg({ back }: { back?: boolean }) {
  const x = back ? -1 : 1;
  return (
    <g className={back ? "mv-leg mv-leg--b" : "mv-leg mv-leg--f"}>
      <path
        d={`M${x} -24 L${x} -2`}
        stroke={back ? PANTS_BACK : PANTS}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <rect
        x={back ? -6 : -4}
        y="-6"
        width={back ? 11 : 12}
        height="6"
        rx="2.5"
        fill={back ? "#10141a" : "#161b22"}
      />
    </g>
  );
}

function MoverArm({ back, skin, className }: { back?: boolean; skin: string; className?: string }) {
  const x = back ? -3.5 : 4.5;
  return (
    <g className={className ?? (back ? "mv-arm mv-arm--b" : "mv-arm mv-arm--f")}>
      <path
        d={`M${x} -51 L${x} -42`}
        stroke={back ? NAVY_DEEP : NAVY}
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={`M${x} -42 L${x} -32`}
        stroke={skin}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={x} cy="-30.5" r="2.6" fill={skin} />
    </g>
  );
}

function MoverHead({ skin, beard }: { skin: string; beard?: string | undefined }) {
  return (
    <g>
      <rect x="0" y="-58" width="5.5" height="5" fill={skin} />
      <circle cx="2.5" cy="-60.5" r="7.2" fill={skin} />
      <circle cx="6.4" cy="-60.3" r="0.9" fill="#20242b" />
      {beard ? <rect x="-1.5" y="-56" width="10" height="4.5" rx="2" fill={beard} /> : null}
      <path d="M-4.7 -61.5 a7.2 7.2 0 0 1 14.4 0 Z" fill={NAVY_CAP} />
      <rect x="5.5" y="-63.2" width="8" height="2.6" rx="1.3" fill="#101d36" />
      <circle cx="2.5" cy="-66.5" r="1.1" fill={SHIRT_LIGHT} />
    </g>
  );
}

function Mover({ spec }: { spec: MoverSpec }) {
  const vars = {
    "--dx": `${spec.dx}px`,
    "--tx": `${spec.tx}px`,
    "--s": spec.scale,
  } as CSSProperties;

  return (
    <g className={`mv mv--${spec.id}`} style={vars}>
      <ellipse className="mv-shadow" cx="0" cy="2.5" rx="15" ry="3" fill="#10151c" opacity="0.14" />
      <g className="mv-flip">
        <g className="mv-bob">
          <g className="mv-fit">
            <rect x={-spec.fitSpan} y="-76" width={spec.fitSpan * 2} height="76" fill="none" />
            <MoverLeg back />
            <MoverArm back skin={spec.skin} />
            <g>
              <rect x="-8" y="-33" width="16" height="11" rx="3" fill={PANTS} />
              <rect x="-9" y="-55" width="18" height="24" rx="5" fill={NAVY} />
              <rect x="-9" y="-46" width="18" height="4.5" rx="2" fill={SHIRT_LIGHT} />
              <text
                x="0"
                y="-42.6"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontSize="5.5"
                fontWeight="800"
                letterSpacing="0.5"
                fill={NAVY}
              >
                SN
              </text>
            </g>
            <MoverHead skin={spec.skin} beard={spec.beard} />
            {spec.item ? <g className={`mv-item ${spec.itemClass}`}>{spec.item}</g> : null}
            <MoverArm skin={spec.skin} className={`mv-arm mv-arm--f mv-arm--${spec.arm}`} />
            <MoverLeg />
          </g>
        </g>
      </g>
    </g>
  );
}

/** Medium cargo: single-worker box, held at chest level. */
function ItemMedium() {
  return (
    <g>
      <rect x="4" y="-52" width="30" height="26" rx="2.5" fill="#c98a4e" />
      <rect x="4" y="-52" width="30" height="7" rx="2.5" fill="#d99a5c" />
      <path d="M4 -45 h30" stroke="#a96f38" strokeWidth="1.5" fill="none" />
      <rect x="16.5" y="-52" width="5" height="26" fill="#ecd3a8" />
    </g>
  );
}

/** Heavy cargo: oversized crate for the coordinated 2-man lift. */
function ItemCrate() {
  return (
    <g>
      <rect x="-8" y="-54" width="64" height="34" rx="3" fill="#a9713d" />
      <rect x="-8" y="-54" width="64" height="8" rx="3" fill="#c08a52" />
      <path d="M-8 -46 h64" stroke="#8a5a2e" strokeWidth="1.5" fill="none" />
      <rect x="14" y="-54" width="7" height="34" fill="#e8cf9f" />
      <rect x="36" y="-54" width="7" height="34" fill="#e8cf9f" />
      <rect x="-2" y="-35" width="20" height="9" rx="1.5" fill="#f4ede2" />
      <text
        x="8"
        y="-28.5"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontSize="5.5"
        fontWeight="800"
        letterSpacing="0.4"
        fill="#7a4a22"
      >
        HEAVY
      </text>
    </g>
  );
}

/** Elite cargo: premium sofa paced in by the three-man crew. */
function ItemSofa() {
  return (
    <g>
      <rect x="-26" y="-46" width="104" height="26" rx="6" fill="#24466e" />
      <rect x="-20" y="-36" width="40" height="12" rx="4" fill="#2d5680" />
      <rect x="24" y="-36" width="40" height="12" rx="4" fill="#2d5680" />
      <rect x="-26" y="-24" width="104" height="12" rx="3" fill="#1d3a5c" />
      <rect x="-30" y="-40" width="12" height="28" rx="5" fill="#2a4f7a" />
      <rect x="66" y="-40" width="12" height="28" rx="5" fill="#2a4f7a" />
      <rect x="-18" y="-12" width="7" height="6" rx="1.5" fill="#8a5a33" />
      <rect x="63" y="-12" width="7" height="6" rx="1.5" fill="#8a5a33" />
    </g>
  );
}

function House() {
  return (
    <g className="mv-house">
      <ellipse cx="170" cy="342" rx="112" ry="5" fill="#10151c" opacity="0.1" />
      <rect x="226" y="126" width="20" height="44" fill="#e4dccb" />
      <rect x="222" y="120" width="28" height="8" rx="2" fill="#cfc4b2" />
      <rect x="66" y="196" width="206" height="144" fill="#f6f1e7" />
      <rect x="66" y="196" width="12" height="144" fill="#ece4d5" />
      <rect x="78" y="200" width="194" height="6" fill="#0b1220" opacity="0.05" />
      <path d="M50 196 L169 104 L288 196 Z" fill="#24466e" />
      <rect x="46" y="190" width="246" height="10" rx="3" fill={NAVY} />
      {/* windows */}
      <rect x="84" y="226" width="32" height="32" fill="#bcd7ee" />
      <path d="M100 226v32M84 242h32" stroke="#f6f1e7" strokeWidth="3" fill="none" />
      <rect x="82" y="256" width="36" height="4" rx="1.5" fill="#d9cfc0" />
      <rect x="196" y="226" width="32" height="32" fill="#bcd7ee" />
      <path d="M212 226v32M196 242h32" stroke="#f6f1e7" strokeWidth="3" fill="none" />
      <rect x="194" y="256" width="36" height="4" rx="1.5" fill="#d9cfc0" />
      {/* open main door */}
      <rect x="124" y="256" width="60" height="6" fill="#d9cfc0" />
      <rect x="128" y="262" width="52" height="78" fill="#1a2230" />
      <rect x="128" y="262" width="10" height="78" fill="#232e40" />
      <rect x="146" y="318" width="22" height="22" fill="#6b4a2f" />
      <rect x="150" y="306" width="16" height="12" fill="#7d5a3a" />
      <path d="M128 262 L104 270 L104 332 L128 340 Z" fill="#2c4a6e" />
      <circle cx="110" cy="300" r="2.2" fill={SHIRT_LIGHT} />
      <rect x="178" y="262" width="6" height="78" fill="#d9cfc0" />
      <rect x="122" y="262" width="6" height="78" fill="#d9cfc0" />
      <rect x="136" y="238" width="28" height="14" rx="2" fill={NAVY} />
      <text
        x="150"
        y="248.5"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontSize="8"
        fontWeight="800"
        letterSpacing="0.5"
        fill={SHIRT_LIGHT}
      >
        SN
      </text>
      <rect x="122" y="334" width="64" height="6" rx="1.5" fill="#b98859" />
      {/* potted plant */}
      <path d="M190 340 l1.5 -14 h13 l1.5 14 z" fill="#b98859" />
      <ellipse cx="197" cy="314" rx="7" ry="9" fill="#4c8a5f" />
      <ellipse cx="190.5" cy="318" rx="5" ry="7" fill="#5d9a6e" />
      <ellipse cx="203.5" cy="318" rx="5" ry="7" fill="#5d9a6e" />
      <rect x="66" y="332" width="206" height="8" fill="#e0d8c8" />
    </g>
  );
}

function Truck({ uid }: { uid: string }) {
  return (
    <g className="mv-truck">
      <ellipse cx="738" cy="343" rx="198" ry="5.5" fill="#10151c" opacity="0.12" />
      {/* cargo box */}
      <rect x="556" y="156" width="280" height="140" fill="#f8fafc" />
      <rect x="600" y="156" width="10" height="140" fill="#e7edf4" />
      <rect x="622" y="186" width="36" height="36" rx="4" fill={NAVY} />
      <text
        x="640"
        y="210"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontSize="16"
        fontWeight="800"
        letterSpacing="0.5"
        fill={SHIRT_LIGHT}
      >
        SN
      </text>
      <text
        x="672"
        y="202"
        fontFamily="Outfit, sans-serif"
        fontSize="14"
        fontWeight="800"
        letterSpacing="1"
        fill={NAVY}
      >
        SHREE NATH
      </text>
      <text
        x="672"
        y="216"
        fontFamily="Outfit, sans-serif"
        fontSize="7"
        fontWeight="700"
        letterSpacing="1.8"
        fill="#5c6d84"
      >
        PACKERS &amp; MOVERS
      </text>
      <rect x="556" y="262" width="280" height="34" fill={NAVY} />
      <text
        x="718"
        y="283"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontSize="11.5"
        fontWeight="800"
        letterSpacing="1.6"
        fill={SHIRT_LIGHT}
      >
        SHREE NATH PACKERS &amp; MOVERS
      </text>
      {/* open cargo bay */}
      <rect x="556" y="190" width="44" height="106" fill="#151c28" />
      <rect x="596" y="190" width="4" height="106" fill="#0b101a" />
      <rect x="556" y="190" width="44" height="6" fill="#2a3547" />
      <path d="M556 196 L534 204 L534 300 L556 296 Z" fill="#e6ecf3" />
      <path d="M556 196 L534 204" stroke="#b9c4d2" strokeWidth="2" fill="none" />
      {/* cab */}
      <rect x="832" y="210" width="4" height="86" fill="#0b1220" opacity="0.14" />
      <path
        d="M836 296 L836 214 Q836 204 846 204 L878 204 Q887 204 892.5 211.5 L908 236 Q912 242 912 250 L912 296 Z"
        fill="#f8fafc"
      />
      <path d="M848 212 L878 212 L896 240 L848 240 Z" fill="#b7d2ea" />
      <path d="M862 244 V296" stroke="#d5dde8" strokeWidth="2" fill="none" />
      <rect x="866" y="256" width="7" height="2.5" rx="1.2" fill="#9aa6b5" />
      <rect x="836" y="262" width="76" height="34" fill={NAVY} />
      <rect x="904" y="250" width="8" height="10" rx="2" fill="#ffd76a" />
      <rect x="908" y="282" width="14" height="14" rx="2.5" fill="#2c3542" />
      {/* chassis + exhaust */}
      <rect x="548" y="296" width="380" height="16" rx="3" fill="#2c3542" />
      <rect x="546" y="306" width="8" height="30" rx="2" fill="#46505e" />
      {/* stationary wheels: bottoms rest exactly on the road line (y = 340) */}
      <g transform="translate(622 314)">
        <circle r="26" fill="#1d232c" />
        <circle r="13.5" fill="#9aa6b5" />
        <circle r="4.5" fill="#39424e" />
        <rect x="-2" y="-12" width="4" height="7" rx="1.5" fill="#5b6675" />
        <rect x="-2" y="5" width="4" height="7" rx="1.5" fill="#5b6675" />
        <rect x="-12" y="-2" width="7" height="4" rx="1.5" fill="#5b6675" />
        <rect x="5" y="-2" width="7" height="4" rx="1.5" fill="#5b6675" />
      </g>
      <g transform="translate(880 314)">
        <circle r="26" fill="#1d232c" />
        <circle r="13.5" fill="#9aa6b5" />
        <circle r="4.5" fill="#39424e" />
        <rect x="-2" y="-12" width="4" height="7" rx="1.5" fill="#5b6675" />
        <rect x="-2" y="5" width="4" height="7" rx="1.5" fill="#5b6675" />
        <rect x="-12" y="-2" width="7" height="4" rx="1.5" fill="#5b6675" />
        <rect x="5" y="-2" width="7" height="4" rx="1.5" fill="#5b6675" />
      </g>
      {/* gentle exhaust pulse while parked */}
      <g className="mv-smoke">
        <circle className="mv-smoke-puff mv-smoke-puff--1" cx="550" cy="300" r="5" fill="#a9b6c6" />
        <circle className="mv-smoke-puff mv-smoke-puff--2" cx="556" cy="302" r="6" fill="#b6c2d0" />
        <circle
          className="mv-smoke-puff mv-smoke-puff--3"
          cx="545"
          cy="303"
          r="4.5"
          fill="#b6c2d0"
        />
      </g>
      <title>{`Shree Nath moving truck ${uid}`}</title>
    </g>
  );
}

function SceneArt({ uid }: { uid: string }) {
  const crew: MoverSpec[] = [
    {
      id: "a",
      dx: 0,
      tx: 0,
      skin: "#e8b98f",
      scale: 1,
      fitSpan: 36,
      arm: "a",
      item: <ItemMedium />,
      itemClass: "mv-item--a",
    },
    {
      id: "b1",
      dx: 0,
      tx: 0,
      skin: "#c68e5f",
      scale: 1.06,
      fitSpan: 58,
      arm: "b",
      item: <ItemCrate />,
      itemClass: "mv-item--b",
    },
    {
      id: "b2",
      dx: 18,
      tx: 30,
      skin: "#9c6b43",
      scale: 0.96,
      beard: "#23272e",
      fitSpan: 30,
      arm: "b2",
    },
    {
      id: "c1",
      dx: 0,
      tx: 0,
      skin: "#e0ad82",
      scale: 0.94,
      fitSpan: 30,
      arm: "c",
    },
    {
      id: "c2",
      dx: 14,
      tx: 34,
      skin: "#8d5a3b",
      scale: 1.02,
      beard: "#33281e",
      fitSpan: 30,
      arm: "c",
    },
    {
      id: "c3",
      dx: 28,
      tx: 68,
      skin: "#d9a06e",
      scale: 1.08,
      fitSpan: 30,
      arm: "c3",
    },
  ];

  return (
    <>
      <defs>
        <linearGradient id={`mv-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8fbfe" />
          <stop offset="1" stopColor="#e8eff7" />
        </linearGradient>
      </defs>

      {/* sky, clouds, skyline */}
      <rect x="0" y="0" width="960" height="340" fill={`url(#mv-sky-${uid})`} />
      <g fill="#ffffff" opacity="0.75">
        <ellipse cx="430" cy="74" rx="34" ry="12" />
        <ellipse cx="458" cy="66" rx="24" ry="10" />
        <ellipse cx="756" cy="56" rx="30" ry="11" />
        <ellipse cx="782" cy="49" rx="20" ry="8" />
      </g>
      <g className="mv-skyline" opacity="0.85">
        <rect x="330" y="216" width="58" height="124" fill="#e3eaf3" />
        <rect x="394" y="176" width="76" height="164" fill="#dce5f0" />
        <rect x="476" y="240" width="46" height="100" fill="#e3eaf3" />
        <rect x="404" y="190" width="12" height="12" fill="#c6d2e2" />
        <rect x="424" y="190" width="12" height="12" fill="#c6d2e2" />
        <rect x="404" y="214" width="12" height="12" fill="#c6d2e2" />
        <rect x="424" y="214" width="12" height="12" fill="#c6d2e2" />
        <rect x="404" y="238" width="12" height="12" fill="#c6d2e2" />
        <rect x="424" y="238" width="12" height="12" fill="#c6d2e2" />
        <path d="M432 176 V158" stroke="#c6d2e2" strokeWidth="3" fill="none" />
      </g>

      {/* road: crisp edge line at y = 340 that the truck sits on */}
      <g className="mv-road">
        <rect x="0" y="340" width="960" height="60" fill="#333d4b" />
        <rect x="0" y="338" width="960" height="3" fill="#cfd9e4" />
        <rect x="0" y="341" width="960" height="4" fill="#232b36" opacity="0.25" />
        <path
          d="M0 371 H960"
          stroke="#e8eef5"
          strokeWidth="3"
          strokeDasharray="34 26"
          opacity="0.4"
          fill="none"
        />
      </g>

      <House />
      <Truck uid={uid} />

      {/* crew: solo medium lift, 2-man heavy lift, 3-man sofa lift */}
      {crew.map((spec) => (
        <Mover key={spec.id} spec={spec} />
      ))}

      {/* sofa travels as its own load so the crew can pace behind it */}
      <g className="mv mv-cargo" style={{ "--dx": "14px", "--tx": "34px" } as CSSProperties}>
        <g className="mv-flip">
          <g className="mv-bob">
            <rect x="-80" y="-76" width="160" height="76" fill="none" />
            <g className="mv-item mv-item--c">
              <ItemSofa />
            </g>
          </g>
        </g>
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
          A uniformed crew walks out of an open home door, carries boxes and a sofa across the road,
          and loads them into a parked Shree Nath truck while gentle smoke pulses from the exhaust.
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
          A uniformed crew carries items from an open home door into a parked Shree Nath truck while
          gentle smoke pulses from the exhaust.
        </desc>
        <SceneArt uid="compact" />
      </svg>
    </>
  );
}
