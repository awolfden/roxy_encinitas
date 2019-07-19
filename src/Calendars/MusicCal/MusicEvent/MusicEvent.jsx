import React, {Component} from 'react';
import moment from 'moment';

class MusicEvent extends Component {


    render(){
        const time = this.props.event.start.toString();
        const stringTime = time.slice(0, 15);
        let newTime = moment(time).format("hh:mm:ss a");
        newTime = newTime.slice(0, 5) + ' ' + newTime.slice(8);
        console.log(newTime);
        
        return(
            <div className="flexContainer">
                <div className="musicEventDiv">
                    <h1>{this.props.event.title}</h1>
                    <h1>{`${stringTime} ${newTime}`}</h1>
                    <h1>{this.props.event.description}</h1>
                </div>
            </div>
            
        )
    }
}

export default MusicEvent;