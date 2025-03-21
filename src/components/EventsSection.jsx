import "./EventsSection.css";
import useFetch from "../hooks/useFetch.js";
import { Link } from "react-router-dom";

function EventsSection() {
  const { loading, error, data } = useFetch("https://fruitful-bird-87f724db7d.strapiapp.com/api/events?populate=*&sort=createdAt:desc&pagination[limit]=4");

  // Handle loading and error states
  if (loading) return <div className="events loading">Loading events...</div>;
  if (error) return <div className="events error">Failed to load events</div>;

  // Make sure data exists and has the right structure
  const events = data?.data || [];

  return (
    <div className="events">
      <div className="events--header">
        <h3>EVENTS</h3>
        <p><Link to="/events">VIEW ALL</Link></p>
      </div>
      <div className="events--images">
        {events.length > 0 ? (
          events.map((event) => {
            // Use the full URL directly as it already includes the domain in cloud deployment
            const imageUrl = event.image?.url || "placeholder-image.jpg";
            
            return (
              <div key={event.id} className="event--container">
                <img
                  src={imageUrl}
                  alt={event.title || "Event"}
                  className="events--image"
                />
                <div className="event--overlay">
                  <h4>{event.title || "Event"}</h4>
                  <p>{event.description || ""}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No events to display</p>
        )}
      </div>
    </div>
  );
}

export default EventsSection;