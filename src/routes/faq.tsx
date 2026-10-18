import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FAQ_ITEMS, PHONE, PHONE_LINK, WHATSAPP } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Moving FAQs | Shree Nath Packers & Movers, Indore" },
      {
        name: "description",
        content:
          "Get clear answers about moving estimates, packing materials, local shifting, domestic routes and vehicle transport with Shree Nath Packers & Movers.",
      },
    ],
  }),
  component: FaqPage,
});

const categories = [...new Set(FAQ_ITEMS.map((item) => item.category))];

function FaqPage() {
  return (
    <main className="page-faq">
      <section className="faq-page-hero">
        <div className="container faq-page-hero__inner">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow__rule" /> FREQUENTLY ASKED QUESTIONS
            </p>
            <h1>
              Better answers make for a <em>better move.</em>
            </h1>
            <p>
              Moving comes with questions. Find a little clarity here—or talk to a real person if
              you need something more specific.
            </p>
            <div className="faq-page-hero__actions">
              <a href={PHONE_LINK} className="button button--primary">
                <Phone size={16} aria-hidden="true" /> Call +91 {PHONE}
              </a>
              <Link className="text-link" to="/contact">
                Ask us directly <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal className="faq-page-hero__note" delay={100}>
            <span className="faq-page-hero__note-icon">
              <MessageCircle size={22} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p>
              <strong>Your move is your own.</strong>
              <span>For route-specific details, we’re happy to talk them through.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="faq-page-content section">
        <div className="container faq-page-grid">
          <aside className="faq-page-aside">
            <p className="eyebrow">
              <span className="eyebrow__rule" /> QUICK GUIDE
            </p>
            <h2>
              A few things you may be <em>wondering.</em>
            </h2>
            <p>
              Choose a question to open the answer. If your situation is a little different, share
              the details and we’ll help you work through it.
            </p>
            <div className="faq-page-aside__contact">
              <span>Can’t find your answer?</span>
              <Link to="/contact">
                Contact the team <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>

          <div className="faq-categories">
            {categories.map((category, groupIndex) => (
              <Reveal className="faq-category" delay={groupIndex * 80} key={category}>
                <h2>{category}</h2>
                <div className="faq-list">
                  {FAQ_ITEMS.filter((item) => item.category === category).map(
                    ({ question, answer }, questionIndex) => (
                      <details
                        className="faq-item"
                        key={question}
                        open={groupIndex === 0 && questionIndex === 0}
                      >
                        <summary>
                          <span>{question}</span>
                          <span className="faq-item__toggle">
                            <ChevronDown size={17} aria-hidden="true" />
                          </span>
                        </summary>
                        <p>{answer}</p>
                      </details>
                    ),
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta__inner">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__rule" /> NO PRESSURE, JUST A PLAN
            </p>
            <h2>
              Tell us what you’re planning. <em>We’ll help with the next step.</em>
            </h2>
          </div>
          <Link className="button button--primary" to="/contact">
            Get a free estimate <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="faq-contact-strip">
        <div className="container faq-contact-strip__inner">
          <span>Still deciding what to ask?</span>
          <a
            href={WHATSAPP("Hello, I have a question about planning a move.")}
            target="_blank"
            rel="noreferrer"
          >
            Send a WhatsApp message <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
