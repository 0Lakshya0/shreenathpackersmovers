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

/* ==================================================================== */
/*  FACES                                                               */
/* ==================================================================== */

function HairSide({ hair }: { hair: Hair }) {
  switch (hair) {
    case "spiky":
      return (
        <path
          d="M-5.4 -71 L-2.6 -77 L-0.4 -72.4 L2 -78.6 L4 -73 L6.8 -77.4 L8.6 -70.6"
          fill="none"
          stroke={INK}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case "flat":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round">
          <path d="M-6.4 -71.4 Q-7.4 -76 -3.4 -76 L8 -76 Q11 -76 10.6 -71.6" />
          <path d="M1.4 -76 L1.4 -72" strokeWidth="1.7" />
        </g>
      );
    case "part":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round">
          <path d="M-6.4 -69.6 Q-7.4 -77 1.4 -77 Q10 -77 10.6 -69.2" />
          <path d="M3.4 -77 L4.8 -71.6" strokeWidth="1.7" />
        </g>
      );
    case "cap":
      return (
        <g>
          <path
            d="M-6.6 -66 Q-7.4 -75.4 3.4 -75.4 Q14.2 -75.4 13.4 -66 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8.8 -68.4 L19.6 -69.8 Q21.6 -69.8 21.2 -67.4 L9.4 -66 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </g>
      );
    case "bald":
      return (
        <path
          d="M-6 -68 Q-8 -72.6 -4.6 -75.4"
          fill="none"
          stroke={INK}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      );
  }
}

function HairFront({ hair }: { hair: Hair }) {
  switch (hair) {
    case "spiky":
      return (
        <path
          d="M-11 -5 L-8.4 -14 L-4.6 -8.6 L-1 -16.4 L2.4 -9.6 L6 -14.6 L9.6 -7"
          fill="none"
          stroke={INK}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case "flat":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.7" strokeLinecap="round">
          <path d="M-12.4 -2.4 Q-13.6 -12 0 -12 Q13.6 -12 12.4 -2.4" />
          <path d="M-12.4 -2.4 L12.4 -2.4" strokeWidth="2" />
        </g>
      );
    case "part":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.7" strokeLinecap="round">
          <path d="M-12.6 0 Q-14 -13.4 0 -13.4 Q14 -13.4 12.6 0" />
          <path d="M1.4 -13.4 L2.6 -5" strokeWidth="1.8" />
        </g>
      );
    case "cap":
      return (
        <g>
          <path
            d="M-12.6 -2.6 Q-12.6 -14 0 -14 Q12.6 -14 12.6 -2.6 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M-14 -3.8 Q0 -7.6 15 -3.8 Q16.4 -1.4 13.8 -1.4 Q0 -5 -12.8 -1.4 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </g>
      );
    case "bald":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round">
          <path d="M-11 -3.4 Q-12.4 -8.4 -7.4 -9.6" />
          <path d="M11 -3.4 Q12.4 -8.4 7.4 -9.6" />
        </g>
      );
  }
}

function HeadSide({ hair }: { hair: Hair }) {
  return (
    <g className="pk-head">
      <g className="pk-headsway">
        <g transform="translate(0 -7)">
          <rect
            x="0"
            y="-58"
            width="6.4"
            height="5.6"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.2"
          />
          <circle cx="2.8" cy="-62.6" r="9.6" fill={PAPER} stroke={INK} strokeWidth="3.6" />
          <path
            d="M-4.4 -62.4 Q-7 -62 -6.4 -58.8 Q-5.8 -56.6 -3.4 -57.6"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <ellipse
            cx="6.4"
            cy="-64.4"
            rx="3.1"
            ry="3.5"
            fill="#fff"
            stroke={INK}
            strokeWidth="1.7"
          />
          <circle className="pk-eye" cx="7.2" cy="-64.2" r="1.5" fill={INK} />
          <path
            d="M4 -69.4 Q7 -71 9.8 -69.6"
            stroke={INK}
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M10.4 -63.4 Q13 -61.4 10.6 -60.2"
            stroke={INK}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M4.6 -56.8 Q7 -54.6 9.8 -56.6"
            stroke={INK}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <g stroke={INK} strokeWidth="1.1" opacity="0.35" strokeLinecap="round">
            <path d="M6.6 -58.6 L9 -57.4 M7.2 -57.6 L9.6 -56.4" />
          </g>
          <ellipse className="pk-mouth" cx="8" cy="-56.2" rx="2" ry="2.4" fill={INK} />
          <HairSide hair={hair} />
          <g className="pk-sweat">
            <path
              d="M13 -70 Q16.4 -66 13 -63.4 Q9.6 -66 13 -70 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </g>
  );
}

function HeadFront({ hair }: { hair: Hair }) {
  return (
    <g className="pk-head pk-head--front">
      <g className="pk-headsway">
        <circle cx="0" cy="-56" r="13.4" fill={PAPER} stroke={INK} strokeWidth="3.4" />
        <circle cx="-13" cy="-55" r="3" fill={PAPER} stroke={INK} strokeWidth="2" />
        <circle cx="13" cy="-55" r="3" fill={PAPER} stroke={INK} strokeWidth="2" />
        <ellipse cx="-4.6" cy="-57.4" rx="3.5" ry="4" fill="#fff" stroke={INK} strokeWidth="1.8" />
        <ellipse cx="4.6" cy="-57.4" rx="3.5" ry="4" fill="#fff" stroke={INK} strokeWidth="1.8" />
        <circle className="pk-eye" cx="-4.2" cy="-57" r="1.7" fill={INK} />
        <circle className="pk-eye" cx="5" cy="-57" r="1.7" fill={INK} />
        <path
          d="M-8.2 -62.6 Q-4.6 -64.4 -1.4 -62.8 M1.4 -62.8 Q4.6 -64.4 8.2 -62.6"
          stroke={INK}
          strokeWidth="1.9"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0 -56.6 Q-1.1 -54.4 0.4 -53.6"
          stroke={INK}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M-3.4 -48.2 Q0 -45.2 3.4 -48.2"
          stroke={INK}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse className="pk-mouth" cx="0" cy="-47.2" rx="2.4" ry="2.8" fill={INK} />
        <g stroke={INK} strokeWidth="1.2" opacity="0.32" strokeLinecap="round">
          <path d="M-10.4 -52.6 L-7.6 -51 M-10.8 -51 L-8 -49.4" />
          <path d="M10.4 -52.6 L7.6 -51 M10.8 -51 L8 -49.4" />
        </g>
        <HairFront hair={hair} />
        <g className="pk-sweat">
          <path
            d="M13.6 -64 Q17 -60 13.6 -57.4 Q10.2 -60 13.6 -64 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  FIGURE PARTS                                                        */
/* ==================================================================== */

function Leg({ back }: { back?: boolean }) {
  return (
    <g className={back ? "pk-leg pk-leg--b" : "pk-leg pk-leg--f"} transform="translate(0 -37)">
      <g className="pk-thigh">
        <rect x="-3" y="0" width="6" height="19" fill="none" />
        <path d="M0 0 L0 19" stroke={INK} strokeWidth="7" strokeLinecap="round" fill="none" />
        <g className="pk-shin" transform="translate(0 19)">
          <rect x="-3" y="0" width="6" height="19.6" fill="none" />
          <path d="M0 0 L0 16.8" stroke={INK} strokeWidth="6" strokeLinecap="round" fill="none" />
          <path
            d="M-4 13.2 L7.4 13.2 Q10.6 13.2 10.6 15.4 Q10.6 20.4 6.4 20.4 L-6 20.4 Q-8.4 20.4 -8.4 17 Q-8.4 13.2 -4 13.2 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  );
}

function Arm({
  back,
  className,
  children,
}: {
  back?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <g className={className ?? (back ? "pk-arm pk-arm--b" : "pk-arm pk-arm--f")}>
      <path
        d={back ? "M-7 -57 Q-15 -47 -12 -35" : "M7 -57 Q15 -47 12 -35"}
        stroke={INK}
        strokeWidth="5.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={back ? -12 : 12} cy={-34} r="3.2" fill={PAPER} stroke={INK} strokeWidth="2.2" />
      {children}
    </g>
  );
}

function TorsoSide() {
  return (
    <g className="pk-torso-g">
      <path
        d="M-10.4 -36 Q-12 -52 -8.6 -60.4 Q0 -64 8.6 -60.4 Q12 -52 10.4 -36 Q0 -33.2 -10.4 -36 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.6"
        strokeLinejoin="round"
      />
      <path
        d="M-8 -58.6 Q0 -55.6 8 -58.6"
        stroke={INK}
        strokeWidth="1.8"
        fill="none"
        opacity="0.6"
      />
      <text
        x="0"
        y="-43"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="10"
        fontWeight="700"
        fill={INK}
      >
        SN
      </text>
    </g>
  );
}

/** Body of a walking carrier (local space, feet at y 0). */
function CarrierBody({ hair, children }: { hair: Hair; children?: ReactNode }) {
  return (
    <g className="pk-fit">
      <rect x="-36" y="-84" width="72" height="84" fill="none" />
      <Leg back />
      <Leg />
      <g className="pk-bob">
        <Arm back />
        <TorsoSide />
        <HeadSide hair={hair} />
        <Arm className="pk-arm pk-arm--f pk-arm--main" />
      </g>
      {children}
    </g>
  );
}

function CarrierShell({ id, deep, children }: { id: string; deep?: boolean; children: ReactNode }) {
  return (
    <g className={`pk pk--${id}${deep ? " pk--deep" : " pk--front"}`}>
      <g className="pk-squash">
        <g className="pk-flip">
          <g className="pk-wobble">{children}</g>
        </g>
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  SEATED PACKER                                                       */
/* ==================================================================== */

function Packer({
  id,
  hair,
  items,
}: {
  id: "k1" | "k2";
  hair: Hair;
  items: [ReactNode, ReactNode];
}) {
  return (
    <g
      className={`pk pk--${id}`}
      transform={id === "k1" ? "translate(430 460)" : "translate(700 460)"}
    >
      <ellipse cx="0" cy="-2" rx="74" ry="9" fill={INK} opacity="0.06" />
      <path
        d="M-40 -11 Q-46 -3 -39 1 L-26 1 Q-31 -6 -29 -13 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M40 -11 Q46 -3 39 1 L26 1 Q31 -6 29 -13 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <g className="pk-bend">
        <g className="pk-bob">
          <g className="pk-upper">
            <g className="pk-torso-g">
              <path
                d="M-21 -6 Q-23 -30 -16.6 -46 Q-8.6 -50.6 0 -50.6 Q8.6 -50.6 16.6 -46 Q23 -30 21 -6 Q0 -2.6 -21 -6 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.6"
                strokeLinejoin="round"
              />
              <path
                d="M-8 -49.6 Q0 -42.6 8 -49.6"
                stroke={INK}
                strokeWidth="1.8"
                fill="none"
                opacity="0.6"
              />
              <text
                x="0"
                y="-26"
                textAnchor="middle"
                fontFamily={HAND}
                fontSize="11"
                fontWeight="700"
                fill={INK}
              >
                SN
              </text>
            </g>
            <HeadFront hair={hair} />
            <g className="pk-arm pk-arm--l" transform="translate(-17 -44)">
              <rect x="-13" y="0" width="26" height="32" fill="none" />
              <path
                d="M0 0 Q-10 9 -11 18 Q-12 25 -6 29"
                stroke={INK}
                strokeWidth="5.4"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="-6" cy="29.5" r="3.2" fill={PAPER} stroke={INK} strokeWidth="2.2" />
            </g>
            <g className="pk-arm pk-arm--r" transform="translate(17 -44)">
              <rect x="-13" y="0" width="26" height="32" fill="none" />
              <path
                d="M0 0 Q10 9 11 18 Q12 25 6 29"
                stroke={INK}
                strokeWidth="5.4"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="6" cy="29.5" r="3.2" fill={PAPER} stroke={INK} strokeWidth="2.2" />
            </g>
          </g>
        </g>
      </g>
      <g className="pk-item pk-item--hand pk-item--hand1" transform="translate(-64 -16)">
        {items[0]}
      </g>
      <g className="pk-item pk-item--hand pk-item--hand2" transform="translate(-64 -16)">
        {items[1]}
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  SUPERVISOR                                                          */
/* ==================================================================== */

function Supervisor() {
  return (
    <g className="pk pk--sup" transform="translate(318 500)">
      <ellipse cx="0" cy="1.5" rx="17" ry="3.4" fill={INK} opacity="0.1" />
      <g className="pk-sup-shift">
        <g className="pk-sup-bob">
          <g className="pk-fit">
            <rect x="-34" y="-84" width="68" height="84" fill="none" />
            <Leg back />
            <Leg />
            <g className="pk-bob">
              <Arm back />
              <g className="pk-torso-g">
                <path
                  d="M-10.4 -36 Q-12 -52 -8.6 -60.4 Q0 -64 8.6 -60.4 Q12 -52 10.4 -36 Q0 -33.2 -10.4 -36 Z"
                  fill={PAPER}
                  stroke={INK}
                  strokeWidth="3.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M-10.4 -36 Q-12 -52 -8.6 -60.4 Q0 -64 8.6 -60.4 Q12 -52 10.4 -36 Q0 -33.2 -10.4 -36 Z"
                  fill={`url(#pk-hatch)`}
                  opacity="0.35"
                />
                <path
                  d="M-1.5 -61 L-2.5 -36 M7.5 -61 L8.5 -36"
                  stroke={INK}
                  strokeWidth="1.4"
                  fill="none"
                />
              </g>
              <HeadSide hair="cap" />
              <g className="pk-arm pk-arm--f pk-arm--sup">
                <g className="pk-clipboard">
                  <rect
                    x="2"
                    y="-46"
                    width="17"
                    height="21"
                    rx="1.5"
                    fill={PAPER}
                    stroke={INK}
                    strokeWidth="2"
                  />
                  <path
                    d="M6 -41 L15 -41 M6 -36.5 L15 -36.5 M6 -32 L12.5 -32"
                    stroke={INK}
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  ITEMS                                                               */
/* ==================================================================== */

function ItemVase() {
  return (
    <g className="pk-rock">
      <path
        d="M-4.6 -13 Q-5.6 -8 -8 -5 Q-10 -2 -8.4 0 L8.4 0 Q10 -2 8 -5 Q5.6 -8 4.6 -13 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M-5 -13 L5 -13" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M0 -13 L0 -25 M0 -21 Q-5.6 -25 -7.6 -22.6 M0 -19 Q5.6 -23 7.6 -20.6"
        stroke={INK}
        strokeWidth="1.9"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M-3.4 -22 Q0 -28 3.4 -22"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </g>
  );
}

function ItemBooks() {
  return (
    <g className="pk-rock">
      <path
        d="M-15 -4.4 Q0 -6 15 -4.4 L15 0 Q0 -1.6 -15 0 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M-13.4 -8.8 Q0 -10.4 13.4 -8.8 L13.4 -4.4 Q0 -6 -13.4 -4.4 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M-11.6 -13.2 Q0 -14.8 11.6 -13.2 L11.6 -8.8 Q0 -10.4 -11.6 -8.8 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </g>
  );
}

function ItemLamp() {
  return (
    <g className="pk-rock">
      <path
        d="M-9 -17 Q0 -19 9 -17 L6.6 0 Q0 1 -6.6 0 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
      <path
        d="M-11.6 -32 Q0 -35.4 11.6 -32 L9 -17 Q0 -19 -9 -17 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M-10.8 -25.6 Q0 -28 10.8 -25.6" stroke={INK} strokeWidth="1.3" opacity="0.45" />
      <path d="M0 -32 L0 -35.4" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}

function ItemFrame() {
  return (
    <g className="pk-rock">
      <path d={doodleRect(-13, -28, 26, 28, 1)} fill={PAPER} stroke={INK} strokeWidth="2.6" />
      <path
        d={doodleRect(-10, -25, 20, 22, 0.8)}
        fill="none"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.6"
      />
      <path
        d="M-8 -9 L-2 -16 L2 -11 L7 -17 L9 -9"
        fill="none"
        stroke={INK}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="4.4" cy="-20" r="1.9" fill="none" stroke={INK} strokeWidth="1.4" />
    </g>
  );
}

function PackedBox() {
  return (
    <g>
      <path
        d="M-26 -28 Q0 -29.8 26 -28 L26 0 Q0 -1.8 -26 0 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M-26 -14 Q0 -15.8 26 -14" stroke={INK} strokeWidth="1.4" opacity="0.5" fill="none" />
      <rect
        x="-5.4"
        y="-28"
        width="10.8"
        height="28"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.4"
        opacity="0.85"
      />
      <circle cx="15" cy="-14" r="6.6" fill="none" stroke={INK} strokeWidth="1.7" />
      <text
        x="15"
        y="-11.4"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="8"
        fontWeight="700"
        fill={INK}
      >
        SN
      </text>
    </g>
  );
}

/* ==================================================================== */
/*  CARTON                                                              */
/* ==================================================================== */

function Carton({ id }: { id: "k1" | "k2" }) {
  return (
    <g transform={id === "k1" ? "translate(452 486)" : "translate(678 486)"}>
      <g className={`pk-carton-motion pk-carton-motion--${id}`}>
        <ellipse cx="0" cy="1" rx="55" ry="4.4" fill={INK} opacity="0.09" />
        <ellipse className="pk-carton-mouth" cx="0" cy="-30" rx="47" ry="7" fill="#e9e9e1" />
        <path
          className="pk-carton-mouth"
          d="M-47 -30 Q0 -23 47 -30 Q0 -37 -47 -30 Z"
          fill="#e5e5dc"
          stroke={INK}
          strokeWidth="1.6"
        />
        <path
          d="M-50 -30 Q0 -32 50 -30 L48 0 Q0 1.8 -48 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M-49 -8 Q0 -9.8 49 -8" stroke={INK} strokeWidth="1.3" opacity="0.38" fill="none" />
        <path
          className={`pk-flap pk-flap--l pk-flap--l-${id}`}
          d="M-49 -33 L-4 -33 L-4 -26 L-49 -26 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          className={`pk-flap pk-flap--r pk-flap--r-${id}`}
          d="M49 -33 L4 -33 L4 -26 L49 -26 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <g className={`pk-tape pk-tape--${id}`}>
          <rect
            x="-6.2"
            y="-30"
            width="12.4"
            height="30"
            fill={PAPER}
            stroke={INK}
            strokeWidth="1.4"
          />
          <rect x="-6.2" y="-30" width="3.6" height="30" fill={INK} opacity="0.12" />
        </g>
        <rect
          x="-42"
          y="-22"
          width="24"
          height="13"
          rx="1"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.2"
          opacity="0.9"
        />
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  ROOM                                                                */
/* ==================================================================== */

function RoomShell() {
  return (
    <>
      <path d="M0 0 H960 V58 Q480 54 0 58 Z" fill="#f3f4ef" />
      <path d="M0 58 Q480 54 960 58" stroke={INK} strokeWidth="2.6" fill="none" />
      <path d="M0 50 Q480 46 960 50" stroke={INK} strokeWidth="1.2" opacity="0.4" fill="none" />
      <path d="M0 392 H960" stroke={INK} strokeWidth="2.8" />
      <path d="M0 382 H960" stroke={INK} strokeWidth="1.3" opacity="0.32" />
      <path d="M0 400 H960" stroke={INK} strokeWidth="1.4" opacity="0.45" />
      <g stroke={INK} strokeWidth="1" opacity="0.05">
        <path d="M120 96 V376 M210 90 V378 M330 96 V372 M440 90 V376 M560 96 V374 M660 90 V378 M820 96 V372 M900 92 V376" />
      </g>
      <path
        d="M596 210 Q622 207 648 210 L648 268 Q622 271 596 268 Z"
        fill="#f7f7ef"
        stroke={INK}
        strokeWidth="1.2"
        opacity="0.55"
      />
      <path d="M0 400 H960 V520 H0 Z" fill="#fafaf5" />
      <path d="M0 400 H960" stroke={INK} strokeWidth="2.6" />
      <g stroke={INK} strokeWidth="1.2" opacity="0.3">
        <path d="M0 428 Q480 425 960 428" fill="none" />
        <path d="M0 456 Q480 453 960 456" fill="none" />
        <path d="M0 484 Q480 481 960 484" fill="none" />
        <path d="M0 508 Q480 505 960 508" fill="none" />
      </g>
      <g stroke={INK} strokeWidth="1.1" opacity="0.2">
        <path d="M110 403 L104 428 M320 402 L324 428 M520 402 L516 428 M760 403 L766 428 M880 402 L884 428" />
        <path d="M200 431 L192 456 M420 430 L414 456 M700 430 L706 456" />
        <path d="M70 459 L58 484 M350 458 L342 484 M830 458 L840 484" />
      </g>
    </>
  );
}

/** Arched passage into the next room (corridor is drawn behind the walkers). */
function InnerArch() {
  return (
    <g>
      <path d="M92 392 L92 214 A56 58 0 0 1 204 214 L204 392 Z" fill="#eeecdf" />
      <path d="M92 392 L204 392 L186 372 L110 372 Z" fill="#f2f0e5" />
      <path d="M110 372 L186 372 L186 232 L110 232 Z" fill="#e6e4d7" />
      <path
        d="M124 372 L172 372 L172 268 Q148 254 124 268 Z"
        fill="#f7f6ee"
        stroke={INK}
        strokeWidth="1.6"
        opacity="0.9"
      />
      <g stroke={INK} strokeWidth="1.1" opacity="0.2">
        <path d="M92 340 L110 336 M204 340 L186 336 M96 300 L110 298 M200 300 L186 298" />
      </g>
      <path
        d="M96 232 Q104 250 98 274 Q106 292 100 312 Q108 330 102 348"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
        opacity="0.35"
      />
    </g>
  );
}

/** Arch casing, drawn in front of the walkers coming through it. */
function ArchCasing() {
  return (
    <g>
      <path
        d="M92 392 L92 214 A56 58 0 0 1 204 214 L204 392"
        fill="none"
        stroke={INK}
        strokeWidth="4.6"
        strokeLinecap="round"
      />
      <path
        d="M84 392 L84 212 A64 66 0 0 1 212 212 L212 392"
        fill="none"
        stroke={INK}
        strokeWidth="2.2"
        opacity="0.55"
      />
      <path
        d="M84 392 L212 392 L220 404 L76 404 Z"
        fill="#f4f2e8"
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M84 398 L212 398" stroke={INK} strokeWidth="1" opacity="0.35" />
    </g>
  );
}

function WindowArt() {
  return (
    <g>
      <path d={doodleRect(250, 208, 118, 94, 1.4)} fill={PAPER} stroke={INK} strokeWidth="3.4" />
      <path d={doodleRect(257, 215, 104, 80, 0.9)} fill="#f8f7ee" stroke={INK} strokeWidth="1.6" />
      <path d="M309 215 V295 M257 255 H361" stroke={INK} strokeWidth="2.2" opacity="0.8" />
      <path d="M259 217 H359 V253 H259 Z" fill="#fdfcf1" opacity="0.9" />
      <path
        d="M241 302 H375 L380 312 H236 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <g className="pk-curtain pk-curtain--l">
        <path
          d="M236 196 Q246 216 238 246 Q246 272 238 302 Q252 314 264 302 Q272 272 260 244 Q268 214 258 196 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M248 206 Q253 234 246 260 Q253 280 246 298"
          fill="none"
          stroke={INK}
          strokeWidth="1.2"
          opacity="0.4"
        />
      </g>
      <g className="pk-curtain pk-curtain--r">
        <path
          d="M382 196 Q372 216 380 246 Q372 272 380 302 Q366 314 354 302 Q346 272 358 244 Q350 214 360 196 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M370 206 Q365 234 372 260 Q365 280 372 298"
          fill="none"
          stroke={INK}
          strokeWidth="1.2"
          opacity="0.4"
        />
      </g>
      <path d="M226 194 H392" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="226" cy="194" r="3.6" fill={PAPER} stroke={INK} strokeWidth="2" />
      <circle cx="392" cy="194" r="3.6" fill={PAPER} stroke={INK} strokeWidth="2" />
    </g>
  );
}

function PictureArt() {
  return (
    <g>
      <path d={doodleRect(404, 224, 68, 80, 1)} fill={PAPER} stroke={INK} strokeWidth="3" />
      <path
        d={doodleRect(410, 230, 56, 68, 0.8)}
        fill="#f7f7ef"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.85"
      />
      <path
        d="M412 290 L428 266 L440 282 L452 262 L462 290 Z"
        fill="none"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="450" cy="248" r="4.4" fill="none" stroke={INK} strokeWidth="1.7" />
    </g>
  );
}

function ClockArt() {
  return (
    <g transform="translate(520 262)">
      <circle r="23" fill={PAPER} stroke={INK} strokeWidth="3" />
      <circle r="16.4" fill="none" stroke={INK} strokeWidth="1" opacity="0.3" />
      <g stroke={INK} strokeWidth="1.7">
        <path d="M0 -21 V-17.6 M0 21 V17.6 M-21 0 H-17.6 M21 0 H17.6" />
      </g>
      <path d="M0 0 L7.6 -4.4" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <g className="pk-clock-min">
        <path d="M-1 0 L1 0 L1 -14 L-1 -14 Z" fill={INK} />
      </g>
      <circle r="1.8" fill={INK} />
    </g>
  );
}

function MovingBits() {
  return (
    <>
      <g transform="translate(146 400)">
        <path
          d="M0 0 L26 -92 L54 -84 L30 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 -30 L48 -18 M15 -52 L50 -40 M21 -72 L44 -62"
          stroke={INK}
          strokeWidth="1.4"
          opacity="0.5"
        />
      </g>
      <g transform="translate(178 400)">
        <path
          d="M0 0 L18 -78 L40 -72 L24 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M7 -26 L34 -17 M12 -46 L35 -38" stroke={INK} strokeWidth="1.3" opacity="0.45" />
      </g>
      <g transform="translate(214 402)">
        <ellipse cx="0" cy="-3" rx="12" ry="9" fill={PAPER} stroke={INK} strokeWidth="2.4" />
        <ellipse cx="0" cy="-3" rx="5" ry="3.4" fill="none" stroke={INK} strokeWidth="1.6" />
      </g>
      <g transform="translate(676 402)">
        <path
          d="M-8 0 Q-12 -6 -6 -9 Q-3 -13 3 -10 Q9 -11 8 -4 Q11 0 4 1 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </g>
      <g transform="translate(742 402)">
        <path
          d="M-13 0 L-10 -26 L10 -26 L13 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <ellipse cx="0" cy="-26" rx="10" ry="3.6" fill={PAPER} stroke={INK} strokeWidth="2" />
      </g>
      <g transform="translate(700 190)">
        <path d="M0 0 L0 -6" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
        <path
          d="M-16 -6 Q-16 -18 -2 -18 Q12 -18 12 -6 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M12 -8 Q22 -10 26 -6 Q20 -3 11 -5 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </>
  );
}

function Rug() {
  return (
    <>
      <path
        d="M320 470 Q560 466 800 470 L792 516 Q560 512 328 516 Z"
        fill="#f6f5ec"
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M338 478 Q560 474 782 478 L774 508 Q560 504 346 508 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.42"
        strokeDasharray="11 9"
      />
    </>
  );
}

function PendantArt() {
  return (
    <g>
      <path d="M594 58 L594 102" stroke={INK} strokeWidth="2" />
      <g className="pk-lamp-sway">
        <path
          d="M574 128 Q576 102 594 102 Q612 102 614 128 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path d="M574 128 Q594 135 614 128" fill="none" stroke={INK} strokeWidth="2.2" />
        <ellipse cx="594" cy="136" rx="10" ry="3.4" fill="#fdf8e6" opacity="0.9" />
      </g>
    </g>
  );
}

/** The landing beyond the front door (stays visible through the open door). */
function DoorOpening() {
  return (
    <>
      <defs>
        <linearGradient id="pk-daylight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdfbf2" />
          <stop offset="60%" stopColor="#f8f4e4" />
          <stop offset="100%" stopColor="#efeade" />
        </linearGradient>
      </defs>
      <g>
        <path d="M772 160 H898 V392 H772 Z" fill="url(#pk-daylight)" />
        <path d="M772 330 H898 V392 H772 Z" fill="#f1eee1" />
        <path d="M772 340 H898" stroke={INK} strokeWidth="1.4" opacity="0.35" />
        <path
          d="M784 392 L784 356 Q806 350 828 356 L828 392"
          fill="none"
          stroke={INK}
          strokeWidth="1.6"
          opacity="0.3"
        />
        <path d="M790 140 H880 V158 H790 Z" fill="#fdfaf0" stroke={INK} strokeWidth="2.2" />
        <path d="M835 140 V158 M790 149 H880" stroke={INK} strokeWidth="1.4" opacity="0.7" />
      </g>
    </>
  );
}

/** Door frame + the leaf, held wide open. Drawn in front of the walkers. */
function DoorFrame() {
  return (
    <>
      <path
        d="M772 160 H898 M772 160 V392 M898 160 V392"
        fill="none"
        stroke={INK}
        strokeWidth="5"
        strokeLinecap="square"
      />
      <path d="M762 146 H908" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M756 160 H772 M898 160 H914" stroke={INK} strokeWidth="2.6" />
      <path d="M766 168 H904" stroke={INK} strokeWidth="1.4" opacity="0.4" />
      {/* leaf swung right back against the landing wall, fully open */}
      <path
        d="M900 164 Q906 162 908 170 L936 210 Q940 216 940 226 L940 374 Q940 386 928 384 L906 380 Q900 378 900 368 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M910 188 L928 220 L928 368 L910 364 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path d="M910 246 L928 250 M910 300 L928 304" stroke={INK} strokeWidth="1.3" opacity="0.4" />
      <circle cx="908" cy="282" r="2.6" fill={INK} />
      {/* nameplate, bell, switch */}
      <g>
        <rect
          x="800"
          y="112"
          width="70"
          height="20"
          rx="3"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2"
        />
        <text
          x="835"
          y="127"
          textAnchor="middle"
          fontFamily={HAND}
          fontSize="13"
          fontWeight="700"
          fill={INK}
        >
          Shree Nath
        </text>
      </g>
      <circle cx="762" cy="238" r="5" fill={PAPER} stroke={INK} strokeWidth="2" />
      <rect
        x="726"
        y="216"
        width="12"
        height="20"
        rx="2"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2"
      />
      {/* threshold + mat */}
      <path
        d="M766 392 L904 392 L914 408 L756 408 Z"
        fill="#f6f4ea"
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M790 416 Q834 412 878 416 L874 434 Q834 430 794 434 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.8"
        strokeDasharray="8 7"
        opacity="0.6"
      />
    </>
  );
}

function Stool({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 462)`}>
      <ellipse cx="0" cy="1" rx="21" ry="3" fill={INK} opacity="0.1" />
      <path
        d="M-20 -18 Q0 -21 20 -18 L18 -13 Q0 -16 -18 -13 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M-15 -14 L-18 0 M15 -14 L18 0 M0 -15 L0 0"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

/* ==================================================================== */
/*  SCENE                                                               */
/* ==================================================================== */

const CARRY_C1 = (
  <>
    <g className="pk-item pk-item--carry-c1a" transform="translate(16 -30)">
      <ItemVase />
    </g>
    <g className="pk-item pk-item--carry-c1b" transform="translate(16 -30)">
      <ItemLamp />
    </g>
  </>
);

const CARRY_C3 = (
  <>
    <g className="pk-item pk-item--carry-c3a" transform="translate(16 -30)">
      <ItemBooks />
    </g>
    <g className="pk-item pk-item--carry-c3b" transform="translate(16 -30)">
      <ItemFrame />
    </g>
    <g className="pk-item pk-item--carry-c3box" transform="translate(10 -42)">
      <PackedBox />
    </g>
  </>
);

const CARRY_C2 = (
  <>
    <g className="pk-item pk-item--carry-c2a" transform="translate(10 -42)">
      <PackedBox />
    </g>
    <g className="pk-item pk-item--carry-c2b" transform="translate(10 -42)">
      <PackedBox />
    </g>
    <g className="pk-item pk-item--carry-c2c" transform="translate(10 -42)">
      <PackedBox />
    </g>
  </>
);

function SceneArt({ uid }: { uid: string }) {
  return (
    <>
      <defs>
        <filter id={`pk-rough-${uid}`} x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.014"
            numOctaves="2"
            result="noise"
            seed="9"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.1" />
        </filter>
        <pattern
          id="pk-hatch"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path d="M0 0 L0 5" stroke={INK} strokeWidth="1.1" />
        </pattern>
        <radialGradient id={`pk-glow-${uid}`} cx="0.5" cy="0.4" r="0.7">
          <stop offset="0%" stopColor="#fffdf2" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#fffdf2" stopOpacity="0" />
        </radialGradient>
        {/* the two openings: walkers inside them are clipped by the wall */}
        <clipPath id={`pk-open-arch-${uid}`} clipPathUnits="userSpaceOnUse">
          <path d="M92 392 L92 214 A56 58 0 0 1 204 214 L204 392 Z" />
        </clipPath>
        <clipPath id={`pk-open-door-${uid}`} clipPathUnits="userSpaceOnUse">
          <path d="M772 160 H898 V392 H772 Z" />
        </clipPath>
      </defs>

      <g filter={`url(#pk-rough-${uid})`}>
        <RoomShell />
        <InnerArch />
        <WindowArt />
        <PictureArt />
        <ClockArt />
        <PendantArt />
        <MovingBits />
        <Rug />
        <Stool x={366} />
        <Stool x={636} />
        <DoorOpening />
      </g>

      <ellipse cx="309" cy="270" rx="150" ry="120" fill={`url(#pk-glow-${uid})`} />

      {/* ---- walkers inside the openings (drawn behind everything) ---- */}
      <g clipPath={`url(#pk-open-arch-${uid})`}>
        <CarrierShell id="c1" deep>
          <CarrierBody hair="bald">{CARRY_C1}</CarrierBody>
        </CarrierShell>
        <CarrierShell id="c3" deep>
          <CarrierBody hair="flat">{CARRY_C3}</CarrierBody>
        </CarrierShell>
      </g>
      <g clipPath={`url(#pk-open-door-${uid})`}>
        <CarrierShell id="c2" deep>
          <CarrierBody hair="spiky">{CARRY_C2}</CarrierBody>
        </CarrierShell>
        <CarrierShell id="c3" deep>
          <CarrierBody hair="flat">{CARRY_C3}</CarrierBody>
        </CarrierShell>
      </g>

      {/* ---- the packers ---- */}
      <Packer id="k1" hair="part" items={[<ItemVase key="v" />, <ItemLamp key="l" />]} />
      <Packer id="k2" hair="cap" items={[<ItemBooks key="b" />, <ItemFrame key="f" />]} />
      <Carton id="k1" />
      <Carton id="k2" />

      {/* finished cartons waiting on the mat */}
      <g transform="translate(452 486)">
        <g className="pk-item pk-item--done1">
          <PackedBox />
        </g>
        <g className="pk-item pk-item--done3">
          <PackedBox />
        </g>
      </g>
      <g transform="translate(678 486)">
        <g className="pk-item pk-item--done2">
          <PackedBox />
        </g>
        <g className="pk-item pk-item--done4">
          <PackedBox />
        </g>
      </g>

      {/* items waiting on the stools */}
      <g transform="translate(366 444)">
        <g className="pk-item pk-item--stool-a1">
          <ItemVase />
        </g>
        <g className="pk-item pk-item--stool-a2">
          <ItemLamp />
        </g>
      </g>
      <g transform="translate(636 444)">
        <g className="pk-item pk-item--stool-b1">
          <ItemBooks />
        </g>
        <g className="pk-item pk-item--stool-b2">
          <ItemFrame />
        </g>
      </g>

      {/* ---- carriers, front copies ---- */}
      <CarrierShell id="c1">
        <CarrierBody hair="bald">{CARRY_C1}</CarrierBody>
      </CarrierShell>
      <CarrierShell id="c3">
        <CarrierBody hair="flat">{CARRY_C3}</CarrierBody>
      </CarrierShell>
      <Supervisor />
      <CarrierShell id="c2">
        <CarrierBody hair="spiky">{CARRY_C2}</CarrierBody>
      </CarrierShell>

      {/* ---- the openings' frames, in front of the walkers ---- */}
      <ArchCasing />
      <DoorFrame />
    </>
  );
}

export function PackingSceneAnimation() {
  return (
    <>
      <svg
        className="move-scene move-scene--wide"
        viewBox="0 0 960 520"
        role="img"
        aria-labelledby="packing-scene-title packing-scene-description"
      >
        <title id="packing-scene-title">Shree Nath Packers &amp; Movers crew packing a home</title>
        <desc id="packing-scene-description">
          A hand-drawn black and white cartoon inside a home: a crew of six works in parallel — a
          porter and two helpers walk in through the arched passage carrying a vase, books, a lamp
          and a picture frame, set them on stools beside two packers sitting on the floor, and the
          packers box each item, fold the flaps and tape the cartons shut. Other workers carry the
          finished cartons out through the open front door while a supervisor with a clipboard
          watches.
        </desc>
        <SceneArt uid="wide" />
      </svg>

      <svg
        className="move-scene move-scene--compact"
        viewBox="60 60 840 460"
        role="img"
        aria-labelledby="packing-scene-compact-title packing-scene-compact-description"
      >
        <title id="packing-scene-compact-title">Shree Nath Packers &amp; Movers packing crew</title>
        <desc id="packing-scene-compact-description">
          A hand-drawn black and white cartoon: workers carry items in and boxes out of a home while
          two packers fill cartons on the floor.
        </desc>
        <SceneArt uid="compact" />
      </svg>
    </>
  );
}
