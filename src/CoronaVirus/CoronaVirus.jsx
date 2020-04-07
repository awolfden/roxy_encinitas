import React, {Component} from 'react';

class CoronaVirus extends Component {

    render(){
        return(
            <div id="coronaVirus">
                <div className='flex-container image'>
                    <img src={require('../images/roxymates.png')} alt="open"/>
                </div>
                <div className='flex-container'>
                    
                    <div className='description'>
                        <p>Roxy is now offering curb side pickup brought to you by our servers, bartenders, hosts, and utility employees.</p>
                        <p>Please call us at 760-230-2899 to place your order and keep our employees working and business operating.</p>
                        <p>Delivery available from 5:00pm-8:00pm Wednesday through Saturday</p>
                    </div>
                    
                </div>
                <div>
                <a href="https://www.doordash.com/business/413264/?utm_source=partner-link&utm_medium=website&utm_campaign=413264&utm_content=white-xl" target="_blank" alt="Order Food Delivery with DoorDash" title="Order Food Delivery with DoorDash" style={{textDecoration: "none"}}>
                    <div style={{position: "relative", width:268, height:118, margin: "auto", backgroundImage: "url('https://cdn.doordash.com/media/button/button_white_xl.svg')", color:"transparent"}}>Order Food Delivery with DoorDash</div>
                </a>
                </div>
            </div>
        )
    }
}

export default CoronaVirus;