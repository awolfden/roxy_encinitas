import React from 'react';
import { useMenuImages } from '../../hooks/useMenuImages';
import cocktails from '../../images/enci_COVIDDrinks.jpg';

const Drinks = () => {
    const { menuImages, loading } = useMenuImages();
    
    // Get the dynamic image URL or fallback to static image for drinks
    const imageUrl = menuImages.drinks?.imageUrl || cocktails;
    const isUsingDynamicImage = !!menuImages.drinks?.imageUrl;

    if (loading) {
        return (
            <div id="drinks" style={{ padding: '40px', textAlign: 'center' }}>
                <p>Loading menu...</p>
            </div>
        );
    }

    return (
        <div id="drinks">
            <img 
                src={imageUrl} 
                alt="cocktails and drinks menu"
                style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(107, 91, 115, 0.15)',
                    margin: '20px 0'
                }}
            />
            {isUsingDynamicImage && (
                <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
                    Updated: {new Date(menuImages.drinks.updatedAt).toLocaleDateString()}
                </p>
            )}
        </div>
    );
};

export default Drinks;