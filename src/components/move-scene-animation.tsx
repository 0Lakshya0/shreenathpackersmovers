import { useEffect, useRef } from "react";

export function MoveSceneAnimation() {
  const wideSceneRef = useRef<SVGSVGElement>(null);
  const compactSceneRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      for (const scene of [wideSceneRef.current, compactSceneRef.current]) {
        if (!scene) continue;
        if (motionPreference.matches) scene.pauseAnimations();
        else scene.unpauseAnimations();
      }
    };

    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);
    return () => motionPreference.removeEventListener("change", syncMotionPreference);
  }, []);

  return (
    <>
      <svg
        ref={wideSceneRef}
        className="move-scene move-scene--wide"
        viewBox="0 0 1160 360"
        role="img"
        aria-labelledby="move-scene-title move-scene-description"
      >
        <title id="move-scene-title">A careful home move, illustrated</title>
        <desc id="move-scene-description">
          Two friendly movers carry a box from a home toward a Shree Nath Packers and Movers truck.
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

        <g
          className="move-scene__house"
          stroke="#202a25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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

        <g
          className="move-scene__house-boxes"
          fill="#fff"
          stroke="#202a25"
          strokeLinejoin="round"
          strokeWidth="2.5"
        >
          <path d="M285 251h39v29h-39z" />
          <path d="m285 251 19-10 20 10-19 10z" fill="#f0f1ed" />
          <path d="M303 261v19m-6-19h13" fill="none" />
        </g>

        <g className="move-scene__route" fill="none" stroke="#a97a4c" strokeLinecap="round">
          <path
            d="M327 250c82-86 171-89 259-42 33 18 48 37 74 42"
            strokeWidth="2.5"
            strokeDasharray="3 9"
          />
          <path d="m651 242 11 9-14 4" strokeWidth="2.5" />
          <circle cx="332" cy="249" r="5" fill="#a97a4c" stroke="none" />
        </g>

        <g
          className="move-scene__character move-scene__character--porter"
          transform="translate(376 0)"
        >
          <g className="move-scene__character-bob">
            <ellipse cx="0" cy="283" rx="22" ry="4" fill="#202a25" opacity="0.12" />
            <path
              d="M-14 218  -21 270m21-51 13 52"
              fill="none"
              stroke="#202a25"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="m-24 273-11 5m48-5 11 4"
              fill="none"
              stroke="#202a25"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M-16 194q16-10 32 0l5 33q-20 12-42 0z"
              fill="#fff"
              stroke="#202a25"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <path d="M-18 206h38m-37 8h36" fill="none" stroke="#202a25" strokeWidth="2.5" />
            <path d="M-11 198v26m23-26v26" stroke="#a97a4c" strokeWidth="2" />
            <path
              className="move-scene__arm move-scene__arm--porter"
              d="M-13 199q-18 4-23 22l-11-6m62-17q16 2 19 18l10-4"
              fill="none"
              stroke="#202a25"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="-47" cy="216" r="4" fill="#fff" stroke="#202a25" strokeWidth="2" />
            <circle cx="43" cy="211" r="4" fill="#fff" stroke="#202a25" strokeWidth="2" />
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
          <path d="M935 267h133" strokeWidth="3" />
          <path d="M691 280h17m215 0h12" strokeWidth="5" strokeLinecap="round" />
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
        </g>

        <g className="move-scene__wheel" transform="translate(770 282)">
          <g className="move-scene__wheel-spin">
            <circle r="20" fill="#fff" stroke="#202a25" strokeWidth="4" />
            <circle r="8" fill="#fff" stroke="#202a25" strokeWidth="3" />
            <path
              d="M0-15v7m15 8-7-3m-8 18v-7m-15-8 7 3"
              stroke="#202a25"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g className="move-scene__wheel" transform="translate(990 282)">
          <g className="move-scene__wheel-spin">
            <circle r="20" fill="#fff" stroke="#202a25" strokeWidth="4" />
            <circle r="8" fill="#fff" stroke="#202a25" strokeWidth="3" />
            <path
              d="M0-15v7m15 8-7-3m-8 18v-7m-15-8 7 3"
              stroke="#202a25"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g
          className="move-scene__character move-scene__character--loader"
          transform="translate(663 0)"
        >
          <g className="move-scene__character-bob move-scene__character-bob--loader">
            <ellipse cx="0" cy="283" rx="22" ry="4" fill="#202a25" opacity="0.12" />
            <path
              d="M-13 219-17 269m19-50 10 51"
              fill="none"
              stroke="#202a25"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="m-20 273-11 5m40-5 11 4"
              fill="none"
              stroke="#202a25"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M-16 194q16-10 32 0l5 33q-20 12-42 0z"
              fill="#fff"
              stroke="#202a25"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <path d="M-18 206h38m-37 8h36" fill="none" stroke="#202a25" strokeWidth="2.5" />
            <path d="M-11 198v26m23-26v26" stroke="#a97a4c" strokeWidth="2" />
            <path
              className="move-scene__arm move-scene__arm--loader"
              d="M-14 198q-16 7-21 22l-9-3m44-19q17 3 23 20l11-6"
              fill="none"
              stroke="#202a25"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="-44" cy="217" r="4" fill="#fff" stroke="#202a25" strokeWidth="2" />
            <circle cx="43" cy="212" r="4" fill="#fff" stroke="#202a25" strokeWidth="2" />
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

        <g className="move-scene__transfer-box">
          <animateMotion
            dur="6.5s"
            repeatCount="indefinite"
            rotate="auto"
            path="M 354 213 C 444 151 598 151 720 205"
          />
          <path
            d="M0 0h43v34H0z"
            fill="#fff"
            stroke="#202a25"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="m0 0 21-11 22 11-21 11z"
            fill="#f2f3ef"
            stroke="#202a25"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M21 11v23m-8-23h16" fill="none" stroke="#202a25" strokeWidth="2" />
          <path d="M15-3h12" stroke="#a97a4c" strokeWidth="2" />
        </g>

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
        ref={compactSceneRef}
        className="move-scene move-scene--compact"
        viewBox="0 0 520 340"
        role="img"
        aria-labelledby="move-scene-compact-title move-scene-compact-description"
      >
        <title id="move-scene-compact-title">Home-to-truck moving scene</title>
        <desc id="move-scene-compact-description">
          Movers pass a carefully packed box from a small home to a Shree Nath delivery truck.
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

        <path
          d="M174 236c52-48 104-50 156-23"
          fill="none"
          stroke="#a97a4c"
          strokeWidth="2"
          strokeDasharray="3 8"
          strokeLinecap="round"
        />
        <path
          d="m322 204 10 9-13 3"
          fill="none"
          stroke="#a97a4c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g className="move-scene__truck" fill="#fff" stroke="#202a25" strokeLinejoin="round">
          <path d="M264 145h132v113H264z" strokeWidth="3.5" />
          <path d="M277 158h106v83H277z" fill="#f4f5f2" strokeWidth="2" />
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
        </g>
        <g className="move-scene__wheel" transform="translate(300 263)">
          <g className="move-scene__wheel-spin">
            <circle r="15" fill="#fff" stroke="#202a25" strokeWidth="3" />
            <circle r="5" fill="#fff" stroke="#202a25" strokeWidth="2.5" />
            <path
              d="M0-11v5m11 6-5-2m-6 13v-5m-11-6 5 2"
              stroke="#202a25"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g className="move-scene__wheel" transform="translate(437 263)">
          <g className="move-scene__wheel-spin">
            <circle r="15" fill="#fff" stroke="#202a25" strokeWidth="3" />
            <circle r="5" fill="#fff" stroke="#202a25" strokeWidth="2.5" />
            <path
              d="M0-11v5m11 6-5-2m-6 13v-5m-11-6 5 2"
              stroke="#202a25"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g className="move-scene__character" transform="translate(215 0)">
          <g className="move-scene__character-bob">
            <ellipse cx="0" cy="281" rx="17" ry="3" fill="#202a25" opacity="0.12" />
            <path
              d="m-8 222-8 45m16-45 8 45m-21 7-8 4m33-4 8 4"
              fill="none"
              stroke="#202a25"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            <path
              d="M-12 196q12-8 24 0l4 28q-16 8-32 0z"
              fill="#fff"
              stroke="#202a25"
              strokeWidth="2.8"
            />
            <path d="M-12 207h27m-25 7h25" stroke="#202a25" strokeWidth="2" />
            <path d="M-8 199v21m17-21v21" stroke="#a97a4c" strokeWidth="1.8" />
            <path
              d="M-10 199q-13 6-17 19m39-19q12 3 16 16"
              fill="none"
              stroke="#202a25"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <circle cx="-27" cy="218" r="3.5" fill="#fff" stroke="#202a25" strokeWidth="1.8" />
            <circle cx="28" cy="215" r="3.5" fill="#fff" stroke="#202a25" strokeWidth="1.8" />
            <circle cy="176" r="15" fill="#fff" stroke="#202a25" strokeWidth="2.8" />
            <path d="M-14 174q2-18 16-18 12 1 13 15-10-7-18-7-5 6-11 10z" fill="#202a25" />
            <path
              d="M-6 177v1m12-1v1m-4 7q4 3 7 0"
              fill="none"
              stroke="#202a25"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g className="move-scene__character" transform="translate(259 0)">
          <g className="move-scene__character-bob move-scene__character-bob--loader">
            <ellipse cx="0" cy="281" rx="16" ry="3" fill="#202a25" opacity="0.12" />
            <path
              d="m-7 222-6 45m14-45 7 45m-20 7-8 4m32-4 8 4"
              fill="none"
              stroke="#202a25"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            <path
              d="M-11 196q11-8 22 0l4 28q-15 8-30 0z"
              fill="#fff"
              stroke="#202a25"
              strokeWidth="2.8"
            />
            <path d="M-10 207h25m-24 7h23" stroke="#202a25" strokeWidth="2" />
            <path d="M-7 199v21m16-21v21" stroke="#a97a4c" strokeWidth="1.8" />
            <path
              d="M-9 199q-10 6-14 18m35-18q10 3 14 16"
              fill="none"
              stroke="#202a25"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <circle cx="-23" cy="218" r="3.5" fill="#fff" stroke="#202a25" strokeWidth="1.8" />
            <circle cx="25" cy="215" r="3.5" fill="#fff" stroke="#202a25" strokeWidth="1.8" />
            <circle cy="176" r="15" fill="#fff" stroke="#202a25" strokeWidth="2.8" />
            <path d="M-14 174q2-18 16-18 12 1 13 15-10-7-18-7-5 6-11 10z" fill="#202a25" />
            <path
              d="M-6 177v1m12-1v1m-4 7q4 3 7 0"
              fill="none"
              stroke="#202a25"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g className="move-scene__transfer-box">
          <animateMotion
            dur="5.5s"
            repeatCount="indefinite"
            path="M 176 210 C 205 150 252 150 290 199"
          />
          <path
            d="M0 0h33v28H0z"
            fill="#fff"
            stroke="#202a25"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m0 0 16-9 17 9-17 9z"
            fill="#f2f3ef"
            stroke="#202a25"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M16 9v19m-6-19h12" fill="none" stroke="#202a25" strokeWidth="1.7" />
          <path d="M12-3h9" stroke="#a97a4c" strokeWidth="1.8" />
        </g>

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
