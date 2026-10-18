import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  DoorOpen,
  Globe,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PHONE, PHONE_LINK, PROCESS_STEPS, SERVICES } from "@/lib/site-data";
import movingTeam from "@/assets/moving-team.jpg";
import packing from "@/assets/careful-packing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Shree Nath Packers & Movers, Indore | Thoughtful Moves, Wherever Life Takes You",
      },
      {
        name: "description",
        content:
          "Plan a thoughtful home or office move with Shree Nath Packers & Movers in Indore. Explore local shifting, domestic relocation and careful packing.",
      },
      { property: "og:title", content: "Shree Nath Packers & Movers | Indore" },
      {
        property: "og:description",
        content: "Careful packing. Considered moves. Local and domestic relocation from Indore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f7f5ef" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="page-home">
      <section className="hero hero--home" id="home">
        <div className="hero__grain" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              <span className="eyebrow__rule" /> A more thoughtful move begins here
            </p>
            <h1 className="hero__title">
              Moving day,
              <em>made thoughtful.</em>
            </h1>
            <p className="hero__lead">
              From the first carefully packed box to the last handover, move with a team that treats
              every belonging with care.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" to="/contact">
                Plan your move <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <a className="hero-call" href={PHONE_LINK}>
                <span className="hero-call__icon">
                  <Phone size={16} aria-hidden="true" />
                </span>
                <span>
                  <small>Prefer a conversation?</small>
                  <strong>Call +91 {PHONE}</strong>
                </span>
              </a>
            </div>
            <div className="hero__note">
              <span className="hero__note-icon">
                <Check size={13} aria-hidden="true" />
              </span>
              <span>Home · office · vehicle moves</span>
              <span className="hero__note-divider" />
              <span>Based in Indore</span>
            </div>
          </div>

          <div className="hero__visual">
            <figure className="hero__frame">
              <img
                src={movingTeam}
                alt="A moving team carefully loading wrapped furniture and boxes into a truck"
                width={1536}
                height={1024}
                fetchPriority="high"
                className="hero__image"
              />
              <div className="hero__image-shade" aria-hidden="true" />
              <div className="hero__location">
                <Globe size={14} aria-hidden="true" />
                <span>INDORE · MOVES ACROSS INDIA</span>
              </div>
              <div className="hero__photo-card">
                <span className="hero__photo-icon">
                  <ShieldCheck size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="hero__photo-copy">
                  <strong>Care in every detail</strong>
                  <small>Packing · handling · delivery</small>
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </div>
            </figure>
            <div className="hero__image-footnote">
              <span>01</span>
              <span className="hero__image-footnote-line" />
              <span>One careful move at a time</span>
            </div>
            <span className="hero__seal" aria-hidden="true">
              <span>SN</span>
              <small>
                MOVE
                <br />
                WITH CARE
              </small>
            </span>
          </div>
        </div>
      </section>

      <section className="feature-strip" aria-label="Moving services at a glance">
        <div className="container feature-grid">
          {[
            { icon: Package, title: "Thoughtful packing", detail: "Care for the things you value" },
            { icon: DoorOpen, title: "Door-to-door support", detail: "From pickup to arrival" },
            { icon: Globe, title: "Local & domestic", detail: "From Indore across India" },
            { icon: Truck, title: "Moves that fit you", detail: "Home, office & vehicle" },
          ].map(({ icon: Icon, title, detail }, index) => (
            <Reveal className="feature-reveal" delay={index * 70} key={title}>
              <div className="feature-item">
                <span className="feature-item__icon">
                  <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="feature-item__copy">
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section home-services" id="services">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow__rule" /> WHAT WE DO
              </p>
              <h2>
                Every move has its own <em>shape.</em>
              </h2>
            </div>
            <div className="section-heading__side">
              <p className="section-heading__intro">
                Tell us what you’re moving and where you’re headed. We’ll help you find the right
                way to get there.
              </p>
              <Link className="text-link" to="/services">
                Explore all services <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="service-grid">
            {SERVICES.map(({ slug, number, icon: Icon, category, title, summary }, index) => (
              <Reveal className="service-reveal" delay={index * 90} key={slug}>
                <article className="service-card">
                  <div className="service-card__top">
                    <span className="service-card__icon">
                      <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="service-card__number">{number}</span>
                  </div>
                  <p className="service-card__label">{category}</p>
                  <h3>{title}</h3>
                  <p className="service-card__description">{summary}</p>
                  <Link className="service-card__link" to="/services" hash={slug}>
                    Explore service <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section home-approach" id="approach">
        <div className="container approach-grid">
          <Reveal className="approach-photo-wrap">
            <figure className="approach-photo">
              <img
                src={packing}
                alt="A mover carefully wrapping a chair in protective packing material"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <figcaption className="approach-photo__caption">
                <span className="approach-photo__caption-mark">
                  <Package size={19} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span>
                  <small>THE SHREE NATH APPROACH</small>
                  <strong>Care is in the details.</strong>
                </span>
              </figcaption>
              <span className="approach-photo__index" aria-hidden="true">
                A MORE CONSIDERED MOVE
              </span>
            </figure>
          </Reveal>

          <Reveal className="approach-copy">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__rule" /> THE WAY WE MOVE
            </p>
            <h2>
              It’s not just <em>what</em> you move. It’s how.
            </h2>
            <p className="approach-copy__intro">
              A home is made of more than furniture. We take time to understand your route, your
              belongings and the kind of support your move calls for.
            </p>
            <ul className="approach-list">
              <li>
                <span>
                  <Check size={14} aria-hidden="true" />
                </span>
                <p>Plans shaped around your route and the things you’re moving</p>
              </li>
              <li>
                <span>
                  <Check size={14} aria-hidden="true" />
                </span>
                <p>Packing materials selected with your belongings in mind</p>
              </li>
              <li>
                <span>
                  <Check size={14} aria-hidden="true" />
                </span>
                <p>Local moves in Indore and domestic relocations across India</p>
              </li>
              <li>
                <span>
                  <Check size={14} aria-hidden="true" />
                </span>
                <p>Clear answers before you decide what’s right for you</p>
              </li>
            </ul>
            <Link className="approach-link" to="/about">
              Get to know our approach <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <div>
              <p className="eyebrow eyebrow--center">
                <span className="eyebrow__rule" /> THE JOURNEY <span className="eyebrow__rule" />
              </p>
              <h2>
                Four steps to a <em>fresh start.</em>
              </h2>
            </div>
            <p className="section-heading__intro">
              A simple conversation first. A considered plan for the road ahead.
            </p>
          </Reveal>

          <div className="process-grid">
            {PROCESS_STEPS.map(({ number, title, description }, index) => (
              <Reveal className="process-reveal" delay={index * 90} key={number}>
                <article className="process-step">
                  <div className="process-step__top">
                    <span className="process-step__number">STEP {number}</span>
                    <span className="process-step__icon">
                      {index === 0 ? (
                        <Phone size={20} strokeWidth={1.6} aria-hidden="true" />
                      ) : index === 1 ? (
                        <Package size={20} strokeWidth={1.6} aria-hidden="true" />
                      ) : index === 2 ? (
                        <Truck size={20} strokeWidth={1.6} aria-hidden="true" />
                      ) : (
                        <DoorOpen size={20} strokeWidth={1.6} aria-hidden="true" />
                      )}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="home-journey-cta">
            <span>
              <strong>Start with what you know.</strong>
              <small>We can help you work out the rest together.</small>
            </span>
            <Link className="button button--outline-light" to="/contact">
              Get a free estimate <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-faq section">
        <div className="container home-faq__inner">
          <Reveal className="home-faq__copy">
            <p className="eyebrow">
              <span className="eyebrow__rule" /> BEFORE YOU MOVE
            </p>
            <h2>
              The right answers make <em>all the difference.</em>
            </h2>
            <p>
              Know what goes into an estimate, what to ask about packing and how to get started.
            </p>
            <Link className="text-link" to="/faq">
              Browse all FAQs <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="home-faq__callout" delay={100}>
            <span className="home-faq__icon">
              <MessageCircle size={23} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="home-faq__quote">
              “No two moves are quite the same. Your questions deserve a real conversation.”
            </p>
            <a href={PHONE_LINK}>
              Speak with our team <span>+91 {PHONE}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
