import type { ReactNode } from "react";

const INK = "#202a25";
const PAPER = "#fdfdf9";
const HAND = "Caveat, 'Comic Sans MS', cursive";
const DISPLAY = "'Bodoni Moda', Georgia, 'Times New Roman', serif";

/* ==================================================================== */
/*  SMALL HELPERS                                                       */
/* ==================================================================== */

function Shot({ id, children }: { id: string; children: ReactNode }) {
  return <g className={`bk-shot bk-shot--${id}`}>{children}</g>;
}

/* ==================================================================== */
/*  FACE (front, three-quarter) — used in every close-up                */
/* ==================================================================== */

type Mood = "smile" | "listen" | "talk";
type Kind = "customer" | "boss";

function Face({
  kind,
  mood,
  delay = 0,
  phoneAtEar,
}: {
  kind: Kind;
  mood: Mood;
  delay?: number;
  phoneAtEar?: boolean;
}) {
  return (
    <g className={`bk-face bk-face--${kind} bk-face--${mood}`}>
      {/* shoulders */}
      <path
        d="M-48 132 Q-54 74 -38 56 Q-18 44 0 44 Q18 44 38 56 Q54 74 48 132 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.6"
        strokeLinejoin="round"
      />
      {kind === "boss" ? (
        <g stroke={INK} strokeWidth="2.6" fill="none" opacity="0.8">
          <path d="M-16 50 L-6 72 L0 58 L6 72 L16 50" />
          <path d="M0 58 V96" strokeWidth="1.8" opacity="0.5" />
        </g>
      ) : (
        <path
          d="M-17 48 Q-8 66 0 58 Q8 66 17 48"
          fill="none"
          stroke={INK}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      )}

      {/* neck + ears */}
      <rect
        x="-14"
        y="24"
        width="28"
        height="26"
        rx="10"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.4"
      />
      <circle cx="-38" cy="2" r="8.4" fill={PAPER} stroke={INK} strokeWidth="3.2" />
      <circle cx="38" cy="2" r="8.4" fill={PAPER} stroke={INK} strokeWidth="3.2" />

      {/* head */}
      <path
        d="M-34 -22 Q-40 6 -30 26 Q-18 43 0 44 Q18 43 30 26 Q40 6 34 -22 Q22 -45 0 -45 Q-22 -45 -34 -22 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.8"
        strokeLinejoin="round"
      />

      {/* hair */}
      {kind === "boss" ? (
        <g>
          <path
            d="M-35 -18 Q-42 -48 -8 -52 Q28 -56 35 -24 Q26 -34 -2 -35 Q-22 -35 -35 -18 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path
            d="M-30 -30 Q-8 -44 20 -34"
            stroke={PAPER}
            strokeWidth="2"
            fill="none"
            opacity="0.35"
          />
          <path
            d="M-15 21 Q-4 15 5 19 Q13 15 17 21 Q8 27 -5 26 Q-12 25 -15 21 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
      ) : (
        <g stroke={INK} strokeWidth="3.4" fill="none" strokeLinecap="round">
          <path d="M-35 -20 Q-26 -44 -2 -46 Q24 -46 35 -24" />
          <path d="M-27 -28 Q-18 -39 -6 -33" strokeWidth="2.4" />
          <path d="M-2 -42 Q10 -44 20 -34" strokeWidth="2.4" />
          <path d="M22 -30 Q28 -24 30 -16" strokeWidth="2.4" />
        </g>
      )}

      {/* brows */}
      <g className="bk-brow" stroke={INK} strokeWidth="3.4" strokeLinecap="round" fill="none">
        <path className="bk-brow-l" d="M-26 -25 Q-16 -32 -6 -26" />
        <path className="bk-brow-r" d="M6 -26 Q16 -32 26 -25" />
      </g>

      {/* eyes */}
      <g className="bk-eye" style={{ animationDelay: `${delay}s` }}>
        <ellipse cx="-15" cy="-8" rx="9.4" ry="10.8" fill="#fff" stroke={INK} strokeWidth="2.8" />
        <ellipse cx="15" cy="-8" rx="9.4" ry="10.8" fill="#fff" stroke={INK} strokeWidth="2.8" />
        <g className="bk-pupil">
          <circle cx="-13.4" cy="-7" r="4.4" fill={INK} />
          <circle cx="16.6" cy="-7" r="4.4" fill={INK} />
          <circle cx="-15" cy="-9.4" r="1.5" fill="#fff" />
          <circle cx="15" cy="-9.4" r="1.5" fill="#fff" />
        </g>
      </g>

      {/* nose */}
      <path
        d="M-2 4 Q7 13 -3 17"
        stroke={INK}
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />

      {/* cheeks */}
      <g stroke={INK} strokeWidth="1.6" strokeLinecap="round" opacity="0.3" fill="none">
        <path d="M-30 12 L-23 15 M-30 18 L-22 20" />
        <path d="M30 12 L23 15 M30 18 L22 20" />
      </g>

      {/* mouths */}
      {mood === "talk" && (
        <g className="bk-talkmouth">
          <path
            d="M-15 29 Q0 32 15 29"
            stroke={INK}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <g className="bk-jaw">
            <path
              d="M-15 30 Q0 52 15 30 Q0 36 -15 30 Z"
              fill="#39423d"
              stroke={INK}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M-9 32.4 Q0 36.6 9 32.4" stroke={PAPER} strokeWidth="2.6" fill="none" />
          </g>
          <g className="bk-lips">
            <path
              d="M-15 30 Q0 52 15 30"
              stroke={INK}
              strokeWidth="3.4"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </g>
      )}

      {mood === "smile" && (
        <g>
          <path
            className="bk-smile-sm"
            d="M-16 28 Q0 40 16 28"
            stroke={INK}
            strokeWidth="3.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            className="bk-smile-big"
            d="M-19 26 Q0 54 19 26 Q0 34 -19 26 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <path
            className="bk-smile-big"
            d="M-13 30 Q0 35 13 30"
            stroke={PAPER}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      )}

      {mood === "listen" && (
        <path
          d="M-13 29 Q0 38 13 29"
          stroke={INK}
          strokeWidth="3.4"
          fill="none"
          strokeLinecap="round"
        />
      )}

      {/* the phone at the ear, in a hand */}
      {phoneAtEar && (
        <g transform="translate(41 1)">
          <path
            d="M30 96 Q40 52 18 14"
            stroke={PAPER}
            strokeWidth="17"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M38 96 Q48 52 26 14 M22 96 Q30 54 10 16"
            stroke={INK}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <g transform="rotate(-11)">
            <rect
              x="-8"
              y="-26"
              width="16"
              height="52"
              rx="7"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3.4"
            />
            <rect x="-4.5" y="-20" width="9" height="14" rx="2.4" fill={INK} opacity="0.14" />
            <circle cx="0" cy="18" r="1.7" fill={INK} opacity="0.5" />
          </g>
          <g fill={PAPER} stroke={INK} strokeWidth="2.8" strokeLinejoin="round">
            <rect x="4" y="-17" width="13" height="8.4" rx="4.2" transform="rotate(-8)" />
            <rect x="5" y="-5" width="13" height="8.4" rx="4.2" transform="rotate(-8)" />
            <rect x="6" y="7" width="12" height="8.4" rx="4.2" transform="rotate(-8)" />
          </g>
          <g stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.5">
            <path d="M24 -24 Q32 -18 30 -8" />
            <path d="M32 -28 Q42 -20 39 -6" />
          </g>
        </g>
      )}
    </g>
  );
}

/* ==================================================================== */
/*  WEBSITE ON THE PHONE                                                */
/* ==================================================================== */

function SiteContent() {
  return (
    <g className="bk-site">
      <rect x="0" y="0" width="300" height="612" fill={PAPER} />

      {/* nav */}
      <text x="18" y="29" fontFamily={DISPLAY} fontSize="20" fill={INK}>
        Shree Nath
      </text>
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round">
        <path d="M248 20 h20 M248 27 h20 M248 34 h13" />
      </g>
      <path d="M0 44 H300" stroke={INK} strokeWidth="1.6" opacity="0.25" />

      {/* hero */}
      <rect x="0" y="45" width="300" height="140" fill="#f2f0e8" />
      <text x="18" y="72" fontFamily={HAND} fontSize="13" fill={INK} opacity="0.75">
        Indore · Pan India
      </text>
      <text x="18" y="104" fontFamily={DISPLAY} fontSize="27" fill={INK}>
        Packers &amp;
      </text>
      <text x="18" y="132" fontFamily={DISPLAY} fontSize="27" fill={INK}>
        Movers
      </text>
      <g stroke={INK} strokeWidth="2.4" fill="none" strokeLinejoin="round">
        <rect x="212" y="86" width="52" height="34" rx="4" />
        <path d="M266 96 h12 l8 12 v12 h-20 Z" />
        <circle cx="226" cy="122" r="6" fill={PAPER} />
        <circle cx="274" cy="122" r="6" fill={PAPER} />
      </g>
      <rect x="18" y="146" width="104" height="27" rx="13.5" fill={INK} />
      <text
        x="70"
        y="164"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill={PAPER}
        letterSpacing="1.1"
      >
        GET A QUOTE
      </text>

      {/* trust row */}
      <g
        fontFamily="Outfit, sans-serif"
        fontSize="8"
        fontWeight="700"
        fill={INK}
        letterSpacing="0.7"
      >
        <text x="20" y="207">
          SAFE PACKING
        </text>
        <text x="120" y="207">
          ON TIME
        </text>
        <text x="212" y="207">
          INSURED
        </text>
      </g>
      <g stroke={INK} strokeWidth="1.8" fill="none">
        <circle cx="14" cy="203" r="4.4" />
        <path d="M12 203 l1.6 1.8 2.6 -3" />
        <circle cx="114" cy="203" r="4.4" />
        <path d="M112 203 l1.6 1.8 2.6 -3" />
        <circle cx="206" cy="203" r="4.4" />
        <path d="M204 203 l1.6 1.8 2.6 -3" />
      </g>

      {/* service cards */}
      <g>
        <rect
          x="18"
          y="222"
          width="126"
          height="84"
          rx="10"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.2"
        />
        <rect
          x="156"
          y="222"
          width="126"
          height="84"
          rx="10"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2.2"
        />
        <g stroke={INK} strokeWidth="2.2" fill="none" strokeLinejoin="round">
          <path d="M34 258 l20 -12 20 12 v20 h-40 Z" />
          <path d="M172 262 h34 v16 h-34 Z M176 262 v-10 h26 v10" />
        </g>
        <text
          x="34"
          y="292"
          fontFamily="Outfit, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill={INK}
          letterSpacing="1"
        >
          HOUSE
        </text>
        <text
          x="172"
          y="292"
          fontFamily="Outfit, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill={INK}
          letterSpacing="1"
        >
          OFFICE
        </text>
      </g>

      {/* photo block */}
      <rect x="18" y="320" width="264" height="104" rx="10" fill="url(#bk-hatch)" opacity="0.18" />
      <rect
        x="18"
        y="320"
        width="264"
        height="104"
        rx="10"
        fill="none"
        stroke={INK}
        strokeWidth="2.2"
      />
      <g stroke={INK} strokeWidth="2.4" fill="none" strokeLinejoin="round">
        <rect x="46" y="366" width="46" height="34" rx="3" />
        <rect x="100" y="376" width="34" height="24" rx="3" />
        <path d="M158 400 l0 -30 22 0 8 10 0 20 Z" />
        <circle cx="170" cy="400" r="7" fill={PAPER} />
        <circle cx="196" cy="400" r="7" fill={PAPER} />
      </g>
      <text
        x="150"
        y="352"
        textAnchor="middle"
        fontFamily={HAND}
        fontSize="14"
        fill={INK}
        opacity="0.8"
      >
        multi-layer packing
      </text>

      {/* stats */}
      <text x="18" y="452" fontFamily={DISPLAY} fontSize="22" fill={INK}>
        2,400+
      </text>
      <text
        x="18"
        y="468"
        fontFamily="Outfit, sans-serif"
        fontSize="8"
        fill={INK}
        opacity="0.6"
        letterSpacing="0.8"
      >
        HOMES MOVED
      </text>
      <text x="150" y="452" fontFamily={DISPLAY} fontSize="22" fill={INK}>
        12 yrs
      </text>
      <text
        x="150"
        y="468"
        fontFamily="Outfit, sans-serif"
        fontSize="8"
        fill={INK}
        opacity="0.6"
        letterSpacing="0.8"
      >
        OF MOVING
      </text>

      {/* review */}
      <rect x="18" y="486" width="264" height="72" rx="10" fill="#f2f0e8" />
      <text
        x="32"
        y="510"
        fontFamily="Outfit, sans-serif"
        fontSize="14"
        fill={INK}
        letterSpacing="2"
      >
        ★★★★★
      </text>
      <text x="32" y="528" fontFamily="Outfit, sans-serif" fontSize="8" fill={INK} opacity="0.7">
        “Careful, on time, no damage.”
      </text>
      <text x="32" y="544" fontFamily="Outfit, sans-serif" fontSize="8" fill={INK} opacity="0.45">
        — Verified customer, Indore
      </text>

      {/* footer */}
      <rect x="0" y="572" width="300" height="40" fill={INK} />
      <text
        x="18"
        y="597"
        fontFamily="Outfit, sans-serif"
        fontSize="10"
        fontWeight="700"
        fill={PAPER}
        letterSpacing="0.8"
      >
        CALL 7000568402
      </text>
    </g>
  );
}

/* ==================================================================== */
/*  STANDING FIGURES                                                    */
/* ==================================================================== */

function WalkLeg({ back, delay = 0 }: { back?: boolean; delay?: number }) {
  return (
    <g
      className={back ? "bk-leg bk-leg--b" : "bk-leg bk-leg--f"}
      style={{ animationDelay: `${delay}s` }}
    >
      <g className="bk-thigh">
        <path d="M0 0 L0 17" stroke={INK} strokeWidth="7" strokeLinecap="round" fill="none" />
        <g className="bk-shin" transform="translate(0 17)">
          <path d="M0 0 L0 15" stroke={INK} strokeWidth="6" strokeLinecap="round" fill="none" />
          <path
            d="M-8 13 L4 13 Q10 13 10 17 Q10 21 4 21 L-9 21 Q-12 21 -12 17 Q-12 13 -8 13 Z"
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

function WorkerSide({
  hair = "cap",
  box = true,
}: {
  hair?: "cap" | "flat" | "bald";
  box?: boolean;
}) {
  return (
    <g transform="translate(0 -37)">
      <WalkLeg back delay={-0.45} />
      <WalkLeg />
      <g className="bk-walk-bob">
        {/* torso */}
        <path
          d="M-11 0 Q-13 -20 -10 -34 Q0 -39 10 -34 Q13 -20 11 0 Q0 4 -11 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path d="M-9 -32 Q0 -29 9 -32" stroke={INK} strokeWidth="1.8" fill="none" opacity="0.5" />
        {/* back arm */}
        <path
          d="M-9 -30 Q-16 -20 -13 -12"
          stroke={INK}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {/* head */}
        <circle cx="1" cy="-46" r="9" fill={PAPER} stroke={INK} strokeWidth="3.2" />
        <path
          d="M6 -46.6 Q8 -45.4 6.4 -44.6"
          stroke={INK}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="-2" cy="-48" r="1.4" fill={INK} />
        {hair === "cap" ? (
          <g>
            <path d="M-8 -49 Q-6 -58 3 -57 Q12 -56 11 -48 Z" fill={INK} />
            <path d="M9 -49 L17 -47" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
          </g>
        ) : hair === "flat" ? (
          <path
            d="M-8 -49 Q-7 -57 2 -57 Q11 -57 11 -49"
            fill="none"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M-6 -52 Q0 -58 7 -53"
            fill="none"
            stroke={INK}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        )}
        {/* front arm */}
        <path
          d="M9 -30 Q16 -22 13 -14"
          stroke={INK}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="13" cy="-13" r="3" fill={PAPER} stroke={INK} strokeWidth="2.2" />
        {box && (
          <g transform="translate(6 -20)">
            <rect
              x="-15"
              y="-15"
              width="30"
              height="30"
              rx="2"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3"
            />
            <path d="M0 -15 V15 M-15 0 H15" stroke={INK} strokeWidth="1.8" opacity="0.55" />
            <path d="M-7 -15 l7 7 7 -7" stroke={INK} strokeWidth="1.8" fill="none" opacity="0.55" />
          </g>
        )}
      </g>
    </g>
  );
}

function BossSide({ capTip, keys, reach }: { capTip?: boolean; keys?: boolean; reach?: boolean }) {
  return (
    <g transform="translate(0 -37)">
      <WalkLeg back delay={-0.4} />
      <WalkLeg />
      <g className="bk-walk-bob">
        <path
          d="M-13 0 Q-16 -24 -12 -41 Q0 -47 12 -41 Q16 -24 13 0 Q0 5 -13 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="3.6"
          strokeLinejoin="round"
        />
        <path d="M-11 -38 Q0 -34 11 -38" stroke={INK} strokeWidth="1.8" fill="none" opacity="0.5" />
        <path d="M0 -34 V-4" stroke={INK} strokeWidth="1.6" opacity="0.35" />
        {/* head */}
        <circle cx="1" cy="-55" r="10.6" fill={PAPER} stroke={INK} strokeWidth="3.4" />
        <path
          d="M7 -55.6 Q9.4 -54 7.4 -53"
          stroke={INK}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="-2" cy="-57" r="1.6" fill={INK} />
        <path
          d="M-4 -51 Q2 -48 7 -51"
          stroke={INK}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <g className={capTip ? "bk-cap-tip" : undefined}>
          <path d="M-10 -59 Q-8 -70 2 -69 Q13 -68 12 -58 Z" fill={INK} />
          <path d="M10 -59 L21 -56" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
        </g>
        {/* arms */}
        <g className={capTip ? "bk-cap-arm" : reach ? undefined : "bk-point-arm"}>
          <path
            d={reach ? "M10 -37 Q30 -20 46 -6" : "M10 -37 Q19 -30 21 -20"}
            stroke={INK}
            strokeWidth="5.4"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx={reach ? 46 : 21}
            cy={reach ? -6 : -19}
            r="3.2"
            fill={PAPER}
            stroke={INK}
            strokeWidth="2.2"
          />
        </g>
        <path
          d="M-11 -37 Q-18 -30 -16 -21"
          stroke={INK}
          strokeWidth="5.4"
          strokeLinecap="round"
          fill="none"
        />
        {keys && (
          <g className="bk-keys">
            <g transform="translate(-16 -19)">
              <circle cx="0" cy="0" r="4" fill="none" stroke={INK} strokeWidth="2.2" />
              <path
                d="M2 3 L8 12 M5 9 L9 7 M7 12 L11 10"
                stroke={INK}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>
        )}
      </g>
    </g>
  );
}

function CustomerSide({ wave, reach }: { wave?: boolean; reach?: boolean }) {
  return (
    <g transform="translate(0 -37)">
      <WalkLeg back delay={-0.4} />
      <WalkLeg />
      <g className="bk-walk-bob">
        <path
          d="M-11 0 Q-14 -22 -11 -38 Q0 -43 11 -38 Q14 -22 11 0 Q0 4 -11 0 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="3.4"
          strokeLinejoin="round"
        />
        <path d="M-9 -35 Q0 -31 9 -35" stroke={INK} strokeWidth="1.8" fill="none" opacity="0.5" />
        <circle cx="1" cy="-51" r="10" fill={PAPER} stroke={INK} strokeWidth="3.2" />
        <path
          d="M-8 -53 Q-6 -62 3 -61 Q12 -60 11 -52"
          fill="none"
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M6 -51.6 Q8 -50.4 6.4 -49.6"
          stroke={INK}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="-2" cy="-53" r="1.5" fill={INK} />
        <path
          d="M-3 -47 Q1 -44 5 -47"
          stroke={INK}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={reach ? "M-10 -35 Q-30 -18 -46 -6" : "M-10 -35 Q-17 -28 -15 -19"}
          stroke={INK}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {reach && <circle cx="-46" cy="-6" r="3.2" fill={PAPER} stroke={INK} strokeWidth="2.2" />}
        <g className={wave ? "bk-wave" : undefined}>
          <path
            d="M10 -35 Q20 -34 24 -27"
            stroke={INK}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="25" cy="-26" r="3.2" fill={PAPER} stroke={INK} strokeWidth="2.2" />
        </g>
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  TRUCK                                                               */
/* ==================================================================== */

function Truck({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {/* container */}
      <rect
        x="-300"
        y="-172"
        width="322"
        height="126"
        rx="8"
        fill={PAPER}
        stroke={INK}
        strokeWidth="5"
      />
      <path d="M-300 -46 H22" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <g stroke={INK} strokeWidth="2.2" opacity="0.45">
        <path d="M-262 -168 V-50 M-222 -168 V-50 M-182 -168 V-50 M-142 -168 V-50 M-102 -168 V-50 M-62 -168 V-50 M-22 -168 V-50 M18 -168 V-50" />
      </g>
      <text x="-140" y="-120" textAnchor="middle" fontFamily={DISPLAY} fontSize="26" fill={INK}>
        Shree Nath
      </text>
      <text
        x="-140"
        y="-98"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontSize="10"
        fontWeight="700"
        fill={INK}
        letterSpacing="2.4"
      >
        PACKERS &amp; MOVERS
      </text>

      {/* cab */}
      <path
        d="M22 -172 H126 Q168 -172 178 -132 L186 -88 L186 -46 H22 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M34 -160 H120 Q150 -160 158 -128 L164 -100 H34 Z" fill={INK} opacity="0.12" />
      <path
        d="M34 -160 H120 Q150 -160 158 -128"
        fill="none"
        stroke={INK}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M120 -160 L128 -100" stroke={INK} strokeWidth="3" />
      {/* driver silhouette */}
      <g fill={INK} opacity="0.75">
        <circle cx="66" cy="-140" r="9" />
        <path d="M52 -128 Q66 -136 80 -128 L82 -104 H50 Z" />
      </g>
      {/* door line + handle */}
      <path d="M92 -100 V-50" stroke={INK} strokeWidth="2.6" opacity="0.6" />
      <path d="M100 -96 h14" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {/* bumper + lights */}
      <path d="M186 -60 H202" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <rect x="170" y="-56" width="14" height="10" rx="2" fill={INK} />
      <path d="M22 -150 Q10 -150 10 -138" stroke={INK} strokeWidth="3" fill="none" />

      {/* wheels */}
      {[-232, -116, 128].map((cx) => (
        <g key={cx} transform={`translate(${cx} -36)`}>
          <g className="bk-wheel">
            <circle cx="0" cy="0" r="34" fill={PAPER} stroke={INK} strokeWidth="6" />
            <circle cx="0" cy="0" r="13" fill={PAPER} stroke={INK} strokeWidth="3.4" />
            <g stroke={INK} strokeWidth="3" strokeLinecap="round">
              <path d="M0 -13 V-30 M0 13 V30 M-13 0 H-30 M13 0 H30" />
              <path d="M-9 -9 L-21 -21 M9 9 L21 21 M9 -9 L21 -21 M-9 9 L-21 21" />
            </g>
          </g>
        </g>
      ))}
      <path
        d="M-262 -36 H-202 M-146 -36 H-86 M98 -36 H158"
        stroke={INK}
        strokeWidth="2"
        opacity="0.3"
      />
    </g>
  );
}

/* ==================================================================== */
/*  HOUSE                                                               */
/* ==================================================================== */

function House({ s = 1 }: { s?: number }) {
  return (
    <g transform={`scale(${s})`}>
      {/* body */}
      <rect x="120" y="200" width="400" height="230" fill={PAPER} stroke={INK} strokeWidth="5" />
      {/* roof */}
      <path
        d="M98 206 L320 88 L542 206 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M112 200 L320 100 L528 200"
        fill="none"
        stroke={INK}
        strokeWidth="2"
        opacity="0.35"
      />
      {/* chimney */}
      <path
        d="M440 132 V78 H474 V160"
        fill={PAPER}
        stroke={INK}
        strokeWidth="4.4"
        strokeLinejoin="round"
      />
      <g
        className="bk-smoke"
        fill="none"
        stroke={INK}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.5"
      >
        <path d="M458 66 Q450 54 460 44 Q470 34 462 22" />
        <path d="M474 62 Q484 50 474 38" />
      </g>
      {/* windows */}
      {(
        [
          [176, 236],
          [418, 236],
        ] as [number, number][]
      ).map(([x, y]) => (
        <g key={x}>
          <rect
            x={x}
            y={y}
            width="82"
            height="80"
            rx="3"
            fill={PAPER}
            stroke={INK}
            strokeWidth="4"
          />
          <path
            d={`M${x + 41} ${y} V${y + 80} M${x} ${y + 40} H${x + 82}`}
            stroke={INK}
            strokeWidth="2.6"
          />
          <path
            d={`M${x - 6} ${y + 84} H${x + 88}`}
            stroke={INK}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      ))}
      {/* door */}
      <rect
        x="296"
        y="296"
        width="86"
        height="134"
        rx="4"
        fill={PAPER}
        stroke={INK}
        strokeWidth="4.6"
      />
      <rect x="306" y="306" width="66" height="58" rx="3" fill="url(#bk-hatch)" opacity="0.16" />
      <rect x="306" y="374" width="66" height="46" rx="3" fill="url(#bk-hatch)" opacity="0.16" />
      <circle cx="364" cy="372" r="3.6" fill={INK} />
      <path d="M288 430 H390" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {/* step + path */}
      <path
        d="M296 434 H382 L396 448 H282 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path
        d="M304 448 L298 508 M386 448 L380 508"
        stroke={INK}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      {/* fence */}
      <g stroke={INK} strokeWidth="3" strokeLinecap="round">
        <path d="M0 380 H120 M0 430 H120" />
        <path d="M10 368 V444 M44 368 V444 M78 368 V444 M112 368 V444" strokeWidth="2.4" />
      </g>
    </g>
  );
}

/* ==================================================================== */
/*  THE SCENE                                                           */
/* ==================================================================== */

function SceneArt() {
  return (
    <>
      {/* ============================ 1 · SCROLLING ON THE SOFA ================== */}
      <Shot id="s1">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <path d="M0 430 H960" stroke={INK} strokeWidth="3" />
          <ellipse
            cx="450"
            cy="476"
            rx="256"
            ry="32"
            fill="none"
            stroke={INK}
            strokeWidth="2.4"
            opacity="0.3"
          />
          <ellipse cx="560" cy="430" rx="190" ry="12" fill={INK} opacity="0.05" />

          {/* window */}
          <g>
            <rect
              x="120"
              y="112"
              width="176"
              height="150"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <path d="M208 112 V262 M120 187 H296" stroke={INK} strokeWidth="2.6" />
            <path
              d="M134 250 Q162 208 188 240 Q206 216 228 244 L228 250 Z"
              fill={INK}
              opacity="0.12"
            />
            <g className="bk-curtain bk-curtain--l">
              <path
                d="M118 104 Q104 184 118 268 L144 268 Q136 186 142 104 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.4"
              />
            </g>
            <g className="bk-curtain bk-curtain--r">
              <path
                d="M298 104 Q284 184 298 268 L274 268 Q266 186 272 104 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.4"
              />
            </g>
          </g>

          {/* art */}
          <g>
            <rect
              x="648"
              y="118"
              width="132"
              height="100"
              rx="4"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <path
              d="M660 202 L686 160 L706 188 L722 168 L768 206"
              stroke={INK}
              strokeWidth="2.6"
              fill="none"
            />
            <circle cx="742" cy="142" r="9" stroke={INK} strokeWidth="2.6" fill="none" />
          </g>

          {/* pendant */}
          <path d="M812 0 V116" stroke={INK} strokeWidth="2.4" />
          <g className="bk-lamp">
            <path
              d="M782 146 Q788 116 812 116 Q836 116 842 146 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M796 146 Q812 152 828 146"
              stroke={INK}
              strokeWidth="2"
              fill="none"
              opacity="0.45"
            />
          </g>

          {/* sofa */}
          <g>
            <rect
              x="286"
              y="238"
              width="54"
              height="172"
              rx="22"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <rect
              x="300"
              y="356"
              width="292"
              height="50"
              rx="18"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <rect
              x="560"
              y="316"
              width="48"
              height="94"
              rx="20"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <path
              d="M338 360 V404 M552 360 V404"
              stroke={INK}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M320 302 Q350 292 372 306"
              stroke={INK}
              strokeWidth="2.4"
              fill="none"
              opacity="0.4"
            />
          </g>

          {/* customer, seated in profile */}
          <g>
            <path
              d="M356 366 Q430 372 452 384 Q466 400 470 424"
              stroke={INK}
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M356 366 Q430 372 452 384 Q466 400 470 424"
              stroke={PAPER}
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M352 358 Q340 320 356 294 Q372 274 396 284 Q408 312 400 354 Q376 366 352 358 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4.2"
              strokeLinejoin="round"
            />
            <g className="bk-foot-tap">
              <path
                d="M364 366 Q452 374 476 390 Q492 408 494 430"
                stroke={INK}
                strokeWidth="22"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M364 366 Q452 374 476 390 Q492 408 494 430"
                stroke={PAPER}
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M492 424 Q512 418 526 428 Q530 438 510 441 L486 441 Q476 432 492 424 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.2"
                strokeLinejoin="round"
              />
            </g>
            <g className="bk-headmove">
              <path
                d="M384 284 Q376 250 400 244 Q420 240 426 258 L432 268 Q428 276 418 276 Q414 288 396 288 Q384 288 384 284 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M394 250 Q402 242 414 248"
                stroke={INK}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="404" cy="262" r="2.6" fill={INK} />
              <g className="bk-mouth-idle">
                <path
                  d="M400 275 Q406 277 411 274"
                  stroke={INK}
                  strokeWidth="2.4"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
              <g className="bk-mouth-grin">
                <path
                  d="M397 272 Q406 284 415 271"
                  stroke={INK}
                  strokeWidth="2.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M400 277 Q406 279 411 276"
                  stroke={INK}
                  strokeWidth="1.6"
                  fill="none"
                  opacity="0.5"
                />
              </g>
            </g>
            <path
              d="M394 296 L430 330 L462 306"
              stroke={INK}
              strokeWidth="13"
              strokeLinecap="round"
              fill="none"
            />
            <g transform="rotate(-8 472 296)">
              <rect
                x="456"
                y="266"
                width="36"
                height="62"
                rx="7"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.6"
              />
              <circle cx="466" cy="277" r="2.6" fill={INK} />
              <circle cx="474" cy="277" r="1.8" fill={INK} opacity="0.55" />
            </g>
            <circle cx="458" cy="300" r="7" fill={PAPER} stroke={INK} strokeWidth="2.6" />
            <g
              className="bk-scrollticks"
              stroke={INK}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            >
              <path d="M498 288 L510 294 M498 296 L508 301" />
            </g>
          </g>

          {/* side table */}
          <g>
            <path
              d="M760 356 H844 M770 356 V430 M834 356 V430"
              stroke={INK}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="M800 330 H836 V356 H800 Z" fill={PAPER} stroke={INK} strokeWidth="3.2" />
            <path d="M836 336 Q848 340 836 350" stroke={INK} strokeWidth="3" fill="none" />
            <path
              d="M806 330 Q808 318 816 320 M820 330 Q822 318 830 320"
              stroke={INK}
              strokeWidth="2"
              fill="none"
              opacity="0.35"
            />
          </g>

          {/* plant */}
          <g>
            <path
              d="M880 430 L892 372 H928 L940 430 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3.4"
              strokeLinejoin="round"
            />
            <g className="bk-plant">
              <path
                d="M910 372 Q892 330 872 318 M910 372 Q912 318 900 292 M910 372 Q930 330 948 322"
                stroke={INK}
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M872 318 Q858 310 856 296 Q872 296 880 310 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="2.6"
              />
              <path
                d="M900 292 Q890 276 896 264 Q908 272 908 288 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="2.6"
              />
              <path
                d="M948 322 Q964 316 966 302 Q950 300 942 314 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="2.6"
              />
            </g>
          </g>
        </g>
      </Shot>

      {/* ============================ 2 · OUR SITE ON HIS PHONE ================= */}
      <Shot id="s1b">
        <rect width="960" height="540" fill={PAPER} />
        <ellipse cx="480" cy="272" rx="400" ry="300" fill="url(#bk-vignette)" />
        <g opacity="0.4" filter="url(#bk-rough)">
          <path d="M0 500 Q120 452 236 500 L236 540 L0 540 Z" fill={INK} opacity="0.08" />
          <path
            d="M880 40 Q910 200 892 360"
            stroke={INK}
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
        </g>

        <g transform="translate(480 272)">
          <g filter="url(#bk-rough)">
            <rect x="-164" y="-250" width="328" height="500" rx="44" fill={INK} />
            <rect x="-150" y="-236" width="300" height="472" rx="34" fill={PAPER} />
          </g>
          <g transform="translate(-150 -236)">
            <clipPath id="bk-screen-a">
              <rect x="0" y="0" width="300" height="472" rx="34" />
            </clipPath>
            <g clipPath="url(#bk-screen-a)">
              <g className="bk-scroll">
                <SiteContent />
              </g>
            </g>
          </g>
          <rect x="164" y="-46" width="7" height="50" rx="3.5" fill={INK} opacity="0.55" />
          <rect x="-171" y="-34" width="7" height="36" rx="3.5" fill={INK} opacity="0.55" />
        </g>

        {/* scrolling thumb */}
        <g className="bk-thumb-scroll">
          <g transform="translate(566 556) rotate(-8)">
            {/* palm */}
            <path
              d="M0 0 Q-16 -46 -6 -84 Q4 -116 34 -114 Q66 -112 74 -78 Q82 -44 70 -6 Q46 12 0 0 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* thumb reaching up the screen */}
            <path
              d="M-8 -80 Q-22 -112 -12 -134 Q-2 -152 12 -142 Q26 -132 22 -106 Q18 -84 6 -74 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* knuckles */}
            <g stroke={INK} strokeWidth="2.2" fill="none" opacity="0.32" strokeLinecap="round">
              <path d="M22 -74 Q40 -66 54 -72" />
              <path d="M26 -52 Q44 -44 58 -50" />
              <path d="M26 -30 Q42 -22 56 -28" />
            </g>
          </g>
        </g>
      </Shot>

      {/* ============================ 3 · THE SMILE ============================= */}
      <Shot id="s2">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <ellipse cx="480" cy="300" rx="310" ry="280" fill="url(#bk-vignette)" />
          <path
            d="M120 110 Q74 300 120 480"
            stroke={INK}
            strokeWidth="1.6"
            opacity="0.16"
            fill="none"
          />
          <path
            d="M840 110 Q886 300 840 480"
            stroke={INK}
            strokeWidth="1.6"
            opacity="0.16"
            fill="none"
          />
        </g>
        <g transform="translate(480 322) scale(3.35)">
          <Face kind="customer" mood="smile" delay={0} />
        </g>
        <g className="bk-spark" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M714 118 L740 92 M724 152 L756 142 M688 96 L702 70" />
          <path d="M250 126 L224 100 M238 158 L206 150" />
        </g>
      </Shot>

      {/* ============================ 4 · TAP TO CALL =========================== */}
      <Shot id="s3">
        <rect width="960" height="540" fill={PAPER} />
        <ellipse cx="470" cy="272" rx="400" ry="300" fill="url(#bk-vignette)" />
        <g transform="translate(470 280)">
          <g filter="url(#bk-rough)">
            <rect x="-186" y="-262" width="372" height="524" rx="48" fill={INK} />
            <rect x="-170" y="-246" width="340" height="492" rx="38" fill={PAPER} />
          </g>
          <g transform="translate(-170 -246)">
            <clipPath id="bk-screen-b">
              <rect x="0" y="0" width="340" height="492" rx="38" />
            </clipPath>
            <g clipPath="url(#bk-screen-b)">
              {/* site state */}
              <g className="bk-scr-site">
                <rect width="340" height="492" fill={PAPER} />
                <rect x="0" y="0" width="340" height="40" fill="#f2f0e8" />
                <text x="20" y="27" fontFamily={DISPLAY} fontSize="16" fill={INK}>
                  Shree Nath
                </text>
                <text
                  x="20"
                  y="86"
                  fontFamily="Outfit, sans-serif"
                  fontSize="13"
                  fill={INK}
                  letterSpacing="2.4"
                >
                  ★★★★★
                </text>
                <text
                  x="20"
                  y="112"
                  fontFamily="Outfit, sans-serif"
                  fontSize="10"
                  fill={INK}
                  opacity="0.6"
                >
                  4.9 · 2,400+ homes moved
                </text>
                <path d="M20 132 H320" stroke={INK} strokeWidth="1.4" opacity="0.2" />
                <text x="20" y="176" fontFamily={DISPLAY} fontSize="30" fill={INK}>
                  Book your
                </text>
                <text x="20" y="210" fontFamily={DISPLAY} fontSize="30" fill={INK}>
                  move today
                </text>
                <text
                  x="20"
                  y="238"
                  fontFamily="Outfit, sans-serif"
                  fontSize="10"
                  fill={INK}
                  opacity="0.55"
                >
                  Free survey · fixed quote · insured
                </text>

                {/* CTA */}
                <g transform="translate(20 268)">
                  <rect
                    className="bk-btn-off"
                    x="0"
                    y="0"
                    width="300"
                    height="66"
                    rx="18"
                    fill={PAPER}
                    stroke={INK}
                    strokeWidth="4"
                  />
                  <text
                    className="bk-btn-off"
                    x="150"
                    y="41"
                    textAnchor="middle"
                    fontFamily="Outfit, sans-serif"
                    fontSize="20"
                    fontWeight="700"
                    fill={INK}
                    letterSpacing="2"
                  >
                    CALL NOW
                  </text>
                  <rect
                    className="bk-btn-on"
                    x="0"
                    y="0"
                    width="300"
                    height="66"
                    rx="18"
                    fill={INK}
                  />
                  <text
                    className="bk-btn-on"
                    x="150"
                    y="41"
                    textAnchor="middle"
                    fontFamily="Outfit, sans-serif"
                    fontSize="20"
                    fontWeight="700"
                    fill={PAPER}
                    letterSpacing="2"
                  >
                    CALLING
                  </text>
                </g>

                {/* ripples */}
                <g transform="translate(170 301)">
                  <circle
                    className="bk-ripple-1"
                    cx="0"
                    cy="0"
                    r="60"
                    fill="none"
                    stroke={INK}
                    strokeWidth="3"
                  />
                  <circle
                    className="bk-ripple-2"
                    cx="0"
                    cy="0"
                    r="60"
                    fill="none"
                    stroke={INK}
                    strokeWidth="3"
                  />
                </g>

                <text
                  x="20"
                  y="374"
                  fontFamily="Outfit, sans-serif"
                  fontSize="10"
                  fill={INK}
                  opacity="0.55"
                >
                  Dewas Naka, Indore · Open 8am–9pm
                </text>
                <g stroke={INK} strokeWidth="1.4" opacity="0.16">
                  <path d="M20 396 H320 M20 424 H320 M20 452 H260" />
                </g>
              </g>

              {/* calling state */}
              <g className="bk-scr-call">
                <rect width="340" height="492" fill={INK} />
                <g className="bk-ringicon" transform="translate(170 232) rotate(-38)">
                  <rect x="-34" y="-11" width="68" height="22" rx="11" fill={PAPER} />
                  <rect x="-40" y="-30" width="28" height="20" rx="9" fill={PAPER} />
                  <rect x="12" y="-30" width="28" height="20" rx="9" fill={PAPER} />
                </g>
                <circle
                  cx="170"
                  cy="232"
                  r="52"
                  fill="none"
                  stroke={PAPER}
                  strokeWidth="2"
                  opacity="0.35"
                />
                <text
                  x="170"
                  y="330"
                  textAnchor="middle"
                  fontFamily="Outfit, sans-serif"
                  fontSize="15"
                  fill={PAPER}
                  letterSpacing="3"
                >
                  CALLING…
                </text>
                <text
                  x="170"
                  y="362"
                  textAnchor="middle"
                  fontFamily={HAND}
                  fontSize="18"
                  fill={PAPER}
                  opacity="0.7"
                >
                  Shree Nath Packers
                </text>
                <g
                  className="bk-ringwave"
                  stroke={PAPER}
                  strokeWidth="2.4"
                  fill="none"
                  opacity="0.6"
                >
                  <path d="M92 300 Q78 316 92 332 M248 300 Q262 316 248 332" />
                </g>
              </g>
            </g>
          </g>
        </g>

        {/* tapping thumb */}
        <g className="bk-thumb-tap">
          <g transform="translate(506 566) rotate(6)">
            {/* palm */}
            <path
              d="M0 0 Q-14 -44 -4 -82 Q6 -114 36 -112 Q68 -110 74 -76 Q82 -42 68 -4 Q44 14 0 0 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* the finger that taps, coming in from the left */}
            <path
              d="M-4 -46 Q-34 -70 -30 -96 Q-26 -116 -8 -110 Q10 -104 8 -80 Q6 -60 8 -44 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <g stroke={INK} strokeWidth="2.2" fill="none" opacity="0.32" strokeLinecap="round">
              <path d="M24 -72 Q42 -64 54 -70" />
              <path d="M26 -50 Q44 -42 56 -48" />
            </g>
          </g>
        </g>
      </Shot>

      {/* ============================ 5 · THE OFFICE ============================ */}
      <Shot id="s4">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <path d="M0 430 H960" stroke={INK} strokeWidth="3" />

          {/* wall sign */}
          <g>
            <rect
              x="286"
              y="66"
              width="416"
              height="104"
              rx="6"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <text x="494" y="116" textAnchor="middle" fontFamily={DISPLAY} fontSize="34" fill={INK}>
              Shree Nath
            </text>
            <text
              x="494"
              y="146"
              textAnchor="middle"
              fontFamily="Outfit, sans-serif"
              fontSize="12"
              fontWeight="700"
              fill={INK}
              letterSpacing="4"
            >
              PACKERS &amp; MOVERS
            </text>
            <path d="M330 158 H658" stroke={INK} strokeWidth="1.6" opacity="0.35" />
          </g>

          {/* window with blinds */}
          <g>
            <rect
              x="52"
              y="132"
              width="164"
              height="188"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <g stroke={INK} strokeWidth="2" opacity="0.4">
              <path d="M52 156 H216 M52 178 H216 M52 200 H216 M52 222 H216 M52 244 H216 M52 266 H216 M52 288 H216" />
            </g>
          </g>

          {/* clock */}
          <g>
            <circle cx="836" cy="130" r="34" fill={PAPER} stroke={INK} strokeWidth="4" />
            <path
              d="M836 130 V108 M836 130 L852 138"
              stroke={INK}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="836" cy="130" r="3" fill={INK} />
          </g>

          {/* chair back */}
          <g>
            <rect
              x="424"
              y="232"
              width="152"
              height="140"
              rx="26"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <path
              d="M452 250 Q500 240 548 250"
              stroke={INK}
              strokeWidth="2.4"
              fill="none"
              opacity="0.35"
            />
          </g>

          {/* boss seated */}
          <g transform="translate(500 258)">
            <g transform="scale(0.98)">
              <Face kind="boss" mood="talk" delay={-1.7} />
            </g>
          </g>

          {/* the handset that ends up at his ear */}
          <g className="bk-ear-handset" transform="translate(538 250)">
            <g transform="rotate(-12)">
              <rect
                x="-7"
                y="-30"
                width="15"
                height="60"
                rx="7"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.4"
              />
              <rect x="-10" y="-33" width="21" height="10" rx="5" fill={INK} />
              <rect x="-10" y="23" width="21" height="10" rx="5" fill={INK} />
              <path d="M0 -20 V14" stroke={INK} strokeWidth="1.8" opacity="0.35" />
            </g>
            <g fill={PAPER} stroke={INK} strokeWidth="2.8" strokeLinejoin="round">
              <rect x="6" y="-8" width="15" height="9" rx="4.5" />
              <rect x="7" y="3" width="14" height="9" rx="4.5" />
            </g>
          </g>

          {/* arms */}
          <g>
            {/* shoulders resting on the chair */}
            <path
              d="M446 300 Q470 284 500 286 Q530 284 554 300 Q560 316 556 330 H444 Q440 316 446 300 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* arms on the desk, hands resting, the phone at his ear */}
            <path
              d="M470 318 Q462 332 456 344"
              stroke={INK}
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M530 318 Q538 332 544 344"
              stroke={INK}
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="454" cy="346" rx="9" ry="6" fill={PAPER} stroke={INK} strokeWidth="2.6" />
            <ellipse cx="546" cy="346" rx="9" ry="6" fill={PAPER} stroke={INK} strokeWidth="2.6" />
          </g>

          {/* desk */}
          <g>
            <rect
              x="248"
              y="352"
              width="470"
              height="26"
              rx="6"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4.4"
            />
            <path
              d="M262 378 V430 M704 378 V430"
              stroke={INK}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <rect
              x="262"
              y="388"
              width="160"
              height="42"
              rx="4"
              fill="none"
              stroke={INK}
              strokeWidth="3"
              opacity="0.5"
            />
          </g>

          {/* desk phone (base, handset lifted) */}
          <g>
            <g className="bk-ringphone">
              <g transform="translate(700 334)">
                <path
                  d="M-30 0 H30 L24 16 H-24 Z"
                  fill={PAPER}
                  stroke={INK}
                  strokeWidth="3.4"
                  strokeLinejoin="round"
                />
                <g stroke={INK} strokeWidth="2" fill="none" opacity="0.5">
                  <path d="M-18 6 h8 M-4 6 h8 M10 6 h8" />
                </g>
              </g>
            </g>
            <g
              className="bk-ring-arc--l"
              stroke={INK}
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
            >
              <path d="M664 320 Q650 334 664 348" />
            </g>
            <g
              className="bk-ring-arc--r"
              stroke={INK}
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
            >
              <path d="M738 320 Q752 334 738 348" />
            </g>
            <g className="bk-tring" fontFamily={HAND} fontSize="20" fill={INK}>
              <text x="742" y="306">
                tring!
              </text>
            </g>
          </g>

          {/* notepad + mug + plant */}
          <g>
            <rect
              x="330"
              y="330"
              width="86"
              height="24"
              rx="2"
              fill={PAPER}
              stroke={INK}
              strokeWidth="2.6"
              transform="rotate(-4 373 342)"
            />
            <g stroke={INK} strokeWidth="1.6" opacity="0.4" transform="rotate(-4 373 342)">
              <path d="M338 336 H406 M338 342 H400 M338 348 H392" />
            </g>
            <path d="M716 330 H748 V352 H716 Z" fill={PAPER} stroke={INK} strokeWidth="3" />
            <path d="M748 334 Q760 338 748 348" stroke={INK} strokeWidth="2.8" fill="none" />
            <g>
              <path
                d="M292 352 h26 l-4 -22 h-18 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              <path d="M305 330 V304" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
              <path
                d="M305 318 Q290 314 284 300 Q296 296 306 308 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M305 312 Q318 306 326 292 Q312 290 304 302 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M305 306 Q300 292 306 282 Q314 290 310 304 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* rug */}
          <ellipse cx="480" cy="470" rx="230" ry="26" fill={INK} opacity="0.04" />
        </g>
      </Shot>

      {/* ============================ 6 · HE TALKS ============================== */}
      <Shot id="s5a">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <ellipse cx="480" cy="300" rx="320" ry="280" fill="url(#bk-vignette)" />
          <g opacity="0.22">
            <rect
              x="60"
              y="90"
              width="150"
              height="180"
              rx="4"
              fill="none"
              stroke={INK}
              strokeWidth="3"
            />
            <path d="M60 160 H210 M135 90 V270" stroke={INK} strokeWidth="2" />
          </g>
        </g>
        <g transform="translate(470 320) scale(3.3)">
          <Face kind="customer" mood="talk" delay={-0.6} phoneAtEar />
        </g>
      </Shot>

      {/* ============================ 7 · WE TALK =============================== */}
      <Shot id="s5b">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <ellipse cx="480" cy="300" rx="320" ry="280" fill="url(#bk-vignette)" />
          <g opacity="0.2">
            <rect
              x="620"
              y="60"
              width="300"
              height="88"
              rx="4"
              fill="none"
              stroke={INK}
              strokeWidth="3"
            />
            <text
              x="770"
              y="112"
              textAnchor="middle"
              fontFamily={DISPLAY}
              fontSize="26"
              fill={INK}
              opacity="0.7"
            >
              Shree Nath
            </text>
          </g>
        </g>
        <g transform="translate(480 320) scale(3.3)">
          <Face kind="boss" mood="talk" delay={-2.2} phoneAtEar />
        </g>
      </Shot>

      {/* ============================ 8 · HE LISTENS ============================ */}
      <Shot id="s5c">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <ellipse cx="480" cy="300" rx="320" ry="280" fill="url(#bk-vignette)" />
          <g opacity="0.22">
            <rect
              x="60"
              y="90"
              width="150"
              height="180"
              rx="4"
              fill="none"
              stroke={INK}
              strokeWidth="3"
            />
            <path d="M60 160 H210 M135 90 V270" stroke={INK} strokeWidth="2" />
          </g>
        </g>
        <g className="bk-nod-soft">
          <g transform="translate(478 320) scale(3.3)">
            <Face kind="customer" mood="listen" delay={-3.4} phoneAtEar />
          </g>
        </g>
      </Shot>

      {/* ============================ 9 · WE WRITE IT DOWN ====================== */}
      <Shot id="s5d">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <ellipse cx="480" cy="300" rx="320" ry="280" fill="url(#bk-vignette)" />
          <g opacity="0.2">
            <rect
              x="620"
              y="60"
              width="300"
              height="88"
              rx="4"
              fill="none"
              stroke={INK}
              strokeWidth="3"
            />
            <text
              x="770"
              y="112"
              textAnchor="middle"
              fontFamily={DISPLAY}
              fontSize="26"
              fill={INK}
              opacity="0.7"
            >
              Shree Nath
            </text>
          </g>
        </g>
        <g transform="translate(470 314) scale(3.3)">
          <Face kind="boss" mood="talk" delay={-4.1} phoneAtEar />
        </g>
        <g className="bk-notepad">
          <g transform="rotate(-6 760 470)">
            <rect
              x="640"
              y="424"
              width="240"
              height="112"
              rx="4"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <g stroke={INK} strokeWidth="1.6" opacity="0.3">
              <path d="M656 452 H864 M656 476 H864 M656 500 H820" />
            </g>
            <g className="bk-tick1" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round">
              <path d="M664 448 l6 7 12 -14" />
            </g>
            <g className="bk-tick2" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round">
              <path d="M664 472 l6 7 12 -14" />
            </g>
            <g className="bk-notepen">
              <path
                d="M860 418 l14 14 -34 34 -16 2 2 -16 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </Shot>

      {/* ============================ 10 · GET READY =========================== */}
      <Shot id="s6">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <path d="M0 430 H960" stroke={INK} strokeWidth="3" />
          <rect
            x="286"
            y="66"
            width="416"
            height="104"
            rx="6"
            fill={PAPER}
            stroke={INK}
            strokeWidth="4"
          />
          <text x="494" y="116" textAnchor="middle" fontFamily={DISPLAY} fontSize="34" fill={INK}>
            Shree Nath
          </text>
          <text
            x="494"
            y="146"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
            fontSize="12"
            fontWeight="700"
            fill={INK}
            letterSpacing="4"
          >
            PACKERS &amp; MOVERS
          </text>

          {/* desk pushed left */}
          <rect
            x="40"
            y="356"
            width="330"
            height="26"
            rx="6"
            fill={PAPER}
            stroke={INK}
            strokeWidth="4.4"
          />
          <path d="M54 382 V430 M356 382 V430" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <g transform="translate(210 356)">
            <path
              d="M-30 0 H30 L24 16 H-24 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3.4"
              strokeLinejoin="round"
            />
          </g>

          {/* clock */}
          <circle cx="758" cy="118" r="34" fill={PAPER} stroke={INK} strokeWidth="4" />
          <path
            d="M758 118 V98 M758 118 L774 128"
            stroke={INK}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* boss standing, keys, pointing to the door */}
          <g transform="translate(430 492) scale(1.55)">
            <BossSide keys />
          </g>

          {/* the office door, open, with two of the crew already heading out */}
          <g>
            <rect x="852" y="96" width="108" height="334" fill={INK} opacity="0.05" />
            <path d="M852 430 V96 H960" stroke={INK} strokeWidth="4" fill="none" />
            <path d="M852 430 V96" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <path d="M852 96 H960" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <g opacity="0.28" stroke={INK} fill="none" strokeWidth="2.2">
              <path d="M862 430 H950" />
              <path d="M872 430 V392 H900 V430" />
              <path d="M912 430 V404 H940 V430" />
            </g>
            <g transform="translate(898 456) scale(1.16)">
              <WorkerSide hair="cap" />
            </g>
            <g transform="translate(952 472) scale(1.04)" opacity="0.9">
              <WorkerSide hair="flat" box={false} />
            </g>
            <g
              className="bk-thumbsup"
              stroke={INK}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            >
              <path d="M900 196 Q912 180 928 190" />
            </g>
          </g>

          {/* motion lines toward the door */}
          <g stroke={INK} strokeWidth="2.6" strokeLinecap="round" opacity="0.45">
            <path d="M566 330 H640 M582 352 H668 M566 374 H628" />
          </g>
          <ellipse cx="640" cy="500" rx="220" ry="24" fill={INK} opacity="0.04" />
        </g>
      </Shot>

      {/* ============================ 11 · ON THE ROAD ========================= */}
      <Shot id="s7">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <path d="M0 400 H960" stroke={INK} strokeWidth="3" />
          <rect x="0" y="400" width="960" height="70" fill={INK} opacity="0.05" />
          <path d="M0 470 H960" stroke={INK} strokeWidth="2" opacity="0.3" />

          {/* sky */}
          <g opacity="0.5" stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round">
            <path d="M120 90 Q140 70 166 84 Q188 66 208 86 Q228 88 224 104 Q120 112 120 90 Z" />
            <path d="M690 62 Q706 46 728 58 Q748 44 764 62 Q780 64 776 78 Q690 86 690 62 Z" />
            <path d="M320 130 Q340 122 352 134 M372 126 Q388 120 398 130" strokeWidth="2" />
          </g>

          {/* skyline passing */}
          <g className="bk-scenery" stroke={INK} strokeWidth="3" fill={PAPER} opacity="0.7">
            <path d="M-40 400 V320 H20 V400 M20 400 V290 H92 V400 M108 400 V336 H164 V400" />
            <path d="M220 400 V310 H286 V400 M306 400 V346 H352 V400" />
            <path d="M420 400 V326 H470 V400 M492 400 V300 H556 V400 M576 400 V338 H620 V400" />
            <path d="M680 400 V318 H742 V400 M764 400 V342 H812 V400 M836 400 V306 H900 V400" />
            <g strokeWidth="2" opacity="0.6">
              <path d="M36 340 h14 M36 356 h14 M108 312 h14 M108 330 h14 M236 332 h14 M236 350 h14 M436 346 h14 M508 322 h14 M508 342 h14 M696 340 h14 M774 360 h14 M852 328 h14" />
            </g>
          </g>

          {/* road dashes */}
          <g
            className="bk-road-dash"
            stroke={INK}
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.55"
          >
            <path d="M-80 444 H-30 M60 444 H110 M200 444 H250 M340 444 H390 M480 444 H530 M620 444 H670 M760 444 H810 M900 444 H950" />
          </g>

          {/* speed lines */}
          <g stroke={INK} strokeWidth="2.4" strokeLinecap="round" opacity="0.3">
            <path d="M120 200 H240 M90 226 H190 M140 252 H220" />
          </g>

          {/* truck */}
          <g className="bk-truck">
            <Truck x={600} y={452} />
          </g>
          <g
            className="bk-puff"
            fill="none"
            stroke={INK}
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.5"
          >
            <path d="M268 402 Q252 392 258 378 Q266 366 258 354" />
            <path d="M244 404 Q232 396 236 386" />
          </g>
        </g>
      </Shot>

      {/* ============================ 12 · WE ARRIVE =========================== */}
      <Shot id="s8">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <path d="M0 430 H960" stroke={INK} strokeWidth="3" />
          <g opacity="0.45" stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round">
            <path d="M60 80 Q80 62 104 74 Q126 58 146 76 Q164 78 160 92 Q60 98 60 80 Z" />
            <path d="M700 54 Q716 40 736 50 Q754 38 770 52 Q784 56 780 68 Q700 74 700 54 Z" />
          </g>

          {/* house */}
          <g transform="translate(70 470) scale(0.92)">
            <g transform="translate(0 -430)">
              <House />
            </g>
          </g>

          {/* tree */}
          <g>
            <path d="M596 430 V352" stroke={INK} strokeWidth="6" strokeLinecap="round" />
            <g className="bk-tree" fill={PAPER} stroke={INK} strokeWidth="3.4">
              <circle cx="596" cy="322" r="34" />
              <circle cx="566" cy="344" r="24" />
              <circle cx="628" cy="344" r="24" />
            </g>
            <path
              d="M574 358 Q596 366 618 358"
              stroke={INK}
              strokeWidth="2"
              fill="none"
              opacity="0.35"
            />
          </g>

          {/* truck parked */}
          <g>
            <Truck x={862} y={470} s={0.74} />
            <path d="M0 470 H960" stroke={INK} strokeWidth="2.4" opacity="0.35" />
          </g>

          {/* customer at the door, waving */}
          <g transform="translate(600 470) scale(1.52)">
            <CustomerSide wave />
          </g>

          {/* boss stepping down from the cab */}
          <g transform="translate(780 470) scale(1.6)">
            <BossSide />
          </g>
          <g className="bk-stepout" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M812 268 Q830 276 836 292" />
          </g>
        </g>
      </Shot>

      {/* ============================ 13 · THE CREW + HANDSHAKE ================= */}
      <Shot id="s9">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          <path d="M0 456 H960" stroke={INK} strokeWidth="3" />

          {/* house behind */}
          <g transform="translate(-70 470) scale(0.66)" opacity="0.85">
            <g transform="translate(0 -430)">
              <House />
            </g>
          </g>

          {/* the crew */}
          <g>
            {[
              { x: 300, hair: "cap" as const, s: 0.95 },
              { x: 380, hair: "flat" as const, s: 0.98 },
              { x: 462, hair: "bald" as const, s: 1.0 },
              { x: 544, hair: "cap" as const, s: 1.02 },
              { x: 626, hair: "flat" as const, s: 0.96 },
            ].map((w, i) => (
              <g key={w.x} className={`bk-crew bk-crew--${i + 1}`}>
                <g transform={`translate(${w.x} 470) scale(${w.s})`}>
                  <WorkerSide hair={w.hair} box={false} />
                </g>
              </g>
            ))}
          </g>

          {/* boss + customer, foreground */}
          <g className="bk-shake-a">
            <g transform="translate(470 520) scale(1.55)">
              <BossSide reach />
            </g>
          </g>
          <g className="bk-shake-b">
            <g transform="translate(610 520) scale(1.55)">
              <CustomerSide reach />
            </g>
          </g>

          {/* the clasp */}
          <g className="bk-clasp">
            <g transform="translate(540 453)">
              <path
                d="M-27 -13 Q-11 -27 7 -19 Q22 -13 20 1 Q18 16 1 18 Q-15 20 -27 8 Q-33 0 -27 -13 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.4"
                strokeLinejoin="round"
              />
              <g stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.75">
                <path d="M-13 -7 Q1 1 15 -7" />
                <path d="M-11 5 Q1 11 13 5" />
              </g>
              <path
                d="M-31 -3 Q-40 -12 -35 -19"
                stroke={INK}
                strokeWidth="2.8"
                fill="none"
                strokeLinecap="round"
              />
            </g>
            <g
              className="bk-clasp-arc"
              stroke={INK}
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
            >
              <path d="M566 417 Q584 403 602 413" />
              <path d="M510 417 Q492 403 474 413" />
            </g>
          </g>

          <ellipse cx="520" cy="522" rx="300" ry="20" fill={INK} opacity="0.04" />
        </g>
      </Shot>

      {/* ============================ 14 · THE CREW MOVES IN ==================== */}
      <Shot id="s10">
        <rect width="960" height="540" fill={PAPER} />
        <g filter="url(#bk-rough)">
          {/* room */}
          <rect x="0" y="0" width="960" height="470" fill={PAPER} />
          <rect x="0" y="392" width="960" height="78" fill="url(#bk-hatch)" opacity="0.07" />
          <path d="M0 392 H960" stroke={INK} strokeWidth="1.8" opacity="0.3" />
          <path d="M0 470 H960" stroke={INK} strokeWidth="3" />
          <rect x="0" y="470" width="960" height="70" fill="url(#bk-hatch)" opacity="0.12" />
          <path d="M0 470 H960" stroke={INK} strokeWidth="5" strokeLinecap="round" />

          {/* sofa on the left, so the room reads as a home */}
          <g>
            <path
              d="M96 316 Q96 300 114 300 H240 Q258 300 258 318 V392 H96 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M106 336 Q140 326 166 340 L166 388 H106 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M172 340 Q206 326 240 336 L240 388 H172 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <rect
              x="84"
              y="386"
              width="232"
              height="40"
              rx="10"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <path
              d="M64 402 Q64 358 94 358 Q120 358 120 392 V414 H64 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M316 402 Q316 358 286 358 Q260 358 260 392 V414 H316 Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M92 426 V452 M292 426 V452"
              stroke={INK}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <ellipse cx="192" cy="458" rx="132" ry="9" fill={INK} opacity="0.06" />
          </g>

          {/* rug in the middle of the room */}
          <ellipse cx="470" cy="490" rx="150" ry="26" fill={INK} opacity="0.05" />
          <ellipse
            cx="470"
            cy="490"
            rx="150"
            ry="26"
            fill="none"
            stroke={INK}
            strokeWidth="1.6"
            opacity="0.18"
          />

          {/* wall decor */}
          <g>
            <rect
              x="96"
              y="96"
              width="150"
              height="112"
              rx="4"
              fill={PAPER}
              stroke={INK}
              strokeWidth="4"
            />
            <path
              d="M110 194 L140 152 L162 180 L182 160 L232 196"
              stroke={INK}
              strokeWidth="2.6"
              fill="none"
            />
            <circle cx="206" cy="124" r="9" stroke={INK} strokeWidth="2.6" fill="none" />
            <g className="bk-lamp">
              <path d="M330 0 V92" stroke={INK} strokeWidth="2.4" />
              <path
                d="M300 122 Q306 92 330 92 Q354 92 360 122 Z"
                fill={PAPER}
                stroke={INK}
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* stacked cartons in the room */}
          <g>
            <g transform="translate(700 448)">
              <rect
                x="-42"
                y="-38"
                width="84"
                height="38"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.4"
              />
              <path d="M0 -38 V0 M-42 -26 H42" stroke={INK} strokeWidth="1.8" opacity="0.5" />
            </g>
            <g transform="translate(700 410)">
              <rect
                x="-30"
                y="-34"
                width="60"
                height="34"
                fill={PAPER}
                stroke={INK}
                strokeWidth="3.4"
              />
              <path d="M0 -34 V0" stroke={INK} strokeWidth="1.8" opacity="0.5" />
            </g>
          </g>

          {/* the doorway */}
          <g>
            <rect
              x="790"
              y="96"
              width="170"
              height="374"
              fill={PAPER}
              stroke={INK}
              strokeWidth="0"
            />
            <g opacity="0.22" stroke={INK} fill="none">
              <path d="M796 452 H960" strokeWidth="2.4" />
              <path d="M812 452 V396 H846 V452" strokeWidth="2.2" />
              <path d="M872 452 V418 H906 V452" strokeWidth="2.2" />
              <path d="M920 452 V432 H952 V452" strokeWidth="2.2" />
              <path d="M796 128 H960" strokeWidth="1.6" opacity="0.5" />
            </g>
            <path d="M790 470 V96 H960" stroke={INK} strokeWidth="4" fill="none" />
            <path d="M790 470 V96" stroke={INK} strokeWidth="4" />
            {/* open leaf against the wall */}
            <path d="M960 96 H980 V470 H960" fill={PAPER} stroke={INK} strokeWidth="3.4" />
            <path d="M790 470 H960" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <path d="M846 400 H902" stroke={INK} strokeWidth="2" opacity="0.25" />
          </g>
          <clipPath id="bk-door" clipPathUnits="userSpaceOnUse">
            <path d="M790 470 V96 H960 V470 Z" />
          </clipPath>

          {/* walkers outside, seen through the doorway */}
          <g clipPath="url(#bk-door)">
            <g className="bk-walker bk-walker--a">
              <g transform="translate(0 466) scale(-1.16 1.16)">
                <WorkerSide hair="cap" />
              </g>
            </g>
            <g className="bk-walker bk-walker--b">
              <g transform="translate(0 480) scale(-1.1 1.1)">
                <WorkerSide hair="flat" />
              </g>
            </g>
            <g className="bk-walker bk-walker--c">
              <g transform="translate(0 492) scale(-1.22 1.22)">
                <WorkerSide hair="bald" />
              </g>
            </g>
          </g>

          {/* walkers in the room */}
          <g className="bk-frontcopy bk-frontcopy--a">
            <g className="bk-walker bk-walker--a">
              <g transform="translate(0 466) scale(-1.16 1.16)">
                <WorkerSide hair="cap" />
              </g>
            </g>
          </g>
          <g className="bk-frontcopy bk-frontcopy--b">
            <g className="bk-walker bk-walker--b">
              <g transform="translate(0 480) scale(-1.1 1.1)">
                <WorkerSide hair="flat" />
              </g>
            </g>
          </g>
          <g className="bk-frontcopy bk-frontcopy--c">
            <g className="bk-walker bk-walker--c">
              <g transform="translate(0 492) scale(-1.22 1.22)">
                <WorkerSide hair="bald" />
              </g>
            </g>
          </g>

          {/* the boss, foreground left, tipping his cap */}
          <g transform="translate(404 524) scale(2.1)">
            <BossSide capTip />
          </g>

          {/* casing over the doorway */}
          <path
            d="M778 470 V84 H960"
            stroke={INK}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M766 84 H960" stroke={INK} strokeWidth="6" strokeLinecap="round" />

          {/* mat */}
          <ellipse cx="800" cy="500" rx="120" ry="22" fill={INK} opacity="0.06" />
        </g>
      </Shot>
    </>
  );
}

/* ==================================================================== */
/*  EXPORT                                                              */
/* ==================================================================== */

export function BookingSceneAnimation() {
  return (
    <svg
      className="bk-scene"
      viewBox="0 0 960 540"
      role="img"
      aria-labelledby="bk-scene-title bk-scene-desc"
    >
      <title id="bk-scene-title">
        Shree Nath Packers &amp; Movers — from a phone screen to a packed home
      </title>
      <desc id="bk-scene-desc">
        A hand-drawn black and white story in fourteen shots: a customer scrolls our website on a
        cartoon phone, smiles, taps call, we pick up in the office, the two talk, our truck drives
        to his house, the whole crew lines up, we shake hands, and the workers start carrying boxes
        into his home.
      </desc>

      <defs>
        <filter id="bk-rough" x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.016"
            numOctaves="2"
            seed="7"
            result="grain"
          />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale="1.8" />
        </filter>
        <pattern
          id="bk-hatch"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path d="M0 0 L0 6" stroke={INK} strokeWidth="1.3" />
        </pattern>
        <radialGradient id="bk-vignette" cx="0.5" cy="0.42" r="0.72">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#f6f4ec" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e9e6dc" stopOpacity="0" />
        </radialGradient>
      </defs>

      <SceneArt />
    </svg>
  );
}
