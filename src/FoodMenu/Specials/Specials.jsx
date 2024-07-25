import React, { Component } from 'react';
import specials from '../../images/SpecialsSummer2024.jpg';

class Brunch extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div id="brunch">
                <img src={specials} alt="specials menu" style={{ width: '70%' }}></img>
            </div>
        )
    }
}


export default Brunch;

