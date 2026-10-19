import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, Package, Phone, X } from "lucide-react";
import { EMAIL, MAP_LINK, PHONE, PHONE_LINK, WHATSAPP } from "@/lib/site-data";

type NavigationItem = {
  label: string;
  to: "/" | "/services" | "/about" | "/faq" | "/contact";
  path: string;
  hash?: string;
};

const navigation: NavigationItem[] = [
  { label: "Home", to: "/", path: "/" },
  { label: "Services", to: "/services", path: "/services" },
  { label: "Tracking", to: "/", path: "/", hash: "tracking" },
  { label: "FAQ", to: "/faq", path: "/faq" },
  { label: "Contact", to: "/contact", path: "/contact" },
];

function NavigationLink({
  item,
  className,
  onClick,
  active,
}: {
  item: NavigationItem;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      to={item.to}
      {...(item.hash ? { hash: item.hash } : {})}
      className={className}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {item.label}
      {className === "mobile-nav__link" && <ArrowUpRight size={16} aria-hidden="true" />}
    </Link>
  );
}

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
            {navigation.map((item) => (
              <NavigationLink
                key={item.label}
                item={item}
                active={pathname === item.path && !item.hash}
              />
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="header-call" href={PHONE_LINK} aria-label={`Call ${PHONE}`}>
              <span className="header-call__icon">
                <Phone size={15} aria-hidden="true" />
              </span>
              <span className="header-call__label">Call {PHONE}</span>
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
              <NavigationLink
                key={item.label}
                item={item}
                className="mobile-nav__link"
                onClick={() => setMenuOpen(false)}
                active={pathname === item.path && !item.hash}
              />
            ))}
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
              Thoughtful household, office and domestic moves—planned with care from Dewas Naka,
              Indore.
            </p>
            <span className="footer-brand-block__tagline">
              <span /> LOCAL KNOWLEDGE · MOVES ACROSS INDIA
            </span>
          </div>

          <div className="footer-column footer-column--links">
            <h2>QUICK LINKS</h2>
            {navigation.map((item) => (
              <NavigationLink key={item.label} item={item} />
            ))}
          </div>

          <div className="footer-column footer-column--address">
            <h2>OUR ADDRESS</h2>
            <a href={MAP_LINK} target="_blank" rel="noreferrer" className="footer-address-link">
              <MapPin size={17} aria-hidden="true" />
              <span>
                Dewas Naka,
                <br />
                Indore, Madhya Pradesh
              </span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <p>Tap for directions and a map.</p>
          </div>

          <div className="footer-column footer-column--contact">
            <h2>DIRECT COMMUNICATION</h2>
            <a href={PHONE_LINK}>
              <Phone size={16} aria-hidden="true" /> <span>{PHONE}</span>
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={16} aria-hidden="true" /> <span>{EMAIL}</span>
            </a>
            <a
              href={WHATSAPP("Hello, I would like to plan my move.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp the team
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Shree Nath Packers &amp; Movers.</span>
          <span>Moving starts with a conversation.</span>
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
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
