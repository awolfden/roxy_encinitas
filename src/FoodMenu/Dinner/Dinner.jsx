import React from 'react';
import { useMenuImages } from '../../hooks/useMenuImages';
import dinner from '../../images/DinnerSpring2025.png';

const Dinner = () => {
    const { menuImages, loading } = useMenuImages();
    
    // Get the dynamic image URL or fallback to static image
    const imageUrl = menuImages.dinner?.imageUrl || dinner;
    const isUsingDynamicImage = !!menuImages.dinner?.imageUrl;

    if (loading) {
        return (
            <div id="dinner" style={{ padding: '40px', textAlign: 'center' }}>
                <p>Loading menu...</p>
            </div>
        );
    }

    return (
        <div id="dinner">
            <img 
                src={imageUrl} 
                alt='dinner menu' 
                style={{ width: '70%' }}
            />
            {isUsingDynamicImage && (
                <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
                    Updated: {new Date(menuImages.dinner.updatedAt).toLocaleDateString()}
                </p>
            )}
        </div>
    );
};

export default Dinner;

