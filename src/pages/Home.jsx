import { Link, useNavigate } from "react-router-dom";
import DestinationCard from "../components/DestinationCard.jsx";
import { DESTINATIONS } from "../data/destinations.js";
import { useGeolocation } from "../hooks/useGeolocation.js";
import { useEffect } from "react";

const FEATURED = ["hundru", "netarhat", "betla", "parasnath", "dassam", "jamshedpur"];

export default function Home() {
  const navigate = useNavigate();
  const { status, error, locate } = useGeolocation();

  useEffect(() => {
    if (status === "done") navigate("/destinations?locate=1");
  }, [status, navigate]);

  const featured = FEATURED.map((id) => DESTINATIONS.find((d) => d.id === id));

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">The Land of Forests</p>
            <h1>
              Jharkhand, <em>unhurried</em>.
            </h1>
            <p className="hero-sub">
              Waterfalls dropping off the Chota Nagpur plateau, misty pine hill stations, tiger
              reserves, and temple towns — a state most travellers still fly straight over.
              Jharkhand Tourism is your route in.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-solid" to="/destinations">
                Explore destinations
              </Link>
              <Link className="btn btn-ghost" to="/booking">
                Start a booking
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <b>30+</b>
              <span>Waterfalls across the plateau</span>
            </div>
            <div className="hero-stat">
              <b>3</b>
              <span>Tiger &amp; wildlife reserves</span>
            </div>
            <div className="hero-stat">
              <b>4,480 ft</b>
              <span>Parasnath — the state's highest point</span>
            </div>
          </div>
        </div>
        <svg
          className="hero-canopy"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,90 L0,55 C60,30 90,60 150,40 C210,20 240,55 300,35 C360,15 400,55 460,38 C520,22 560,58 620,40 C680,22 720,55 780,36 C840,18 880,55 940,38 C1000,22 1040,55 1100,38 C1140,28 1170,45 1200,35 L1200,90 Z"
            fill="#EFE7C8"
          />
        </svg>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">Why Jharkhand</p>
              <h2>A plateau state built for slow travel</h2>
              <p className="lede">
                Jharkhand sits on the Chota Nagpur plateau, where rivers leaving the tableland
                drop suddenly into gorges — which is why the state has more named waterfalls
                than almost anywhere else in eastern India. Add old Jain and Shaivite pilgrimage
                sites, two tiger-reserve forests, and a handful of hill stations that stay
                genuinely quiet, and you get a state built for travellers who'd rather wander
                than queue.
              </p>
              <div className="stat-strip">
                <div>
                  <b>Oct–Feb</b>
                  <span>Best overall season</span>
                </div>
                <div>
                  <b>Jul–Sep</b>
                  <span>Peak waterfall season</span>
                </div>
                <div>
                  <b>24</b>
                  <span>Districts to explore</span>
                </div>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 420 340" aria-hidden="true">
                <rect width="420" height="340" fill="#223327" />
                <path
                  d="M0,260 C70,220 140,270 210,230 C280,190 340,240 420,210 L420,340 L0,340 Z"
                  fill="#35513A"
                />
                <path
                  d="M0,300 C90,270 170,310 250,280 C320,255 370,290 420,270 L420,340 L0,340 Z"
                  fill="#7C8B5B"
                  opacity="0.85"
                />
                <rect x="196" y="40" width="12" height="230" fill="#F3ECD3" opacity="0.85" />
                <rect x="205" y="40" width="5" height="230" fill="#F3ECD3" opacity="0.5" />
                <circle cx="330" cy="60" r="26" fill="#C4881F" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="motif-row">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <section className="section on-ink">
        <div className="wrap">
          <p className="eyebrow">Browse by kind of trip</p>
          <h2>Five ways to see the state</h2>
          <p style={{ maxWidth: "56ch", color: "rgba(243,236,211,.75)" }}>
            Every destination on Jharkhand Tourism is tagged by what kind of day it gives you.
            Filter the full list, or jump straight into a category below.
          </p>
          <div className="chip-row" style={{ marginTop: 28 }}>
            <Link
              className="chip"
              to="/destinations?cat=waterfall"
              style={{ color: "var(--mica)", borderColor: "var(--line-dark)" }}
            >
              💧 Waterfalls
            </Link>
            <Link
              className="chip"
              to="/destinations?cat=hills"
              style={{ color: "var(--mica)", borderColor: "var(--line-dark)" }}
            >
              ⛰ Hill stations
            </Link>
            <Link
              className="chip"
              to="/destinations?cat=wildlife"
              style={{ color: "var(--mica)", borderColor: "var(--line-dark)" }}
            >
              🐾 Wildlife
            </Link>
            <Link
              className="chip"
              to="/destinations?cat=pilgrimage"
              style={{ color: "var(--mica)", borderColor: "var(--line-dark)" }}
            >
              🛕 Pilgrimage
            </Link>
            <Link
              className="chip"
              to="/destinations?cat=city"
              style={{ color: "var(--mica)", borderColor: "var(--line-dark)" }}
            >
              🏙 City &amp; heritage
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Featured destinations</p>
          <h2>Start here</h2>
          <div className="card-grid">
            {featured.map((d, i) => (
              <DestinationCard key={d.id} destination={d} seed={i} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link className="btn btn-ghost" to="/destinations">
              See all {DESTINATIONS.length} destinations
            </Link>
          </div>
        </div>
      </section>

      <div className="motif alt"></div>

      <section className="section on-forest">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Find your way</p>
            <h2>See what's actually near you</h2>
            <p style={{ color: "rgba(243,236,211,.78)" }}>
              Share your location once, and every destination on Jharkhand Tourism shows its
              road distance from where you're standing — useful whether you're already in Ranchi
              or planning from somewhere else entirely.
            </p>
            <button className="btn btn-solid" onClick={locate} disabled={status === "locating"}>
              {status === "locating" ? "Locating…" : "Use my location"}
            </button>
            {error && (
              <p className="error-text" style={{ color: "#e8c894", marginTop: 10 }}>
                {error}
              </p>
            )}
          </div>
          <div>
            <svg viewBox="0 0 380 300" aria-hidden="true">
              <rect width="380" height="300" fill="#1E2430" />
              <circle cx="190" cy="150" r="90" fill="none" stroke="#B4762E" strokeWidth="1.5" opacity="0.5" />
              <circle cx="190" cy="150" r="55" fill="none" stroke="#B4762E" strokeWidth="1.5" opacity="0.5" />
              <circle cx="190" cy="150" r="6" fill="#C4881F" />
              <circle cx="240" cy="110" r="4" fill="#F3ECD3" />
              <circle cx="140" cy="190" r="4" fill="#F3ECD3" />
              <circle cx="260" cy="190" r="4" fill="#F3ECD3" />
              <circle cx="130" cy="100" r="4" fill="#F3ECD3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Plan ahead
          </p>
          <h2>Book your visit in a few steps</h2>
          <p className="lede" style={{ margin: "0 auto 20px" }}>
            Pick a destination, choose your date, tell us how many are travelling. Jharkhand
            Tourism's booking desk confirms with an itinerary reference you can show on arrival.
          </p>
          <Link className="btn btn-solid" to="/booking">
            Go to booking desk
          </Link>
        </div>
      </section>
    </>
  );
}
