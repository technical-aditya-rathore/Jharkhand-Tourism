#  Jharkhand Tourism 




## Project structure

```
src/
  main.jsx                 entry point (BrowserRouter + global CSS)
  App.jsx                  route table
  components/
    Layout.jsx              nav + footer shell, scroll-to-top on navigation
    Navbar.jsx               responsive nav with mobile toggle
    Footer.jsx                site footer (legal links, contact, credit line)
    DestinationCard.jsx       reusable destination summary card
    DestinationIllustration.jsx  original SVG art per destination category
  pages/
    Home.jsx, Destinations.jsx, DestinationDetail.jsx,
    Booking.jsx, Contact.jsx, Privacy.jsx, Terms.jsx, NotFound.jsx
  data/
    destinations.js          14 real Jharkhand destinations (name, district,
                              coordinates, description, best time, tags)
  hooks/
    useGeolocation.js         wraps navigator.geolocation in React state
  utils/
    geo.js                    haversine distance calculation
    booking.js                booking reference ID generator
  styles/
    global.css                design tokens, layout, components
```

## Features

- **Destination catalogue** — 14 destinations across waterfalls, hill stations,
  wildlife reserves, pilgrimage sites and cities, filterable by category
- **Geolocation** — "Nearest to me" sorts destinations by straight-line distance
  from the visitor's current location (with graceful fallback if permission is
  denied or unsupported)
- **Booking system** — validated form (destination, date, party size, contact
  details) that generates a booking reference on submit
- **Contact page** — direct email/phone/office details, embedded map, validated
  enquiry form
- **Legal pages** — Privacy Policy and Terms of Use
- **Responsive design** — mobile nav toggle, fluid type scale, stacking grids
  down to small phone widths
- **Accessibility basics** — skip-to-content link, visible focus states,
  `prefers-reduced-motion` respected, semantic headings

## Design notes

The visual language draws on Sohrai/Khovar tribal mural pigments (ochre, iron
rust, indigo-charcoal, chalk) and Chota Nagpur plateau silhouettes, rather than a
generic template look. Destination artwork is generated as original geometric SVG
(no stock photography), parameterised by category so waterfalls, hills, wildlife,
pilgrimage and city destinations each get a distinct scene.

## Extending this project

This is a frontend-only demo. To take it further for submission or real use:

- Add a backend (Node/Express, or a BaaS like Supabase/Firebase) with a
  `POST /bookings` and `POST /contact` endpoint, and swap the `handleSubmit`
  functions in `Booking.jsx` / `Contact.jsx` to call it
- Persist bookings in a database instead of local component state
- Send real confirmation emails (e.g. via Nodemailer or an email API) to
  `jharkhandtourism@gmail.com` and the visitor
- Replace the static Google Maps embed with the Maps JavaScript API for
  interactive pins per destination
- Add authentication if you want a "my bookings" account area

## Credit

© 2026 Made by Aditya. Designed & developed by Adi.
