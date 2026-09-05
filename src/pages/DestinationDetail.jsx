import { Link, useParams } from "react-router-dom";
import { CATEGORY_LABEL, getDestination } from "../data/destinations.js";
import { useGeolocation } from "../hooks/useGeolocation.js";
import { haversineKm } from "../utils/geo.js";

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = getDestination(id);
  const { status, coords, error, locate } = useGeolocation();

  if (!destination) {
    return (
      <div className="page-head">
        <div className="wrap">
          <h1>We couldn't find that destination</h1>
          <p style={{ color: "rgba(243,236,211,.75)" }}>
            It may have been moved or the link is off. Try browsing the full list instead.
          </p>
          <Link className="btn btn-solid" to="/destinations" style={{ marginTop: 18 }}>
            Back to destinations
          </Link>
        </div>
      </div>
    );
  }

  const distanceKm = coords
    ? haversineKm(coords.lat, coords.lng, destination.lat, destination.lng)
    : null;

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <p className="crumbs">
            <Link to="/">Home</Link> / <Link to="/destinations">Destinations</Link> /{" "}
            {destination.name}
          </p>
          <span className="badge">{CATEGORY_LABEL[destination.cat]}</span>
          <h1 style={{ marginTop: 10 }}>{destination.name}</h1>
          <p style={{ color: "rgba(243,236,211,.78)", maxWidth: "60ch" }}>{destination.short}</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div className="destination-hero-media">
            <img src={destination.image} alt={destination.name} />
          </div>
          <div>
            <p className="eyebrow">About this place</p>
            <p className="lede">{destination.long}</p>
            <div className="stat-strip">
              <div>
                <b>{destination.best}</b>
                <span>Best time to visit</span>
              </div>
              <div>
                <b>{destination.height}</b>
                <span>Elevation / drop</span>
              </div>
              <div>
                <b>{destination.district}</b>
                <span>District</span>
              </div>
            </div>
            <div className="chip-row" style={{ marginTop: 22 }}>
              {destination.tags.map((t) => (
                <span key={t} className="chip" style={{ cursor: "default" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="motif"></div>

      <section className="section on-forest">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Distance from you</p>
            <h2>How far is it?</h2>
            <p style={{ color: "rgba(243,236,211,.78)" }}>
              Share your location and we'll calculate the straight-line distance from where you
              are to {destination.name}.
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
          {distanceKm != null && (
            <div>
              <div className="form-card" style={{ background: "var(--ink-2)", borderColor: "var(--line-dark)" }}>
                <p className="small-caps" style={{ color: "var(--ochre)" }}>
                  Approximate distance
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3rem",
                    fontWeight: 650,
                    margin: "6px 0",
                    color: "var(--mica)",
                  }}
                >
                  {Math.round(distanceKm).toLocaleString()} km
                </p>
                <p className="helptext" style={{ color: "rgba(243,236,211,.6)" }}>
                  Straight-line distance — actual road travel time will run longer depending on
                  route.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Ready to go?
          </p>
          <h2>Book your visit to {destination.name}</h2>
          <p className="lede" style={{ margin: "0 auto 20px" }}>
            Pick your dates and party size — we'll hold your slot with a booking reference.
          </p>
          <Link className="btn btn-solid" to={`/booking?dest=${destination.id}`}>
            Book this destination
          </Link>
        </div>
      </section>
    </>
  );
}
