import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-head" style={{ minHeight: "60vh" }}>
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This trail doesn't exist</h1>
        <p style={{ color: "rgba(243,236,211,.75)", maxWidth: "50ch" }}>
          The page you're looking for isn't here. It may have moved, or the link might be off.
        </p>
        <Link className="btn btn-solid" to="/" style={{ marginTop: 18 }}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
