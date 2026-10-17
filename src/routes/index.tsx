import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Truck, Package, Users, ShieldCheck, Globe, DoorOpen, MessageCircle, ChevronDown, Boxes, Home, ArrowRight, ArrowUpRight, Building2, Car, Menu, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import movingTeam from "@/assets/moving-team.jpg";
import packing from "@/assets/careful-packing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Shree Nath Packers & Movers | Home & Office Shifting in Indore" },
    { name: "description", content: "Plan your local or domestic move with Shree Nath Packers & Movers, Dewas Naka, Indore. Packing, loading and door-to-door relocation. Call 7000568402." },
    { property: "og:title", content: "Shree Nath Packers & Movers | Indore" },
    { property: "og:description", content: "Careful packing. Smooth moving. Local and domestic relocation from Indore. Request your free moving quote." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});

const PHONE = "7000568402";
const EMAIL = "shreenathpackermovers@gmail.com";
const WA = (text: string) => `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
const links = [{ label: "Home", id: "home" }, { label: "Services", id: "services" }, { label: "Our process", id: "process" }, { label: "Contact", id: "contact" }];
const services = [
  { icon: Home, title: "Home shifting", text: "From a few belongings to your whole home. Thoughtful packing and doorstep delivery.", tag: "A fresh start" },
  { icon: Building2, title: "Office relocation", text: "Desks, equipment and office essentials, carefully packed for your next workspace.", tag: "Business on the move" },
  { icon: Car, title: "Vehicle transport", text: "Plan car and bike transportation along with your move. Ask us about your route.", tag: "Beyond the boxes" },
  { icon: Boxes, title: "Loading & unloading", text: "An extra pair of expert hands for heavy furniture, cartons and careful handling.", tag: "The heavy lifting" },
];
const faqs = [
  { q: "Can you move my belongings outside Indore?", a: "Yes. We arrange local shifting within Indore and domestic moves across India. Share your destination with us to discuss your move." },
  { q: "What packing materials do you use?", a: "Packing materials may include bubble wrap, corrugated sheets, stretch film and cartons, selected according to the items being moved." },
  { q: "How much will my move cost?", a: "Your quote depends on the pickup and destination, the volume of goods and the services you need. Send your details for a free quote." },
  { q: "Can I arrange transit insurance?", a: "Please ask our team about available transit insurance options, coverage and terms before confirming your booking." },
];

function Index() {
  const [menu, setMenu] = useState(false);
  return <div className="min-h-screen">
    <div className="bg-navy text-navy-foreground"><div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2 text-xs"><span className="flex items-center gap-2"><MapPin size={13} className="text-primary" /> Dewas Naka, Indore</span><span className="flex items-center gap-2"><Globe size={13} className="text-primary" /> Local & domestic moves across India</span></div></div>
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <a href="#home" aria-label="Shree Nath Packers and Movers home" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground"><Truck size={26} /></span><span className="font-display text-lg font-bold leading-tight">SHREE NATH<span className="block font-sans text-[11px] font-semibold text-muted-foreground">PACKERS & MOVERS</span></span></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">{links.map(l => <a key={l.id} href={`#${l.id}`} className="transition-colors hover:text-muted-foreground">{l.label}</a>)}</nav>
        <div className="flex items-center gap-2"><Button asChild className="hidden h-11 sm:inline-flex"><a href={`tel:+91${PHONE}`}><Phone /> +91 {PHONE}</a></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div>
      </div>
      {menu && <nav className="flex flex-col gap-4 border-t px-5 py-5 lg:hidden">{links.map(l => <a key={l.id} href={`#${l.id}`} onClick={() => setMenu(false)} className="text-sm font-semibold">{l.label}</a>)}<a href={`tel:+91${PHONE}`} className="flex items-center gap-2 text-sm"><Phone size={16} />+91 {PHONE}</a></nav>}
    </header>

    <main>
      <section id="home" className="relative isolate bg-navy text-navy-foreground">
        <img src={movingTeam} alt="Moving professionals carefully loading packed belongings into a moving truck" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="hero-shade absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="max-w-xl"><p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase"><span className="h-0.5 w-7 bg-primary" /> Your move. Our responsibility.</p>
            <h1 className="text-4xl font-extrabold leading-[1.16] sm:text-5xl">Shree Nath<br />Packers & Movers<span className="mt-3 block text-primary">Care in every move.</span></h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-navy-foreground/85">A new home. A new city. The same peace of mind. Packing and door-to-door shifting from Indore to wherever life takes you.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="h-12 px-6 font-bold"><a href="#quote">Get a free quote <ArrowUpRight /></a></Button><Button asChild variant="outline" className="h-12 border-navy-foreground/40 bg-transparent px-5 text-navy-foreground hover:bg-navy-foreground/10"><a href={WA("Hi, I would like to plan my move.")} target="_blank" rel="noreferrer"><MessageCircle /> Let's talk</a></Button></div>
            <p className="mt-7 flex items-center gap-2 text-xs text-navy-foreground/80"><Check size={15} className="text-primary" /> Local moves · Domestic shifting · Door-to-door service</p>
          </div>
        </div>
      </section>

      <section className="border-b bg-card"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-7 lg:grid-cols-4">{[{ icon: Globe, t: "Across India", d: "Local & domestic shifting" }, { icon: Package, t: "Careful packing", d: "Protection for your belongings" }, { icon: Users, t: "Expert hands", d: "Packing, loading & unloading" }, { icon: DoorOpen, t: "Door to door", d: "From pickup to your new place" }].map(({ icon: Icon, t, d }) => <div key={t} className="flex items-center gap-3"><Icon className="h-7 w-7 shrink-0 text-muted-foreground" /><div><h2 className="font-sans text-sm font-bold">{t}</h2><p className="mt-1 text-xs text-muted-foreground">{d}</p></div></div>)}</div></section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 md:py-20"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">WHAT WE MOVE</p><h2 className="mt-3 text-3xl font-bold">Big moves. Small details.</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Every move is different. Find the right service for your next chapter.</p></div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, text, tag }, i) => <a key={title} href={WA(`Hi, I would like a quote for ${title}.`)} target="_blank" rel="noreferrer" className="group flex flex-col rounded-lg border bg-card p-6 transition-colors hover:border-primary"><div className="flex items-start justify-between"><Icon size={30} className="text-foreground" /><span className="text-xs text-muted-foreground">0{i + 1}</span></div><p className="mt-7 text-xs text-muted-foreground">{tag}</p><h3 className="mt-2 text-lg font-bold">{title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p><span className="mt-6 flex items-center justify-between border-t pt-4 text-sm font-semibold">Enquire now <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span></a>)}</div>
      </section>

      <section id="quote" className="bg-secondary"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-20"><div className="relative"><img src={packing} alt="Furniture being carefully wrapped with protective bubble wrap" loading="lazy" width={1024} height={1024} className="h-72 w-full rounded-lg object-cover sm:h-96 lg:h-full lg:max-h-[480px]" /><div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-md bg-card p-4"><ShieldCheck className="h-9 w-9 shrink-0 text-muted-foreground" /><div><p className="font-bold">More than boxes. Your belongings.</p><p className="mt-1 text-xs text-muted-foreground">Handled with care, every step of the way.</p></div></div></div><QuoteForm /></div></section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-16 md:py-20"><p className="eyebrow">A SIMPLE WAY TO MOVE</p><h2 className="mt-3 text-3xl font-bold">From your first call to your new door.</h2><div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{[{ icon: Phone, t: "Tell us your plan", d: "Share your cities, belongings and preferred moving date." }, { icon: Package, t: "We pack with care", d: "Your items are packed and prepared for loading." }, { icon: Truck, t: "On the move", d: "Your belongings travel to the agreed destination." }, { icon: Home, t: "Welcome home", d: "Unloading and delivery at your new doorstep." }].map(({ icon: Icon, t, d }, i) => <div key={t} className="border-t pt-5"><div className="flex items-center justify-between"><span className="text-sm font-bold text-muted-foreground">STEP 0{i + 1}</span><Icon size={23} /></div><h3 className="mt-5 text-base font-bold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></div>)}</div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-y py-6"><div><h3 className="text-lg font-bold">Already moving with us?</h3><p className="mt-1 text-sm text-muted-foreground">Contact our team for an update on your shipment.</p></div><Button asChild variant="outline" className="h-11"><a href={WA("Hi, I need an update on my shipment. My booking reference is: ")} target="_blank" rel="noreferrer"><MessageCircle /> Request shipment update <ArrowUpRight /></a></Button></div>
      </section>

      <section className="border-t bg-card"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[1fr_1.5fr]"><div><p className="eyebrow">BEFORE YOU MOVE</p><h2 className="mt-3 text-3xl font-bold">A little clarity.<br />A lot less stress.</h2><a href={`tel:+91${PHONE}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"><Phone size={16} /> Still have a question? Call us.</a></div><div className="divide-y border-y">{faqs.map(f => <details key={f.q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">{f.q}<ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="mt-3 pr-7 text-sm leading-relaxed text-muted-foreground">{f.a}</p></details>)}</div></div></section>
      <section className="bg-primary"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10"><div><h2 className="text-2xl font-bold text-primary-foreground">Your next chapter starts here.</h2><p className="mt-2 text-sm text-primary-foreground">Let's get your move on the calendar.</p></div><Button asChild className="h-12 bg-navy px-6 text-navy-foreground hover:bg-navy/90"><a href={`tel:+91${PHONE}`}><Phone /> Call {PHONE} <ArrowUpRight /></a></Button></div></section>
    </main>

    <footer id="contact" className="bg-navy text-navy-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.4fr_0.7fr]"><div><p className="font-display text-xl font-bold">Shree Nath<br /><span className="text-primary">Packers & Movers</span></p><p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/65">Careful packing. Smooth moving.<br />From Indore, across India.</p></div><div><h3 className="text-sm font-bold">Get in touch</h3><div className="mt-5 space-y-4 text-sm text-navy-foreground/75"><a href={`tel:+91${PHONE}`} className="flex items-center gap-3"><Phone size={16} className="shrink-0 text-primary" />+91 {PHONE}</a><a href={`mailto:${EMAIL}`} className="flex items-center gap-3"><Mail size={16} className="shrink-0 text-primary" /><span className="break-all">{EMAIL}</span></a><a href="https://www.google.com/maps/search/?api=1&query=Dewas+Naka+Indore" target="_blank" rel="noreferrer" className="flex items-center gap-3"><MapPin size={16} className="shrink-0 text-primary" />Dewas Naka, Indore, Madhya Pradesh</a></div></div><div><h3 className="text-sm font-bold">Explore</h3><div className="mt-5 space-y-3 text-sm text-navy-foreground/75">{links.map(l => <a key={l.id} className="block" href={`#${l.id}`}>{l.label}</a>)}</div></div></div><div className="mx-auto max-w-7xl border-t border-navy-foreground/15 px-5 py-5 text-xs text-navy-foreground/55">© {new Date().getFullYear()} Shree Nath Packers & Movers. All rights reserved.</div></footer>
    <Button asChild size="icon" className="fixed bottom-5 right-5 z-50 h-13 w-13 rounded-full bg-whatsapp text-navy-foreground shadow-lg hover:bg-whatsapp/90"><a href={WA("Hi, I need a shifting quote.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><MessageCircle className="size-6" /></a></Button>
  </div>;
}

function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ from: "Indore", to: "", size: "", date: "" });
  const field = "mt-2 h-12 w-full rounded-md border border-input bg-card px-3 text-sm font-normal text-foreground outline-none focus:ring-2 focus:ring-ring";
  const submit = (event: FormEvent) => { event.preventDefault(); if (step === 1) { setStep(2); return; } window.open(WA(`Free quote request:\nFrom: ${form.from}\nTo: ${form.to}\nMove size: ${form.size}\nPreferred date: ${form.date || "Flexible"}`), "_blank", "noopener,noreferrer"); };
  return <form onSubmit={submit} className="self-center"><p className="eyebrow">LET'S PLAN YOUR MOVE</p><div className="mt-3 flex items-end justify-between gap-3"><h2 className="text-3xl font-bold">Get your free quote.</h2><span className="shrink-0 text-xs text-muted-foreground">0{step} / 02</span></div><p className="mt-3 text-sm text-muted-foreground">A few details, and we'll take it from there.</p><div className="my-6 flex gap-2"><span className="h-1 flex-1 bg-primary" /><span className={`h-1 flex-1 ${step === 2 ? "bg-primary" : "bg-border"}`} /></div>
    {step === 1 ? <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">From city<input required autoComplete="address-level2" className={field} value={form.from} onChange={e => setForm({ ...form, from: e.target.value })} /></label><label className="text-sm font-semibold">To city<input required placeholder="e.g. Bhopal" className={field} value={form.to} onChange={e => setForm({ ...form, to: e.target.value })} /></label></div> : <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Move size<select required className={field} value={form.size} onChange={e => setForm({ ...form, size: e.target.value })}><option value="">Select size</option>{["1 RK / Few Items", "1 BHK", "2 BHK", "3 BHK", "4+ BHK / Villa", "Office"].map(s => <option key={s}>{s}</option>)}</select></label><label className="text-sm font-semibold">Preferred date <span className="font-normal text-muted-foreground">(optional)</span><input type="date" className={field} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></label></div>}
    <div className="mt-6 flex gap-3">{step === 2 && <Button type="button" variant="outline" className="h-12" onClick={() => setStep(1)}>Back</Button>}<Button type="submit" className="h-12 flex-1 font-bold">{step === 1 ? "Continue" : "Send quote request"}{step === 1 ? <ArrowRight /> : <MessageCircle />}</Button></div><p className="mt-4 text-center text-xs text-muted-foreground">Free quote · No obligation · Sent through WhatsApp</p>
  </form>;
}
