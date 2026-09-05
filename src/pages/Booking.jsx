import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DESTINATIONS } from "../data/destinations.js";
import { makeBookingId } from "../utils/booking.js";

const todayISO = () => new Date().toISOString().split("T")[0];

export default function Booking() {
  const [params] = useSearchParams();
  const presetDest = params.get("dest") || "";

  const [form, setForm] = useState({
    dest: presetDest,
    date: "",
    travelers: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  const minDate = useMemo(() => todayISO(), []);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const e = {};
    if (!form.dest) e.dest = "Please choose a destination.";
    if (!form.date) e.date = "Please pick a travel date.";
    else if (form.date < minDate) e.date = "Date can't be in the past.";
    if (!form.travelers || form.travelers < 1) e.travelers = "Enter at least 1 traveller.";
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!/^[\d\s\-+]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    const dest = DESTINATIONS.find((d) => d.id === form.dest);
    const id = makeBookingId();
    setConfirmed({ id, dest: dest.name, ...form });
    setForm((f) => ({ ...f, date: "", name: "", email: "", phone: "", notes: "" }));
  }

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / Book a Trip
          </p>
          <h1>Booking desk</h1>
          <p style={{ maxWidth: "56ch", color: "rgba(243,236,211,.78)" }}>
            Tell us where and when — we'll hold your slot and send a booking reference. This is a
            demo booking flow; no payment is collected here.
          </p>
        </div>
      </div>

      <section className="section-tight">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <p className="small-caps">Trip details</p>
            <h2 style={{ fontSize: "1.5rem", marginTop: 4 }}>Reserve your visit</h2>

            <div className="field">
              <label htmlFor="dest">Destination</label>
              <select id="dest" value={form.dest} onChange={(e) => update("dest", e.target.value)}>
                <option value="">Choose a destination…</option>
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} — {d.district}
                  </option>
                ))}
              </select>
              <span className="error-text">{errors.dest}</span>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="date">Travel date</label>
                <input
                  id="date"
                  type="date"
                  min={minDate}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
                <span className="error-text">{errors.date}</span>
              </div>
              <div className="field">
                <label htmlFor="travelers">Number of travellers</label>
                <input
                  id="travelers"
                  type="number"
                  min="1"
                  max="30"
                  value={form.travelers}
                  onChange={(e) => update("travelers", Number(e.target.value))}
                />
                <span className="error-text">{errors.travelers}</span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                placeholder="As on your ID"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
              <span className="error-text">{errors.name}</span>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                <span className="error-text">{errors.email}</span>
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
                <span className="error-text">{errors.phone}</span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="notes">
                Special requests{" "}
                <span style={{ fontWeight: 400, color: "rgba(23,28,22,.55)" }}>(optional)</span>
              </label>
              <textarea
                id="notes"
                rows="3"
                placeholder="Dietary needs, accessibility, guide language, etc."
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </div>

            <button className="btn btn-solid" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
              Confirm booking
            </button>
            <p className="helptext" style={{ marginTop: 12 }}>
              By booking you agree to our <a href="/terms" style={{ textDecoration: "underline" }}>Terms of Use</a> and{" "}
              <a href="/privacy" style={{ textDecoration: "underline" }}>Privacy Policy</a>.
            </p>
          </form>

          <div>
            {!confirmed && (
              <div className="notice" style={{ marginBottom: 20 }}>
                <p className="small-caps" style={{ marginBottom: 6 }}>Before you book</p>
                <p style={{ margin: 0, fontSize: ".9rem" }}>
                  Bookings are confirmed instantly with a reference code. Bring a printed or
                  saved copy of your confirmation when you arrive.
                </p>
              </div>
            )}

            {confirmed && (
              <div className="form-card" style={{ borderColor: "var(--forest)", background: "var(--mica)" }}>
                <span className="badge">Booking confirmed</span>
                <h2 style={{ fontSize: "1.6rem", margin: "14px 0 4px" }}>
                  Reference {confirmed.id}
                </h2>
                <p className="helptext" style={{ marginBottom: 18 }}>
                  A confirmation would normally be emailed to you — save this reference for your
                  records.
                </p>
                <div className="divider"></div>
                <dl style={{ margin: 0, fontSize: ".92rem", display: "grid", gridTemplateColumns: "auto 1fr", rowGap: 10, columnGap: 16 }}>
                  <dt style={{ fontWeight: 600 }}>Destination</dt>
                  <dd>{confirmed.dest}</dd>
                  <dt style={{ fontWeight: 600 }}>Date</dt>
                  <dd>
                    {new Date(confirmed.date + "T00:00").toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </dd>
                  <dt style={{ fontWeight: 600 }}>Travellers</dt>
                  <dd>{confirmed.travelers}</dd>
                  <dt style={{ fontWeight: 600 }}>Name</dt>
                  <dd>{confirmed.name}</dd>
                  <dt style={{ fontWeight: 600 }}>Contact</dt>
                  <dd>
                    {confirmed.email} · {confirmed.phone}
                  </dd>
                </dl>
                <div className="divider"></div>
                <a className="btn btn-ghost" href="/destinations">
                  Book another destination
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
