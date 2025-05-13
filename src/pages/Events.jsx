import "./Events.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useFetch from "../hooks/useFetch.js";
import { useState, useEffect } from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

export default function Events() {
  const { loading, error, data } = useFetch(
    "https://charming-trust-6afb776746.strapiapp.com/api/events?populate=*&pagination[pageSize]=250"
  );

  //pagination changes
  const [pageNumber, setPageNumber] = useState(0);
  const [shownEvents, setShownEvents] = useState([]);
  const [numberOfPages, setNumberofPages] = useState();
  const [prevButtonActive, setPrevButtonActive] = useState(false);
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const batchSize = 20;

  useEffect(() => {
    if (!error) {
      // Get the events data from the response
      const events = data?.data || [];

      const firstEvent = pageNumber * batchSize;
      const lastEvent = Math.min(events.length, (pageNumber + 1) * batchSize);

      // Sort events by date (newest first)
      const sortedEvents = [...events].sort((a, b) => {
        // Convert strings to Date objects for comparison
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        // Sort in descending order (newest first)
        return dateB - dateA;
      });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
      setTimeout(() => {
        setNextButtonActive(false);
        setPrevButtonActive(false);
      }, 200);

      setNumberofPages(Math.ceil(events.length / batchSize));
      setShownEvents(sortedEvents.slice(firstEvent, lastEvent));
    }
  }, [pageNumber, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handlePageSelect = (event) => {
    const selected = parseInt(event.target.textContent);
    if (!isNaN(selected)) {
      setPageNumber(selected - 1);
    }
  };

  const handlePrev = () => {
    if (pageNumber !== 0) {
      setPageNumber(pageNumber - 1);
      setPrevButtonActive(true);
    }
  };

  const handleNext = () => {
    if (pageNumber !== numberOfPages - 1) {
      setPageNumber(pageNumber + 1);
      setNextButtonActive(true);
    }
  };

  return (
    <div className="events-page">
      <Header />
      <div className="events-container">
        {shownEvents.length > 0 ? (
          shownEvents.map((event) => {
            // Use the full URL directly from the API
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
                  <h2 className="event-title">
                    {event.title || "Event Title"}
                  </h2>
                  <p className="event-description">
                    {event.description || "No description available"}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No events found</p>
        )}
      </div>
      <div className="pagination-pages">
        <button
          onClick={handlePrev}
          className={
            pageNumber === 0
              ? "pagination-buttons-disabled"
              : prevButtonActive
              ? "pagination-buttons-active"
              : "pagination-buttons"
          }
        >
          <GrFormPreviousLink className="icon" />
          Prev
        </button>
        {pageNumber>=3?<button className="pagination-page" onClick={handlePageSelect}>1</button>:null}
        {pageNumber > 3 ? <div>...</div> : null}
        {pageNumber + 1 >= 3 ? (
          <button className="pagination-page" onClick={handlePageSelect}>{pageNumber - 1}</button>
        ) : null}
        {pageNumber + 1 >= 2 ? (
          <button className="pagination-page" onClick={handlePageSelect}>{pageNumber}</button>
        ) : null}
        <button className="pagination-page-current">{pageNumber + 1} </button>
        {pageNumber + 2 <= numberOfPages ? (
          <button className="pagination-page" onClick={handlePageSelect}>{pageNumber + 2}</button>
        ) : null}
        {pageNumber + 3 <= numberOfPages ? (
          <button className="pagination-page" onClick={handlePageSelect}>{pageNumber + 3}</button>
        ) : null}
        {pageNumber + 4 < numberOfPages ? <div>...</div> : null}
        {pageNumber + 3 < numberOfPages ? (
          <button className="pagination-page" onClick={handlePageSelect}>{numberOfPages}</button>
        ) : null}
        <button
          onClick={handleNext}
          className={
            pageNumber === numberOfPages - 1
              ? "pagination-buttons-disabled"
              : nextButtonActive
              ? "pagination-buttons-active"
              : "pagination-buttons"
          }
        >
          Next <GrFormNextLink className="icon" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
