import React from 'react';
import { useMenuImages } from '../../hooks/useMenuImages';
import dessert from '../../images/enci_COVIDDessert.jpg';

const Desserts = () => {
    const { menuImages, loading } = useMenuImages();
    
    // Get the dynamic image URL or fallback to static image
    const imageUrl = menuImages.desserts?.imageUrl || dessert;
    const isUsingDynamicImage = !!menuImages.desserts?.imageUrl;

    if (loading) {
        return (
            <div id="desserts" style={{ padding: '40px', textAlign: 'center' }}>
                <p>Loading menu...</p>
            </div>
        );
    }

    return (
        <div id="desserts">
            <img 
                src={imageUrl} 
                alt="desserts menu"
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
                    Updated: {new Date(menuImages.desserts.updatedAt).toLocaleDateString()}
                </p>
            )}
        </div>
    );
};

export default Desserts; 