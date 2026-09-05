import { useCallback, useState } from "react";

// Wraps the browser geolocation API in React state: status is one of
// "idle" | "locating" | "done" | "error".
export function useGeolocation() {
  const [status, setStatus] = useState("idle");
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState("");

  const locate = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setStatus("error");
      setError("Geolocation isn't available in this browser.");
      return;
    }
    setStatus("locating");
    setError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setStatus("done");
      },
      (err) => {
        setStatus("error");
        setError(
          err.code === 1
            ? "Location permission was denied."
            : "Couldn't get your location right now."
        );
      },
      { enableHighAccuracy: false, timeout: 8000 }
    );
  }, []);

  return { status, coords, error, locate };
}
