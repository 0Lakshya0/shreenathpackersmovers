import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { BookingSceneAnimation } from "@/components/booking-scene-animation";
import { PHONE, PHONE_LINK } from "@/lib/site-data";
import bookingCss from "../booking-preview.css?url";

export const Route = createFileRoute("/animation-preview-booking")({
  head: () => ({
    meta: [
      { title: "Animation Scene 01: Booking | Shree Nath Packers & Movers" },
      {
        name: "description",
        content:
          "Unlisted concept preview: a hand-drawn black-and-white story that follows one booking — the phone, the smile, the call, the truck and the crew moving in.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap",
      },
      { rel: "stylesheet", href: bookingCss },
    ],
  }),
  component: BookingPreviewPage,
});

const beats = [
  {
    title: "He finds us",
    text: "A cartoon customer scrolls our website on a cartoon phone, then smiles at what he sees.",
  },
  {
    title: "He calls · we answer",
    text: "He taps call; the office phone rings; we pick up from the chair and the two talk, lips moving.",
  },
  {
    title: "We drive over",
    text: "We grab the keys, the truck rolls out and pulls up outside his house.",
  },
  {
    title: "The crew moves in",
    text: "The whole crew lines up, we shake hands with him, and the workers start carrying boxes inside.",
  },
];

const details = [
  ["Loop", "60 seconds"],
  ["Shots", "14 cuts"],
  ["Style", "2D ink, paper"],
  ["Audio", "None"],
];

function BookingPreviewPage() {
  return (
    <main className="booking-preview">
      <section className="booking-preview__hero">
        <div className="booking-preview__container">
          <div className="booking-preview__heading">
            <p>
              <span /> Animation concept · Scene 01
            </p>
            <span className="booking-preview__badge">2D · Black &amp; white</span>
          </div>

          <div className="booking-preview__card">
            <BookingSceneAnimation />
            <div className="booking-preview__caption">
              <span className="booking-preview__caption-dot" />
              <span>He finds us</span>
              <span className="booking-preview__caption-line" />
              <span>He calls</span>
              <span className="booking-preview__caption-line" />
              <span>We talk</span>
              <span className="booking-preview__caption-line" />
              <span>On the way</span>
              <span className="booking-preview__caption-line" />
              <span>Crew moves in</span>
            </div>
          </div>

          <nav className="booking-preview__switcher" aria-label="Animation scenes">
            <Link to="/animation-preview-booking" aria-current="page">
              01 · Booking
            </Link>
            <Link to="/animation-preview">02 · Packing</Link>
            <Link to="/animation-preview-2">03 · The move</Link>
          </nav>

          <div className="booking-preview__layout">
            <div className="booking-preview__copy">
              <p className="booking-preview__eyebrow">One booking, start to finish</p>
              <h2>From a phone screen to a packed home.</h2>
              <p>
                This is the scene that comes before the packing shots. It follows a single customer
                from the moment he opens our website to the moment our crew walks into his house —
                the same hand-drawn ink look, cut like a small film rather than a looping diagram.
              </p>

              <ol className="booking-preview__beats">
                {beats.map((beat) => (
                  <li key={beat.title}>
                    <strong>{beat.title}</strong>
                    <span>{beat.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="booking-preview__panel">
              <h3>Scene sheet</h3>
              <p>
                Unlisted preview. The live homepage and the other two scenes are untouched — open
                them from the switcher above.
              </p>

              <dl>
                {details.map(([key, value]) => (
                  <div key={key} style={{ display: "contents" }}>
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <a className="booking-preview__cta" href={PHONE_LINK}>
                Call {PHONE}
                <span>
                  <Phone size={13} aria-hidden="true" />
                </span>
              </a>

              <p style={{ marginTop: 14, marginBottom: 0 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <ArrowUpRight size={13} aria-hidden="true" /> Unlisted preview page
                </span>
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
