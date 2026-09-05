import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/destinations", label: "Destinations" },
  { to: "/booking", label: "Book a Trip" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="mark">✦</span> Jharkhand Tourism
        </Link>

        <nav className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link className="btn btn-solid" to="/booking">
            <span className="long">Plan a</span> Visit
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
