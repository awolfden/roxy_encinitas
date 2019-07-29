import React, {Component} from 'react';
import contactRoxy from '../images/contact-roxy-logo.png';

class Contact extends Component {
    constructor(){
        super();
        this.state = {
            
            locations: [
                {
                    city: 'Roxy Encinitas',
                    website: 'http://www.roxyencinitas.com',
                    address1: '517 S Coast Hwy 101',
                    address2: 'Encinitas, CA 92024',
                    phone: '760.230.2899',
                    email: 'info@roxyencinitas.com',
                    linkemail: 'mailto:info@roxyencinitas.com',
                    booking: 'booking@roxyencinitas.com',
                    linkbooking: 'mailto:booking@broadwayroxy.com',
                    reservations: 'https://www.yelp.com/reservations/the-roxy-encinitas-encinitas-2?from_reserve_now=1',
                    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672.2023423089427!2d-117.29443066941882!3d33.04581115499584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0c42515d331d%3A0xaccec1e35e94b68d!2sThe+Roxy+Encinitas!5e0!3m2!1sen!2sus!4v1561927336268!5m2!1sen!2sus'
                },
                {
                    city: 'Roxy on Broadway',
                    website: 'http://broadwayroxy.com',
                    address1: '554 S Broadway',
                    address2: 'Denver, CO 80209',
                    phone: '720.456.7041',
                    email: 'info@broadwayroxy.com',
                    linkemail: 'mailto:info@broadwayroxy.com',
                    booking: 'booking@broadwayroxy.com',
                    linkbooking: 'mailto:booking@broadwayroxy.com',
                    reservations: 'https://www.yelp.com/reservations/broadway-roxy-denver-2?from_reserve_now=1',
                    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1492.7684190468708!2d-104.98834954697357!3d39.70658113242791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f3607206573%3A0x68e9a9bb0301bbb8!2sBroadway+Roxy!5e0!3m2!1sen!2sus!4v1561927059341!5m2!1sen!2sus'
                }
            ]
        }
    }

    render(){
        const barLocations = this.state.locations.map((bar, index) => {
            return(
                <div key={index} id={index}>
                    <div className='flexContainer'>
                        <div className='info'>
                            <a href={bar.website} target="_blank" rel="noopener noreferrer"><h3>{bar.city}</h3></a>
                            <p>{bar.address1}</p>
                            <p>{bar.address2}</p><br/>
                            <p>Phone: {bar.phone}</p>
                            <a href={bar.linkemail}><p>Email: {bar.email}</p></a>
                            <a href={bar.linkbooking}><p>Booking: {bar.booking}</p></a>
                            <a href={bar.reservations} target="_blank" rel="noopener noreferrer"><button>Reserve Now</button></a>
                        </div>
                        <div className="map"><iframe src={bar.map} title={index}width={500} height={350} frameBorder={0}  allowFullScreen></iframe></div>
                    </div>
                    
                </div>
            )
        })

        return(
            <div id="contact" className="contact">
                <header className="App-header">
                        <img src={contactRoxy} className="shop-logo" alt="logo" />
                </header>
                <div className='flexColumn'>
                    {barLocations}
                </div>

            </div>
        )
    }
}

export default Contact;