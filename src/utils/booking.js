export function makeBookingId() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.floor(Math.random() * 90 + 10);
  return `VNC-${stamp}${rand}`;
}
