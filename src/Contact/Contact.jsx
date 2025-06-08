import React from 'react';
import contactRoxy from '../images/contact-roxy-logo.png';

const LOCATIONS = [
    {
        city: 'Encinitas',
        website: 'http://www.roxyencinitas.com',
        address1: '517 S Coast Hwy 101',
        address2: 'Encinitas, CA 92024',
        phone: '760.230.2899',
        email: 'info@roxyencinitas.com',
        booking: 'booking@roxyencinitas.com',
        reservations: 'https://www.yelp.com/reservations/the-roxy-encinitas-encinitas-2?from_reserve_now=1',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672.2023423089427!2d-117.29443066941882!3d33.04581115499584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0c42515d331d%3A0xaccec1e35e94b68d!2sThe+Roxy+Encinitas!5e0!3m2!1sen!2sus!4v1561927336268!5m2!1sen!2sus'
    },
    {
        city: 'Broadway',
        website: 'http://broadwayroxy.com',
        address1: '554 S Broadway',
        address2: 'Denver, CO 80209',
        phone: '720.456.7041',
        email: 'info@broadwayroxy.com',
        booking: 'booking@broadwayroxy.com',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1492.7684190468708!2d-104.98834954697357!3d39.70658113242791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f3607206573%3A0x68e9a9bb0301bbb8!2sBroadway+Roxy!5e0!3m2!1sen!2sus!4v1561927059341!5m2!1sen!2sus'
    }
];

const Contact = () => {
    const barLocations = LOCATIONS.map((bar, index) => {
        return (
            <div key={index} id={index}>
                <div className='flexContainer'>
                    <div className='info'>
                        <a href={bar.website} target="_blank" rel="noopener noreferrer">
                            <h3>{bar.city}</h3>
                        </a>
                        
                        <div className="contact-row">
                            <span className="contact-label">Address:</span>
                            <span className="contact-value">
                                {bar.address1}<br />
                                {bar.address2}
                            </span>
                        </div>

                        <div className="contact-row">
                            <span className="contact-label">Phone:</span>
                            <span className="contact-value">{bar.phone}</span>
                        </div>

                        <div className="contact-row">
                            <span className="contact-label">Email:</span>
                            <span className="contact-value">
                                <a href={`mailto:${bar.email}`}>{bar.email}</a>
                            </span>
                        </div>
                        
                        <div className="contact-row">
                            <span className="contact-label">Booking:</span>
                            <span className="contact-value">
                                <a href={`mailto:${bar.booking}`}>{bar.booking}</a>
                            </span>
                        </div>

                        {bar.reservations && (
                            <a href={bar.reservations} target="_blank" rel="noopener noreferrer">
                                <button>Reserve Now</button>
                            </a>
                        )}
                    </div>
                    <div className="map">
                        <iframe 
                            src={bar.map} 
                            title={`${bar.city} location map`}
                            width={500} 
                            height={350} 
                            frameBorder={0}  
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div id="contact" className="contact">
            <header className="App-header">
                <img src={contactRoxy} className="shop-logo" alt="logo" />
            </header>
            <div className='flexColumn'>
                {barLocations}
            </div>
        </div>
    );
};

export default Contact;