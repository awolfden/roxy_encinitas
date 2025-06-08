import React from 'react';
import { useMenuImages } from '../../hooks/useMenuImages';
import lunch from '../../images/LunchSpring2025.png';

const Lunch = () => {
    const { menuImages, loading } = useMenuImages();
    
    // Get the dynamic image URL or fallback to static image
    const imageUrl = menuImages.lunch?.imageUrl || lunch;
    const isUsingDynamicImage = !!menuImages.lunch?.imageUrl;

    if (loading) {
        return (
            <div id="smallPlates" style={{ padding: '40px', textAlign: 'center' }}>
                <p>Loading menu...</p>
            </div>
        );
    }

    return (
        <div id="smallPlates">
            <img 
                src={imageUrl} 
                alt="lunch menu" 
                style={{ width: '90%' }}
            />
            {isUsingDynamicImage && (
                <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
                    Updated: {new Date(menuImages.lunch.updatedAt).toLocaleDateString()}
                </p>
            )}
        </div>
    );
};

export default Lunch;

