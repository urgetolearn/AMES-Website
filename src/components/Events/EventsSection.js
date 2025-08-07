import React, { useRef, useState } from "react";
import eventsData from "../../data/eventsData.js";
import "./EventsSection.css";

const EventsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("down"); 

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection("up");
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < eventsData.length - 1) {
      setDirection("down");
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="events-section-vertical-animated">
      <div className="events-content-vertical-animated">
        {eventsData.map((event, idx) => (
          <div
            key={event.title}
            className={`event-content-animated ${
              idx === activeIndex
                ? direction === "down"
                  ? "slide-in-down"
                  : "slide-in-up"
                : "hidden"
            }`}
          >
            <div className="calendar-label">CALENDAR</div>
            <div style={{ height: '3px', width: '50px', background: '#f7842b', margin: '8px 0 16px 0', borderRadius: '2px' }} />
            <h1 className="events-title">Our Events</h1>
            <div className="event-title">{event.title}</div>
            {event.details && (
              <div className="event-details">{event.details}</div>
            )}
            <button className="know-more">Know More</button>
          </div>
        ))}
      </div>

      
      <div className="event-controls-vertical">
        <span
          className={`event-symbol-vertical${activeIndex === 0 ? " disabled" : ""}`}
          onClick={handlePrev}
          tabIndex={0}
          role="button"
          aria-label="Previous"
        >
          –
        </span>
        <span
          className={`event-symbol-vertical${activeIndex === eventsData.length - 1 ? " disabled" : ""}`}
          onClick={handleNext}
          tabIndex={0}
          role="button"
          aria-label="Next"
        >
          +
        </span>
      </div>

     
      <div className="events-image-vertical-animated">
        {eventsData.map((event, idx) => (
          <img
            key={event.title}
            src={event.image || "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"}
            alt={event.title}
            className={`events-image-animated ${
              idx === activeIndex
                ? direction === "down"
                  ? "slide-in-down"
                  : "slide-in-up"
                : "hidden"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;