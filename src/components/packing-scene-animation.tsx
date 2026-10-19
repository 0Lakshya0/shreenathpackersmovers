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
/*  HAIR / FACES                                                        */
/* ==================================================================== */

function HairSide({ hair }: { hair: Hair }) {
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

function HairFront({ hair }: { hair: Hair }) {
  switch (hair) {
    case "spiky":
      return (
        <path
          d="M-9 -4 L-7 -11 L-4 -7 L-1 -13 L2 -8 L5 -12 L8 -6"
          fill="none"
          stroke={INK}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case "flat":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round">
          <path d="M-10 -2 Q-11 -10 0 -10 Q11 -10 10 -2" />
          <path d="M-10 -2 L10 -2" strokeWidth="1.8" />
        </g>
      );
    case "part":
      return (
        <g fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round">
          <path d="M-10 0 Q-11 -11 0 -11 Q11 -11 10 0" />
          <path d="M1 -11 L2 -4" strokeWidth="1.6" />
        </g>
      );
    case "cap":
      return (
        <g>
          <path
            d="M-10 -2 Q-10 -11 0 -11 Q10 -11 10 -2 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M-11 -3 Q0 -6 12 -3 Q13 -1 11 -1 Q0 -4 -10 -1 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </g>
      );
    case "bald":
      return (
        <g fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round">
          <path d="M-9 -3 Q-10 -7 -6 -8" />
          <path d="M9 -3 Q10 -7 6 -8" />
        </g>
      );
  }
}

/** Profile head (walker). Local origin: the character's feet. */
function HeadSide({ hair }: { hair: Hair }) {
  return (
    <g className="pk-head">
      <g className="pk-headsway">
        <g transform="translate(0 -6.5)">
          <rect x="0" y="-58" width="5.5" height="5" fill={PAPER} stroke={INK} strokeWidth="2" />
          <circle cx="2.5" cy="-60.5" r="7.4" fill={PAPER} stroke={INK} strokeWidth="3.2" />
          <circle className="pk-eye" cx="6.6" cy="-61.8" r="1.15" fill={INK} />
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
            className="pk-mouth"
            cx="6.8"
            cy="-56.9"
            r="1.6"
            fill="none"
            stroke={INK}
            strokeWidth="1.6"
          />
          <HairSide hair={hair} />
          <path
            className="pk-sweat"
            d="M10.5 -66 Q13 -63 10.5 -61 Q8 -63 10.5 -66 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  );
}

/** Front-facing head of the seated packer. Local origin: the packer's seat. */
function HeadFront({ hair }: { hair: Hair }) {
  return (
    <g className="pk-head pk-head--front">
      <g className="pk-headsway">
        <circle cx="0" cy="-52" r="10.4" fill={PAPER} stroke={INK} strokeWidth="3" />
        <circle className="pk-eye" cx="-3.6" cy="-53" r="1.25" fill={INK} />
        <circle className="pk-eye" cx="3.6" cy="-53" r="1.25" fill={INK} />
        <path
          d="M-6 -56.6 Q-3.6 -57.8 -1.6 -56.8 M1.6 -56.8 Q3.6 -57.8 6 -56.6"
          stroke={INK}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0 -52.6 Q-0.9 -51.4 0.2 -50.8"
          stroke={INK}
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M-2.6 -47.6 Q0 -45.6 2.6 -47.6"
          stroke={INK}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse
          className="pk-mouth"
          cx="0"
          cy="-46.8"
          rx="1.9"
          ry="2.2"
          fill="none"
          stroke={INK}
          strokeWidth="1.5"
        />
        <HairFront hair={hair} />
        <path
          className="pk-sweat"
          d="M10.8 -58 Q13 -55 10.8 -53 Q8.6 -55 10.8 -58 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  WALKER (profile) — porter + two loaders                             */
/* ==================================================================== */

function Leg({ back }: { back?: boolean }) {
  return (
    <g className={back ? "pk-leg pk-leg--b" : "pk-leg pk-leg--f"} transform="translate(0 -37)">
      <g className="pk-thigh">
        <rect x="-3" y="0" width="6" height="19" fill="none" />
        <path d="M0 0 L0 19" stroke={INK} strokeWidth="6.6" strokeLinecap="round" fill="none" />
        <g className="pk-shin" transform="translate(0 19)">
          <rect x="-3" y="0" width="6" height="19.6" fill="none" />
          <path d="M0 0 L0 16.8" stroke={INK} strokeWidth="5.6" strokeLinecap="round" fill="none" />
          <path
            d="M-3.6 13.6 L7.2 13.6 Q9.8 13.6 9.8 15.5 Q9.8 19 6.4 19 L-5.2 19 Q-7.2 19 -7.2 16.4 Q-7.2 13.6 -3.6 13.6 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.4"
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
        d={back ? "M-6 -57 Q-13 -48 -10.5 -36" : "M6 -57 Q13 -48 10.5 -36"}
        stroke={INK}
        strokeWidth="4.9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={back ? -10.5 : 10.5} cy={-35} r="2.8" fill={PAPER} stroke={INK} strokeWidth="2" />
      {children}
    </g>
  );
}

function TorsoSide() {
  return (
    <g className="pk-torso-g">
      <path
        d="M-9 -36 Q-10.5 -50 -7.5 -58 Q0 -61.5 7.5 -58 Q10.5 -50 9 -36 Q0 -33.6 -9 -36 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <text
        x="0"
        y="-42"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="9"
        fontWeight="700"
        fill={INK}
      >
        SN
      </text>
    </g>
  );
}

function Walker({
  id,
  x,
  scale,
  hair,
  children,
}: {
  id: string;
  x: number;
  scale: number;
  hair: Hair;
  children?: ReactNode;
}) {
  return (
    <g className={`pk pk--${id}`} transform={`translate(${x} 448)`}>
      <ellipse className="pk-shadow" cx="0" cy="1.5" rx="15" ry="3" fill={INK} opacity="0.1" />
      <g className="pk-flip">
        <g className="pk-wobble">
          <g className="pk-fit" style={{ "--s": scale } as CSSProperties}>
            <rect x="-34" y="-82" width="68" height="82" fill="none" />
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
        </g>
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  SEATED PACKER (front view)                                          */
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
      transform={id === "k1" ? "translate(430 448)" : "translate(700 448)"}
    >
      {/* sitting mat, crossing legs peeking out beside the carton */}
      <g className="pk-seat">
        <ellipse cx="0" cy="-1" rx="70" ry="8" fill={INK} opacity="0.06" />
        <path
          d="M-66 -9 Q-72 -2 -64 1 L-44 1 Q-50 -5 -46 -11 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M66 -9 Q72 -2 64 1 L44 1 Q50 -5 46 -11 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </g>
      <g className="pk-bob">
        <g className="pk-upper">
          <g className="pk-torso-g">
            <path
              d="M-19 -6 Q-21 -28 -15 -42 Q-8 -46 0 -46 Q8 -46 15 -42 Q21 -28 19 -6 Q0 -3 -19 -6 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            <path
              d="M-7 -45 Q0 -39 7 -45"
              stroke={INK}
              strokeWidth="1.6"
              fill="none"
              opacity="0.65"
            />
            <text
              x="0"
              y="-25"
              textAnchor="middle"
              fontFamily={HAND}
              fontSize="10"
              fontWeight="700"
              fill={INK}
            >
              SN
            </text>
          </g>
          <HeadFront hair={hair} />
          <g className="pk-arm pk-arm--l" transform="translate(-15 -40)">
            <rect x="-12" y="0" width="24" height="30" fill="none" />
            <path
              d="M0 0 Q-9 8 -10 16 Q-11 23 -6 27"
              stroke={INK}
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="-5.5" cy="27.5" r="3" fill={PAPER} stroke={INK} strokeWidth="2" />
          </g>
          <g className="pk-arm pk-arm--r" transform="translate(15 -40)">
            <rect x="-12" y="0" width="24" height="30" fill="none" />
            <path
              d="M0 0 Q9 8 10 16 Q11 23 6 27"
              stroke={INK}
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="5.5" cy="27.5" r="3" fill={PAPER} stroke={INK} strokeWidth="2" />
          </g>
        </g>
        <g className="pk-item pk-item--hand pk-item--hand1">{items[0]}</g>
        <g className="pk-item pk-item--hand pk-item--hand2">{items[1]}</g>
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  ITEMS                                                               */
/* ==================================================================== */

function ItemVase() {
  return (
    <g className="pk-rock pk-rock--soft">
      <path
        d="M-4 -13 Q-5 -8 -7 -5 Q-9 -2 -7.5 0 L7.5 0 Q9 -2 7 -5 Q5 -8 4 -13 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M-4.4 -13 L4.4 -13" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M0 -13 L0 -24 M0 -20 Q-5 -24 -7 -22 M0 -18 Q5 -22 7 -20"
        stroke={INK}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M-3 -21 Q0 -26 3 -21"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M-5.6 -7.5 L5.6 -7.5" stroke={INK} strokeWidth="1.2" opacity="0.5" />
    </g>
  );
}

function ItemBooks() {
  return (
    <g className="pk-rock pk-rock--soft">
      <path
        d="M-14 -4 Q0 -5.4 14 -4 L14 0 Q0 -1.4 -14 0 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M-12.5 -8 Q0 -9.2 12.5 -8 L12.5 -4 Q0 -5.2 -12.5 -4 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M-11 -12 Q0 -13 11 -12 L11 -8 Q0 -9 -11 -8 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M-8 -4.6 L-8 0 M-6.6 -8.6 L-6.6 -4 M5 -12.6 L5 -8"
        stroke={INK}
        strokeWidth="1.2"
        opacity="0.55"
      />
    </g>
  );
}

function ItemLamp() {
  return (
    <g className="pk-rock pk-rock--soft">
      <path
        d="M-8 -16 Q0 -18 8 -16 L6 0 Q0 1 -6 0 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M-10 -30 Q0 -33 10 -30 L8 -16 Q0 -18 -8 -16 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M-9.6 -24 Q0 -26 9.6 -24" stroke={INK} strokeWidth="1.2" opacity="0.45" />
      <path d="M0 -30 L0 -33" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

function ItemFrame() {
  return (
    <g className="pk-rock pk-rock--soft">
      <path d={doodleRect(-12, -26, 24, 26, 1)} fill={PAPER} stroke={INK} strokeWidth="2.4" />
      <path
        d={doodleRect(-9, -23, 18, 20, 0.8)}
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
        opacity="0.6"
      />
      <path
        d="M-7 -9 L-2 -15 L2 -11 L6 -16 L8 -9"
        fill="none"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="-18.5" r="1.6" fill="none" stroke={INK} strokeWidth="1.2" />
    </g>
  );
}

/** Closed + taped moving carton, front view. Local origin: bottom centre. */
function PackedBox() {
  return (
    <g>
      <path
        d="M-24 -26 Q0 -27.6 24 -26 L24 0 Q0 -1.6 -24 0 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M-24 -13 Q0 -14.6 24 -13"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.55"
        fill="none"
      />
      <rect
        x="-5"
        y="-26"
        width="10"
        height="26"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.85"
      />
      <circle cx="14" cy="-13" r="6" fill="none" stroke={INK} strokeWidth="1.5" />
      <text
        x="14"
        y="-10.6"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="7.5"
        fontWeight="700"
        fill={INK}
      >
        SN
      </text>
    </g>
  );
}

/* ==================================================================== */
/*  CARTON — open, with folding flaps and tape                          */
/* ==================================================================== */

function Carton({ id }: { id: "k1" | "k2" }) {
  return (
    <g transform={id === "k1" ? "translate(478 474)" : "translate(652 474)"}>
      <g className={`pk-carton-motion pk-carton-motion--${id}`}>
        {/* soft floor shadow */}
        <ellipse cx="0" cy="1" rx="52" ry="4" fill={INK} opacity="0.09" />
        {/* inside of the open box */}
        <ellipse className="pk-carton-mouth" cx="0" cy="-30" rx="45" ry="6.5" fill="#e9e9e1" />
        <path
          className="pk-carton-mouth"
          d="M-45 -30 Q0 -23.6 45 -30 Q0 -36.4 -45 -30 Z"
          fill="#e5e5dc"
          stroke={INK}
          strokeWidth="1.4"
        />
        {/* front face */}
        <path
          d="M-48 -30 Q0 -31.8 48 -30 L46 0 Q0 1.6 -46 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path d="M-47 -8 Q0 -9.6 47 -8" stroke={INK} strokeWidth="1.2" opacity="0.4" fill="none" />
        {/* flaps */}
        <path
          className={`pk-flap pk-flap--l pk-flap--l-${id}`}
          d="M-47 -33 L-4 -33 L-4 -26 L-47 -26 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          className={`pk-flap pk-flap--r pk-flap--r-${id}`}
          d="M47 -33 L4 -33 L4 -26 L47 -26 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* tape */}
        <g className={`pk-tape pk-tape--${id}`}>
          <rect x="-6" y="-30" width="12" height="30" fill={PAPER} stroke={INK} strokeWidth="1.3" />
          <rect x="-6" y="-30" width="3.4" height="30" fill={INK} opacity="0.12" />
        </g>
        {/* label */}
        <rect
          x="-40"
          y="-22"
          width="22"
          height="12"
          rx="1"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.1"
          opacity="0.9"
        />
        <path d="M-36 -18 L-24 -18 M-36 -15 L-28 -15" stroke={INK} strokeWidth="1" opacity="0.5" />
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
      {/* ceiling band */}
      <path d="M0 0 H960 V54 Q480 50 0 54 Z" fill="#f3f4ef" />
      <path d="M0 54 Q480 50 960 54" stroke={INK} strokeWidth="2.4" fill="none" />
      <path d="M0 47 Q480 43 960 47" stroke={INK} strokeWidth="1.1" opacity="0.45" fill="none" />
      {/* back wall + skirting */}
      <path d="M0 54 V386 H960 V54" fill="none" stroke="none" />
      <path d="M0 386 H960" stroke={INK} strokeWidth="2.6" />
      <path d="M0 377 H960" stroke={INK} strokeWidth="1.2" opacity="0.35" />
      <path d="M0 394 H960" stroke={INK} strokeWidth="1.4" opacity="0.5" />
      {/* faint wallpaper ticks */}
      <g stroke={INK} strokeWidth="1" opacity="0.06">
        <path d="M120 90 V360 M200 82 V364 M300 88 V358 M400 80 V362 M500 86 V360 M600 82 V364 M700 88 V358 M800 80 V362 M880 86 V360" />
      </g>
      {/* floor */}
      <path d="M0 394 H960 V480 H0 Z" fill="#fafaf5" />
      <path d="M0 394 H960" stroke={INK} strokeWidth="2.4" />
      <g stroke={INK} strokeWidth="1.2" opacity="0.32">
        <path d="M0 418 Q480 415 960 418" fill="none" />
        <path d="M0 442 Q480 439 960 442" fill="none" />
        <path d="M0 466 Q480 463 960 466" fill="none" />
      </g>
      <g stroke={INK} strokeWidth="1.1" opacity="0.22">
        <path d="M90 397 L86 418 M300 396 L302 418 M520 396 L518 418 M760 397 L764 418" />
        <path d="M180 421 L172 442 M420 420 L416 442 M690 420 L694 442" />
        <path d="M60 445 L50 466 M340 444 L334 466 M820 444 L826 466" />
      </g>
    </>
  );
}

/** Doorway into the next room — inside the house. */
function InnerDoor() {
  return (
    <g>
      {/* dark corridor beyond */}
      <path d="M96 148 H214 V386 H96 Z" fill="#eceade" />
      <g stroke={INK} strokeWidth="1.1" opacity="0.22">
        <path d="M104 356 L150 386 M150 200 L150 386 M198 176 L198 386" />
      </g>
      {/* a further doorway glimpsed down the corridor */}
      <path
        d="M128 236 H186 V386 H128 Z"
        fill="#e2e0d4"
        stroke={INK}
        strokeWidth="1.6"
        opacity="0.85"
      />
      <path
        d="M146 246 H176 V386 H146 Z"
        fill="#f6f5ec"
        stroke={INK}
        strokeWidth="1"
        opacity="0.9"
      />
      {/* floor of the corridor */}
      <path d="M96 372 Q155 368 214 372 L214 386 Q155 382 96 386 Z" fill="#f0eee3" />
      {/* frame */}
      <path
        d="M96 148 H214 M96 148 V386 M214 148 V386"
        fill="none"
        stroke={INK}
        strokeWidth="4.2"
        strokeLinecap="square"
      />
      <path d="M88 140 H222" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <path d="M84 148 H96 M214 148 H226" stroke={INK} strokeWidth="2.2" />
      {/* door leaf, swung open against the wall */}
      <path
        d="M46 150 Q44 148 46 152 L46 380 Q46 384 50 384 L84 382 Q88 382 88 378 L88 156 Q88 150 82 150 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M54 162 L80 162 L80 372 L54 372 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.55"
      />
      <circle cx="81" cy="272" r="2" fill={INK} />
      {/* threshold step into the hall */}
      <path
        d="M96 386 L214 386 L222 398 L88 398 Z"
        fill="#f4f2e8"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M96 392 H214" stroke={INK} strokeWidth="1" opacity="0.35" />
    </g>
  );
}

/** Doorway out to the landing — light spills in. */
function ExitDoor() {
  return (
    <>
      <defs>
        <linearGradient id="pk-out-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdfbf2" />
          <stop offset="62%" stopColor="#f7f4e6" />
          <stop offset="100%" stopColor="#eeeade" />
        </linearGradient>
      </defs>
      <g>
        <path d="M800 148 H922 V386 H800 Z" fill="url(#pk-out-light)" />
        <g stroke={INK} strokeWidth="1.1" opacity="0.18">
          <path d="M812 372 L840 386 M890 200 L890 386" />
        </g>
        {/* glimpse of the landing wall and a step down */}
        <path d="M922 148 V386" stroke={INK} strokeWidth="1.4" opacity="0.25" />
        <path d="M800 372 H922 V386 H800 Z" fill="#eeece1" />
        <path d="M806 382 H916" stroke={INK} strokeWidth="1.2" opacity="0.4" />
        {/* frame */}
        <path
          d="M800 148 H922 M800 148 V386 M922 148 V386"
          fill="none"
          stroke={INK}
          strokeWidth="4.2"
          strokeLinecap="square"
        />
        <path d="M792 140 H930" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <path d="M788 148 H800 M922 148 H934" stroke={INK} strokeWidth="2.2" />
        {/* leaf, swung out of the way */}
        <path
          d="M922 152 Q922 148 928 150 L956 170 Q960 172 960 178 L960 380 Q960 386 954 384 L926 382 Q922 382 922 376 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M932 168 L950 178 L950 374 L932 372 Z"
          fill="none"
          stroke={INK}
          strokeWidth="1.3"
          opacity="0.5"
        />
        <circle cx="929" cy="276" r="2" fill={INK} />
        {/* light spill on the floor */}
        <path d="M800 394 L922 394 L946 452 L782 452 Z" fill="#fbf6e4" opacity="0.85" />
        <path
          d="M800 394 L922 394 L946 452 L782 452 Z"
          fill="none"
          stroke={INK}
          strokeWidth="0.9"
          opacity="0.16"
        />
        {/* doormat */}
        <path
          d="M812 400 Q864 397 910 400 L906 416 Q862 413 816 416 Z"
          fill="none"
          stroke={INK}
          strokeWidth="1.6"
          strokeDasharray="7 6"
          opacity="0.55"
        />
      </g>
    </>
  );
}

function WindowArt() {
  return (
    <g>
      {/* frame */}
      <path d={doodleRect(250, 246, 112, 90, 1.2)} fill={PAPER} stroke={INK} strokeWidth="3" />
      <path d={doodleRect(256, 252, 100, 78, 0.8)} fill="#f8f7ee" stroke={INK} strokeWidth="1.4" />
      {/* muntins */}
      <path d="M306 252 V330 M256 291 H356" stroke={INK} strokeWidth="2" opacity="0.8" />
      {/* soft daylight */}
      <path d="M258 254 H354 V288 H258 Z" fill="#fdfcf1" opacity="0.9" />
      <path
        d="M258 254 H354 V288 H258 Z"
        fill="none"
        stroke={INK}
        strokeWidth="0.8"
        opacity="0.12"
      />
      {/* sheer curtain sheen */}
      <path d="M262 256 L272 256 L266 328 L258 328 Z" fill="#ffffff" opacity="0.5" />
      {/* sill */}
      <path
        d="M242 336 H370 L374 344 H238 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* curtains */}
      <g className="pk-curtain pk-curtain--l">
        <path
          d="M238 232 Q246 250 240 278 Q246 300 240 330 Q252 340 262 330 Q268 300 258 276 Q264 250 256 232 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M248 240 Q252 262 246 288 Q252 306 246 326"
          fill="none"
          stroke={INK}
          strokeWidth="1.1"
          opacity="0.4"
        />
      </g>
      <g className="pk-curtain pk-curtain--r">
        <path
          d="M382 232 Q374 250 380 278 Q374 300 380 330 Q368 340 358 330 Q352 300 362 276 Q356 250 364 232 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M372 240 Q368 262 374 288 Q368 306 374 326"
          fill="none"
          stroke={INK}
          strokeWidth="1.1"
          opacity="0.4"
        />
      </g>
      {/* rod */}
      <path d="M228 230 H392" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="228" cy="230" r="3" fill={PAPER} stroke={INK} strokeWidth="1.8" />
      <circle cx="392" cy="230" r="3" fill={PAPER} stroke={INK} strokeWidth="1.8" />
    </g>
  );
}

function SofaArt() {
  return (
    <g>
      <ellipse cx="284" cy="401" rx="82" ry="5" fill={INK} opacity="0.08" />
      {/* legs */}
      <path
        d="M232 392 L228 401 M336 392 L340 401"
        stroke={INK}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {/* back */}
      <path
        d="M218 358 Q216 336 226 330 Q284 324 342 330 Q352 336 350 358 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M284 331 L284 356" stroke={INK} strokeWidth="1.3" opacity="0.5" />
      {/* seat */}
      <path
        d="M222 358 Q284 352 346 358 L346 384 Q284 390 222 384 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M284 356 L284 386" stroke={INK} strokeWidth="1.3" opacity="0.5" />
      {/* arms */}
      <path
        d="M212 348 Q206 350 207 366 Q208 382 216 384 L228 384 Q232 372 226 356 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M356 348 Q362 350 361 366 Q360 382 352 384 L340 384 Q336 372 342 356 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      {/* cushions */}
      <path
        d="M240 348 Q238 332 250 330 Q262 330 262 344 Q262 356 250 356 Q240 356 240 348 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M306 348 Q304 332 316 330 Q328 330 328 344 Q328 356 316 356 Q306 356 306 348 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M247 336 Q252 344 249 352" fill="none" stroke={INK} strokeWidth="1" opacity="0.4" />
      <path d="M313 336 Q318 344 315 352" fill="none" stroke={INK} strokeWidth="1" opacity="0.4" />
      {/* folded throw on the left arm */}
      <path
        d="M207 360 Q214 358 220 362 Q226 366 220 372 Q212 374 208 370 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
        opacity="0.55"
        strokeLinejoin="round"
      />
    </g>
  );
}

function PictureArt() {
  return (
    <g>
      <path d={doodleRect(404, 250, 66, 78, 1)} fill={PAPER} stroke={INK} strokeWidth="2.8" />
      <path
        d={doodleRect(410, 256, 54, 66, 0.7)}
        fill="#f7f7ef"
        stroke={INK}
        strokeWidth="1.2"
        opacity="0.85"
      />
      <path
        d="M412 314 L428 292 L440 306 L452 288 L462 314 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="450" cy="272" r="4" fill="none" stroke={INK} strokeWidth="1.5" />
      <path d="M412 318 H462" stroke={INK} strokeWidth="1" opacity="0.4" />
    </g>
  );
}

function ClockArt() {
  return (
    <g transform="translate(520 282)">
      <circle r="21" fill={PAPER} stroke={INK} strokeWidth="2.8" />
      <circle r="15" fill="none" stroke={INK} strokeWidth="1" opacity="0.35" />
      <g stroke={INK} strokeWidth="1.5">
        <path d="M0 -19 V-16 M0 19 V16 M-19 0 H-16 M19 0 H16" />
      </g>
      <path d="M0 0 L7 -4" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <g className="pk-clock-min">
        <path d="M-0.9 0 L0.9 0 L0.9 -13 L-0.9 -13 Z" fill={INK} />
      </g>
      <circle r="1.6" fill={INK} />
    </g>
  );
}

function ShelfArt() {
  return (
    <g>
      <path
        d="M566 302 Q640 300 706 302 L706 308 Q640 306 566 308 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M578 308 L584 320 M694 308 L688 320"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* books */}
      <path d="M572 302 L572 278 L580 278 L580 302 Z" fill={PAPER} stroke={INK} strokeWidth="1.8" />
      <path d="M582 302 L582 272 L590 272 L590 302 Z" fill={PAPER} stroke={INK} strokeWidth="1.8" />
      <path d="M592 302 L592 282 L599 282 L599 302 Z" fill={PAPER} stroke={INK} strokeWidth="1.8" />
      <path d="M601 302 L601 276 L609 276 L609 302 Z" fill={PAPER} stroke={INK} strokeWidth="1.8" />
      <path
        d="M574 284 H578 M584 278 H588 M594 288 H597 M603 282 H607"
        stroke={INK}
        strokeWidth="1"
        opacity="0.5"
      />
      {/* small potted plant on the shelf */}
      <path
        d="M652 302 L654 288 L670 288 L672 302 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M662 288 Q662 276 654 270 M662 288 Q662 274 670 268 M662 288 Q660 278 662 272"
        fill="none"
        stroke={INK}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M655 276 Q651 270 655 267 M669 274 Q674 268 670 265"
        fill="none"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* small frame */}
      <path d="M618 302 L618 284 L632 284 L632 302 Z" fill="none" stroke={INK} strokeWidth="1.8" />
      <path d="M621 299 L626 291 L631 299" fill="none" stroke={INK} strokeWidth="1.1" />
    </g>
  );
}

function PlantArt() {
  return (
    <g>
      <ellipse cx="756" cy="401" rx="24" ry="4" fill={INK} opacity="0.09" />
      <path
        d="M740 401 L744 366 L768 366 L772 401 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M742 374 H770" stroke={INK} strokeWidth="1.4" opacity="0.55" />
      <g fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round">
        <path d="M756 366 Q756 340 748 322" />
        <path d="M756 366 Q758 336 768 320" />
        <path d="M756 366 Q752 344 760 330" />
      </g>
      <g fill={PAPER} stroke={INK} strokeWidth="2" strokeLinejoin="round">
        <path d="M748 322 Q736 320 736 308 Q750 306 752 318 Z" />
        <path d="M768 320 Q780 314 784 326 Q772 332 766 324 Z" />
        <path d="M760 330 Q770 328 772 340 Q760 344 758 334 Z" />
      </g>
    </g>
  );
}

function PendantArt() {
  return (
    <g>
      <path d="M596 54 L596 96" stroke={INK} strokeWidth="1.8" />
      <g className="pk-lamp-sway">
        <path
          d="M578 120 Q580 96 596 96 Q612 96 614 120 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path d="M578 120 Q596 126 614 120" fill="none" stroke={INK} strokeWidth="2" />
        <ellipse cx="596" cy="128" rx="9" ry="3" fill="#fdf8e6" opacity="0.9" />
        <path
          d="M584 124 Q596 130 608 124"
          fill="none"
          stroke={INK}
          strokeWidth="1"
          opacity="0.3"
        />
      </g>
    </g>
  );
}

function Rug() {
  return (
    <>
      <path
        d="M330 404 Q560 400 790 404 L780 476 Q560 472 340 476 Z"
        fill="#f6f5ec"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M346 412 Q560 408 774 412 L766 468 Q560 464 354 468 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.45"
        strokeDasharray="10 8"
      />
      <g fill="none" stroke={INK} strokeWidth="1.2" opacity="0.3">
        <path d="M470 414 L520 466 M520 414 L470 466" />
        <path d="M620 414 L670 466 M670 414 L620 466" />
      </g>
    </>
  );
}

/* ==================================================================== */
/*  SCENE                                                               */
/* ==================================================================== */

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
            seed="11"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
        <radialGradient id={`pk-window-glow-${uid}`} cx="0.5" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="#fffdf2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fffdf2" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g filter={`url(#pk-rough-${uid})`}>
        <RoomShell />
        <InnerDoor />
        <ExitDoor />
        <WindowArt />
        <SofaArt />
        <PictureArt />
        <ClockArt />
        <ShelfArt />
        <PlantArt />
        <PendantArt />
        <Rug />
      </g>

      {/* warm glow from the window onto the wall */}
      <ellipse cx="306" cy="300" rx="140" ry="110" fill={`url(#pk-window-glow-${uid})`} />

      {/* items waiting on the floor */}
      <g transform="translate(412 470)">
        <g className="pk-item pk-item--floor-a1">
          <ItemVase />
        </g>
        <g className="pk-item pk-item--floor-a2">
          <ItemLamp />
        </g>
      </g>
      <g transform="translate(718 470)">
        <g className="pk-item pk-item--floor-b1">
          <ItemBooks />
        </g>
        <g className="pk-item pk-item--floor-b2">
          <ItemFrame />
        </g>
      </g>

      {/* the two packers, seated on the floor */}
      <Packer id="k1" hair="part" items={[<ItemVase key="v" />, <ItemLamp key="l" />]} />
      <Packer id="k2" hair="cap" items={[<ItemBooks key="b" />, <ItemFrame key="f" />]} />

      {/* porter: in from the inner door, drops the load, walks back */}
      <Walker id="porter" x={150} scale={1} hair="bald">
        <g className="pk-item pk-item--carry-a1" transform="translate(11 -34)">
          <ItemVase />
        </g>
        <g className="pk-item pk-item--carry-a2" transform="translate(11 -34)">
          <ItemLamp />
        </g>
        <g className="pk-item pk-item--carry-b1" transform="translate(11 -34)">
          <ItemBooks />
        </g>
        <g className="pk-item pk-item--carry-b2" transform="translate(11 -34)">
          <ItemFrame />
        </g>
      </Walker>

      {/* loaders: in from the landing door, out with a packed box */}
      <Walker id="l1" x={866} scale={1.04} hair="cap">
        <g className="pk-item pk-item--carry-l1" transform="translate(12 -40)">
          <PackedBox />
        </g>
      </Walker>
      <Walker id="l2" x={866} scale={0.98} hair="spiky">
        <g className="pk-item pk-item--carry-l2" transform="translate(12 -40)">
          <PackedBox />
        </g>
      </Walker>

      {/* their cartons sit in front, on the rug */}
      <Carton id="k1" />
      <Carton id="k2" />
    </>
  );
}

export function PackingSceneAnimation() {
  return (
    <>
      <svg
        className="move-scene move-scene--wide"
        viewBox="0 0 960 480"
        role="img"
        aria-labelledby="packing-scene-title packing-scene-description"
      >
        <title id="packing-scene-title">Shree Nath Packers &amp; Movers crew packing a home</title>
        <desc id="packing-scene-description">
          A hand-drawn black and white scene inside a home: a porter carries a vase, a lamp, books
          and a picture frame in from a doorway at the back, two packers sit on the floor and place
          each item into an open carton, fold the flaps and tape it shut, and two loaders carry the
          finished boxes out through the front door.
        </desc>
        <SceneArt uid="wide" />
      </svg>

      <svg
        className="move-scene move-scene--compact"
        viewBox="60 60 840 420"
        role="img"
        aria-labelledby="packing-scene-compact-title packing-scene-compact-description"
      >
        <title id="packing-scene-compact-title">Shree Nath Packers &amp; Movers packing crew</title>
        <desc id="packing-scene-compact-description">
          A hand-drawn black and white scene: two workers pack household items into boxes inside a
          home and carry them out through the front door.
        </desc>
        <SceneArt uid="compact" />
      </svg>
    </>
  );
}
