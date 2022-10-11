import React, { Component } from 'react';

class GiftCard extends Component {


    render() {
        return (
            <div id="GiftCard">
                <div className='flex-container image'>
                    <a href="https://egift.technology/Main.aspx?key=theroxy" target="_blank" rel="noopener noreferrer">
                        <img src={require('../images/summer_banner.png')} alt="click for gift card" style={{ "width": "100vw" }} />
                    </a>
                </div>
            </div>
        )
    }
}

export default GiftCard;