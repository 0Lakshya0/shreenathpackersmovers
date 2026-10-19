import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { EMAIL, MAP_LINK, PHONE, PHONE_LINK, WHATSAPP } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Moving Estimate | Contact Shree Nath Packers & Movers" },
      {
        name: "description",
        content:
          "Contact Shree Nath Packers & Movers in Indore for a free, no-obligation conversation about your home, office or domestic move.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="page-contact">
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <Reveal className="contact-hero__copy">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__rule" /> LET’S TALK ABOUT YOUR MOVE
            </p>
            <h1>
              Tell us where you’re going. <em>We’ll help from here.</em>
            </h1>
            <p>
              Start with a few details. We’ll open a WhatsApp conversation so you can review
              everything before sending it—or you can reach us directly.
            </p>
          </Reveal>
          <Reveal className="contact-hero__note" delay={100}>
            <span className="contact-hero__note-icon">
              <Clock3 size={21} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span>
              <strong>At your pace</strong>
              <small>Take your time. There’s no obligation to book.</small>
            </span>
          </Reveal>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container contact-grid">
          <div className="contact-details">
            <Reveal>
              <p className="eyebrow">
                <span className="eyebrow__rule" /> GET IN TOUCH
              </p>
              <h2>
                The first step is <em>a conversation.</em>
              </h2>
              <p className="contact-details__intro">
                Ask about your route, packing, timing or services. We’ll help you understand what
                information is useful for a clear estimate.
              </p>
            </Reveal>

            <div className="contact-methods">
              <Reveal className="contact-method-reveal">
                <a className="contact-method" href={PHONE_LINK}>
                  <span className="contact-method__icon">
                    <Phone size={19} aria-hidden="true" />
                  </span>
                  <span className="contact-method__body">
                    <small>CALL OUR TEAM</small>
                    <strong>+91 {PHONE}</strong>
                    <span>Speak with us about your move</span>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Reveal>
              <Reveal className="contact-method-reveal" delay={60}>
                <a
                  className="contact-method"
                  href={WHATSAPP("Hello, I would like to ask about planning a move.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-method__icon">
                    <MessageCircle size={19} aria-hidden="true" />
                  </span>
                  <span className="contact-method__body">
                    <small>WHATSAPP</small>
                    <strong>Start a conversation</strong>
                    <span>Send your route and questions</span>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Reveal>
              <Reveal className="contact-method-reveal" delay={120}>
                <a className="contact-method" href={`mailto:${EMAIL}`}>
                  <span className="contact-method__icon">
                    <Mail size={19} aria-hidden="true" />
                  </span>
                  <span className="contact-method__body">
                    <small>EMAIL</small>
                    <strong>{EMAIL}</strong>
                    <span>For details you’d like to share in writing</span>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Reveal>
              <Reveal className="contact-method-reveal" delay={180}>
                <a className="contact-method" href={MAP_LINK} target="_blank" rel="noreferrer">
                  <span className="contact-method__icon">
                    <MapPin size={19} aria-hidden="true" />
                  </span>
                  <span className="contact-method__body">
                    <small>BASED IN INDORE</small>
                    <strong>Dewas Naka</strong>
                    <span>Indore, Madhya Pradesh · View directions</span>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Reveal>
            </div>

            <Link className="contact-details__services" to="/services">
              Not sure which service you need? <span>Explore your options</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <Reveal className="contact-form-wrap" delay={100}>
            <div className="contact-form__intro">
              <span>
                01 <i /> 02
              </span>
              <p>Start your estimate</p>
            </div>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <section className="contact-reassurance">
        <div className="container contact-reassurance__inner">
          <span className="contact-reassurance__mark">
            <MessageCircle size={20} aria-hidden="true" />
          </span>
          <p>
            <strong>Your details stay in your hands.</strong>
            <small>The form prepares a WhatsApp message for you to review and send.</small>
          </p>
          <a href={PHONE_LINK}>
            Prefer the phone? <span>Call +91 {PHONE}</span>
          </a>
        </div>
      </section>
    </main>
  );
}
