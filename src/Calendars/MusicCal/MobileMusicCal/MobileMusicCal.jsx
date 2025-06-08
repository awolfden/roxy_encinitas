import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  mobileCalendar: {
    padding: '20px',
    backgroundColor: '#FFFEFB',
    borderRadius: '12px',
    margin: '20px',
    color: '#4A4A4A',
    boxShadow: '0 4px 20px rgba(107, 91, 115, 0.08)',
    border: '1px solid #E8DDD4'
  },
  dateHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px 0',
    borderBottom: '2px solid #F0E8DA'
  },
  dateTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#6B5B73'
  },
  navButton: {
    color: '#6B5B73',
    border: '1px solid #D4C5B9',
    minWidth: '40px',
    height: '40px',
    backgroundColor: '#FAF8F5',
    '&:hover': {
      backgroundColor: '#F5F0E8',
      borderColor: '#8B6F47',
      color: '#8B6F47'
    }
  },
  eventsContainer: {
    minHeight: '200px'
  },
  eventItem: {
    backgroundColor: '#FBF9F6',
    border: '1px solid #E8DDD4',
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#9CAF88',
      boxShadow: '0 2px 8px rgba(156, 175, 136, 0.15)',
      transform: 'translateY(-1px)'
    }
  },
  eventTime: {
    fontSize: '0.9rem',
    color: '#8B6F47',
    marginBottom: '5px',
    fontWeight: '500'
  },
  eventTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#6B5B73'
  },
  noEvents: {
    textAlign: 'center',
    color: '#A8B5A0',
    fontSize: '1rem',
    padding: '40px 20px',
    fontStyle: 'italic'
  }
}));

const MobileMusicCal = ({ events, onEventSelect }) => {
  const classes = useStyles();
  const [currentDate, setCurrentDate] = useState(moment());

  const formatEventTime = (timeString) => {
    return moment(timeString).format("h:mm A");
  };

  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = moment(event.start);
      return eventDate.format('YYYY-MM-DD') === date.format('YYYY-MM-DD');
    });
  };

  const goToPreviousDay = () => {
    setCurrentDate(prev => moment(prev).subtract(1, 'day'));
  };

  const goToNextDay = () => {
    setCurrentDate(prev => moment(prev).add(1, 'day'));
  };

  const currentDayEvents = getEventsForDate(currentDate);
  const isToday = currentDate.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD');
  
  const dateDisplayText = isToday 
    ? `Today - ${currentDate.format('MMM DD, YYYY')}`
    : currentDate.format('dddd - MMM DD, YYYY');

  return (
    <div className={classes.mobileCalendar}>
      <div className={classes.dateHeader}>
        <Button 
          onClick={goToPreviousDay}
          className={classes.navButton}
          aria-label="Previous day"
        >
          <ArrowBackIcon />
        </Button>
        
        <div className={classes.dateTitle}>
          {dateDisplayText}
        </div>
        
        <Button 
          onClick={goToNextDay}
          className={classes.navButton}  
          aria-label="Next day"
        >
          <ArrowForwardIcon />
        </Button>
      </div>

      <div className={classes.eventsContainer}>
        {currentDayEvents.length === 0 ? (
          <div className={classes.noEvents}>
            No events scheduled for this day
          </div>
        ) : (
          currentDayEvents.map((event, index) => (
            <div 
              key={index}
              className={classes.eventItem}
              onClick={() => onEventSelect(event)}
            >
              <div className={classes.eventTime}>
                {formatEventTime(event.start)}
              </div>
              <div className={classes.eventTitle}>
                {event.title}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MobileMusicCal; 