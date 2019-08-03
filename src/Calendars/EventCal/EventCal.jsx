import React, { Component } from 'react';
import EventEvent from './EventEvent/EventEvent';
import {
    Calendar,
    //DateLocalizer,
    momentLocalizer,
    //globalizeLocalizer,
    //move,
    //Views,
    //Navigate,
    //components,
  } from 'react-big-calendar';

import moment from 'moment';

import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../App.css';




const localizer = momentLocalizer(moment);

class EventCal extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      cal_events: [],
      selected: false
    }

  }

  convertDate = (date) => {
    return moment.utc(date).toDate()
  }

  componentDidMount = () => {
    this.getEvents();
  }
  
  getEvents = async () => {
    try {
      const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/roxyencinitas.com_oi1roorif24vbbp8u649eaervs@group.calendar.google.com/events?key=AIzaSyAMcCW7mJqkNNPoAWNG7VnI3n7pjo-3bcg");
      if(response.status !== 200){
        throw(Error(response.statusText));
      }
      const parsedResponse = await response.json();
      //console.log(parsedResponse);

      const eventsArray = parsedResponse.items.map((event) => {
        if(event.status !== "confirmed"){
          return null;
        }

        console.log(event);
        if (event.start.dateTime){
          let dateStart = event.start.dateTime ? this.convertDate(event.start.dateTime) : this.convertDate(event.start.date);
          let dateEnd = event.end.dateTime ? this.convertDate(event.end.dateTime) : this.convertDate(event.end.date);
          return(
            {
              "title": event.summary,
              "start": dateStart,
              "end": dateEnd,
              "description" : event.description,
              "allDay?": false,
              "resource?": null
            }
          )
        } else if (event.start.date){
          let dateStart = event.start.dateTime ? this.convertDate(event.start.dateTime.toString).toISOString() : this.convertDate(event.originalStartTime.dateTime).toISOString();
          let dateEnd = this.convertDate(event.end.date).toISOString();
          return(
            {
              "title": event.summary,
              "start": dateStart,
              "end": dateEnd,
              "description" : event.description,
              "allDay?": false,
              "resource?": null
            }
          )
        } else {
          return(console.log("error"));
        }
      });
      //console.log(eventsArray);
      this.setState({
        cal_events: eventsArray
      })

    } catch (error){
      console.log(error);
    }

  }

  showEvent = (e) => {
    //console.log(e);
    this.setState({
      selected: true,
      thisEvent: e
    });
  }

  hideEvent = () => {
    if (this.state.selected){
      this.setState({
        selected: false,
        thisEvent: null
      })
    }
  }

  render() {
    
    return (
      <div onClick={this.hideEvent}>
        <div className="App calendar">
          <header className="App-header">

            <h2 className="App-title" id="eventcal">Events & Specials</h2>
          </header>
          <div style={{ height: 700 }}>
            <Calendar
              localizer={localizer}
              events={this.state.cal_events}
              step={30}
              defaultView='month'
              views={['month']}
              defaultDate={new Date()}
              onSelectEvent={(e) => {
                this.showEvent(e);
              }}
            />
          </div>
        </div>
        {this.state.selected ? <EventEvent event={this.state.thisEvent}/> : null}
      </div>
      
    );
  }
}

export default EventCal;