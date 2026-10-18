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

type WalkerSpec = {
  id: string;
  scale: number;
  hair: Hair;
  beard?: "full" | "mustache" | undefined;
  /** symmetric fit anchor span (px) so scaling pivots at the feet */
  fitSpan: number;
  arm: string;
};

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

function WalkerHead({ hair, beard }: { hair: Hair; beard?: "full" | "mustache" | undefined }) {
  return (
    <g className="pk-head">
      <g className="pk-headsway">
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
          className="pk-sweat"
          d="M10.5 -66 Q13 -63 10.5 -61 Q8 -63 10.5 -66 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}

function WalkerLeg({ back }: { back?: boolean }) {
  return (
    <g className={back ? "pk-leg pk-leg--b" : "pk-leg pk-leg--f"}>
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

function WalkerArm({
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
        d={back ? "M-8 -50 Q-13 -42 -11 -33" : "M8 -50 Q13 -42 11 -33"}
        stroke={INK}
        strokeWidth="4.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={back ? -11 : 11} cy={-32} r="2.4" fill={PAPER} stroke={INK} strokeWidth="2" />
      {children}
    </g>
  );
}

function Walker({ spec, children }: { spec: WalkerSpec; children?: ReactNode }) {
  const vars = { "--s": spec.scale } as CSSProperties;
  return (
    <g className={`pk pk--${spec.id}`} style={vars}>
      <ellipse className="pk-shadow" cx="0" cy="2.5" rx="15" ry="3" fill={INK} opacity="0.12" />
      <g className="pk-settle">
        <g className="pk-flip">
          <g className="pk-wobble">
            <g className="pk-bob">
              <g className="pk-fit">
                <rect x={-spec.fitSpan} y="-78" width={spec.fitSpan * 2} height="78" fill="none" />
                <WalkerLeg back />
                <WalkerArm back />
                <g className="pk-torso-g">
                  <path
                    d="M-9 -30 Q-10.5 -45 -7.5 -53.5 Q0 -57 7.5 -53.5 Q10.5 -45 9 -30 Q0 -27.5 -9 -30 Z"
                    fill={PAPER}
                    stroke={INK}
                    strokeWidth="3.2"
                    strokeLinejoin="round"
                  />
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
                </g>
                <WalkerHead hair={spec.hair} beard={spec.beard} />
                {children}
                <WalkerArm className={`pk-arm pk-arm--f pk-arm--${spec.arm}`} />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  );
}

function ForemanTorso() {
  return (
    <g className="pk-torso-g">
      <path
        d="M-9 -30 Q-10.5 -45 -7.5 -53.5 Q0 -57 7.5 -53.5 Q10.5 -45 9 -30 Q0 -27.5 -9 -30 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M-9 -30 Q-10.5 -45 -7.5 -53.5 Q0 -57 7.5 -53.5 Q10.5 -45 9 -30 Q0 -27.5 -9 -30 Z"
        fill="url(#pk-hatch-fine)"
        opacity="0.5"
      />
      <path
        d="M-1.5 -54 L-2.5 -30.5 M6.5 -54 L7.5 -30.5"
        stroke={INK}
        strokeWidth="1.4"
        fill="none"
      />
    </g>
  );
}

/** A seated packer at the bench (origin at the feet, facing right). */
function Packer({ id, hair }: { id: "p1" | "p2"; hair: Hair }) {
  return (
    <g className={`pk pk--${id}`}>
      <ellipse cx="2" cy="1.5" rx="16" ry="3" fill={INK} opacity="0.12" />
      {/* stool */}
      <path
        d="M-12 -23 Q0 -25.5 12 -23 L11 -20 Q0 -22 -11 -20 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M-8 -21 L-11 -1 M8 -21 L11 -1" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {/* bent legs */}
      <g className="pk-pklegs">
        <path
          d="M-2 -25 Q4 -26 12 -25 L12 -24"
          stroke={INK}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M12 -24 Q13 -14 12 -4"
          stroke={INK}
          strokeWidth="4.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8 -3.5 Q7 0 12 0 L17 0 Q18.5 -1.5 16 -3.5 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </g>
      <g className="pk-bob">
        {/* torso, leaning a little over the bench work */}
        <g className="pk-torso-g">
          <path
            d="M-11 -25 Q-14 -43 -8 -55 Q-1 -59 6 -55 Q9 -43 8 -25 Q-1 -22.5 -11 -25 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <text
            x="-1"
            y="-38"
            textAnchor="middle"
            fontFamily={HAND}
            fontSize="8.5"
            fontWeight="700"
            fill={INK}
          >
            SN
          </text>
        </g>
        {/* head */}
        <g className="pk-head">
          <rect x="0" y="-58" width="5" height="4.5" fill={PAPER} stroke={INK} strokeWidth="1.8" />
          <circle cx="3" cy="-62" r="7" fill={PAPER} stroke={INK} strokeWidth="3" />
          <circle className="pk-eye" cx="6.8" cy="-63.2" r="1.1" fill={INK} />
          <path
            d="M5.6 -66 L8.6 -66.6"
            stroke={INK}
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M5.2 -59.3 Q6.8 -58.2 8.4 -59.3"
            stroke={INK}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            className="pk-mouth"
            cx="7"
            cy="-58.6"
            r="1.5"
            fill="none"
            stroke={INK}
            strokeWidth="1.5"
          />
          <HairDoodle hair={hair} />
        </g>
        {/* back arm holding the tape gun */}
        <g className="pk-arm pk-arm--tape">
          <path
            d="M-5 -52 Q-10 -46 -8 -39 Q-7 -36 -3 -35"
            stroke={INK}
            strokeWidth="4.2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="-2.5" cy="-34.5" r="2.2" fill={PAPER} stroke={INK} strokeWidth="1.8" />
          <g>
            <rect
              x="-8"
              y="-39"
              width="8"
              height="5.4"
              rx="1"
              fill={PAPER}
              stroke={INK}
              strokeWidth="1.8"
            />
            <circle cx="-4" cy="-36.3" r="1.4" fill={PAPER} stroke={INK} strokeWidth="1.2" />
          </g>
        </g>
        {/* front stuffing arm */}
        <g className="pk-arm pk-arm--stuff">
          <path
            d="M4 -52 Q11 -49 16 -44 Q19 -41 20 -37"
            stroke={INK}
            strokeWidth="4.6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="20.5" cy="-36" r="2.4" fill={PAPER} stroke={INK} strokeWidth="2" />
          <path
            d="M18 -33 Q20 -31 23 -33 Q25 -35 22.5 -36.5 Q20 -37.5 18 -35.5 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  );
}

/* ------------------------------ items ------------------------------ */

/** A packed moving box with the SN stamp (52 x 26, feet at y 0). */
function PackBox({ rock }: { rock?: boolean }) {
  return (
    <g className={rock ? "pk-rock" : undefined}>
      <path
        d="M-26 -26 Q-13 -27.6 0 -26 Q13 -27.6 26 -26 Q27.5 -13 26.5 0 Q13 -1.6 0 0 Q-13 -1.6 -26.5 0 Q-27.5 -13 -26 -26 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M-26.5 -13 Q0 -15 26.5 -13"
        stroke={INK}
        strokeWidth="1.4"
        opacity="0.6"
        fill="none"
      />
      <path d="M-2 -26 Q-1 -13 -2.5 0" stroke={INK} strokeWidth="1.6" opacity="0.7" fill="none" />
      <path d="M2 -26 Q1.5 -13 3 0" stroke={INK} strokeWidth="1.6" opacity="0.7" fill="none" />
      <circle cx="13" cy="-14" r="6.4" fill="none" stroke={INK} strokeWidth="1.7" />
      <text
        x="13"
        y="-11.6"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="8"
        fontWeight="700"
        fill={INK}
      >
        SN
      </text>
      <path
        d="M-21 -20 L-15 -20 M-21 -17 L-17 -17"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.6"
        strokeLinecap="round"
      />
    </g>
  );
}

/** A hard suitcase — first through the back gate. */
function ItemSuitcase() {
  return (
    <g className="pk-rock pk-rock--suit">
      <path
        d="M-21 -28 Q-22 -22 -21.5 -8 Q-21 -4 -17 -4 L17 -4 Q21 -4 21.5 -8 Q22 -22 21 -28 Q0 -29.5 -21 -28 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M-21.5 -16 Q0 -18 21.5 -16"
        stroke={INK}
        strokeWidth="1.5"
        opacity="0.6"
        fill="none"
      />
      <path
        d="M-8 -28 L-8 -4 M8 -28 L8 -4"
        stroke={INK}
        strokeWidth="1.4"
        opacity="0.55"
        fill="none"
      />
      <path
        d="M-7 -28 Q-7 -34 0 -34 Q7 -34 7 -28"
        fill="none"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect
        x="-3.4"
        y="-14"
        width="6.8"
        height="4.6"
        rx="1"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.6"
      />
    </g>
  );
}

/** An old tube TV with an antenna. */
function ItemTV() {
  return (
    <g className="pk-rock pk-rock--tv">
      <path
        d="M-6 -44 L-13 -54 M6 -44 L13 -53"
        stroke={INK}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="-13" cy="-54" r="1.2" fill={INK} />
      <circle cx="13" cy="-53" r="1.2" fill={INK} />
      <path
        d="M-24 -44 Q0 -45.6 24 -44 Q25.5 -30 24.5 -17 Q0 -15.4 -24.5 -17 Q-25.5 -30 -24 -44 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M-19 -40 Q0 -41.4 19 -40 Q20 -30 19.5 -21 Q0 -19.6 -19.5 -21 Q-20 -30 -19 -40 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
        opacity="0.7"
      />
      <path
        d="M-15 -36 Q-8 -33 0 -35 Q8 -37 14 -34"
        fill="none"
        stroke={INK}
        strokeWidth="1.3"
        opacity="0.55"
      />
      <path d="M16.5 -38 L16.5 -24" stroke={INK} strokeWidth="1.5" opacity="0.6" />
      <path
        d="M-10 -17 L-12 -11 M10 -17 L12 -11"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </g>
  );
}

/** A small armchair. */
function ItemArmchair() {
  return (
    <g className="pk-rock pk-rock--chair">
      <path
        d="M-22 -14 Q-24 -30 -22 -40 Q-16 -43 -10 -40 Q-9 -30 -10 -22"
        fill="none"
        stroke={INK}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M-22 -14 Q-24 -10 -20 -9 Q-12 -11 -6 -9 L18 -9 Q24 -10 22 -16 Q20 -20 14 -20 L-12 -20 Q-20 -20 -22 -14 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M18 -20 Q24 -21 25 -30 Q25.5 -38 20 -41 Q15 -42.5 12 -39 Q14 -30 13 -21"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path d="M-14 -13 Q-2 -15 10 -13" stroke={INK} strokeWidth="1.3" opacity="0.5" fill="none" />
      <path d="M-16 -9 L-17 0 M14 -9 L15 0" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
    </g>
  );
}

/* --------------------------- environment --------------------------- */

function RoomShell() {
  return (
    <>
      {/* ceiling + floor */}
      <path d="M0 62 Q420 59 840 62" fill="none" stroke={INK} strokeWidth="2.6" />
      <path d="M0 340 Q480 337 960 340" fill="none" stroke={INK} strokeWidth="2.6" />
      {/* wall edge with the main-gate opening */}
      <path d="M840 62 L840 110" stroke={INK} strokeWidth="2.6" />
      <path d="M838 110 L842 112 L842 338 L838 340" fill="none" stroke={INK} strokeWidth="2" />
      {/* floor hatch marks, inside */}
      <g stroke={INK} strokeWidth="1.5" opacity="0.28" strokeLinecap="round">
        <path d="M150 356 L164 352" />
        <path d="M380 384 L394 380" />
        <path d="M600 358 L614 354" />
        <path d="M740 386 L754 382" />
      </g>
      {/* back-gate passage in the left wall */}
      <g>
        <path d="M30 150 L100 150 L100 340 L30 340 Z" fill={INK} opacity="0.07" />
        <g stroke={INK} strokeWidth="1.4" opacity="0.3">
          <path d="M38 168 L64 194" />
          <path d="M38 208 L74 244" />
          <path d="M38 250 L84 290" />
          <path d="M38 292 L92 332" />
        </g>
        <path d="M30 148 L102 150" stroke={INK} strokeWidth="2.6" />
        <path d="M100 150 L100 340" stroke={INK} strokeWidth="2.6" />
        {/* small swing gate, ajar */}
        <path
          d="M32 152 L14 172 L14 322 L32 336 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M24 180 L24 310" stroke={INK} strokeWidth="1.4" opacity="0.5" />
        <circle cx="27" cy="240" r="1.8" fill={INK} />
        <text
          x="66"
          y="139"
          textAnchor="middle"
          fontFamily={HAND}
          fontSize="13"
          fontWeight="700"
          fill={INK}
        >
          BACK GATE
        </text>
      </g>
      {/* window with a slow cloud */}
      <g>
        <path d={doodleRect(130, 80, 100, 100, 1.4)} fill={PAPER} stroke={INK} strokeWidth="2.6" />
        <path d="M180 82 L180 178 M132 130 L228 130" stroke={INK} strokeWidth="1.8" opacity="0.7" />
        <path d="M128 181 L232 180" stroke={INK} strokeWidth="2.4" />
        <g
          className="pk-wincloud"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.8"
          strokeLinejoin="round"
        >
          <path d="M148 112 Q146 104 154 103 Q157 97 165 100 Q172 97 173 104 Q180 104 178 111 Q164 115 148 112 Z" />
        </g>
      </g>
      {/* framed picture of a little house */}
      <g>
        <path d={doodleRect(255, 95, 42, 54, 1)} fill={PAPER} stroke={INK} strokeWidth="2.4" />
        <path
          d="M263 122 L276 110 L289 122"
          fill="none"
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M266 121 L266 138 L286 138 L286 121"
          fill="none"
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M274 138 L274 129 L280 129 L280 138" fill="none" stroke={INK} strokeWidth="1.5" />
      </g>
      {/* wall clock — one full minute per loop */}
      <g transform="translate(420 95)">
        <circle r="16" fill={PAPER} stroke={INK} strokeWidth="2.4" />
        <path
          d="M0 -13 L0 -10 M0 13 L0 10 M-13 0 L-10 0 M13 0 L10 0"
          stroke={INK}
          strokeWidth="1.5"
        />
        <path d="M0 0 L8 -6" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        <g className="pk-clock-min">
          <path d="M-0.8 0 L0.8 0 L0.8 -11.5 L-0.8 -11.5 Z" fill={INK} />
        </g>
        <circle r="1.4" fill={INK} />
      </g>
      {/* ceiling fan */}
      <g transform="translate(600 78)">
        <path d="M0 -16 L0 -4" stroke={INK} strokeWidth="2.4" />
        <g className="pk-fan">
          <circle r="26" fill="none" stroke="none" />
          <circle r="3.4" fill={PAPER} stroke={INK} strokeWidth="1.8" />
          <path
            d="M0 0 Q-12 -5 -24 -2 Q-14 5 0 0 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M0 0 Q8 8 20 6 Q12 -2 0 0 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M0 0 Q-8 -9 -4 -19 Q5 -10 0 0 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </g>
      </g>
      {/* packing bench */}
      <g>
        <path
          d="M316 300 Q428 298 540 300 L540 308 Q428 306 316 308 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M322 308 L320 340 M428 306 L428 340 M534 308 L536 340"
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M334 303 Q428 301 522 303"
          stroke={INK}
          strokeWidth="1.1"
          opacity="0.4"
          fill="none"
        />
        {/* tape roll + crumpled paper on the bench */}
        <circle cx="524" cy="293" r="6.5" fill={PAPER} stroke={INK} strokeWidth="2" />
        <circle cx="524" cy="293" r="2.2" fill="none" stroke={INK} strokeWidth="1.2" />
        <path
          d="M336 297 Q339 293 343 296 Q347 293 349 297 Q353 296 351 300 Q344 302 340 300 Q336 301 336 297 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </g>
      {/* rug under the bench */}
      <path
        d="M292 336 Q424 333 558 336 L556 344 Q424 341 294 344 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
        opacity="0.5"
        strokeDasharray="8 7"
      />
      {/* doormat at the main gate */}
      <path
        d="M782 336 Q812 334 850 336 L848 345 Q812 343 784 345 Z"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
        opacity="0.5"
        strokeDasharray="8 7"
      />
      {/* SN plaque above the box row */}
      <g>
        <circle cx="630" cy="112" r="13" fill={PAPER} stroke={INK} strokeWidth="2" />
        <text
          x="630"
          y="117"
          textAnchor="middle"
          fontFamily={HAND}
          fontSize="13"
          fontWeight="700"
          fill={INK}
        >
          SN
        </text>
      </g>
      {/* main gate sign */}
      <text
        x="812"
        y="100"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="14"
        fontWeight="700"
        fill={INK}
      >
        MAIN GATE
      </text>
    </>
  );
}

/** Outside of the main gate: sky, sun and the rear of the parked truck. */
function Outside() {
  return (
    <>
      <path
        d="M925 78 Q933 70 941 78 Q949 76 951 84 Q958 86 954 93 Q947 100 939 96 Q930 100 926 92 Q920 86 925 78 Z"
        fill="none"
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <g className="pk-sunrays" stroke={INK} strokeWidth="1.8" strokeLinecap="round">
        <path d="M939 62 L939 55 M962 74 L967 69 M970 95 L977 95 M962 116 L967 121" />
      </g>
      <g className="pk-outcloud" fill={PAPER} stroke={INK} strokeWidth="2" strokeLinejoin="round">
        <path d="M862 60 Q859 50 869 49 Q873 41 883 45 Q892 41 894 50 Q903 50 900 59 Q883 64 862 60 Z" />
      </g>
      {/* rear of the Shree Nath truck, parked at the gate */}
      <g>
        <ellipse cx="912" cy="341" rx="70" ry="4.5" fill={INK} opacity="0.09" />
        <path
          d="M862 152 Q900 150 958 152 L958 294 Q900 296 862 294 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path d="M862 152 L862 294" stroke={INK} strokeWidth="3.4" />
        <path
          d="M872 168 Q910 166 950 168"
          stroke={INK}
          strokeWidth="1.3"
          opacity="0.4"
          fill="none"
        />
        <circle cx="912" cy="212" r="14" fill={PAPER} stroke={INK} strokeWidth="2.2" />
        <text
          x="912"
          y="218"
          textAnchor="middle"
          fontFamily={HAND}
          fontSize="15"
          fontWeight="700"
          fill={INK}
        >
          SN
        </text>
        <text
          x="930"
          y="252"
          textAnchor="middle"
          fontFamily={HAND}
          fontSize="10"
          fontWeight="700"
          fill={INK}
        >
          PACKERS
        </text>
        <rect
          x="856"
          y="296"
          width="104"
          height="13"
          rx="3"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.4"
        />
        <rect x="864" y="272" width="5" height="9" rx="1.5" fill={INK} opacity="0.8" />
        <circle cx="902" cy="316" r="24" fill={PAPER} stroke={INK} strokeWidth="3.6" />
        <circle cx="902" cy="316" r="12" fill={PAPER} stroke={INK} strokeWidth="2.4" />
        <circle cx="902" cy="316" r="2.6" fill={INK} />
        <path
          d="M902 305 L902 310 M902 322 L902 327 M891 316 L896 316 M908 316 L913 316"
          stroke={INK}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* exhaust puff source */}
        <path d="M866 300 L860 300 L860 306" stroke={INK} strokeWidth="2.2" fill="none" />
      </g>
      {/* exhaust puffs */}
      <g className="pk-smoke" fill={PAPER} stroke={INK} strokeWidth="1.8" strokeLinejoin="round">
        <path
          className="pk-smoke-puff pk-smoke-puff--1"
          d="M858 296 Q855 291 860 289 Q861 285 866 286 Q871 286 870 291 Q873 294 868 297 Q862 299 858 296 Z"
        />
        <path
          className="pk-smoke-puff pk-smoke-puff--2"
          d="M852 299 Q849 294 854 292 Q855 288 860 289 Q865 289 864 294 Q867 297 862 300 Q856 302 852 299 Z"
        />
        <path
          className="pk-smoke-puff pk-smoke-puff--3"
          d="M846 302 Q843 298 847 296 Q848 293 852 294 Q856 294 855 298 Q858 301 853 303 Q849 305 846 302 Z"
        />
      </g>
    </>
  );
}

/** The open main-gate leaf, hinged into the room. */
function DoorLeaf() {
  return (
    <g>
      <path
        d="M830 114 L798 132 L798 334 L830 330 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M814 126 L814 332" stroke={INK} strokeWidth="1.4" opacity="0.5" />
      <path d="M803 137 L803 330" stroke={INK} strokeWidth="1.4" opacity="0.5" />
      <circle cx="803" cy="228" r="2" fill={INK} />
    </g>
  );
}

/** The street cat dozing on a crate, ears twitching when the porters drop off. */
function Cat() {
  return (
    <>
      <path d={doodleRect(255, 312, 30, 28, 1)} fill={PAPER} stroke={INK} strokeWidth="2.2" />
      <path d="M259 318 L281 318 M259 326 L281 326" stroke={INK} strokeWidth="1.2" opacity="0.5" />
      <g transform="translate(270 311)">
        <g className="pk-cat">
          <path
            className="pk-cattail"
            d="M-10 -2 Q-16 -6 -14 -12 Q-12 -14 -10 -11"
            fill="none"
            stroke={INK}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M-11 -3 Q-12 2 -6 3 Q2 4 8 2 Q13 0 12 -4 Q10 -8 4 -8 Q-4 -9 -11 -3 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <g className="pk-cathead">
            <path
              className="pk-catear"
              d="M5 -8 L4 -13 L8 -10 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              className="pk-catear pk-catear--2"
              d="M9 -8 L11 -13 L13 -9 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="8.5" cy="-5" r="4.6" fill={PAPER} stroke={INK} strokeWidth="2" />
            <path
              className="pk-cateye"
              d="M7 -5 Q8.5 -4.2 10 -5"
              fill="none"
              stroke={INK}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>
          <path d="M-6 -4 Q-1 -6 3 -5" fill="none" stroke={INK} strokeWidth="1.2" opacity="0.5" />
        </g>
      </g>
    </>
  );
}

/* ------------------------------ scene ------------------------------ */

function SceneArt({ uid }: { uid: string }) {
  return (
    <>
      <defs>
        <filter id={`pk-rough-${uid}`} x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.016"
            numOctaves="2"
            result="noise"
            seed="7"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
        </filter>
        <pattern
          id="pk-hatch-fine"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path d="M0 0 L0 5" stroke={INK} strokeWidth="1.1" />
        </pattern>
      </defs>

      {/* environment (rough-filtered) */}
      <g filter={`url(#pk-rough-${uid})`}>
        <RoomShell />
        <Outside />
      </g>

      <DoorLeaf />

      {/* staged items from the back gate (wait at the bench) */}
      <g transform="translate(305 340)">
        <g className="pk-item pk-item--staged-suit">
          <ItemSuitcase />
        </g>
        <g className="pk-item pk-item--staged-tv">
          <ItemTV />
        </g>
        <g className="pk-item pk-item--staged-chair">
          <ItemArmchair />
        </g>
      </g>

      <Cat />

      {/* the box row near the main gate */}
      <g transform="translate(590 340)">
        <g className="pk-item pk-item--rack1">
          <PackBox />
        </g>
      </g>
      <g transform="translate(645 340)">
        <g className="pk-item pk-item--rack2">
          <PackBox />
        </g>
      </g>
      <g transform="translate(700 340)">
        <g className="pk-item pk-item--rack3">
          <PackBox />
        </g>
      </g>

      {/* bench work-boxes that slide along the bench into the row */}
      <g transform="translate(400 300)">
        <g className="pk-item pk-item--bb1">
          <PackBox />
        </g>
      </g>
      <g transform="translate(505 300)">
        <g className="pk-item pk-item--bb2">
          <PackBox />
        </g>
      </g>
      <g transform="translate(400 300)">
        <g className="pk-item pk-item--bb3">
          <PackBox />
        </g>
      </g>

      {/* seated packers */}
      <g transform="translate(360 340)">
        <Packer id="p1" hair="part" />
      </g>
      <g transform="translate(470 340)">
        <Packer id="p2" hair="cap" />
      </g>

      {/* foreman by the main gate */}
      <g className="pk pk--foreman">
        <ellipse cx="0" cy="2.5" rx="15" ry="3" fill={INK} opacity="0.12" />
        <g className="pk-flip pk-flip--foreman">
          <g className="pk-wobble">
            <g className="pk-fit" style={{ "--s": 1.04 } as CSSProperties}>
              <rect x="-34" y="-78" width="68" height="78" fill="none" />
              <WalkerLeg back />
              <WalkerLeg />
              <WalkerArm back />
              <ForemanTorso />
              <WalkerHead hair="cap" beard="mustache" />
              <WalkerArm className="pk-arm pk-arm--f pk-arm--foreman">
                <g className="pk-clipboard">
                  <rect
                    x="4"
                    y="-40"
                    width="15"
                    height="19"
                    rx="1.5"
                    fill={PAPER}
                    stroke={INK}
                    strokeWidth="2"
                  />
                  <path
                    d="M7.5 -35 L16 -35 M7.5 -31 L16 -31 M7.5 -27 L13.5 -27"
                    stroke={INK}
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                </g>
              </WalkerArm>
            </g>
          </g>
        </g>
      </g>

      {/* porter: back gate to the hall */}
      <Walker
        spec={{
          id: "porter",
          scale: 0.98,
          hair: "bald",
          beard: "mustache",
          fitSpan: 30,
          arm: "porter",
        }}
      >
        <g className="pk-item pk-item--carry-suit">
          <g transform="translate(12 -36)">
            <ItemSuitcase />
          </g>
        </g>
        <g className="pk-item pk-item--carry-tv">
          <g transform="translate(12 -32)">
            <ItemTV />
          </g>
        </g>
        <g className="pk-item pk-item--carry-chair">
          <g transform="translate(13 -36)">
            <ItemArmchair />
          </g>
        </g>
      </Walker>

      {/* loaders from the street crew (scene 02), in through the main gate */}
      <Walker spec={{ id: "pa", scale: 1, hair: "spiky", fitSpan: 36, arm: "pa" }}>
        <g className="pk-item pk-item--loadbox-a">
          <g transform="translate(12 -40)">
            <PackBox rock />
          </g>
        </g>
      </Walker>
      <Walker spec={{ id: "pb", scale: 1.06, hair: "flat", fitSpan: 58, arm: "pb" }}>
        <g className="pk-item pk-item--loadbox-b">
          <g transform="translate(12 -40)">
            <PackBox rock />
          </g>
        </g>
      </Walker>

      {/* foreman's bubble pops when a box goes out the main gate */}
      <g transform="translate(628 196)">
        <g className="pk-speech">
          <path
            d="M10 34 Q4 26 10 19 Q4 8 18 8 Q24 0 36 5 Q48 -2 60 4 Q74 -2 84 5 Q98 7 96 17 Q104 27 90 30 Q84 38 70 34 Q56 40 42 34 Q26 40 14 33 Q8 36 10 34 Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path
            d="M88 32 L104 44 L84 36"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <text
            x="52"
            y="24"
            textAnchor="middle"
            fontFamily={HAND}
            fontSize="17"
            fontWeight="700"
            fill={INK}
          >
            Nice!
          </text>
        </g>
      </g>
    </>
  );
}

export function PackingSceneAnimation() {
  return (
    <>
      <svg
        className="move-scene move-scene--wide"
        viewBox="0 0 960 400"
        role="img"
        aria-labelledby="packing-scene-title packing-scene-description"
      >
        <title id="packing-scene-title">Shree Nath Packers &amp; Movers crew packing a home</title>
        <desc id="packing-scene-description">
          A hand-drawn black and white scene inside a home: a porter carries a suitcase, a TV and a
          chair in through the back gate, seated packers box them up on the bench, the packed boxes
          slide into a row, and loaders carry each box out through the main gate to the parked Shree
          Nath truck while a foreman oversees and a cat dozes on a crate.
        </desc>
        <SceneArt uid="wide" />
      </svg>

      <svg
        className="move-scene move-scene--compact"
        viewBox="40 100 900 300"
        role="img"
        aria-labelledby="packing-scene-compact-title packing-scene-compact-description"
      >
        <title id="packing-scene-compact-title">Shree Nath Packers &amp; Movers packing crew</title>
        <desc id="packing-scene-compact-description">
          A hand-drawn black and white scene: workers pack items into boxes inside a home and carry
          them out through the main gate to the truck.
        </desc>
        <SceneArt uid="compact" />
      </svg>
    </>
  );
}
