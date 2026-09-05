import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import DestinationCard from "../components/DestinationCard.jsx";
import { CATEGORY_LIST, DESTINATIONS } from "../data/destinations.js";
import { useGeolocation } from "../hooks/useGeolocation.js";
import { haversineKm } from "../utils/geo.js";

export default function Destinations() {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get("cat") || "all";
  const { status, coords, error, locate } = useGeolocation();

  useEffect(() => {
    if (params.get("locate") === "1") locate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const list = useMemo(() => {
    let items = DESTINATIONS.filter((d) => activeCat === "all" || d.cat === activeCat);
    if (coords) {
      items = items
        .map((d) => ({ d, dist: haversineKm(coords.lat, coords.lng, d.lat, d.lng) }))
        .sort((a, b) => a.dist - b.dist);
      return items;
    }
    return items.map((d) => ({ d, dist: null }));
  }, [activeCat, coords]);

  function setCat(cat) {
    const next = new URLSearchParams(params);
    if (cat === "all") next.delete("cat");
    else next.set("cat", cat);
    next.delete("locate");
    setParams(next, { replace: true });
  }

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / Destinations
          </p>
          <h1>All destinations</h1>
          <p style={{ maxWidth: "56ch", color: "rgba(243,236,211,.78)" }}>
            Fourteen places across the plateau, filtered by the kind of day you want. Switch on
            location to see how far each one is from you.
          </p>
        </div>
      </div>

      <section className="section-tight">
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 10,
            }}
          >
            <div className="chip-row">
              {CATEGORY_LIST.map((c) => (
                <button
                  key={c.id}
                  className={`chip${activeCat === c.id ? " active" : ""}`}
                  onClick={() => setCat(c.id)}
                >
                  {c.id !== "all" && `${c.icon} `}
                  {c.label}
                </button>
              ))}
            </div>
            <button className="btn btn-ghost" onClick={locate} disabled={status === "locating"}>
              📍 {status === "locating" ? "Locating…" : "Nearest to me"}
            </button>
          </div>
          {(error || status === "done") && (
            <p className="error-text">
              {error || "Showing distance from your current location."}
            </p>
          )}

          <div className="card-grid">
            {list.map(({ d, dist }, i) => (
              <DestinationCard key={d.id} destination={d} seed={i} distanceKm={dist} />
            ))}
          </div>
          {list.length === 0 && (
            <p className="notice" style={{ marginTop: 24 }}>
              No destinations match this filter yet — try "All".
            </p>
          )}
        </div>
      </section>
    </>
  );
}
