import React from 'react';
import { useMenuImages } from '../../hooks/useMenuImages';
import brunch from '../../images/BrunchSpring2025.png';

const Brunch = () => {
    const { menuImages, loading } = useMenuImages();
    
    // Get the dynamic image URL or fallback to static image
    const imageUrl = menuImages.brunch?.imageUrl || brunch;
    const isUsingDynamicImage = !!menuImages.brunch?.imageUrl;

    if (loading) {
        return (
            <div id="brunch" style={{ padding: '40px', textAlign: 'center' }}>
                <p>Loading menu...</p>
            </div>
        );
    }

    return (
        <div id="brunch">
            <img 
                src={imageUrl} 
                alt="brunch menu" 
                style={{ width: '70%' }}
            />
            {isUsingDynamicImage && (
                <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
                    Updated: {new Date(menuImages.brunch.updatedAt).toLocaleDateString()}
                </p>
            )}
        </div>
    );
};

export default Brunch;

