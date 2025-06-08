import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  modernCalendar: {
    '& .fc': {
      backgroundColor: '#FFFEFB',
      border: 'none',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(107, 91, 115, 0.08)',
      overflow: 'hidden',
      margin: '20px',
      fontFamily: '"Lato", sans-serif !important'
    },
    '& .fc-toolbar': {
      backgroundColor: '#FAF8F5',
      borderBottom: '2px solid #F0E8DA',
      padding: '20px',
      marginBottom: '0 !important'
    },
    '& .fc-toolbar-title': {
      fontSize: '1.5rem !important',
      fontWeight: 'bold !important',
      color: '#6B5B73 !important'
    },
    '& .fc-button': {
      backgroundColor: '#FAF8F5 !important',
      border: '1px solid #D4C5B9 !important',
      color: '#6B5B73 !important',
      borderRadius: '8px !important',
      padding: '8px 16px !important',
      fontWeight: '500 !important',
      transition: 'all 0.2s ease !important',
      '&:hover': {
        backgroundColor: '#F5F0E8 !important',
        borderColor: '#8B6F47 !important',
        color: '#8B6F47 !important'
      },
      '&:focus': {
        boxShadow: 'none !important'
      },
      '&:disabled': {
        backgroundColor: '#F0E8DA !important',
        color: '#A8B5A0 !important'
      }
    },
    '& .fc-button-primary:not(:disabled).fc-button-active': {
      backgroundColor: '#9CAF88 !important',
      borderColor: '#9CAF88 !important',
      color: '#fff !important'
    },
    '& .fc-daygrid': {
      backgroundColor: '#FFFEFB'
    },
    '& .fc-col-header': {
      backgroundColor: '#FAF8F5',
      borderBottom: '1px solid #E8DDD4'
    },
    '& .fc-col-header-cell': {
      padding: '12px 8px !important',
      borderRight: '1px solid #F0E8DA !important',
      '&:last-child': {
        borderRight: 'none !important'
      }
    },
    '& .fc-col-header-cell-cushion': {
      color: '#8B6F47 !important',
      fontWeight: '600 !important',
      fontSize: '0.9rem !important',
      textTransform: 'uppercase !important',
      letterSpacing: '0.5px !important'
    },
    '& .fc-daygrid-day': {
      borderRight: '1px solid #F0E8DA !important',
      borderBottom: '1px solid #F0E8DA !important',
      '&:last-child': {
        borderRight: 'none !important'
      }
    },
    '& .fc-daygrid-day-number': {
      color: '#6B5B73 !important',
      fontSize: '0.9rem !important',
      fontWeight: '500 !important',
      padding: '8px !important'
    },
    '& .fc-day-today': {
      backgroundColor: 'rgba(212, 165, 116, 0.08) !important',
      '& .fc-daygrid-day-number': {
        backgroundColor: '#D4A574 !important',
        color: '#fff !important',
        borderRadius: '6px !important',
        width: '28px !important',
        height: '28px !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important'
      }
    },
    '& .fc-event': {
      backgroundColor: '#FBF9F6 !important',
      border: '1px solid #E8DDD4 !important',
      borderRadius: '4px !important',
      color: '#6B5B73 !important',
      fontSize: '0.85rem !important',
      fontWeight: '500 !important',
      cursor: 'pointer !important',
      transition: 'all 0.2s ease !important',
      margin: '1px !important',
      '&:hover': {
        backgroundColor: '#fff !important',
        borderColor: '#9CAF88 !important',
        transform: 'translateY(-1px) !important',
        boxShadow: '0 2px 8px rgba(156, 175, 136, 0.15) !important'
      }
    },
    '& .fc-event-title': {
      fontWeight: '600 !important'
    },
    '& .fc-more-link': {
      color: '#9CAF88 !important',
      fontSize: '0.8rem !important',
      fontWeight: '600 !important',
      '&:hover': {
        color: '#8B6F47 !important'
      }
    },
    '& .fc-daygrid-day-frame': {
      minHeight: '100px !important',
      padding: '4px !important'
    },
    '& .fc-scrollgrid': {
      border: 'none !important'
    },
    '& .fc-scrollgrid-section > *': {
      border: 'none !important'
    }
  }
}));

const ModernMusicCal = ({ events, onEventSelect, isLoading }) => {
  const classes = useStyles();

  const formatEventsForFullCalendar = (events) => {
    return events.map(event => ({
      id: event.id || Math.random().toString(36).substr(2, 9),
      title: event.title,
      start: event.start,
      end: event.end || event.start,
      description: event.description,
      location: event.location,
      allDay: false,
      backgroundColor: '#FBF9F6',
      borderColor: '#E8DDD4',
      textColor: '#6B5B73'
    }));
  };

  const handleEventClick = (info) => {
    const originalEvent = events.find(event => 
      event.title === info.event.title && 
      moment(event.start).isSame(moment(info.event.start))
    );
    
    if (originalEvent && onEventSelect) {
      onEventSelect(originalEvent);
    }
  };

  const formattedEvents = formatEventsForFullCalendar(events);

  if (isLoading) {
    return (
      <div className={classes.modernCalendar}>
        <div style={{ 
          padding: '60px 20px', 
          textAlign: 'center',
          backgroundColor: '#FFFEFB',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(107, 91, 115, 0.08)',
          margin: '20px',
          color: '#8B6F47'
        }}>
          Loading events...
        </div>
      </div>
    );
  }

  return (
    <div className={classes.modernCalendar}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        events={formattedEvents}
        eventClick={handleEventClick}
        height="auto"
        dayMaxEventRows={3}
        moreLinkClick="popover"
        eventDisplay="block"
        fixedWeekCount={false}
        showNonCurrentDates={false}
        aspectRatio={1.35}
        firstDay={0}
        eventTextColor="#6B5B73"
        eventBackgroundColor="#FBF9F6"
        eventBorderColor="#E8DDD4"
        buttonText={{
          today: 'Today',
          month: 'Month'
        }}
      />
    </div>
  );
};

export default ModernMusicCal; 