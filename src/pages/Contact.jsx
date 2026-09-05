import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Booking question", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Let us know what you need.";
    setErrors(e);
    if (Object.keys(e).length) return;
    setSent(true);
    setForm({ name: "", email: "", subject: "Booking question", message: "" });
  }

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / Contact
          </p>
          <h1>Get in touch</h1>
          <p style={{ maxWidth: "56ch", color: "rgba(243,236,211,.78)" }}>
            Questions about a booking, a destination, or planning a longer circuit — reach the
            desk directly.
          </p>
        </div>
      </div>

      <section className="section-tight">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <p className="small-caps">Direct contact</p>
            <ul style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 20 }}>
              <li>
                <span style={{ fontWeight: 600, display: "block" }}>Email</span>
                <a
                  href="mailto:jharkhandtourism@gmail.com"
                  style={{ fontSize: "1.1rem", color: "var(--rust)", fontWeight: 600 }}
                >
                  jharkhandtourism@gmail.com
                </a>
              </li>
              <li>
                <span style={{ fontWeight: 600, display: "block" }}>Phone</span>
                <span>+91 651 240 0000 (10 AM – 6 PM IST, Mon–Sat)</span>
              </li>
              <li>
                <span style={{ fontWeight: 600, display: "block" }}>Office</span>
                <span>Jharkhand Tourism Desk, Main Road, Ranchi, Jharkhand 834001, India</span>
              </li>
            </ul>
            <div className="divider"></div>
            <p className="small-caps">Office location</p>
            <iframe
              className="map-embed"
              style={{ marginTop: 14 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Ranchi%2C%20Jharkhand&t=&z=11&ie=UTF8&iwloc=&output=embed"
              title="Map showing Ranchi, Jharkhand"
            ></iframe>
          </div>

          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <p className="small-caps">Send a message</p>
            <h2 style={{ fontSize: "1.4rem", marginTop: 4 }}>We usually reply within a day</h2>

            <div className="field">
              <label htmlFor="cName">Name</label>
              <input id="cName" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} />
              <span className="error-text">{errors.name}</span>
            </div>
            <div className="field">
              <label htmlFor="cEmail">Email</label>
              <input id="cEmail" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              <span className="error-text">{errors.email}</span>
            </div>
            <div className="field">
              <label htmlFor="cSubject">Subject</label>
              <select id="cSubject" value={form.subject} onChange={(e) => update("subject", e.target.value)}>
                <option>Booking question</option>
                <option>Destination information</option>
                <option>Partnership / press</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="cMessage">Message</label>
              <textarea id="cMessage" rows="5" value={form.message} onChange={(e) => update("message", e.target.value)} />
              <span className="error-text">{errors.message}</span>
            </div>
            <button className="btn btn-solid" type="submit" style={{ width: "100%", justifyContent: "center" }}>
              Send message
            </button>
            {sent && (
              <p className="notice" style={{ marginTop: 16 }}>
                Thanks — your message has been queued to <strong>jharkhandtourism@gmail.com</strong>.
                We'll follow up by email.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
