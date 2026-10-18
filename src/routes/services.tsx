import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Package,
  Phone,
  Route as RouteIcon,
  Ruler,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PHONE, PHONE_LINK, SERVICES } from "@/lib/site-data";
import movingTeam from "@/assets/moving-team.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Moving Services in Indore | Shree Nath Packers & Movers" },
      {
        name: "description",
        content:
          "Explore home shifting, office relocation, vehicle transport and loading services with Shree Nath Packers & Movers in Indore.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="page-services">
      <section className="page-hero page-hero--services">
        <div className="container page-hero__grid">
          <Reveal className="page-hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__rule" /> OUR SERVICES
            </p>
            <h1>
              A move that fits <em>your life.</em>
            </h1>
            <p>
              From a home across town to a new office across the country, start with what you need
              and we’ll talk through the details together.
            </p>
            <div className="page-hero__actions">
              <Link className="button button--primary" to="/contact">
                Find the right service <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <a className="page-hero__phone" href={PHONE_LINK}>
                <Phone size={16} aria-hidden="true" /> +91 {PHONE}
              </a>
            </div>
          </Reveal>
          <Reveal className="page-hero__visual" delay={120}>
            <figure className="page-hero__image-frame">
              <img
                src={movingTeam}
                alt="A moving team handling packed belongings at a home"
                width={1536}
                height={1024}
              />
              <figcaption>
                <span>HOME · OFFICE · DOMESTIC</span>
                <strong>Thoughtful moves, from Indore.</strong>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="service-detail-section section">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow__rule" /> HOW WE CAN HELP
              </p>
              <h2>
                The right support for <em>what’s moving.</em>
              </h2>
            </div>
            <p className="section-heading__intro">
              Every estimate is shaped by your route, the volume of belongings and the services you
              choose. Start by telling us what matters most.
            </p>
          </Reveal>

          <div className="service-detail-list">
            {SERVICES.map(
              ({ slug, number, icon: Icon, category, title, detail, includes }, index) => (
                <Reveal className="service-detail-reveal" key={slug} delay={index * 50}>
                  <article className="service-detail" id={slug}>
                    <div className="service-detail__aside">
                      <span className="service-detail__number">{number}</span>
                      <span className="service-detail__icon">
                        <Icon size={28} strokeWidth={1.55} aria-hidden="true" />
                      </span>
                    </div>
                    <div className="service-detail__body">
                      <p className="service-detail__category">{category}</p>
                      <h3>{title}</h3>
                      <p className="service-detail__description">{detail}</p>
                      <ul>
                        {includes.map((item) => (
                          <li key={item}>
                            <Check size={14} aria-hidden="true" /> {item}
                          </li>
                        ))}
                      </ul>
                      <Link className="service-detail__link" to="/contact">
                        Discuss this service <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="estimate-factors">
        <div className="container estimate-factors__inner">
          <Reveal className="estimate-factors__heading">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__rule" /> A CLEARER ESTIMATE
            </p>
            <h2>
              No mystery. Just the <em>right details.</em>
            </h2>
            <p>
              Knowing what influences a move helps you have a better first conversation—and a more
              useful estimate.
            </p>
            <Link to="/faq" className="estimate-factors__faq-link">
              Questions about moving? <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="estimate-factor-grid">
            {[
              {
                icon: RouteIcon,
                title: "Your route",
                text: "Pickup and destination help shape the plan.",
              },
              {
                icon: Ruler,
                title: "What’s moving",
                text: "The volume and type of belongings matter.",
              },
              {
                icon: Package,
                title: "Packing needs",
                text: "Tell us what needs extra attention.",
              },
              {
                icon: Compass,
                title: "Services you choose",
                text: "Home, office, vehicle or lifting support.",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <Reveal className="estimate-factor-reveal" delay={index * 70} key={title}>
                <article className="estimate-factor">
                  <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta__inner">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__rule" /> A GOOD MOVE STARTS WITH A CHAT
            </p>
            <h2>
              Tell us what you’re moving. <em>We’ll help with the next step.</em>
            </h2>
          </div>
          <Link className="button button--primary" to="/contact">
            Request a free estimate <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
