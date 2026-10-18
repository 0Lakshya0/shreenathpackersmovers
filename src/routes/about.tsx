import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Heart,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PHONE_LINK, PROCESS_STEPS } from "@/lib/site-data";
import packing from "@/assets/careful-packing.jpg";
import movingTeam from "@/assets/moving-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Approach | Shree Nath Packers & Movers, Indore" },
      {
        name: "description",
        content:
          "Meet Shree Nath Packers & Movers, based in Indore. Learn about our considered approach to careful packing, home shifting and domestic relocation.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="page-about">
      <section className="page-hero page-hero--about">
        <div className="container page-hero__grid">
          <Reveal className="page-hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__rule" /> OUR APPROACH
            </p>
            <h1>
              Moving is personal. <em>We treat it that way.</em>
            </h1>
            <p>
              A new address is more than a change of place. It’s a collection of moments, routines
              and belongings—worth moving with care.
            </p>
            <div className="page-hero__actions">
              <Link className="button button--primary" to="/contact">
                Talk to our team <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <a className="page-hero__text-link" href={PHONE_LINK}>
                Or call us directly
              </a>
            </div>
          </Reveal>
          <Reveal className="page-hero__visual" delay={120}>
            <figure className="page-hero__image-frame">
              <img
                src={packing}
                alt="A mover taking care while wrapping a chair for relocation"
                width={1024}
                height={1024}
              />
              <figcaption>
                <span>THE THINGS THAT MAKE A PLACE YOURS</span>
                <strong>Handled with care, at every step.</strong>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="about-story section">
        <div className="container about-story__grid">
          <Reveal className="about-story__image-wrap">
            <img
              src={movingTeam}
              alt="A moving team carefully transferring packed belongings into a truck"
              width={1536}
              height={1024}
              loading="lazy"
            />
            <div className="about-story__image-note">
              <MapPin size={17} aria-hidden="true" />
              <span>Based in Indore, Madhya Pradesh</span>
            </div>
          </Reveal>
          <Reveal className="about-story__copy" delay={100}>
            <p className="eyebrow">
              <span className="eyebrow__rule" /> A LOCAL START, A WIDER JOURNEY
            </p>
            <h2>
              From your first conversation to your <em>new front door.</em>
            </h2>
            <p>
              Shree Nath Packers &amp; Movers is based at Dewas Naka in Indore. We arrange local
              shifting in the city and domestic moves across India, with home, office, vehicle and
              loading support to discuss.
            </p>
            <p>
              We believe a better moving experience starts with listening: where you’re going, what
              needs extra attention and what kind of help you actually need. From there, we can talk
              through a clear plan together.
            </p>
            <Link className="text-link" to="/services">
              See how we can help <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <Reveal className="principles-heading">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__rule" /> WHAT MATTERS TO US
            </p>
            <h2>
              Good moves are made of <em>small things done thoughtfully.</em>
            </h2>
            <p>No grand promises. Just a more human way to plan a big day.</p>
          </Reveal>
          <div className="principles-grid">
            {[
              {
                icon: Heart,
                number: "01",
                title: "Care for what matters",
                text: "We understand that everyday belongings can carry a lot of meaning. Tell us what needs extra attention.",
              },
              {
                icon: Compass,
                number: "02",
                title: "A plan that fits",
                text: "The right support depends on your route, your home and what you’re taking with you.",
              },
              {
                icon: MessageCircle,
                number: "03",
                title: "Clear conversation",
                text: "Ask about packing, routes, timing or terms before you decide what to do next.",
              },
              {
                icon: ShieldCheck,
                number: "04",
                title: "No pressure to book",
                text: "Start with a free estimate conversation, then decide if the plan feels right for you.",
              },
            ].map(({ icon: Icon, number, title, text }, index) => (
              <Reveal className="principle-reveal" delay={index * 80} key={number}>
                <article className="principle-card">
                  <div className="principle-card__top">
                    <span className="principle-card__icon">
                      <Icon size={22} strokeWidth={1.55} aria-hidden="true" />
                    </span>
                    <span>{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="principle-card__check">
                    <Check size={13} aria-hidden="true" /> Considered at every step
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-process section">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow__rule" /> WHAT HAPPENS NEXT
              </p>
              <h2>
                A clear path, <em>one step at a time.</em>
              </h2>
            </div>
            <p className="section-heading__intro">
              You don’t need to have every detail figured out. Start with the basics, and we’ll help
              you understand the next step.
            </p>
          </Reveal>
          <div className="about-process-grid">
            {PROCESS_STEPS.map(({ number, title, description }, index) => (
              <Reveal className="about-process-reveal" delay={index * 70} key={number}>
                <article className="about-process-card">
                  <span className="about-process-card__number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta page-cta--dark">
        <div className="container page-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__rule" /> READY WHEN YOU ARE
            </p>
            <h2>
              Your next chapter starts with <em>a conversation.</em>
            </h2>
          </div>
          <Link className="button button--light" to="/contact">
            Plan your move <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
