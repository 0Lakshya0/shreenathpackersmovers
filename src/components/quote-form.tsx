import { useId, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/site-data";

type QuoteRequest = {
  from: string;
  to: string;
  size: string;
  date: string;
  name: string;
  phone: string;
};

type QuoteStep = 1 | 2 | 3;

type QuoteFormProps = {
  variant?: "default" | "hero";
};

const stepLabels = ["Your route", "Move details", "Your contact"];

export function QuoteForm({ variant = "default" }: QuoteFormProps) {
  const [step, setStep] = useState<QuoteStep>(1);
  const [form, setForm] = useState<QuoteRequest>({
    from: "Indore",
    to: "",
    size: "",
    date: "",
    name: "",
    phone: "",
  });
  const idPrefix = useId().replace(/:/g, "");

  const updateField = (field: keyof QuoteRequest, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step < 3) {
      setStep((current) => (current + 1) as QuoteStep);
      return;
    }

    const message = [
      "Hello Shree Nath Packers & Movers, I would like a free moving quote.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Moving from: ${form.from}`,
      `Moving to: ${form.to}`,
      `Move size: ${form.size}`,
      `Preferred date: ${form.date || "Not decided yet"}`,
    ].join("\n");

    window.open(WHATSAPP(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      className={`quote-card ${variant === "hero" ? "quote-card--hero" : ""}`}
      onSubmit={submit}
    >
      <div className="quote-card__header">
        <div>
          <p className="eyebrow">YOUR MOVE, AT YOUR PACE</p>
          <h2>Get a clear first estimate.</h2>
        </div>
        <span className="quote-card__completion" aria-live="polite">
          {step - 1}/3 <small>steps</small>
        </span>
      </div>

      <div
        className="quote-progress quote-progress--three"
        role="progressbar"
        aria-label={`Quote request, step ${step} of 3: ${stepLabels[step - 1]}`}
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={step}
      >
        {[1, 2, 3].map((item) => (
          <span
            className={item < step ? "is-complete" : item === step ? "is-current" : ""}
            key={item}
          />
        ))}
      </div>

      <div className="quote-card__step-intro" aria-live="polite">
        <span>STEP 0{step}</span>
        <p>{stepLabels[step - 1]}</p>
      </div>

      {step === 1 && (
        <div className="form-grid form-grid--route">
          <label className="form-field" htmlFor={`${idPrefix}-quote-from`}>
            <span>From city</span>
            <input
              id={`${idPrefix}-quote-from`}
              name="from"
              required
              autoComplete="address-level2"
              value={form.from}
              onChange={(event) => updateField("from", event.target.value)}
              placeholder="e.g. Indore"
            />
          </label>
          <label className="form-field" htmlFor={`${idPrefix}-quote-to`}>
            <span>To city</span>
            <input
              id={`${idPrefix}-quote-to`}
              name="to"
              required
              autoComplete="off"
              value={form.to}
              onChange={(event) => updateField("to", event.target.value)}
              placeholder="Where are you headed?"
            />
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="form-grid form-grid--route">
          <label className="form-field" htmlFor={`${idPrefix}-quote-size`}>
            <span>Move size</span>
            <select
              id={`${idPrefix}-quote-size`}
              name="size"
              required
              value={form.size}
              onChange={(event) => updateField("size", event.target.value)}
            >
              <option value="">Choose a move size</option>
              <option>Few items / studio</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4+ BHK / villa</option>
              <option>Office / corporate</option>
              <option>Vehicle only</option>
              <option>Storage enquiry</option>
            </select>
          </label>
          <label className="form-field" htmlFor={`${idPrefix}-quote-date`}>
            <span>
              Moving date <small>(if known)</small>
            </span>
            <input
              id={`${idPrefix}-quote-date`}
              name="date"
              type="date"
              value={form.date}
              onChange={(event) => updateField("date", event.target.value)}
            />
          </label>
          <p className="quote-card__helper">No date yet? You can still request a quote.</p>
        </div>
      )}

      {step === 3 && (
        <div className="form-grid form-grid--route">
          <label className="form-field" htmlFor={`${idPrefix}-quote-name`}>
            <span>Your name</span>
            <input
              id={`${idPrefix}-quote-name`}
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Name"
            />
          </label>
          <label className="form-field" htmlFor={`${idPrefix}-quote-phone`}>
            <span>Phone number</span>
            <input
              id={`${idPrefix}-quote-phone`}
              name="phone"
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              pattern="[0-9+() -]{7,20}"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+91 98765 43210"
            />
          </label>
        </div>
      )}

      <div className="quote-card__actions">
        {step > 1 && (
          <button
            className="button button--back"
            type="button"
            onClick={() => setStep((current) => (current - 1) as QuoteStep)}
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back
          </button>
        )}
        <button className="button button--primary quote-card__submit" type="submit">
          {step === 1
            ? "Continue to move size"
            : step === 2
              ? "Continue to your details"
              : "Get Free Quote"}
          {step === 3 ? (
            <MessageCircle size={17} aria-hidden="true" />
          ) : (
            <ArrowRight size={17} aria-hidden="true" />
          )}
        </button>
      </div>

      <p className="quote-card__note">
        <MessageCircle size={14} aria-hidden="true" />
        Your message opens in WhatsApp for you to review and send.
      </p>
    </form>
  );
}
