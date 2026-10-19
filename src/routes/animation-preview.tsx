import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Car, Check, PackageCheck, Phone, Truck } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { PackingSceneAnimation } from "@/components/packing-scene-animation";
import { PHONE, PHONE_LINK } from "@/lib/site-data";
import packingCss from "../packing-preview.css?url";

export const Route = createFileRoute("/animation-preview")({
  head: () => ({
    meta: [
      { title: "Animation Scene 01 Trial | Shree Nath Packers & Movers" },
      {
        name: "description",
        content:
          "Unlisted concept preview: a black-and-white 2D home-packing scene for Shree Nath Packers & Movers.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap",
      },
      { rel: "stylesheet", href: packingCss },
    ],
  }),
  component: AnimationPreviewPage,
});

const sceneBadges = [
  { icon: Car, text: "Vehicle options" },
  { icon: Truck, text: "Moving crew" },
  { icon: PackageCheck, text: "Multi-layer packing" },
];

function AnimationPreviewPage() {
  return (
    <main className="animation-preview">
      <section className="animation-preview__hero">
        <div className="container animation-preview__container">
          <div className="animation-preview__scene-heading">
            <p>
              <span /> ANIMATION CONCEPT · SCENE 01
            </p>
            <span className="animation-preview__scene-number">2D · BLACK &amp; WHITE</span>
          </div>

          <div className="animation-preview__scene-card">
            <PackingSceneAnimation />
            <div className="animation-preview__scene-caption">
              <span className="animation-preview__scene-caption-dot" />
              <span>ITEMS ARRIVE</span>
              <span className="animation-preview__scene-caption-line" />
              <span>HAND PACKED</span>
              <span className="animation-preview__scene-caption-line" />
              <span>CARRIED OUT</span>
            </div>
          </div>

          <div className="animation-preview__layout">
            <div className="animation-preview__copy">
              <p className="enterprise-eyebrow enterprise-eyebrow--muted">
                <span className="enterprise-eyebrow__signal" /> DEWAS NAKA, INDORE <i /> PAN-INDIA
                REACH
              </p>
              <h1>
                <span>Shree Nath Packers &amp; Movers:</span>
                <em>Premium Shifting, Zero Stress.</em>
              </h1>
              <p className="animation-preview__lead">
                A friendly, hand-drawn moment from inside the home: our packers sit on the floor,
                wrap and box each item by hand, and the loaders carry the finished cartons out to
                the truck. This is a standalone visual trial—the main homepage is unchanged.
              </p>

              <div className="animation-preview__badges" aria-label="Moving service options">
                {sceneBadges.map(({ icon: Icon, text }) => (
                  <span key={text}>
                    <Icon size={15} aria-hidden="true" /> {text}
                    <Check
                      size={13}
                      className="animation-preview__badge-check"
                      aria-hidden="true"
                    />
                  </span>
                ))}
              </div>

              <div className="animation-preview__actions">
                <a className="enterprise-button enterprise-button--dark" href={PHONE_LINK}>
                  <Phone size={16} aria-hidden="true" /> Call {PHONE}
                </a>
                <span className="animation-preview__private-note">
                  <ArrowUpRight size={14} aria-hidden="true" /> Unlisted preview page
                </span>
              </div>
            </div>

            <div className="animation-preview__quote">
              <QuoteForm variant="hero" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
