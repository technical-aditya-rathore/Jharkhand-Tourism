import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <p className="brand" style={{ color: "var(--mica)", fontSize: "1.2rem" }}>
            ✦ Jharkhand Tourism
          </p>
          <p>
            An independent travel guide and booking desk for Jharkhand — waterfalls, hills,
            wildlife and pilgrimage, in one place.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/destinations">All destinations</Link></li>
            <li><Link to="/destinations?cat=waterfall">Waterfalls</Link></li>
            <li><Link to="/destinations?cat=wildlife">Wildlife reserves</Link></li>
            <li><Link to="/booking">Book a trip</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/terms">Terms of use</Link></li>
          </ul>
        </div>
        <div>
          <h4>Reach us</h4>
          <ul>
            <li><a href="mailto:jharkhandtourism@gmail.com">jharkhandtourism@gmail.com</a></li>
            <li>Ranchi, Jharkhand, India</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 Made by Aditya. Designed &amp; developed by Adi.</p>
        <nav>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
