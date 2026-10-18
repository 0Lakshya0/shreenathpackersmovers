import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Car, Check, PackageCheck, Phone, Truck } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { MoveSceneAnimation } from "@/components/move-scene-animation";
import { PHONE, PHONE_LINK } from "@/lib/site-data";
import animationCss from "../animation-preview.css?url";

export const Route = createFileRoute("/animation-preview")({
  head: () => ({
    meta: [
      { title: "Animation Scene Trial | Shree Nath Packers & Movers" },
      {
        name: "description",
        content:
          "Unlisted concept preview: a black-and-white 2D moving scene for Shree Nath Packers & Movers.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "stylesheet", href: animationCss }],
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
            <span className="animation-preview__scene-number">2D · CORPORATE VECTOR</span>
          </div>

          <div className="animation-preview__scene-card">
            <MoveSceneAnimation />
            <div className="animation-preview__scene-caption">
              <span className="animation-preview__scene-caption-dot" />
              <span>HOME PICKUP</span>
              <span className="animation-preview__scene-caption-line" />
              <span>SAFE LOADING</span>
              <span className="animation-preview__scene-caption-line" />
              <span>SHREE NATH TRUCK</span>
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
                A friendly, hand-drawn moment: our movers carry each box from home to truck with
                care. This is a standalone visual trial—the main homepage is unchanged.
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
