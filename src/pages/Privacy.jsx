export default function Privacy() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / Privacy Policy
          </p>
          <h1>Privacy Policy</h1>
          <p style={{ color: "rgba(243,236,211,.7)" }}>Last updated: September 2026</p>
        </div>
      </div>

      <section className="section-tight">
        <div className="wrap legal" style={{ maxWidth: 760 }}>
          <p>
            Jharkhand Tourism ("we", "us", "our") operates this website as a travel guide and
            booking desk for destinations across Jharkhand. This policy explains what information
            we collect when you use the site, why we collect it, and the choices you have.
          </p>

          <h2>1. Information we collect</h2>
          <ul>
            <li>
              <strong>Booking details</strong> — name, email, phone number, travel date, number
              of travellers and any notes you add when you submit a booking.
            </li>
            <li>
              <strong>Contact form details</strong> — name, email and message content when you
              write to us.
            </li>
            <li>
              <strong>Location data</strong> — only if you choose to tap "Use my location" or
              "Nearest to me". Your device asks your permission first, and coordinates are used
              solely to calculate distance to destinations in your browser. We do not store this
              location.
            </li>
            <li>
              <strong>Basic technical data</strong> — such as browser type and device screen
              size, used only to keep the site working correctly across devices.
            </li>
          </ul>

          <h2>2. How we use this information</h2>
          <ul>
            <li>To process and confirm your booking, and to contact you about it.</li>
            <li>To respond to enquiries sent through the contact form.</li>
            <li>To calculate distance from your location to a destination, entirely within your browser.</li>
            <li>To improve the site's content, layout and reliability.</li>
          </ul>

          <h2>3. What we don't do</h2>
          <ul>
            <li>We do not sell or rent your personal information to third parties.</li>
            <li>
              We do not track your precise location unless you explicitly grant permission for a
              specific lookup, and we do not retain that location afterwards.
            </li>
            <li>We do not use your booking details for marketing without your separate consent.</li>
          </ul>

          <h2>4. Data retention</h2>
          <p>
            Booking and enquiry details are kept only as long as needed to fulfil your request
            and meet any recordkeeping or legal requirements, after which they are deleted or
            anonymised.
          </p>

          <h2>5. Your choices</h2>
          <ul>
            <li>You can decline location access at any time — the rest of the site continues to work normally without it.</li>
            <li>You can ask us to access, correct, or delete personal information we hold about you by emailing us.</li>
            <li>You can opt out of any future email communication at any time.</li>
          </ul>

          <h2>6. Cookies</h2>
          <p>
            This site uses only the minimum technical storage needed to remember your interface
            preferences (such as menu state) during a visit. We do not use third-party
            advertising or tracking cookies.
          </p>

          <h2>7. Children's privacy</h2>
          <p>
            Jharkhand Tourism is intended for general audiences planning travel and is not directed
            at children. We do not knowingly collect personal information from children.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We may update this policy as the site evolves. Material changes will be reflected by
            updating the "Last updated" date above.
          </p>

          <h2>9. Contact us</h2>
          <p>
            For any privacy question or request, email{" "}
            <a href="mailto:jharkhandtourism@gmail.com" style={{ color: "var(--rust)", fontWeight: 600 }}>
              jharkhandtourism@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
