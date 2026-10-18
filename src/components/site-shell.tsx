import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, Package, Phone, X } from "lucide-react";
import { EMAIL, MAP_LINK, PHONE, PHONE_LINK, WHATSAPP } from "@/lib/site-data";

const navigation = [
  { label: "Home", to: "/", path: "/" },
  { label: "Services", to: "/services", path: "/services" },
  { label: "Our approach", to: "/about", path: "/about" },
  { label: "FAQs", to: "/faq", path: "/faq" },
  { label: "Contact", to: "/contact", path: "/contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell" id="top">
      <div className="topbar">
        <div className="container topbar__inner">
          <a href={MAP_LINK} target="_blank" rel="noreferrer" className="topbar__location">
            <MapPin size={13} aria-hidden="true" />
            Dewas Naka, Indore
          </a>
          <p className="topbar__message">
            Local knowledge <span /> moves across India
          </p>
          <a className="topbar__phone" href={PHONE_LINK}>
            <Phone size={13} aria-hidden="true" />
            <span>Speak with our team</span>
            <strong>+91 {PHONE}</strong>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label="Shree Nath Packers & Movers home">
            <span className="brand__mark" aria-hidden="true">
              <Package size={23} strokeWidth={1.65} />
            </span>
            <span className="brand__wordmark">
              <strong>SHREE NATH</strong>
              <span>PACKERS &amp; MOVERS</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={active ? "is-active" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <Link to="/contact" className="header-estimate">
              <span>Plan your move</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <a className="header-call" href={PHONE_LINK} aria-label={`Call +91 ${PHONE}`}>
              <span className="header-call__icon">
                <Phone size={15} aria-hidden="true" />
              </span>
              <span>
                <small>Talk to our team</small>
                <strong>+91 {PHONE}</strong>
              </span>
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === item.path ? "page" : undefined}
              >
                {item.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            ))}
            <a className="mobile-nav__phone" href={PHONE_LINK}>
              <Phone size={16} aria-hidden="true" /> +91 {PHONE}
            </a>
          </nav>
        )}
      </header>

      {children}

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-brand-block">
            <Link
              to="/"
              className="brand brand--footer"
              aria-label="Shree Nath Packers & Movers home"
            >
              <span className="brand__mark" aria-hidden="true">
                <Package size={23} strokeWidth={1.65} />
              </span>
              <span className="brand__wordmark">
                <strong>SHREE NATH</strong>
                <span>PACKERS &amp; MOVERS</span>
              </span>
            </Link>
            <p>
              Careful packing. Considered moving.
              <br />
              Based in Indore, for wherever life takes you.
            </p>
          </div>

          <div className="footer-column">
            <h2>GET IN TOUCH</h2>
            <a href={PHONE_LINK}>
              <Phone size={16} aria-hidden="true" /> +91 {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={16} aria-hidden="true" /> <span>{EMAIL}</span>
            </a>
            <a href={MAP_LINK} target="_blank" rel="noreferrer">
              <MapPin size={16} aria-hidden="true" /> Dewas Naka, Indore, Madhya Pradesh
            </a>
          </div>

          <div className="footer-column footer-column--links">
            <h2>EXPLORE</h2>
            {navigation.map((item) => (
              <Link key={item.path} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Shree Nath Packers &amp; Movers. All rights reserved.
          </span>
          <span>Thoughtfully moved from Indore.</span>
          <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top ↑
          </a>
        </div>
      </footer>

      <a
        className="whatsapp-fab"
        href={WHATSAPP("Hello, I would like to plan my move.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Shree Nath Packers & Movers on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>Let’s talk</span>
      </a>
    </div>
  );
}
