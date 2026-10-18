type SceneGroupProps = {
  className: string;
  transform?: string;
};

function Carton({ className, transform }: SceneGroupProps) {
  return (
    <g
      className={className}
      transform={transform}
      fill="#fff"
      stroke="#202a25"
      strokeWidth="2.5"
      strokeLinejoin="round"
    >
      <path d="M0 9h42v29H0z" />
      <path d="m0 9 21-9 21 9-21 10z" fill="#f0f1ed" />
      <path d="M21 19v19m-7-19h14" fill="none" />
      <path d="M17 5h9" stroke="#a97a4c" strokeWidth="2" />
    </g>
  );
}

function Mover({ transform, porter = false }: { transform: string; porter?: boolean }) {
  return (
    <g
      className={porter ? "move-scene__mover move-scene__mover--porter" : "move-scene__mover"}
      transform={transform}
    >
      <g className="move-scene__character-bob">
        <ellipse cx="0" cy="283" rx="22" ry="4" fill="#202a25" opacity="0.12" />

        {porter ? (
          <>
            <g
              className="move-scene__still-legs"
              fill="none"
              stroke="#202a25"
              strokeLinecap="round"
            >
              <path d="M-10 218l-8 52m18-52 8 52" strokeWidth="7" />
              <path d="m-18 270-11 5m37-5 11 4" strokeWidth="5" />
            </g>
            <g className="move-scene__walk-legs" fill="none" stroke="#202a25" strokeLinecap="round">
              <path className="move-scene__step" d="M-10 218l-8 52" strokeWidth="7" />
              <path
                className="move-scene__step move-scene__step--alternate"
                d="M8 218l8 52"
                strokeWidth="7"
              />
              <path d="m-18 270-11 5m26-5 11 4" strokeWidth="5" />
            </g>
          </>
        ) : (
          <g fill="none" stroke="#202a25" strokeLinecap="round">
            <path d="M-10 218l-8 52m18-52 8 52" strokeWidth="7" />
            <path d="m-18 270-11 5m37-5 11 4" strokeWidth="5" />
          </g>
        )}

        <path
          d="M-16 194q16-10 32 0l5 33q-20 12-42 0z"
          fill="#fff"
          stroke="#202a25"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path d="M-18 206h38m-37 8h36" fill="none" stroke="#202a25" strokeWidth="2.5" />
        <path d="M-11 198v26m23-26v26" stroke="#a97a4c" strokeWidth="2" />

        {porter && <Carton className="move-scene__carried-box" transform="translate(-18 181)" />}

        {porter ? (
          <>
            <g
              className="move-scene__free-arms"
              fill="none"
              stroke="#202a25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M-13 199q-15 6-21 22l-11-5m59-17q15 5 21 21l11-5" strokeWidth="6" />
              <circle cx="-45" cy="216" r="4" fill="#fff" strokeWidth="2" />
              <circle cx="45" cy="215" r="4" fill="#fff" strokeWidth="2" />
            </g>
            <g
              className="move-scene__carry-arms"
              fill="none"
              stroke="#202a25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M-13 199q10-4 18 3l9 8m-1-11q-10-4-18 3l-9 8" strokeWidth="6" />
              <circle cx="14" cy="210" r="4" fill="#fff" strokeWidth="2" />
              <circle cx="-14" cy="210" r="4" fill="#fff" strokeWidth="2" />
            </g>
          </>
        ) : (
          <g fill="none" stroke="#202a25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-13 199q-15 6-21 22l-11-5m59-17q15 5 21 21l11-5" strokeWidth="6" />
            <circle cx="-45" cy="216" r="4" fill="#fff" strokeWidth="2" />
            <circle cx="45" cy="215" r="4" fill="#fff" strokeWidth="2" />
          </g>
        )}

        <circle cx="0" cy="171" r="18" fill="#fff" stroke="#202a25" strokeWidth="3.5" />
        <path d="M-17 169q2-21 20-20 15 1 16 17-11-8-21-8-6 8-15 11z" fill="#202a25" />
        <path d="M-8 173v2m16-2v2" stroke="#202a25" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M-5 181q5 4 10 0"
          fill="none"
          stroke="#202a25"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M-17 195q17-10 34 0" fill="none" stroke="#202a25" strokeWidth="2" />
      </g>
    </g>
  );
}

function Smoke() {
  const puffs = [
    { name: "one", x: 0, y: 0 },
    { name: "two", x: 8, y: -4 },
    { name: "three", x: -6, y: -8 },
  ];

  return (
    <g className="move-scene__smoke">
      {puffs.map(({ name, x, y }) => (
        <g
          key={name}
          className={`move-scene__smoke-cloud move-scene__smoke-cloud--${name}`}
          transform={`translate(${x} ${y})`}
        >
          <path
            d="M0 9c-7 0-8-8-2-10 2-7 13-7 16 0 7 0 8 10 0 10z"
            fill="#fff"
            stroke="#202a25"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="4" r="1.1" fill="#202a25" stroke="none" opacity="0.35" />
        </g>
      ))}
    </g>
  );
}

function SceneWheels({ compact = false }: { compact?: boolean }) {
  const wheels = compact ? [300, 437] : [770, 990];
  const radius = compact ? 15 : 20;

  return (
    <g className="move-scene__wheels">
      {wheels.map((x) => (
        <g
          key={x}
          className="move-scene__wheel"
          transform={`translate(${x} ${compact ? 263 : 282})`}
        >
          <g className="move-scene__wheel-spin">
            <circle r={radius} fill="#fff" stroke="#202a25" strokeWidth={compact ? 3 : 4} />
            <circle
              r={compact ? 5 : 8}
              fill="#fff"
              stroke="#202a25"
              strokeWidth={compact ? 2.5 : 3}
            />
            <path
              d={
                compact
                  ? "M0-11v5m11 6-5-2m-6 13v-5m-11-6 5 2"
                  : "M0-15v7m15 8-7-3m-8 18v-7m-15-8 7 3"
              }
              fill="none"
              stroke="#202a25"
              strokeWidth={compact ? 1.8 : 2}
              strokeLinecap="round"
            />
          </g>
        </g>
      ))}
    </g>
  );
}

export function MoveSceneAnimation() {
  return (
    <>
      <svg
        className="move-scene move-scene--wide"
        viewBox="0 0 1160 360"
        role="img"
        aria-labelledby="move-scene-title move-scene-description"
      >
        <title id="move-scene-title">A continuous home-to-truck moving scene</title>
        <desc id="move-scene-description">
          A mover picks up a box at a home, carries it into a Shree Nath truck, and returns for
          another load while smoke drifts from the exhaust.
        </desc>
        <defs>
          <pattern id="move-scene-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#29332e" opacity="0.11" />
          </pattern>
          <pattern
            id="move-scene-hatch"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="8" stroke="#29332e" strokeWidth="1" opacity="0.12" />
          </pattern>
        </defs>

        <rect x="1" y="1" width="1158" height="358" rx="23" fill="#fbfcfa" />
        <path d="M16 16h340v185H16z" fill="url(#move-scene-dots)" opacity="0.52" />
        <circle
          cx="1018"
          cy="68"
          r="64"
          fill="none"
          stroke="#202a25"
          strokeWidth="1"
          opacity="0.08"
        />
        <circle
          cx="1018"
          cy="68"
          r="46"
          fill="none"
          stroke="#202a25"
          strokeWidth="1"
          opacity="0.08"
        />
        <path d="M54 286H1110" stroke="#202a25" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M65 300H1098"
          stroke="#202a25"
          strokeWidth="1"
          strokeDasharray="2 12"
          opacity="0.26"
        />

        <g stroke="#202a25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M64 149 191 47l130 102v131H64z" fill="#fff" strokeWidth="4" />
          <path d="m45 152 145-117 146 117" fill="none" strokeWidth="7" />
          <path d="M83 147h213" strokeWidth="2" opacity="0.38" />
          <path d="M110 164h75v65h-75z" fill="#f4f5f2" strokeWidth="3" />
          <path d="M147.5 164v65M110 196.5h75" strokeWidth="2.5" />
          <path d="M220 179h62v101h-62z" fill="#f7f7f4" strokeWidth="3" />
          <path
            d="M232 197c0-11 8-19 19-19h31v101h-50z"
            fill="url(#move-scene-hatch)"
            opacity="0.65"
          />
          <circle cx="269" cy="231" r="3.5" fill="#202a25" stroke="none" />
          <path d="M76 280h224" strokeWidth="4" />
          <path d="M95 280v8m180-8v8" strokeWidth="3" />
          <path d="M88 129h10m181 0h10" strokeWidth="3" />
          <path d="M152 47v-17h34v-6h15v32" fill="#fff" strokeWidth="3" />
          <path d="M161 38h25" strokeWidth="2" opacity="0.5" />
        </g>

        <Carton className="move-scene__pickup-box" transform="translate(282 242)" />

        <g className="move-scene__route" fill="none" stroke="#a97a4c" strokeLinecap="round">
          <path
            d="M321 250c82-86 171-89 259-42 33 18 48 37 74 42"
            strokeWidth="2.5"
            strokeDasharray="3 9"
          />
          <path d="m651 242 11 9-14 4" strokeWidth="2.5" />
          <circle cx="332" cy="249" r="5" fill="#a97a4c" stroke="none" />
        </g>

        <g className="move-scene__truck" stroke="#202a25" strokeLinejoin="round">
          <path d="M691 151q0-10 10-10h234v139H691z" fill="#fff" strokeWidth="4" />
          <path
            d="M703 163h219v105H703z"
            fill="url(#move-scene-hatch)"
            strokeWidth="2"
            opacity="0.78"
          />
          <path d="M935 181h94q9 0 14 9l25 42v48H935z" fill="#fff" strokeWidth="4" />
          <path d="M957 190h60l22 37h-82z" fill="#f4f5f2" strokeWidth="3" />
          <path d="M1019 193v30h18" fill="none" strokeWidth="2" />
          <path d="M1068 246h13v17h-13" fill="#fff" strokeWidth="3" />
          <path d="M935 267h133M691 280h17m215 0h12" strokeWidth="3" />
          <path d="M718 178h191" strokeWidth="1.5" opacity="0.35" />
          <rect x="760" y="190" width="132" height="51" rx="6" fill="#fff" strokeWidth="2.5" />
          <text
            x="826"
            y="212"
            textAnchor="middle"
            fill="#202a25"
            stroke="none"
            fontFamily="Outfit, sans-serif"
            fontSize="13"
            fontWeight="800"
            letterSpacing="1.4"
          >
            SHREE NATH
          </text>
          <text
            x="826"
            y="229"
            textAnchor="middle"
            fill="#65716a"
            stroke="none"
            fontFamily="Outfit, sans-serif"
            fontSize="8"
            fontWeight="700"
            letterSpacing="1.5"
          >
            PACKERS &amp; MOVERS
          </text>
          <path d="M947 273v-10h25v10" fill="#fff" strokeWidth="2" />
          <path d="M1015 274h33" stroke="#a97a4c" strokeWidth="3" strokeLinecap="round" />
          <path d="M1052 181v-18h7v18" fill="#fff" strokeWidth="2.5" />
        </g>

        <Carton className="move-scene__loaded-box" transform="translate(700 226) scale(.82)" />
        <g transform="translate(1055 157)">
          <Smoke />
        </g>
        <SceneWheels />

        <g className="move-scene__porter-track">
          <Mover porter transform="translate(340 0)" />
        </g>
        <Mover transform="translate(663 0)" />

        <g className="move-scene__speech" transform="translate(407 104)">
          <path
            d="M0 0q0-9 10-9h100q10 0 10 9v29q0 9-10 9H45l-13 12v-12H10q-10 0-10-9z"
            fill="#fff"
            stroke="#202a25"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <text
            x="60"
            y="19"
            textAnchor="middle"
            fill="#202a25"
            fontFamily="Outfit, sans-serif"
            fontSize="11"
            fontWeight="700"
          >
            Easy does it!
          </text>
          <path d="M18 28h35" stroke="#a97a4c" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="move-scene__safety" transform="translate(1074 135)">
          <path
            d="M0-21 18-14v14q-2 15-18 22Q-16 15-18 0v-14z"
            fill="#fff"
            stroke="#202a25"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="m-8 1 5 5 11-13"
            fill="none"
            stroke="#a97a4c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text
          x="73"
          y="327"
          fill="#6d7972"
          fontFamily="Outfit, sans-serif"
          fontSize="9"
          fontWeight="800"
          letterSpacing="1.8"
        >
          HOME PICKUP
        </text>
        <text
          x="1082"
          y="327"
          textAnchor="end"
          fill="#6d7972"
          fontFamily="Outfit, sans-serif"
          fontSize="9"
          fontWeight="800"
          letterSpacing="1.8"
        >
          LOADED WITH CARE
        </text>
      </svg>

      <svg
        className="move-scene move-scene--compact"
        viewBox="0 0 520 340"
        role="img"
        aria-labelledby="move-scene-compact-title move-scene-compact-description"
      >
        <title id="move-scene-compact-title">Home-to-truck moving scene</title>
        <desc id="move-scene-compact-description">
          A mover picks up a box at home, loads it into the Shree Nath truck, and walks back as
          smoke drifts from the exhaust.
        </desc>
        <defs>
          <pattern
            id="move-scene-compact-dots"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#29332e" opacity="0.11" />
          </pattern>
          <pattern
            id="move-scene-compact-hatch"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="8" stroke="#29332e" strokeWidth="1" opacity="0.12" />
          </pattern>
        </defs>
        <rect x="1" y="1" width="518" height="338" rx="18" fill="#fbfcfa" />
        <path d="M16 16h175v94H16z" fill="url(#move-scene-compact-dots)" />
        <path d="M20 280h480" stroke="#202a25" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M30 295h460"
          stroke="#202a25"
          strokeWidth="1"
          strokeDasharray="2 10"
          opacity="0.24"
        />

        <g fill="#fff" stroke="#202a25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M31 145 107 81l80 64v113H31z" strokeWidth="3.5" />
          <path d="m20 147 87-76 88 76" fill="none" strokeWidth="6" />
          <path d="M49 160h43v39H49z" fill="#f0f1ed" strokeWidth="2.5" />
          <path d="M70 160v39M49 179.5h43" strokeWidth="2" />
          <path d="M128 178h44v80h-44z" fill="#f6f7f3" strokeWidth="2.5" />
          <circle cx="161" cy="218" r="2.8" fill="#202a25" stroke="none" />
          <path d="M42 258h139" strokeWidth="3" />
        </g>

        <Carton className="move-scene__pickup-box" transform="translate(164 231) scale(.72)" />
        <path
          d="M176 236c52-48 104-50 156-23"
          fill="none"
          stroke="#a97a4c"
          strokeWidth="2"
          strokeDasharray="3 8"
          strokeLinecap="round"
        />

        <g className="move-scene__truck" fill="#fff" stroke="#202a25" strokeLinejoin="round">
          <path d="M264 145h132v113H264z" strokeWidth="3.5" />
          <path d="M277 158h106v83H277z" fill="url(#move-scene-compact-hatch)" strokeWidth="2" />
          <path d="M397 173h55q8 0 12 8l19 33v44h-86z" strokeWidth="3.5" />
          <path d="M409 181h37l16 27h-53z" fill="#f0f1ed" strokeWidth="2.5" />
          <path d="M398 257h82" strokeWidth="3" />
          <rect x="292" y="179" width="78" height="32" rx="4" strokeWidth="2" />
          <text
            x="331"
            y="199"
            textAnchor="middle"
            fill="#202a25"
            stroke="none"
            fontFamily="Outfit, sans-serif"
            fontSize="11"
            fontWeight="800"
            letterSpacing="1"
          >
            SHREE NATH
          </text>
          <path d="M463 173v-16h6v16" fill="#fff" strokeWidth="2" />
        </g>

        <Carton className="move-scene__loaded-box" transform="translate(279 216) scale(.68)" />
        <g transform="translate(466 154)">
          <Smoke />
        </g>
        <SceneWheels compact />

        <g className="move-scene__porter-track">
          <Mover porter transform="translate(200 14) scale(.95)" />
        </g>
        <Mover transform="translate(259 14) scale(.95)" />

        <g className="move-scene__speech" transform="translate(169 58)">
          <path
            d="M0 0q0-7 8-7h78q8 0 8 7v24q0 7-8 7H35L24 44V31H8q-8 0-8-7z"
            fill="#fff"
            stroke="#202a25"
            strokeWidth="2"
          />
          <text
            x="47"
            y="15"
            textAnchor="middle"
            fill="#202a25"
            fontFamily="Outfit, sans-serif"
            fontSize="9"
            fontWeight="700"
          >
            Easy does it!
          </text>
          <path d="M15 23h28" stroke="#a97a4c" strokeWidth="1.8" strokeLinecap="round" />
        </g>
        <g className="move-scene__safety" transform="translate(486 122)">
          <path
            d="M0-16 14-11v11q-2 12-14 17Q-12 12-14 0v-11z"
            fill="#fff"
            stroke="#202a25"
            strokeWidth="2"
          />
          <path
            d="m-6 1 4 4 8-9"
            fill="none"
            stroke="#a97a4c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <text
          x="28"
          y="319"
          fill="#6d7972"
          fontFamily="Outfit, sans-serif"
          fontSize="8"
          fontWeight="800"
          letterSpacing="1.5"
        >
          HOME
        </text>
        <text
          x="492"
          y="319"
          textAnchor="end"
          fill="#6d7972"
          fontFamily="Outfit, sans-serif"
          fontSize="8"
          fontWeight="800"
          letterSpacing="1.5"
        >
          TRUCK
        </text>
      </svg>
    </>
  );
}
