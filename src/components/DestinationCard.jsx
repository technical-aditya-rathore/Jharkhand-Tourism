import { Link } from "react-router-dom";
import { CATEGORY_LABEL } from "../data/destinations.js";

export default function DestinationCard({ destination, distanceKm }) {
  return (
    <article className="d-card">
      <div className="thumb">
        <img src={destination.image} alt={destination.name} loading="lazy" />
      </div>
      {distanceKm != null && <span className="corner">~{Math.round(distanceKm)} km away</span>}
      <div className="body">
        <span className="tag">{CATEGORY_LABEL[destination.cat]}</span>
        <h3>{destination.name}</h3>
        <span className="loc">
          {destination.district} district · Best: {destination.best}
        </span>
        <p>{destination.short}</p>
        <div className="foot">
          <Link className="card-link" to={`/destinations/${destination.id}`}>
            View details →
          </Link>
        </div>
      </div>
    </article>
  );
}
