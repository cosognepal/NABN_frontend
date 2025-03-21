import "./Events.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useFetch from "../hooks/useFetch.js";

export default function Events() {
  const { loading, error, data } = useFetch("https://fruitful-bird-87f724db7d.strapiapp.com/api/events?populate=*&pagination[pageSize]=250");
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  console.log(data);
  
  // Get the events data from the response
  const events = data?.data || [];
  
  // Create a copy of the events array and reverse it
  const reversedEvents = [...events].reverse();
  
  return (
    <div className="events-page">
      <Header />
      <div className="events-container">
        {reversedEvents.length > 0 ? (
          reversedEvents.map(event => {
            // Use the full URL directly as it already includes the domain in cloud deployment
            const imageUrl = event.image?.url || "placeholder-image.jpg";
              
            return (
              <div key={event.id} className="event-card">
                <img
                  src={imageUrl}
                  alt={event.title || "Event"}
                  className="event-image"
                />
                <div className="event-details">
                  <p className="date">{event.date || "TBA"}</p>
                  <h2 className="event-title">{event.title || "Event Title"}</h2>
                  <p className="event-description">{event.description || "No description available"}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No events found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}