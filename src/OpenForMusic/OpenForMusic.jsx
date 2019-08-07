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
                        <p>Visit us for 1920's ambiance, classic cocktails, shared plates and live music 7 nights a week. </p>
                        <p>We are excited to show you how we’ve restored our building to resemble the look and feel of the classic 1920’s.</p>
                        <p>Our menu is designed to create a sense of community between friends, family and neighbors. 
                        Indulge, imbibe, relax and converse until your heart is content and your belly is full.</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default OpenForMusic;