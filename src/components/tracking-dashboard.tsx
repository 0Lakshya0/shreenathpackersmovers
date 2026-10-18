import { Clock3, MapPin, Navigation, Truck } from "lucide-react";

const sampleEvents = [
  {
    title: "Packed & loaded",
    location: "Dewas Naka, Indore",
    time: "08:10 AM",
    state: "complete",
  },
  {
    title: "Departed Indore hub",
    location: "Vehicle assigned to the Mumbai route",
    time: "09:05 AM",
    state: "complete",
  },
  {
    title: "In transit",
    location: "Sample position · Dhule corridor",
    time: "02:40 PM",
    state: "active",
  },
  {
    title: "Out for delivery",
    location: "Mumbai · sample delivery window",
    time: "Tomorrow · 10:30 AM",
    state: "upcoming",
  },
] as const;

export function TrackingDashboard() {
  return (
    <div className="tracking-dashboard">
      <section className="tracking-route-card" aria-label="Sample route from Indore to Mumbai">
        <div className="tracking-route-card__header">
          <div>
            <span className="tracking-kicker">SAMPLE SHIPMENT · NOT LIVE DATA</span>
            <p className="tracking-reference">SN-DEMO-0417</p>
          </div>
          <span className="tracking-live-pill">
            <i aria-hidden="true" /> Demo in transit
          </span>
        </div>

        <div className="tracking-map" aria-hidden="true">
          <div className="tracking-map__grid" />
          <svg className="tracking-map__route" viewBox="0 0 720 220" preserveAspectRatio="none">
            <path
              className="tracking-map__route-base"
              d="M70 160 C190 155 220 65 340 100 S500 160 650 55"
            />
            <path
              className="tracking-map__route-progress"
              d="M70 160 C190 155 220 65 340 100 S445 140 505 129"
            />
          </svg>
          <span className="tracking-map__origin">
            <MapPin size={18} strokeWidth={2.2} />
          </span>
          <span className="tracking-map__destination">
            <MapPin size={18} strokeWidth={2.2} />
          </span>
          <span className="tracking-map__truck">
            <Truck size={19} strokeWidth={1.9} />
          </span>
          <span className="tracking-map__compass">
            <Navigation size={18} />
          </span>
        </div>

        <div className="tracking-route-labels">
          <div>
            <span>ORIGIN</span>
            <strong>Dewas Naka, Indore</strong>
          </div>
          <span className="tracking-route-labels__line" aria-hidden="true" />
          <div className="tracking-route-labels__destination">
            <span>DESTINATION</span>
            <strong>Mumbai, Maharashtra</strong>
          </div>
        </div>

        <div className="tracking-eta-card">
          <span className="tracking-eta-card__icon">
            <Clock3 size={19} aria-hidden="true" />
          </span>
          <span>
            <small>ILLUSTRATIVE ETA</small>
            <strong>Tomorrow · 10:30 AM</strong>
          </span>
          <span className="tracking-eta-card__note">Sample estimate</span>
        </div>
      </section>

      <section className="tracking-events" aria-label="Sample shipment status history">
        <div className="tracking-events__heading">
          <div>
            <span className="tracking-kicker">ROUTE ACTIVITY</span>
            <h3>Journey updates</h3>
          </div>
          <span className="tracking-events__clock">Times shown are illustrative</span>
        </div>

        <ol className="tracking-timeline">
          {sampleEvents.map((event) => (
            <li className={`tracking-event tracking-event--${event.state}`} key={event.title}>
              <span className="tracking-event__marker" aria-hidden="true">
                {event.state === "complete" ? <span /> : null}
                {event.state === "active" ? <i /> : null}
              </span>
              <div className="tracking-event__copy">
                <div className="tracking-event__line">
                  <strong>{event.title}</strong>
                  <time>{event.time}</time>
                </div>
                <p>{event.location}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="tracking-disclaimer">
          This is a visual demo only. For updates on a real move, call or message the team with your
          booking details.
        </p>
      </section>
    </div>
  );
}
