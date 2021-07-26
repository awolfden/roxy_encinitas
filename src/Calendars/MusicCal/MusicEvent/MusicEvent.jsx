import React, {Component} from 'react';
import moment from 'moment';

class MusicEvent extends Component {
    

    render(){
        const time = this.props.event.start.toString();
        //console.log(time, "time")
        console.log(this.props.event);
        const stringTime = time.slice(0, 15);
        let newTime = moment(time).format("hh:mm:ss a");
        newTime = newTime[0] != 0 ? newTime.slice(0, 5) + ' ' + newTime.slice(8) : newTime.slice(1, 5) + ' ' + newTime.slice(8);
        //console.log(newTime);
        //console.log(stringTime);
        
        return(
            <div className="flexContainer">
                <div className="musicEventDiv">
                    <h1>{this.props.event.title}</h1>
                    <h1>{`${newTime}`}</h1>
                    <h1>{this.props.event.description}</h1>
                    {this.props.event.location ? <a href={this.props.event.location} target="_blank" >Get Tickets Here!</a> : null}
                </div>
            </div>
            
        )
    }
}

export default MusicEvent;