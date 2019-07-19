import React, {Component} from 'react';
import moment from 'moment';

class EventEvent extends Component {


    render(){
        const time = this.props.event.start.toString();
        const stringTime = time.slice(0, 15);
        let newTime = moment(time).format("hh:mm:ss a");
        newTime = newTime.slice(0, 5) + ' ' + newTime.slice(8);
        
        const endTime = this.props.event.end.toString();
        //console.log(endTime, "this is end time");
        let endStringTime = endTime.slice(16, 21);
        //console.log(endStringTime);
        let newEndTime = endStringTime.slice(0, 2);
        //console.log(newEndTime, "this is newEndTime");
        newEndTime = newEndTime === "00" ? 12 : newEndTime - 12;
        let secondPart = endStringTime.slice(2);

        
        return(
            <div className="flexContainer">
                <div className="eventEventDiv">
                <h1>{this.props.event.title}</h1>
                    <h1>{`${stringTime} ${newTime} to ${newEndTime}${secondPart}pm`}</h1>
                    <h1>{this.props.event.description}</h1>
                </div>
            </div>
            
        )
    }
}

export default EventEvent;