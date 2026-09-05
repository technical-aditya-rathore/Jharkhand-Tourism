const PALETTES = {
  waterfall: ["#223327", "#35513A", "#7C8B5B", "#F3ECD3"],
  hills: ["#2A2A3A", "#42506B", "#8593A8", "#F3ECD3"],
  pilgrimage: ["#3B241A", "#7C2E13", "#C4881F", "#F3ECD3"],
  wildlife: ["#242A1B", "#4B5A2E", "#8C7A32", "#F3ECD3"],
  city: ["#1E2430", "#3A4358", "#B4762E", "#F3ECD3"],
};

// A small deterministic art system: category sets the palette and the
// foreground motif (falls / temple / animals / skyline), a seed nudges
// the ridge silhouettes so cards don't look identical side by side.
export default function DestinationIllustration({ destination, seed = 0 }) {
  const [c1, c2, c3, c4] = PALETTES[destination.cat] || PALETTES.hills;
  const s = seed % 5;
  const hills = `M0,${140 + s * 4} C60,${100 + s * 6} 120,${150 - s * 3} 180,${
    115 + s * 5
  } C240,${90 - s * 4} 300,${140 + s} 360,${110 + s * 3} L360,220 L0,220 Z`;
  const hills2 = `M0,${170 + s * 3} C80,${140 + s * 5} 160,${185 - s * 4} 240,${
    150 + s * 2
  } C300,${130 - s * 3} 330,165 360,150 L360,220 L0,220 Z`;

  const motif = Array.from({ length: 9 }, (_, i) => (
    <polygon
      key={i}
      points={`${i * 40 + 10},198 ${i * 40 + 20},188 ${i * 40 + 30},198`}
      fill={c3}
      opacity="0.55"
    />
  ));

  let extra = null;
  if (destination.cat === "waterfall") {
    extra = (
      <>
        <rect x="165" y="20" width="10" height="150" fill={c4} opacity="0.75" />
        <rect x="172" y="20" width="4" height="150" fill={c4} opacity="0.4" />
      </>
    );
  } else if (destination.cat === "pilgrimage") {
    extra = (
      <>
        <polygon points="180,55 195,140 165,140" fill={c4} opacity="0.85" />
        <rect x="176" y="35" width="8" height="16" fill={c4} />
      </>
    );
  } else if (destination.cat === "wildlife") {
    extra = (
      <>
        <ellipse cx="120" cy="150" rx="26" ry="14" fill={c4} opacity="0.8" />
        <ellipse cx="250" cy="160" rx="18" ry="10" fill={c4} opacity="0.6" />
      </>
    );
  } else if (destination.cat === "city") {
    extra = (
      <>
        <rect x="140" y="80" width="18" height="90" fill={c4} opacity="0.7" />
        <rect x="165" y="55" width="18" height="115" fill={c4} opacity="0.85" />
        <rect x="190" y="95" width="18" height="75" fill={c4} opacity="0.65" />
      </>
    );
  } else {
    extra = <circle cx="290" cy="45" r="20" fill={c4} opacity="0.55" />;
  }

  return (
    <svg viewBox="0 0 360 220" role="img" aria-label={`${destination.name} illustration`}>
      <rect width="360" height="220" fill={c1} />
      {extra}
      <path d={hills2} fill={c2} />
      <path d={hills} fill={c3} opacity="0.9" />
      <g>{motif}</g>
    </svg>
  );
}
