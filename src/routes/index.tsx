import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Car,
  Check,
  DoorOpen,
  Globe2,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  UserRoundCheck,
} from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { TrackingDashboard } from "@/components/tracking-dashboard";
import { FAQ_ITEMS, PHONE, PHONE_LINK, SERVICES, WHATSAPP } from "@/lib/site-data";
import movingTeam from "@/assets/moving-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Shree Nath Packers & Movers | Premium Shifting from Indore",
      },
      {
        name: "description",
        content:
          "Plan a household, office, vehicle or domestic move with Shree Nath Packers & Movers. Based at Dewas Naka, Indore, with moving enquiries across India.",
      },
      { property: "og:title", content: "Shree Nath Packers & Movers | Indore" },
      {
        property: "og:description",
        content:
          "Premium shifting, thoughtfully planned. Local moves in Indore and domestic relocation across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f4f5f2" },
    ],
  }),
  component: HomePage,
});

const serviceBadges = [
  {
    icon: Car,
    title: "All Vehicles Available",
    detail: "Vehicle and carrier options confirmed by route.",
  },
  {
    icon: Truck,
    title: "All Types of Loaders",
    detail: "Loading support planned around your move.",
  },
  {
    icon: PackageCheck,
    title: "Premium Multi-Layer Packing Material",
    detail: "Packing combinations matched to your belongings.",
  },
];

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Verified Fleet & Drivers",
    detail: "Vehicle and driver details confirmed during move planning.",
  },
  {
    icon: PackageCheck,
    title: "100% Transit Insured Safety",
    detail: "Coverage, eligibility and policy terms confirmed before booking.",
  },
  {
    icon: UserRoundCheck,
    title: "Trained & Professional Labour Crew",
    detail: "Crew and handling requirements planned around your shipment.",
  },
  {
    icon: DoorOpen,
    title: "Guaranteed Door-to-Door Delivery",
    detail: "Delivery scope and timing confirmed for the agreed route.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Share the route",
    text: "Tell us where you’re moving from and to, and what needs to travel.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Shape the plan",
    text: "Discuss packing, vehicle options, timing and the services you need.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Move with clarity",
    text: "Confirm the written scope and terms before the moving day is planned.",
    icon: Building2,
  },
];

function HomePage() {
  return (
    <main className="enterprise-home">
      <section className="enterprise-hero" id="home">
        <div className="enterprise-hero__orb enterprise-hero__orb--one" aria-hidden="true" />
        <div className="enterprise-hero__orb enterprise-hero__orb--two" aria-hidden="true" />
        <div className="container enterprise-hero__grid">
          <Reveal className="enterprise-hero__copy">
            <p className="enterprise-eyebrow">
              <span className="enterprise-eyebrow__signal" /> DEWAS NAKA, INDORE <i /> PAN-INDIA
              REACH
            </p>
            <h1>
              <span className="enterprise-hero__brandline">Shree Nath Packers &amp; Movers:</span>
              <span>Premium Shifting,</span>
              <em>Zero Stress.</em>
            </h1>
            <p className="enterprise-hero__lead">
              Thoughtful household, office and vehicle moves—planned from Dewas Naka, Indore to
              destinations across India.
            </p>

            <div className="enterprise-hero__badges" aria-label="Moving service options">
              {serviceBadges.map(({ icon: Icon, title, detail }, index) => (
                <div className="enterprise-badge" key={title}>
                  <span className="enterprise-badge__icon">
                    <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </span>
                  <Check className="enterprise-badge__check" size={15} aria-hidden="true" />
                  <span className="sr-only">Service availability is confirmed for your route.</span>
                  <span className="enterprise-badge__index">0{index + 1}</span>
                </div>
              ))}
            </div>

            <div className="enterprise-hero__actions">
              <a className="enterprise-button enterprise-button--dark" href={PHONE_LINK}>
                <Phone size={17} aria-hidden="true" /> Call {PHONE}
              </a>
              <Link className="enterprise-text-link" to="/services">
                Explore all services <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <p className="enterprise-hero__reassurance">
              <Check size={15} aria-hidden="true" /> Free enquiry · No obligation to book
            </p>
          </Reveal>

          <Reveal className="enterprise-hero__visual" delay={100}>
            <div className="enterprise-hero__image-panel">
              <img
                src={movingTeam}
                alt="A moving team carefully loading wrapped furniture and boxes into a truck"
                width={1536}
                height={1024}
                fetchPriority="high"
              />
              <div className="enterprise-hero__image-overlay" aria-hidden="true" />
              <div className="enterprise-hero__image-label">
                <span className="enterprise-hero__image-label-icon">
                  <MapPin size={16} aria-hidden="true" />
                </span>
                <span>
                  <small>STARTING FROM</small>
                  <strong>Dewas Naka, Indore</strong>
                </span>
              </div>
              <div className="enterprise-hero__image-caption">
                <span className="enterprise-hero__caption-dot" />
                <span>HOME · OFFICE · DOMESTIC</span>
                <span className="enterprise-hero__caption-line" />
                <span>01 / 08</span>
              </div>
            </div>
            <div className="enterprise-hero__form-wrap">
              <QuoteForm variant="hero" />
            </div>
            <div className="enterprise-hero__route-stamp" aria-hidden="true">
              <span>SN</span>
              <small>MOVE WITH CARE</small>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="enterprise-trust" aria-label="Moving service commitments">
        <div className="container">
          <div className="enterprise-trust__heading">
            <span>THE SHREE NATH STANDARD</span>
            <span className="enterprise-trust__heading-rule" />
            <p>Careful planning, with the important details made clear.</p>
          </div>
          <div className="enterprise-trust__grid">
            {trustFeatures.map(({ icon: Icon, title, detail }, index) => (
              <Reveal className="enterprise-trust__reveal" delay={index * 65} key={title}>
                <article className="enterprise-trust-card">
                  <span className="enterprise-trust-card__index">0{index + 1}</span>
                  <span className="enterprise-trust-card__icon">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h2>{title}</h2>
                  <p>{detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="enterprise-trust__note">
            Insurance coverage, route availability and delivery commitments are subject to written
            confirmation and the agreed service terms.
          </p>
        </div>
      </section>

      <section className="enterprise-services section" id="services">
        <div className="container">
          <Reveal className="enterprise-section-heading">
            <div>
              <p className="enterprise-eyebrow enterprise-eyebrow--muted">
                <span className="enterprise-eyebrow__signal" /> OUR CAPABILITIES
              </p>
              <h2>
                Eight ways to move <em>what matters.</em>
              </h2>
            </div>
            <div className="enterprise-section-heading__aside">
              <p>
                From one careful household move to a coordinated office relocation, start with the
                service that fits your plans.
              </p>
              <span>INDORE · ACROSS INDIA</span>
            </div>
          </Reveal>

          <div className="enterprise-service-grid">
            {SERVICES.map(({ slug, number, icon: Icon, category, title, summary }, index) => (
              <Reveal className="enterprise-service-reveal" delay={(index % 4) * 55} key={slug}>
                <article className="enterprise-service-card">
                  <div className="enterprise-service-card__top">
                    <span className="enterprise-service-card__icon">
                      <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="enterprise-service-card__number">{number}</span>
                  </div>
                  <p className="enterprise-service-card__category">{category}</p>
                  <h3>{title}</h3>
                  <p className="enterprise-service-card__summary">{summary}</p>
                  <a
                    className="enterprise-service-card__action"
                    href={WHATSAPP(
                      `Hello, I would like to enquire about ${title}. Please share the options for my route.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Enquire now about ${title} on WhatsApp`}
                  >
                    Enquire now <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="enterprise-services__footnote">
            Service availability, carrier type and timing vary by route and are confirmed during
            your enquiry.
          </p>
        </div>
      </section>

      <section className="enterprise-journey">
        <div className="container enterprise-journey__inner">
          <Reveal className="enterprise-journey__heading">
            <p className="enterprise-eyebrow enterprise-eyebrow--light">
              <span className="enterprise-eyebrow__signal" /> A MORE CONSIDERED MOVE
            </p>
            <h2>
              Clear steps. <em>Human support.</em>
            </h2>
            <p>A move has enough moving parts. We make the first conversation straightforward.</p>
            <a href={PHONE_LINK} className="enterprise-journey__phone">
              <Phone size={16} aria-hidden="true" /> Talk to a move coordinator
            </a>
          </Reveal>
          <div className="enterprise-journey__steps">
            {journeySteps.map(({ number, title, text, icon: Icon }, index) => (
              <Reveal className="enterprise-journey__step-wrap" delay={index * 90} key={number}>
                <article className="enterprise-journey__step">
                  <div className="enterprise-journey__step-top">
                    <span>{number}</span>
                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-tracking section" id="tracking">
        <div className="container">
          <Reveal className="enterprise-section-heading enterprise-section-heading--tracking">
            <div>
              <p className="enterprise-eyebrow enterprise-eyebrow--muted">
                <span className="enterprise-eyebrow__signal" /> SHIPMENT VISIBILITY
              </p>
              <h2>
                A route in motion. <em>Updates at a glance.</em>
              </h2>
            </div>
            <p className="enterprise-section-heading__tracking-note">
              See how a shipment journey could look from pickup to delivery.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <TrackingDashboard />
          </Reveal>
        </div>
      </section>

      <section className="enterprise-faq section" id="faq">
        <div className="container enterprise-faq__grid">
          <Reveal className="enterprise-faq__intro">
            <p className="enterprise-eyebrow enterprise-eyebrow--muted">
              <span className="enterprise-eyebrow__signal" /> CLEAR ANSWERS, FIRST
            </p>
            <h2>
              The details matter. <em>Ask anything.</em>
            </h2>
            <p>Straightforward information on protection, packing, routes and shipment updates.</p>
            <Link className="enterprise-text-link" to="/contact">
              Speak with our team <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="enterprise-faq__list">
            {FAQ_ITEMS.map(({ question, answer }, index) => (
              <details className="enterprise-faq-item" key={question} open={index === 0}>
                <summary>
                  <span className="enterprise-faq-item__number">0{index + 1}</span>
                  <span>{question}</span>
                  <span className="enterprise-faq-item__toggle" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                </summary>
                <div className="enterprise-faq-item__answer">
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-final-cta">
        <div className="container enterprise-final-cta__inner">
          <div>
            <p className="enterprise-eyebrow enterprise-eyebrow--light">
              <span className="enterprise-eyebrow__signal" /> READY WHEN YOU ARE
            </p>
            <h2>
              Your next address starts <em>with a conversation.</em>
            </h2>
            <p>Tell us the route. We’ll help you understand the next step.</p>
          </div>
          <div className="enterprise-final-cta__actions">
            <a className="enterprise-button enterprise-button--gold" href={PHONE_LINK}>
              <Phone size={17} aria-hidden="true" /> Call {PHONE}
            </a>
            <Link className="enterprise-final-cta__link" to="/contact">
              Share your move details <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <span className="enterprise-final-cta__watermark" aria-hidden="true">
            SN
          </span>
        </div>
      </section>
    </main>
  );
}
