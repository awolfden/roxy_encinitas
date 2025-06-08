import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#FFFEFB',
    border: '1px solid #E8DDD4',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(107, 91, 115, 0.15)',
    padding: theme.spacing(3, 4, 4),
    color: '#4A4A4A',
    maxWidth: '500px',
    width: '90%',
  },
  containerRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(1)
  },
  closeButton: {
    color: '#6B5B73',
    minWidth: '32px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'rgba(107, 91, 115, 0.1)',
    }
  },
  eventContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    marginBottom: '35px'
  },
  eventContent: {
    width: '100%'
  },
  eventTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    color: '#6B5B73',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    lineHeight: 1.3,
    borderBottom: '2px solid #F0E8DA',
    paddingBottom: theme.spacing(2)
  },
  eventRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #F0E8DA',
  },
  eventRowLast: {
    borderBottom: 'none',
  },
  eventLabel: {
    fontWeight: 'bold',
    color: '#8B6F47',
    minWidth: '80px',
    textAlign: 'left',
    fontSize: '1rem'
  },
  eventValue: {
    color: '#6B5B73',
    textAlign: 'right',
    flex: 1,
    fontSize: '1rem'
  },
  eventDescription: {
    color: '#6B5B73',
    textAlign: 'right',
    flex: 1,
    fontSize: '0.95rem',
    lineHeight: 1.4
  },
  ticketButton: {
    backgroundColor: '#9CAF88',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '4px',
    padding: '6px 12px',
    border: '1px solid #8B6F47',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#8B6F47',
      borderColor: '#8B6F47',
      textDecoration: 'none',
      color: '#fff'
    }
  },
  ticketContainer: {
    textAlign: 'center',
    paddingTop: theme.spacing(2)
  }
}));

const formatEventTime = (timeString) => {
  const formattedTime = moment(timeString).format("h:mm A");
  return formattedTime;
};



const MusicEventModal = ({ event, open, onClose }) => {
  const classes = useStyles();
  
  if (!event) return null;
  
  const eventTime = formatEventTime(event.start);
  const eventDate = moment(event.start).format("MMM DD, YYYY");

  return (
    <Modal
      aria-labelledby="music-event-title"
      aria-describedby="music-event-description"
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div className={classes.containerRight}>
            <Button 
              onClick={onClose} 
              aria-label="Close modal"
              className={classes.closeButton}
            >
              ×
            </Button>
          </div>
          
          <div className={classes.eventContainer}>
            <div className={classes.eventContent}>
              <h1 id="music-event-title" className={classes.eventTitle}>
                Event Details
              </h1>
              
              <div className={classes.eventRow}>
                <span className={classes.eventLabel}>Artist:</span>
                <span className={classes.eventValue}>{event.title}</span>
              </div>
              
              <div className={classes.eventRow}>
                <span className={classes.eventLabel}>Date:</span>
                <span className={classes.eventValue}>{eventDate}</span>
              </div>
              
              <div className={classes.eventRow}>
                <span className={classes.eventLabel}>Time:</span>
                <span className={classes.eventValue}>{eventTime}</span>
              </div>
              
              {event.description && (
                <div className={`${classes.eventRow} ${classes.eventRowLast}`}>
                  <span className={classes.eventLabel}>Details:</span>
                  <span id="music-event-description" className={classes.eventDescription}>
                    {event.description}
                  </span>
                </div>
              )}
              
              {event.location && (
                <div className={classes.ticketContainer}>
                  <a 
                    href={event.location} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={classes.ticketButton}
                  >
                    Get Tickets Here!
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default MusicEventModal; 