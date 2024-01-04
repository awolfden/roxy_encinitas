import React, {Component} from 'react';

class OpenForMusic extends Component {

    render(){
        return(
            <div id="openForMusic">
                <div className='flex-container image'>
                    <img src={require('../images/roxy_blocks.png')} alt="open"/>
                </div>
                <div className='flex-container'>
                    
                    <div className='description'>
                        <p>Step into Roxy Encinitas and be transported back to the glamorous 1920s. Every corner of our establishment echoes the elegance and charm of this golden era. From our carefully restored architecture to the intricate interior designs, we've painstakingly brought the spirit of the 1920s back to life for our guests.</p>
                        <p>Our bar boasts an array of classic cocktails that pay homage to the age of speakeasies and jazz, meticulously crafted to tantalize your taste buds. Accompanying these timeless drinks is our menu of shared plates, designed to satiate your hunger and foster a sense of camaraderie. We believe in the power of food and drink to bring people closer, creating lasting memories between friends, family, and even newfound acquaintances.</p>
                        <p>But the Roxy experience doesn't end there. We're proud to feature live music performances every single night of the week (except closed on Mondays), adding to the authentic atmosphere and ensuring that every evening spent with us is one to remember.</p>
                        <p>At Roxy Encinitas, we invite you to indulge in the luxuries of the past, swill in our signature beverages, and immerse yourself in rich conversations. </p>
                        <p>Stay for an hour or the entire evening, and leave with your heart full of joy and your soul recharged.</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default OpenForMusic;