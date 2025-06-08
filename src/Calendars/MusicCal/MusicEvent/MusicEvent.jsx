import React from 'react';
import moment from 'moment';

const formatEventTime = (timeString) => {
  const formattedTime = moment(timeString).format("h:mm A");
  return formattedTime;
};

const MusicEvent = ({ event, onClose }) => {
  console.log('Event details:', event);
  
  const eventTime = formatEventTime(event.start);
  const eventDate = moment(event.start).format("MMM DD, YYYY");

  return (
    <div className="flexContainer">
      <div className="musicEventDiv">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h1>{event.title}</h1>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '5px 10px',
              borderRadius: '4px'
            }}
            aria-label="Close event details"
          >
            ×
          </button>
        </div>
        <h2>{eventDate}</h2>
        <h2>{eventTime}</h2>
        {event.description && <p>{event.description}</p>}
        {event.location && (
          <a 
            href={event.location} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Get Tickets Here!
          </a>
        )}
      </div>
    </div>
  );
};

export default MusicEvent;