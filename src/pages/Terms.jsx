export default function Terms() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / Terms of Use
          </p>
          <h1>Terms of Use</h1>
          <p style={{ color: "rgba(243,236,211,.7)" }}>Last updated: September 2026</p>
        </div>
      </div>

      <section className="section-tight">
        <div className="wrap legal" style={{ maxWidth: 760 }}>
          <p>
            These Terms of Use govern your access to and use of the Jharkhand Tourism website,
            including browsing destination information and submitting a booking or enquiry. By
            using this site, you agree to these terms.
          </p>

          <h2>1. Using this site</h2>
          <p>
            Jharkhand Tourism provides destination information, distance estimates, and a booking
            desk for travel across Jharkhand. Content is provided for general trip-planning
            purposes and should be verified locally where safety, road conditions, or seasonal
            closures are concerned.
          </p>

          <h2>2. Bookings</h2>
          <ul>
            <li>Submitting the booking form is a request to reserve a visit; a booking reference confirms receipt of that request.</li>
            <li>You're responsible for providing accurate travel dates, party size and contact details.</li>
            <li>Cancellations or changes should be made by emailing us with your booking reference, with as much notice as possible.</li>
            <li>Some destinations (national parks, sanctuaries, temple complexes) may apply their own entry fees, permits or timing restrictions independent of this site.</li>
          </ul>

          <h2>3. Accuracy of information</h2>
          <p>
            We aim to keep destination details, best-time-to-visit guidance and distances
            accurate and current, but conditions such as weather, water levels at waterfalls, and
            park closures change without notice. Distance figures shown are approximate
            straight-line calculations, not road-route distances or travel times.
          </p>

          <h2>4. Your responsibilities</h2>
          <ul>
            <li>Use the site for lawful, personal trip-planning purposes.</li>
            <li>Do not attempt to disrupt, scrape at scale, or interfere with the site's normal operation.</li>
            <li>Follow local safety guidance at natural sites, especially waterfalls and forest reserves, which can be hazardous outside marked areas.</li>
          </ul>

          <h2>5. Location access</h2>
          <p>
            The "nearest to me" feature only functions if you grant your browser permission to
            share your location. This is entirely optional and calculated locally in your
            browser.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            The text, design, illustrations and code on this site belong to Jharkhand Tourism
            unless otherwise credited, and may not be reproduced commercially without permission.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            Jharkhand Tourism is a planning and booking aid, not a substitute for on-the-ground
            guidance from local authorities, forest departments, or licensed tour operators. We
            are not liable for losses arising from travel decisions, closures, weather, or
            conditions at any destination listed on this site.
          </p>

          <h2>8. Changes to these terms</h2>
          <p>
            We may revise these terms from time to time. Continued use of the site after changes
            are posted constitutes acceptance of the updated terms.
          </p>

          <h2>9. Contact us</h2>
          <p>
            Questions about these terms can be sent to{" "}
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
