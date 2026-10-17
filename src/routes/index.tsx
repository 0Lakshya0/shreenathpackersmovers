import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone, Mail, MapPin, Truck, Package, Users, ShieldCheck, Globe, DoorOpen, CheckCircle2,
  MessageCircle, ChevronDown, CalendarCheck, Boxes, Home, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Nath Packers & Movers | Indore — Safe Shifting" },
      { name: "description", content: "Local & domestic shifting across India from Dewas Naka, Indore. Door-to-door service, expert packing. Call 7000568402." },
      { property: "og:title", content: "Shree Nath Packers & Movers" },
      { property: "og:description", content: "Safe Shifting, Zero Stress — all over India from Indore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "7000568402";
const EMAIL = "shreenathpackermovers@gmail.com";
const WA = (t: string) => `https://wa.me/91${PHONE}?text=${encodeURIComponent(t)}`;

const badges = [
  { icon: Globe, t: "All Over India (Local + Domestic Shifting)" },
  { icon: DoorOpen, t: "100% Door-to-Door Service" },
  { icon: Truck, t: "All Vehicles & Loaders Available" },
  { icon: Users, t: "Expert Packing, Loading & Unloading Labour" },
];
const strengths = [
  { icon: Truck, t: "Verified Fleet" },
  { icon: Package, t: "Premium Packing Material" },
  { icon: Users, t: "Professional Labour" },
  { icon: ShieldCheck, t: "Insured Transit" },
];
const steps = [
  { icon: CalendarCheck, t: "Instant Booking", d: "Call or WhatsApp — get a slot confirmed in minutes." },
  { icon: Boxes, t: "Expert Packing & Loading", d: "Multi-layer packing by trained labour." },
  { icon: Truck, t: "Safe Transit", d: "Verified vehicles with insured movement." },
  { icon: Home, t: "Doorstep Unpack", d: "Unloading and unpacking at your new home." },
];
const faqs = [
  { q: "Is my shipment insured during transit?", a: "Yes. We offer transit insurance options so your goods are covered against damage during the move." },
  { q: "What packing material do you use?", a: "Bubble wrap, corrugated sheets, stretch film, thermocol and strong cartons — chosen per item for maximum safety." },
  { q: "Do you shift outside Indore?", a: "Absolutely. We handle local shifting within Indore and domestic shifting to all major cities across India." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <a href={WA("Hi, I need a shifting quote.")} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-navy-foreground shadow-lg transition hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>

      <header className="glass sticky top-0 z-40 text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
            <Truck className="h-6 w-6 text-primary" /> Shree Nath <span className="hidden text-primary sm:inline">Packers & Movers</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            {["Home", "Services", "Track", "Contact"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="opacity-80 hover:text-primary hover:opacity-100">{n}</a>
            ))}
          </nav>
          <a href={`tel:${PHONE}`} className="pulse-ring flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
        </div>
      </header>

      <section id="home" className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Dewas Naka, Indore</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Shree Nath Packers & Movers: <span className="text-primary">Safe Shifting, Zero Stress</span>
            </h1>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {badges.map(({ icon: I, t }) => (
                <li key={t} className="flex items-start gap-3 rounded-xl border border-navy-foreground/10 bg-navy-foreground/5 p-3 text-sm">
                  <I className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="mx-auto -mt-8 grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {strengths.map(({ icon: I, t }) => (
          <div key={t} className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-lg">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><I className="h-5 w-5" /></span>
            <span className="text-sm font-semibold">{t}</span>
          </div>
        ))}
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold">Our Premium Shifting Solutions</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="space-y-4 rounded-2xl border bg-card p-5">
              <div className="h-36 animate-pulse rounded-xl bg-muted" />
              <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </section>

      <section id="track" className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">How We Move You</h2>
            <ol className="mt-8 space-y-0">
              {steps.map(({ icon: I, t, d }, i) => (
                <li key={t} className="relative flex gap-4 pb-8 last:pb-0">
                  {i < steps.length - 1 && <span className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-0.5 bg-primary/40" />}
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-primary"><I className="h-5 w-5" /></span>
                  <div><h3 className="font-bold">{i + 1}. {t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <TrackCard />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y rounded-2xl border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {f.q}<ChevronDown className="h-5 w-5 text-primary transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-display text-lg font-bold"><Truck className="h-5 w-5 text-primary" /> Shree Nath Packers & Movers</p>
            <p className="mt-3 flex gap-2 text-sm opacity-80"><MapPin className="h-4 w-4 shrink-0 text-primary" /> Dewas Naka, Indore, Madhya Pradesh</p>
          </div>
          <div className="space-y-3 text-sm">
            <h3 className="font-bold text-primary">Contact</h3>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 break-all opacity-80 hover:opacity-100"><Mail className="h-4 w-4 shrink-0" />{EMAIL}</a>
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 opacity-80 hover:opacity-100"><Phone className="h-4 w-4" />+91 {PHONE}</a>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-bold text-primary">Quick Links</h3>
            {["Home", "Services", "Track", "Contact"].map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="block opacity-80 hover:opacity-100">{n}</a>)}
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-bold text-primary">Services</h3>
            {["Home Shifting", "Office Relocation", "Vehicle Transport", "Loading & Unloading"].map((n) => <p key={n} className="opacity-80">{n}</p>)}
          </div>
        </div>
        <p className="border-t border-navy-foreground/10 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} Shree Nath Packers & Movers. All rights reserved.</p>
      </footer>
    </div>
  );
}

function QuoteForm() {
  const [step, setStep] = useState(1);
  const [f, setF] = useState({ from: "Indore", to: "", size: "" });
  const field = "w-full rounded-lg border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring";
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) return setStep(2);
    window.open(WA(`Free quote request:\nFrom: ${f.from}\nTo: ${f.to}\nMove size: ${f.size}`), "_blank");
  };
  return (
    <form onSubmit={submit} className="self-center rounded-2xl bg-card p-6 text-card-foreground shadow-2xl md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Get Free Quote</h2>
        <span className="text-xs font-semibold text-muted-foreground">Step {step} of 2</span>
      </div>
      <div className="mb-6 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${step * 50}%` }} /></div>
      {step === 1 ? (
        <div className="space-y-4">
          <label className="block text-sm font-semibold">From City<input required className={`${field} mt-1`} value={f.from} onChange={(e) => setF({ ...f, from: e.target.value })} /></label>
          <label className="block text-sm font-semibold">To City<input required placeholder="e.g. Bhopal" className={`${field} mt-1`} value={f.to} onChange={(e) => setF({ ...f, to: e.target.value })} /></label>
        </div>
      ) : (
        <label className="block text-sm font-semibold">Move Size
          <select required className={`${field} mt-1`} value={f.size} onChange={(e) => setF({ ...f, size: e.target.value })}>
            <option value="">Select size</option>
            {["1 RK / Few Items", "1 BHK", "2 BHK", "3 BHK", "4+ BHK / Villa", "Office"].map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
      )}
      <div className="mt-6 flex gap-3">
        {step === 2 && <button type="button" onClick={() => setStep(1)} className="rounded-lg border px-4 py-3 font-semibold">Back</button>}
        <button className="shadow-amber flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 font-bold text-primary-foreground transition hover:brightness-105">
          {step === 1 ? "Next" : "Get Free Quote"} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function TrackCard() {
  const stops = ["Booked", "Packed", "In Transit", "Delivered"];
  const cur = 2;
  return (
    <div className="self-center rounded-2xl bg-navy p-6 text-navy-foreground shadow-2xl md:p-8">
      <div className="flex items-center justify-between text-xs opacity-70"><span>Shipment #SNP-24817</span><span className="rounded-full bg-primary/20 px-2 py-1 font-semibold text-primary">Live</span></div>
      <div className="mt-6 flex items-end justify-between">
        <div><p className="text-xs opacity-60">From</p><p className="text-xl font-bold">Indore</p></div>
        <Truck className="h-7 w-7 text-primary" />
        <div className="text-right"><p className="text-xs opacity-60">To</p><p className="text-xl font-bold">Mumbai</p></div>
      </div>
      <div className="mt-6 h-2 rounded-full bg-navy-foreground/10"><div className="h-full w-[66%] rounded-full bg-primary" /></div>
      <div className="mt-6 grid grid-cols-4 gap-2 text-center text-xs">
        {stops.map((s, i) => (
          <div key={s} className={i <= cur ? "text-primary" : "opacity-50"}>
            <CheckCircle2 className="mx-auto mb-1 h-5 w-5" />{s}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm opacity-70">ETA: 2 days · Last update near Dhule, MH</p>
    </div>
  );
}
