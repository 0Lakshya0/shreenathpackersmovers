import { useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/site-data";

type QuoteRequest = {
  from: string;
  to: string;
  size: string;
  date: string;
  name: string;
  phone: string;
};

export function QuoteForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<QuoteRequest>({
    from: "Indore",
    to: "",
    size: "",
    date: "",
    name: "",
    phone: "",
  });

  const updateField = (field: keyof QuoteRequest, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }

    const message = [
      "Hello Shree Nath Packers & Movers, I would like a moving estimate.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Moving from: ${form.from}`,
      `Moving to: ${form.to}`,
      `Move size: ${form.size}`,
      `Preferred date: ${form.date || "Flexible"}`,
    ].join("\n");

    window.open(WHATSAPP(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="quote-card" onSubmit={submit}>
      <div className="quote-card__header">
        <div>
          <p className="eyebrow">YOUR MOVING ESTIMATE</p>
          <h2>Let’s get the details.</h2>
        </div>
        <span className="quote-card__step">
          0{step} <i /> 02
        </span>
      </div>

      <div
        className="quote-progress"
        role="progressbar"
        aria-label={`Quote request, step ${step} of 2`}
        aria-valuemin={1}
        aria-valuemax={2}
        aria-valuenow={step}
      >
        <span className={step === 1 ? "is-current" : "is-complete"} />
        <span className={step === 2 ? "is-current" : ""} />
      </div>

      <p className="quote-card__step-label" aria-live="polite">
        {step === 1 ? "First, where are you moving?" : "A little more about your move"}
      </p>

      {step === 1 ? (
        <div className="form-grid">
          <label className="form-field" htmlFor="quote-from">
            <span>Moving from</span>
            <input
              id="quote-from"
              required
              autoComplete="address-level2"
              value={form.from}
              onChange={(event) => updateField("from", event.target.value)}
              placeholder="City or locality"
            />
          </label>
          <label className="form-field" htmlFor="quote-to">
            <span>Moving to</span>
            <input
              id="quote-to"
              required
              autoComplete="off"
              value={form.to}
              onChange={(event) => updateField("to", event.target.value)}
              placeholder="Your destination city"
            />
          </label>
        </div>
      ) : (
        <div className="form-grid">
          <label className="form-field" htmlFor="quote-name">
            <span>Your name</span>
            <input
              id="quote-name"
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Name"
            />
          </label>
          <label className="form-field" htmlFor="quote-phone">
            <span>Phone number</span>
            <input
              id="quote-phone"
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+91 98765 43210"
            />
          </label>
          <label className="form-field" htmlFor="quote-size">
            <span>Move size</span>
            <select
              id="quote-size"
              required
              value={form.size}
              onChange={(event) => updateField("size", event.target.value)}
            >
              <option value="">Select a home or office size</option>
              <option>Few items</option>
              <option>1 RK / 1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4+ BHK / Villa</option>
              <option>Office</option>
            </select>
          </label>
          <label className="form-field" htmlFor="quote-date">
            <span>
              Preferred date <small>(optional)</small>
            </span>
            <input
              id="quote-date"
              type="date"
              value={form.date}
              onChange={(event) => updateField("date", event.target.value)}
            />
          </label>
        </div>
      )}

      <div className="quote-card__actions">
        {step === 2 && (
          <button className="button button--back" type="button" onClick={() => setStep(1)}>
            Back
          </button>
        )}
        <button className="button button--primary quote-card__submit" type="submit">
          {step === 1 ? "Continue" : "Send on WhatsApp"}
          {step === 1 ? (
            <ArrowRight size={17} aria-hidden="true" />
          ) : (
            <MessageCircle size={17} aria-hidden="true" />
          )}
        </button>
      </div>

      <p className="quote-card__note">
        Free, no-obligation enquiry <span /> Opens a message in WhatsApp
      </p>
    </form>
  );
}
