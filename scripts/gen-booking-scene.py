#!/usr/bin/env python3
"""Keyframe generator for the booking scene (src/booking-preview.css).

Everything below the "@@KEYFRAMES@@" marker in src/booking-preview.css is
(re)written by this script, so all timings live in one place:

    python3 scripts/gen-booking-scene.py

The scene is a 60 s loop cut into fourteen shots. Every 60 s keyframe is
expressed as percentages of that loop, so the shots stay locked to the same
clock. Short loops (gait, jaw, blink, wheels...) are independent.

Two rules learned the hard way:
  * an element can only run ONE transform animation: nest groups instead
  * a CSS transform replaces the SVG `transform` attribute, so any element
    that already has one is wrapped before being animated
"""

from __future__ import annotations

import pathlib
import random

T = 60.0
ROOT = pathlib.Path(__file__).resolve().parents[1]
CSS = ROOT / "src" / "booking-preview.css"
MARKER = "/* @@KEYFRAMES@@ */"

SHOTS = [
    ("s1", 0.0, 4.6),
    ("s1b", 4.6, 8.2),
    ("s2", 8.2, 12.2),
    ("s3", 12.2, 15.2),
    ("s4", 15.2, 19.6),
    ("s5a", 19.6, 22.3),
    ("s5b", 22.3, 25.0),
    ("s5c", 25.0, 27.4),
    ("s5d", 27.4, 30.2),
    ("s6", 30.2, 35.2),
    ("s7", 35.2, 40.4),
    ("s8", 40.4, 45.8),
    ("s9", 45.8, 52.2),
    ("s10", 52.2, 60.0),
]


def pct(t: float, total: float = T) -> float:
    return round(t / total * 100, 3)


def kf(name: str, rows: list[tuple[float, str]]) -> str:
    """rows = [(percent, declarations), ...] — must already be sorted."""
    out = [f"@keyframes {name} {{"]
    for p, decl in rows:
        out.append(f"  {p}% {{ {decl} }}")
    out.append("}")
    return "\n".join(out)


def hold(name: str, rows: list[tuple[float, str]]) -> str:
    """Adds a 100% stop repeating the last declaration if it is missing."""
    if rows[-1][0] != 100:
        rows = rows + [(100, rows[-1][1])]
    return kf(name, sorted(rows, key=lambda r: r[0]))


# ---------------------------------------------------------------- shots ---
def shot(name: str, start: float, end: float) -> str:
    eps = 0.04
    rows: list[tuple[float, str]] = []
    if start <= 0:
        rows.append((0, "opacity: 1;"))
    else:
        rows.append((0, "opacity: 0;"))
        rows.append((pct(start), "opacity: 0;"))
        rows.append((pct(start + eps), "opacity: 1;"))
    rows.append((pct(end - eps), "opacity: 1;"))
    if end < T:
        rows.append((pct(end), "opacity: 0;"))
        rows.append((100, "opacity: 0;"))
    return kf(name, rows)


# ------------------------------------------------------------- dialogue ---
def jaw() -> str:
    rng = random.Random(11)
    rows = [(0.0, "transform: scaleY(0.16);")]
    t = 0.0
    while True:
        t += rng.choice([0.07, 0.08, 0.09, 0.1, 0.11, 0.14, 0.18])
        if t >= 6.4:
            break
        v = rng.choice([0.18, 0.4, 0.62, 0.85, 1.0, 0.7, 0.3, 0.5])
        rows.append((pct(t, 6.4), f"transform: scaleY({v});"))
    rows.append((100, "transform: scaleY(0.16);"))
    return kf("bk-jaw-a", rows)


def lips() -> str:
    rng = random.Random(23)
    rows = [(0.0, "transform: scaleX(0.97);")]
    t = 0.0
    while True:
        t += rng.choice([0.13, 0.17, 0.2, 0.24, 0.3])
        if t >= 2.9:
            break
        v = rng.choice([0.93, 0.99, 1.04, 1.09, 1.12, 1.0])
        rows.append((pct(t, 2.9), f"transform: scaleX({v});"))
    rows.append((100, "transform: scaleX(0.97);"))
    return kf("bk-lips-a", rows)


def blink() -> str:
    rng = random.Random(5)
    rows: list[tuple[float, str]] = []
    t = 0.55
    while t < 5.0:
        closed = round(pct(t, 5.3), 3)
        rows.append((round(max(0.0, closed - 1.1), 3), "transform: scaleY(1);"))
        rows.append((closed, "transform: scaleY(0.06);"))
        rows.append((round(closed + 1.6, 3), "transform: scaleY(0.06);"))
        rows.append((round(closed + 2.7, 3), "transform: scaleY(1);"))
        t += rng.uniform(2.1, 3.5)
    rows.append((100, "transform: scaleY(1);"))
    return kf("bk-blink", sorted(rows, key=lambda r: r[0]))


def brow() -> str:
    return kf(
        "bk-brow-a",
        [
            (0, "transform: translateY(0px);"),
            (18, "transform: translateY(-2.4px);"),
            (34, "transform: translateY(-1px);"),
            (52, "transform: translateY(-3px);"),
            (74, "transform: translateY(-0.6px);"),
            (100, "transform: translateY(0px);"),
        ],
    )


def head() -> str:
    return kf(
        "bk-head-a",
        [
            (0, "transform: rotate(-1.2deg) translateY(0px);"),
            (16, "transform: rotate(0.6deg) translateY(-2px);"),
            (33, "transform: rotate(-1.6deg) translateY(1px);"),
            (51, "transform: rotate(1.1deg) translateY(-1.5px);"),
            (70, "transform: rotate(-0.4deg) translateY(0.6px);"),
            (86, "transform: rotate(1.4deg) translateY(-1px);"),
            (100, "transform: rotate(-1.2deg) translateY(0px);"),
        ],
    )


def nod_soft() -> str:
    return hold(
        "bk-nod-soft",
        [
            (0, "transform: rotate(0deg) translateY(0px);"),
            (pct(25.2), "transform: rotate(0deg) translateY(0px);"),
            (pct(25.6), "transform: rotate(1.6deg) translateY(4px);"),
            (pct(26.1), "transform: rotate(-0.6deg) translateY(-1px);"),
            (pct(26.6), "transform: rotate(1.3deg) translateY(3px);"),
            (pct(27.1), "transform: rotate(0deg) translateY(0px);"),
        ],
    )


# ----------------------------------------------------------- smile, s1/s2 ---
def swap(name: str, t: float, going_in: bool, extra: str = "") -> str:
    a, b = ("0", "1") if going_in else ("1", "0")
    return hold(
        name,
        [
            (0, f"opacity: {a};{extra}"),
            (pct(t), f"opacity: {a};{extra}"),
            (pct(t + 0.04), f"opacity: {b};{extra}"),
        ],
    )


def spark() -> str:
    return hold(
        "bk-spark",
        [
            (0, "opacity: 0; transform: scale(0.7);"),
            (pct(9.7), "opacity: 0; transform: scale(0.7);"),
            (pct(9.9), "opacity: 1; transform: scale(1);"),
            (pct(11.1), "opacity: 1; transform: scale(1.04);"),
            (pct(11.5), "opacity: 0; transform: scale(1.1);"),
        ],
    )


def squint() -> str:
    return hold(
        "bk-s2-squint",
        [
            (0, "transform: scaleY(1);"),
            (pct(9.55), "transform: scaleY(1);"),
            (pct(9.95), "transform: scaleY(0.66);"),
            (pct(12.1), "transform: scaleY(0.7);"),
        ],
    )


# ---------------------------------------------------------------- phone ---
def scroll() -> str:
    stops = [
        (0, 0),
        (4.75, 0),
        (5.35, -46),
        (6.25, -46),
        (6.95, -96),
        (7.45, -96),
        (8.05, -140),
        (8.2, -140),
    ]
    rows = [(0, "transform: translateY(0px);")]
    for t, y in stops[1:]:
        rows.append((pct(t), f"transform: translateY({y}px);"))
    return hold("bk-scroll", rows)


def thumb_scroll() -> str:
    rows = [
        (0, "opacity: 0; transform: translateY(0px);"),
        (pct(4.7), "opacity: 0; transform: translateY(0px);"),
        (pct(4.82), "opacity: 1; transform: translateY(0px);"),
        (pct(5.2), "opacity: 1; transform: translateY(0px);"),
        (pct(5.5), "opacity: 1; transform: translateY(24px);"),
        (pct(6.1), "opacity: 1; transform: translateY(18px);"),
        (pct(6.9), "opacity: 1; transform: translateY(4px);"),
        (pct(7.2), "opacity: 1; transform: translateY(28px);"),
        (pct(7.9), "opacity: 1; transform: translateY(16px);"),
        (pct(8.05), "opacity: 0; transform: translateY(16px);"),
    ]
    return hold("bk-thumb-scroll", rows)


def thumb_tap() -> str:
    rows = [
        (0, "opacity: 0; transform: translateY(76px);"),
        (pct(12.5), "opacity: 0; transform: translateY(76px);"),
        (pct(12.75), "opacity: 1; transform: translateY(34px);"),
        (pct(13.15), "opacity: 1; transform: translateY(0px);"),
        (pct(13.4), "opacity: 1; transform: translateY(7px);"),
        (pct(13.9), "opacity: 1; transform: translateY(7px);"),
        (pct(14.15), "opacity: 1; transform: translateY(52px);"),
        (pct(14.35), "opacity: 0; transform: translateY(70px);"),
    ]
    return hold("bk-thumb-tap", rows)


def btn(name: str, on: bool) -> str:
    a, b = ("0", "1") if on else ("1", "0")
    return hold(
        name,
        [
            (0, f"opacity: {a};"),
            (pct(13.34), f"opacity: {a};"),
            (pct(13.38), f"opacity: {b};"),
        ],
    )


def ripple(name: str, at: float) -> str:
    rows = [
        (0, "opacity: 0; transform: scale(0.5);"),
        (pct(at), "opacity: 0; transform: scale(0.5);"),
        (pct(at + 0.05), "opacity: 0.65; transform: scale(0.62);"),
        (pct(at + 0.55), "opacity: 0; transform: scale(1.65);"),
    ]
    return hold(name, rows)


def screen(name: str, on: bool, at: float) -> str:
    a, b = ("0", "1") if on else ("1", "0")
    return hold(
        name,
        [
            (0, f"opacity: {a};"),
            (pct(at), f"opacity: {a};"),
            (pct(at + 0.03), f"opacity: {b};"),
        ],
    )


# --------------------------------------------------------------- office ---
def ringphone() -> str:
    rows = [(0, "transform: rotate(0deg);")]
    t = 15.5
    side = 1
    while t < 16.5:
        rows.append((pct(t), f"transform: rotate({3.2 * side}deg);"))
        t += 0.07
        side *= -1
    rows.append((pct(16.52), "transform: rotate(0deg);"))
    return hold("bk-ringphone", rows)


def ringarc() -> str:
    rows = []
    for i, t in enumerate([15.5, 15.62, 15.9, 16.02, 16.3, 16.42]):
        rows.append((pct(t), f"opacity: {0.85 if i % 2 == 0 else 0.2}; transform: scale({1.06 if i % 2 == 0 else 0.96});"))
    rows.append((pct(16.5), "opacity: 0; transform: scale(1);"))
    return hold("bk-ringarc", [(0, "opacity: 0; transform: scale(1);")] + rows)


def tring() -> str:
    return hold(
        "bk-tring",
        [
            (0, "opacity: 0; transform: translateY(6px) rotate(-6deg);"),
            (pct(15.6), "opacity: 0; transform: translateY(6px) rotate(-6deg);"),
            (pct(15.75), "opacity: 1; transform: translateY(0px) rotate(-2deg);"),
            (pct(16.15), "opacity: 1; transform: translateY(-2px) rotate(-4deg);"),
            (pct(16.35), "opacity: 0; transform: translateY(-4px) rotate(-4deg);"),
        ],
    )


def arm_pick() -> str:
    return hold(
        "bk-arm-pick",
        [
            (0, "transform: rotate(0deg);"),
            (pct(16.2), "transform: rotate(0deg);"),
            (pct(16.75), "transform: rotate(-88deg);"),
            (pct(17.1), "transform: rotate(-84deg);"),
            (pct(19.6), "transform: rotate(-84deg);"),
        ],
    )


def ear_handset() -> str:
    return hold(
        "bk-ear-handset",
        [
            (0, "opacity: 0;"),
            (pct(16.62), "opacity: 0;"),
            (pct(16.72), "opacity: 1;"),
        ],
    )


def notepen() -> str:
    return kf(
        "bk-notepen",
        [
            (0, "transform: rotate(-5deg) translate(0px, 0px);"),
            (22, "transform: rotate(1deg) translate(3px, 2px);"),
            (45, "transform: rotate(-6deg) translate(7px, -1px);"),
            (68, "transform: rotate(0deg) translate(2px, 3px);"),
            (100, "transform: rotate(-5deg) translate(0px, 0px);"),
        ],
    )


def tick() -> str:
    return hold(
        "bk-tick",
        [
            (0, "opacity: 0;"),
            (pct(28.7), "opacity: 0;"),
            (pct(28.85), "opacity: 1;"),
        ],
    )


def keys() -> str:
    rows = [(0, "transform: rotate(0deg);")]
    t = 30.5
    side = 1
    while t < 32.9:
        rows.append((pct(t), f"transform: rotate({9 * side}deg);"))
        t += 0.11
        side *= -1
    rows.append((pct(33.0), "transform: rotate(0deg);"))
    return hold("bk-keys", rows)


def thumbsup() -> str:
    return hold(
        "bk-thumbsup",
        [
            (0, "opacity: 0; transform: translateY(4px);"),
            (pct(31.4), "opacity: 0; transform: translateY(4px);"),
            (pct(31.7), "opacity: 1; transform: translateY(0px);"),
            (pct(34.4), "opacity: 1; transform: translateY(0px);"),
            (pct(34.7), "opacity: 0; transform: translateY(-3px);"),
        ],
    )


# ---------------------------------------------------------------- road ---
def wheel() -> str:
    return kf(
        "bk-wheel",
        [
            (0, "transform: rotate(0deg);"),
            (100, "transform: rotate(360deg);"),
        ],
    )


def road() -> str:
    return kf(
        "bk-road",
        [
            (0, "transform: translateX(0px);"),
            (100, "transform: translateX(-140px);"),
        ],
    )


def scenery() -> str:
    return kf(
        "bk-scenery",
        [
            (0, "transform: translateX(0px);"),
            (100, "transform: translateX(-220px);"),
        ],
    )


def puff() -> str:
    return kf(
        "bk-puff",
        [
            (0, "opacity: 0; transform: translate(0px, 0px) scale(0.8);"),
            (30, "opacity: 0.5; transform: translate(-10px, -12px) scale(1);"),
            (100, "opacity: 0; transform: translate(-24px, -30px) scale(1.3);"),
        ],
    )


def truck_bob() -> str:
    return kf(
        "bk-truck",
        [
            (0, "transform: translateY(0px) rotate(0deg);"),
            (28, "transform: translateY(-2px) rotate(-0.35deg);"),
            (55, "transform: translateY(1px) rotate(0.2deg);"),
            (80, "transform: translateY(-1.5px) rotate(-0.2deg);"),
            (100, "transform: translateY(0px) rotate(0deg);"),
        ],
    )


# -------------------------------------------------------------- outside ---
def wave() -> str:
    return kf(
        "bk-wave",
        [
            (0, "transform: rotate(-6deg);"),
            (30, "transform: rotate(16deg);"),
            (60, "transform: rotate(-2deg);"),
            (100, "transform: rotate(-6deg);"),
        ],
    )


def smoke() -> str:
    return kf(
        "bk-smoke",
        [
            (0, "opacity: 0.15; transform: translateY(4px) scale(0.9);"),
            (45, "opacity: 0.5; transform: translateY(-4px) scale(1.04);"),
            (100, "opacity: 0.12; transform: translateY(-12px) scale(1.12);"),
        ],
    )


def stepout() -> str:
    return hold(
        "bk-stepout",
        [
            (0, "opacity: 0; transform: translateX(6px);"),
            (pct(40.5), "opacity: 0; transform: translateX(6px);"),
            (pct(40.8), "opacity: 1; transform: translateX(0px);"),
            (pct(43.2), "opacity: 1; transform: translateX(-4px);"),
            (pct(43.6), "opacity: 0; transform: translateX(-8px);"),
        ],
    )


# ----------------------------------------------------------------- crew ---
def crewnod() -> str:
    rows: list[tuple[float, str]] = [(0, "transform: rotate(0deg) translateY(0px);")]
    for base in (49.85, 50.85):
        rows += [
            (pct(base), "transform: rotate(0deg) translateY(0px);"),
            (pct(base + 0.28), "transform: rotate(2.6deg) translateY(3px);"),
            (pct(base + 0.62), "transform: rotate(0deg) translateY(0px);"),
        ]
    return hold("bk-crewnod", rows)


def shake(name: str, sign: int) -> str:
    return hold(
        name,
        [
            (0, "transform: translateX(0px);"),
            (pct(47.9), "transform: translateX(0px);"),
            (pct(48.4), f"transform: translateX({sign * 15}px);"),
            (pct(50.75), f"transform: translateX({sign * 15}px);"),
            (pct(51.15), "transform: translateX(0px);"),
        ],
    )


def clasp() -> str:
    return hold(
        "bk-clasp",
        [
            (0, "opacity: 0;"),
            (pct(48.36), "opacity: 0;"),
            (pct(48.44), "opacity: 1;"),
            (pct(50.9), "opacity: 1;"),
            (pct(51.1), "opacity: 0;"),
        ],
    )


def clasp_arc() -> str:
    return hold(
        "bk-clasp-arc",
        [
            (0, "opacity: 0; transform: scale(0.86); transform-origin: 50% 50%;"),
            (pct(48.45), "opacity: 0; transform: scale(0.86);"),
            (pct(48.6), "opacity: 0.9; transform: scale(1);"),
            (pct(49.6), "opacity: 0; transform: scale(1.16);"),
        ],
    )


# ------------------------------------------------------------- walk-in ---
WALK_START_X = 990
WALK_END_X = 60
DOOR_LEFT = 790
WALKS = {"a": (52.3, 58.9), "b": (54.6, 61.2), "c": (57.0, 63.6)}


def walk_x(t: float, start: float, end: float) -> float:
    if t <= start:
        return WALK_START_X
    if t >= end:
        return WALK_END_X
    return WALK_START_X + (WALK_END_X - WALK_START_X) * (t - start) / (end - start)


def walk(name: str, start: float, end: float) -> str:
    rows = [
        (0, f"transform: translateX({WALK_START_X}px);"),
        (pct(start), f"transform: translateX({WALK_START_X}px);"),
        (pct(min(end, T)), f"transform: translateX({walk_x(min(end, T), start, end):.1f}px);"),
    ]
    return hold(name, rows)


def front(name: str, start: float, end: float) -> str:
    switch = start + (WALK_START_X - DOOR_LEFT) / (WALK_START_X - WALK_END_X) * (end - start)
    return hold(
        name,
        [
            (0, "opacity: 0;"),
            (pct(switch), "opacity: 0;"),
            (pct(switch + 0.03), "opacity: 1;"),
        ],
    )


def thigh(name: str, amp: float, offset: float) -> str:
    rows = [
        (0, f"transform: rotate({amp * offset:.1f}deg);"),
        (25, "transform: rotate(0deg);"),
        (50, f"transform: rotate({-amp * offset:.1f}deg);"),
        (75, "transform: rotate(0deg);"),
        (100, f"transform: rotate({amp * offset:.1f}deg);"),
    ]
    return kf(name, rows)


def shin(name: str, values: tuple[float, float, float, float]) -> str:
    rows = [
        (0, f"transform: translate(0px, 17px) rotate({values[0]}deg);"),
        (25, f"transform: translate(0px, 17px) rotate({values[1]}deg);"),
        (50, f"transform: translate(0px, 17px) rotate({values[2]}deg);"),
        (75, f"transform: translate(0px, 17px) rotate({values[3]}deg);"),
        (100, f"transform: translate(0px, 17px) rotate({values[0]}deg);"),
    ]
    return kf(name, rows)


def bob() -> str:
    return kf(
        "bk-walk-bob",
        [
            (0, "transform: translateY(0px);"),
            (25, "transform: translateY(-2.6px);"),
            (50, "transform: translateY(0px);"),
            (75, "transform: translateY(-2.6px);"),
            (100, "transform: translateY(0px);"),
        ],
    )


def cap_tip() -> str:
    return hold(
        "bk-cap-tip",
        [
            (0, "transform: rotate(0deg) translateY(0px);"),
            (pct(57.1), "transform: rotate(0deg) translateY(0px);"),
            (pct(57.6), "transform: rotate(-13deg) translateY(-4px);"),
            (pct(58.6), "transform: rotate(-13deg) translateY(-4px);"),
            (pct(59.2), "transform: rotate(0deg) translateY(0px);"),
        ],
    )


def cap_arm() -> str:
    return hold(
        "bk-cap-arm",
        [
            (0, "transform: rotate(0deg);"),
            (pct(57.1), "transform: rotate(0deg);"),
            (pct(57.6), "transform: rotate(-96deg);"),
            (pct(58.6), "transform: rotate(-96deg);"),
            (pct(59.2), "transform: rotate(0deg);"),
        ],
    )


def point_arm() -> str:
    return hold(
        "bk-point-arm",
        [
            (0, "transform: rotate(0deg);"),
            (pct(30.6), "transform: rotate(0deg);"),
            (pct(31.1), "transform: rotate(-34deg);"),
            (pct(33.6), "transform: rotate(-34deg);"),
            (pct(34.2), "transform: rotate(0deg);"),
        ],
    )


# ------------------------------------------------------------- ambience ---
def lamp() -> str:
    return kf(
        "bk-lamp",
        [
            (0, "transform: rotate(-1.4deg);"),
            (35, "transform: rotate(1.2deg);"),
            (68, "transform: rotate(-0.4deg);"),
            (100, "transform: rotate(-1.4deg);"),
        ],
    )


def plant() -> str:
    return kf(
        "bk-plant",
        [
            (0, "transform: rotate(-1.2deg);"),
            (40, "transform: rotate(1.6deg);"),
            (72, "transform: rotate(-0.3deg);"),
            (100, "transform: rotate(-1.2deg);"),
        ],
    )


def drape() -> str:
    return kf(
        "bk-drape",
        [
            (0, "transform: rotate(-0.8deg) scaleY(1);"),
            (40, "transform: rotate(1deg) scaleY(1.01);"),
            (72, "transform: rotate(-0.2deg) scaleY(0.99);"),
            (100, "transform: rotate(-0.8deg) scaleY(1);"),
        ],
    )


def foot_tap() -> str:
    return kf(
        "bk-foot-tap",
        [
            (0, "transform: rotate(0deg);"),
            (18, "transform: rotate(-4deg);"),
            (36, "transform: rotate(0deg);"),
            (62, "transform: rotate(2.4deg);"),
            (100, "transform: rotate(0deg);"),
        ],
    )


def scrollticks() -> str:
    return kf(
        "bk-scrollticks",
        [
            (0, "opacity: 0.15; transform: translateY(0px);"),
            (45, "opacity: 0.7; transform: translateY(-3px);"),
            (100, "opacity: 0.15; transform: translateY(0px);"),
        ],
    )


def ringwave() -> str:
    return kf(
        "bk-ringwave",
        [
            (0, "opacity: 0.25; transform: scale(0.94);"),
            (50, "opacity: 0.75; transform: scale(1.06);"),
            (100, "opacity: 0.25; transform: scale(0.94);"),
        ],
    )


def build() -> str:
    parts = [
        "/* ============================================================",
        "   GENERATED KEYFRAMES — do not edit by hand.",
        "   Regenerate with: python3 scripts/gen-booking-scene.py",
        "   ============================================================ */",
        "",
    ]

    for name, start, end in SHOTS:
        parts.append(shot(f"bk-{name}", start, end))
        parts.append("")

    parts += [
        jaw(),
        lips(),
        blink(),
        brow(),
        head(),
        nod_soft(),
        "",
        swap("bk-s1-smile-on", 3.2, True),
        swap("bk-s1-smile-off", 3.2, False, " transform: none;"),
        swap("bk-s2-smile-on", 9.6, True),
        swap("bk-s2-smile-off", 9.6, False, " transform: none;"),
        spark(),
        squint(),
        "",
        scroll(),
        thumb_scroll(),
        thumb_tap(),
        btn("bk-btn-on", True),
        btn("bk-btn-off", False),
        ripple("bk-ripple-1", 13.34),
        ripple("bk-ripple-2", 13.84),
        screen("bk-scr-call", True, 14.45),
        screen("bk-scr-site", False, 14.45),
        "",
        ringphone(),
        ringarc(),
        tring(),
        arm_pick(),
        ear_handset(),
        notepen(),
        tick(),
        keys(),
        thumbsup(),
        point_arm(),
        "",
        wheel(),
        road(),
        scenery(),
        puff(),
        truck_bob(),
        wave(),
        smoke(),
        stepout(),
        "",
        crewnod(),
        shake("bk-shake-a", 1),
        shake("bk-shake-b", -1),
        clasp(),
        clasp_arc(),
        "",
        walk("bk-walk-a", *WALKS["a"]),
        walk("bk-walk-b", *WALKS["b"]),
        walk("bk-walk-c", *WALKS["c"]),
        front("bk-front-a", *WALKS["a"]),
        front("bk-front-b", *WALKS["b"]),
        front("bk-front-c", *WALKS["c"]),
        thigh("bk-thigh-f", 23, 1),
        thigh("bk-thigh-b", 23, -1),
        shin("bk-shin-f", (4, 26, 8, 0)),
        shin("bk-shin-b", (0, 6, 22, 6)),
        bob(),
        cap_tip(),
        cap_arm(),
        "",
        lamp(),
        plant(),
        drape(),
        foot_tap(),
        scrollticks(),
        ringwave(),
    ]
    return "\n".join(parts) + "\n"


def main() -> None:
    css = CSS.read_text()
    head, marker, _ = css.partition(MARKER)
    if not marker:
        raise SystemExit(f"marker {MARKER} not found in {CSS}")
    CSS.write_text(head + MARKER + "\n\n" + build())
    print(f"wrote {CSS} ({CSS.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
