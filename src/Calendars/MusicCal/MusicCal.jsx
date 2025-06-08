import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import MusicEventModal from './MusicEventModal/MusicEventModal';
import MobileMusicCal from './MobileMusicCal/MobileMusicCal';
import ModernMusicCal from './ModernMusicCal/ModernMusicCal';

import '../../App.css';



// Constants
const GOOGLE_API_KEY = 'AIzaSyAMcCW7mJqkNNPoAWNG7VnI3n7pjo-3bcg';
const CALENDAR_EMAIL = 'info@roxyencinitas.com';
const MAX_RESULTS = 2500;

const getOneYearAgo = () => {
  const currentDate = new Date();
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
  return oneYearAgo.toISOString();
};



const createEventObject = (event, convertDate) => {
  if (event.status !== "confirmed") return null;

  const baseEventData = {
    title: event.summary,
    description: event.description,
    allDay: false,
    resource: null,
    location: event.location
  };

  if (event.start.dateTime) {
    const dateStart = convertDate(event.start.dateTime);
    return {
      ...baseEventData,
      start: dateStart,
      end: dateStart
    };
  } 
  
  if (event.start.date) {
    const dateStart = convertDate(event.start.date);
    return {
      ...baseEventData,
      start: dateStart,
      end: dateStart
    };
  }

  console.error('Event has neither dateTime nor date:', event);
  return null;
};

const MusicCal = () => {
  const [calEvents, setCalEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const fetchEvents = useCallback(async () => {
    const convertDate = (date) => moment.utc(date).toDate();
    try {
      setIsLoading(true);
      setError(null);
      
      const timeMin = getOneYearAgo();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_EMAIL}/events?key=${GOOGLE_API_KEY}&maxResults=${MAX_RESULTS}&timeMin=${timeMin}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
      }

      const data = await response.json();
      
      const eventsArray = data.items
        .map(event => createEventObject(event, convertDate))
        .filter(event => event !== null);

      console.log('Fetched events:', eventsArray);
      setCalEvents(eventsArray);
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
    
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [fetchEvents]);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  if (error) {
    return (
      <div className="App calendar">
        <header className="App-header">
          <h2 className="App-title" id="musiccal">Music Calendar</h2>
        </header>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Error loading calendar: {error}</p>
          <button onClick={fetchEvents}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="App calendar">
        <header className="App-header">
          <h2 className="App-title" id="musiccal">Music Calendar</h2>
        </header>
        {isLoading ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            Loading events...
          </div>
        ) : isMobile ? (
          <MobileMusicCal 
            events={calEvents}
            onEventSelect={handleSelectEvent}
          />
        ) : (
          <ModernMusicCal 
            events={calEvents}
            onEventSelect={handleSelectEvent}
            isLoading={false}
          />
        )}
      </div>
      <MusicEventModal 
        event={selectedEvent} 
        open={modalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default MusicCal;